import mongoose from "mongoose";
import { randomUUID } from "crypto";
import User from "../models/User.js";
import Student from "../models/Student.js";
import Lead from "../models/Lead.js";
import Application from "../models/Application.js";
import Document from "../models/Document.js";
import Interaction from "../models/Interaction.js";
import FollowUp from "../models/FollowUp.js";
import AdmissionDecision from "../models/AdmissionDecision.js";
import Report from "../models/Report.js";
import { studentSeedData } from "../data/studentSeedData.js";
import {
  admissionDecisionSeedData,
  admissionUserSeedData,
  applicationSeedData,
  documentSeedData,
  followUpSeedData,
  interactionSeedData,
  leadSeedData,
  reportSeedData,
} from "../data/admissionsSeedData.js";

const isMongoConnected = () => mongoose.connection.readyState === 1;

const createSeedCollection = (prefix, data) =>
  data.map((record, index) => ({
    _id: `${prefix}-${index + 1}`,
    ...record,
  }));

const inMemoryStore = {
  leads: createSeedCollection("lead", leadSeedData),
  applications: createSeedCollection("application", applicationSeedData),
  documents: createSeedCollection("document", documentSeedData),
  interactions: createSeedCollection("interaction", interactionSeedData),
  followUps: createSeedCollection("followup", followUpSeedData),
  decisions: createSeedCollection("decision", admissionDecisionSeedData),
  reports: createSeedCollection("report", reportSeedData),
  users: createSeedCollection("user", admissionUserSeedData),
  students: createSeedCollection("student", studentSeedData),
};

const duplicateMessage = (fieldLabel) =>
  `${fieldLabel} already exists. Please use a different ${fieldLabel.toLowerCase()}.`;

const getFirstValidationMessage = (error, fallbackMessage) =>
  Object.values(error?.errors ?? {})[0]?.message ?? fallbackMessage;

const normalizeEmail = (value) => String(value ?? "").trim().toLowerCase();

const buildMemoryHandlers = ({
  collectionName,
  model,
  sortConfig,
  uniqueFields = [],
  normalize = (payload) => payload,
  select = null,
}) => {
  const collection = inMemoryStore[collectionName];

  const list = async (_req, res) => {
    try {
      if (!isMongoConnected()) {
        const memorySortKey = Object.keys(sortConfig)[0];
        return res.json(
          [...collection].sort((left, right) => {
            const direction = sortConfig[memorySortKey];
            const leftValue = left[memorySortKey];
            const rightValue = right[memorySortKey];

            if (leftValue instanceof Date || rightValue instanceof Date) {
              return direction * (new Date(leftValue).getTime() - new Date(rightValue).getTime());
            }

            return direction * String(leftValue ?? "").localeCompare(String(rightValue ?? ""));
          }),
        );
      }

      let query = model.find();

      if (select) {
        query = query.select(select);
      }

      const records = await query.sort(sortConfig);
      return res.json(records);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  const create = async (req, res) => {
    try {
      const payload = normalize(req.body);

      if (!isMongoConnected()) {
        const duplicateField = uniqueFields.find((field) =>
          collection.some((record) => record[field] === payload[field]),
        );

        if (duplicateField) {
          return res.status(400).json({
            message: duplicateMessage(duplicateField === "email" ? "Email" : duplicateField),
          });
        }

        const record = {
          _id: `${collectionName}-${randomUUID()}`,
          ...payload,
        };

        collection.unshift(record);
        return res.status(201).json(record);
      }

      const record = await model.create(payload);
      return res.status(201).json(record);
    } catch (error) {
      if (error?.code === 11000) {
        const duplicateField = Object.keys(error.keyPattern ?? {})[0];
        return res.status(400).json({
          message: duplicateMessage(duplicateField === "email" ? "Email" : duplicateField),
        });
      }

      if (error?.name === "ValidationError") {
        return res.status(400).json({
          message: getFirstValidationMessage(
            error,
            `Please fill all required ${collectionName} fields correctly.`,
          ),
        });
      }

      return res.status(500).json({ message: error.message });
    }
  };

  const update = async (req, res) => {
    try {
      const payload = normalize(req.body);

      if (!isMongoConnected()) {
        const index = collection.findIndex((record) => record._id === req.params.id);

        if (index === -1) {
          return res.status(404).json({ message: `${collectionName} record not found.` });
        }

        const duplicateField = uniqueFields.find((field) =>
          collection.some(
            (record, recordIndex) =>
              recordIndex !== index && payload[field] !== undefined && record[field] === payload[field],
          ),
        );

        if (duplicateField) {
          return res.status(400).json({
            message: duplicateMessage(duplicateField === "email" ? "Email" : duplicateField),
          });
        }

        collection[index] = { ...collection[index], ...payload };
        return res.json(collection[index]);
      }

      const record = await model.findByIdAndUpdate(req.params.id, payload, {
        new: true,
        runValidators: true,
      });

      if (!record) {
        return res.status(404).json({ message: `${collectionName} record not found.` });
      }

      return res.json(record);
    } catch (error) {
      if (error?.code === 11000) {
        const duplicateField = Object.keys(error.keyPattern ?? {})[0];
        return res.status(400).json({
          message: duplicateMessage(duplicateField === "email" ? "Email" : duplicateField),
        });
      }

      if (error?.name === "ValidationError") {
        return res.status(400).json({
          message: getFirstValidationMessage(
            error,
            `Please fill all required ${collectionName} fields correctly.`,
          ),
        });
      }

      return res.status(500).json({ message: error.message });
    }
  };

  const remove = async (req, res) => {
    try {
      if (!isMongoConnected()) {
        const index = collection.findIndex((record) => record._id === req.params.id);

        if (index === -1) {
          return res.status(404).json({ message: `${collectionName} record not found.` });
        }

        collection.splice(index, 1);
        return res.json({ message: `${collectionName} record deleted successfully.` });
      }

      const record = await model.findByIdAndDelete(req.params.id);

      if (!record) {
        return res.status(404).json({ message: `${collectionName} record not found.` });
      }

      return res.json({ message: `${collectionName} record deleted successfully.` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  return { list, create, update, remove };
};

const normalizeLeadPayload = (payload) => ({
  ...payload,
  email: normalizeEmail(payload.email),
  leadScore: Number(payload.leadScore ?? 0),
  createdAt: payload.createdAt ? new Date(payload.createdAt) : new Date(),
});

const normalizeApplicationPayload = (payload) => ({
  ...payload,
  completionPercentage: Number(payload.completionPercentage ?? 0),
  submittedAt: payload.submittedAt ? new Date(payload.submittedAt) : new Date(),
});

const normalizeDocumentPayload = (payload) => ({
  ...payload,
  submittedAt: payload.submittedAt ? new Date(payload.submittedAt) : new Date(),
});

const normalizeInteractionPayload = (payload) => ({
  ...payload,
  timestamp: payload.timestamp ? new Date(payload.timestamp) : new Date(),
});

const normalizeFollowUpPayload = (payload) => ({
  ...payload,
  dueDate: payload.dueDate ? new Date(payload.dueDate) : new Date(),
});

const normalizeDecisionPayload = (payload) => ({
  ...payload,
  decisionDate: payload.decisionDate ? new Date(payload.decisionDate) : new Date(),
});

const normalizeReportPayload = (payload) => ({
  ...payload,
  generatedAt: payload.generatedAt ? new Date(payload.generatedAt) : new Date(),
});

const normalizeUserPayload = (payload) => ({
  ...payload,
  email: normalizeEmail(payload.email),
});

const leadHandlers = buildMemoryHandlers({
  collectionName: "leads",
  model: Lead,
  sortConfig: { createdAt: -1 },
  uniqueFields: ["leadId", "email"],
  normalize: normalizeLeadPayload,
});

const applicationHandlers = buildMemoryHandlers({
  collectionName: "applications",
  model: Application,
  sortConfig: { submittedAt: -1 },
  uniqueFields: ["applicationId"],
  normalize: normalizeApplicationPayload,
});

const documentHandlers = buildMemoryHandlers({
  collectionName: "documents",
  model: Document,
  sortConfig: { submittedAt: -1 },
  uniqueFields: ["documentId"],
  normalize: normalizeDocumentPayload,
});

const interactionHandlers = buildMemoryHandlers({
  collectionName: "interactions",
  model: Interaction,
  sortConfig: { timestamp: -1 },
  uniqueFields: ["interactionId"],
  normalize: normalizeInteractionPayload,
});

const followUpHandlers = buildMemoryHandlers({
  collectionName: "followUps",
  model: FollowUp,
  sortConfig: { dueDate: 1 },
  uniqueFields: ["followUpId"],
  normalize: normalizeFollowUpPayload,
});

const decisionHandlers = buildMemoryHandlers({
  collectionName: "decisions",
  model: AdmissionDecision,
  sortConfig: { decisionDate: -1 },
  uniqueFields: ["decisionId"],
  normalize: normalizeDecisionPayload,
});

const reportHandlers = buildMemoryHandlers({
  collectionName: "reports",
  model: Report,
  sortConfig: { generatedAt: -1 },
  uniqueFields: ["reportId"],
  normalize: normalizeReportPayload,
});

const userHandlers = buildMemoryHandlers({
  collectionName: "users",
  model: User,
  sortConfig: { createdAt: -1 },
  uniqueFields: ["email"],
  normalize: normalizeUserPayload,
  select: "-password",
});

const countByRole = (users) =>
  users.reduce((accumulator, user) => {
    const role = user.role ?? "unknown";
    accumulator[role] = (accumulator[role] ?? 0) + 1;
    return accumulator;
  }, {});

export const getAdmissionsSummary = async (_req, res) => {
  try {
    if (!isMongoConnected()) {
      return res.json({
        leads: {
          total: inMemoryStore.leads.length,
          qualified: inMemoryStore.leads.filter((lead) =>
            ["Qualified", "Application Started"].includes(lead.status),
          ).length,
          new: inMemoryStore.leads.filter((lead) => lead.status === "New").length,
        },
        applications: {
          total: inMemoryStore.applications.length,
          underReview: inMemoryStore.applications.filter(
            (application) => application.status === "Under Review",
          ).length,
          offered: inMemoryStore.applications.filter(
            (application) => application.status === "Admission Offered",
          ).length,
        },
        documents: {
          total: inMemoryStore.documents.length,
          pending: inMemoryStore.documents.filter((document) => document.status === "Pending").length,
          verified: inMemoryStore.documents.filter((document) => document.status === "Verified").length,
        },
        interactions: {
          total: inMemoryStore.interactions.length,
          recent: inMemoryStore.interactions.filter(
            (interaction) =>
              new Date(interaction.timestamp).getTime() >=
              Date.now() - 1000 * 60 * 60 * 24 * 7,
          ).length,
        },
        followUps: {
          total: inMemoryStore.followUps.length,
          open: inMemoryStore.followUps.filter((followUp) => followUp.status !== "Completed").length,
        },
        decisions: {
          total: inMemoryStore.decisions.length,
          approved: inMemoryStore.decisions.filter((decision) => decision.status === "Approved").length,
          pending: inMemoryStore.decisions.filter((decision) => decision.status === "Pending").length,
        },
        students: {
          total: inMemoryStore.students.length,
          active: inMemoryStore.students.filter((student) => student.status === "Active").length,
          enrolled: inMemoryStore.students.filter((student) =>
            ["Active", "Graduated"].includes(student.status),
          ).length,
        },
        reports: {
          total: inMemoryStore.reports.length,
          ready: inMemoryStore.reports.filter((report) => report.status === "Ready").length,
        },
        users: {
          total: inMemoryStore.users.length,
          byRole: countByRole(inMemoryStore.users),
        },
      });
    }

    const [
      totalLeads,
      qualifiedLeads,
      newLeads,
      totalApplications,
      applicationsUnderReview,
      applicationsOffered,
      totalDocuments,
      pendingDocuments,
      verifiedDocuments,
      totalInteractions,
      recentInteractions,
      totalFollowUps,
      openFollowUps,
      totalDecisions,
      approvedDecisions,
      pendingDecisions,
      totalStudents,
      activeStudents,
      enrolledStudents,
      totalReports,
      readyReports,
      users,
    ] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ status: { $in: ["Qualified", "Application Started"] } }),
      Lead.countDocuments({ status: "New" }),
      Application.countDocuments(),
      Application.countDocuments({ status: "Under Review" }),
      Application.countDocuments({ status: "Admission Offered" }),
      Document.countDocuments(),
      Document.countDocuments({ status: "Pending" }),
      Document.countDocuments({ status: "Verified" }),
      Interaction.countDocuments(),
      Interaction.countDocuments({
        timestamp: { $gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) },
      }),
      FollowUp.countDocuments(),
      FollowUp.countDocuments({ status: { $ne: "Completed" } }),
      AdmissionDecision.countDocuments(),
      AdmissionDecision.countDocuments({ status: "Approved" }),
      AdmissionDecision.countDocuments({ status: "Pending" }),
      Student.countDocuments(),
      Student.countDocuments({ status: "Active" }),
      Student.countDocuments({ status: { $in: ["Active", "Graduated"] } }),
      Report.countDocuments(),
      Report.countDocuments({ status: "Ready" }),
      User.find().select("role"),
    ]);

    return res.json({
      leads: { total: totalLeads, qualified: qualifiedLeads, new: newLeads },
      applications: {
        total: totalApplications,
        underReview: applicationsUnderReview,
        offered: applicationsOffered,
      },
      documents: {
        total: totalDocuments,
        pending: pendingDocuments,
        verified: verifiedDocuments,
      },
      interactions: { total: totalInteractions, recent: recentInteractions },
      followUps: { total: totalFollowUps, open: openFollowUps },
      decisions: { total: totalDecisions, approved: approvedDecisions, pending: pendingDecisions },
      students: { total: totalStudents, active: activeStudents, enrolled: enrolledStudents },
      reports: { total: totalReports, ready: readyReports },
      users: { total: users.length, byRole: countByRole(users) },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const listLeads = leadHandlers.list;
export const createLead = leadHandlers.create;
export const updateLead = leadHandlers.update;
export const deleteLead = leadHandlers.remove;

export const listApplications = applicationHandlers.list;
export const createApplication = applicationHandlers.create;
export const updateApplication = applicationHandlers.update;
export const deleteApplication = applicationHandlers.remove;

export const listDocuments = documentHandlers.list;
export const createDocument = documentHandlers.create;
export const updateDocument = documentHandlers.update;
export const deleteDocument = documentHandlers.remove;

export const listInteractions = interactionHandlers.list;
export const createInteraction = interactionHandlers.create;
export const updateInteraction = interactionHandlers.update;
export const deleteInteraction = interactionHandlers.remove;

export const listFollowUps = followUpHandlers.list;
export const createFollowUp = followUpHandlers.create;
export const updateFollowUp = followUpHandlers.update;
export const deleteFollowUp = followUpHandlers.remove;

export const listDecisions = decisionHandlers.list;
export const createDecision = decisionHandlers.create;
export const updateDecision = decisionHandlers.update;
export const deleteDecision = decisionHandlers.remove;

export const listReports = reportHandlers.list;
export const createReport = reportHandlers.create;
export const updateReport = reportHandlers.update;
export const deleteReport = reportHandlers.remove;

export const listAdmissionUsers = async (_req, res) => {
  try {
    if (!isMongoConnected()) {
      return res.json(inMemoryStore.users);
    }

    const users = await User.find().select("-password").sort({ createdAt: -1 });
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAdmissionUser = userHandlers.create;
export const updateAdmissionUser = userHandlers.update;
export const deleteAdmissionUser = userHandlers.remove;
