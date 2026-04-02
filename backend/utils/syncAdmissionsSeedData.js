import mongoose from "mongoose";
import Lead from "../models/Lead.js";
import Application from "../models/Application.js";
import Document from "../models/Document.js";
import Interaction from "../models/Interaction.js";
import FollowUp from "../models/FollowUp.js";
import AdmissionDecision from "../models/AdmissionDecision.js";
import Report from "../models/Report.js";
import {
  admissionDecisionSeedData,
  applicationSeedData,
  documentSeedData,
  followUpSeedData,
  interactionSeedData,
  leadSeedData,
  reportSeedData,
} from "../data/admissionsSeedData.js";

const syncCollection = async ({ model, seedData, uniqueField }) => {
  const operations = seedData.map((record) => ({
    updateOne: {
      filter: { [uniqueField]: record[uniqueField] },
      update: { $set: record },
      upsert: true,
    },
  }));

  if (operations.length > 0) {
    await model.bulkWrite(operations);
  }

  await model.deleteMany({
    isSeedExample: true,
    [uniqueField]: { $nin: seedData.map((record) => record[uniqueField]) },
  });
};

export const syncAdmissionsSeedData = async () => {
  if (mongoose.connection.readyState !== 1) {
    console.log("Skipping admissions seed sync because MongoDB is not connected.");
    return { synced: false };
  }

  await syncCollection({ model: Lead, seedData: leadSeedData, uniqueField: "leadId" });
  await syncCollection({
    model: Application,
    seedData: applicationSeedData,
    uniqueField: "applicationId",
  });
  await syncCollection({ model: Document, seedData: documentSeedData, uniqueField: "documentId" });
  await syncCollection({
    model: Interaction,
    seedData: interactionSeedData,
    uniqueField: "interactionId",
  });
  await syncCollection({ model: FollowUp, seedData: followUpSeedData, uniqueField: "followUpId" });
  await syncCollection({
    model: AdmissionDecision,
    seedData: admissionDecisionSeedData,
    uniqueField: "decisionId",
  });
  await syncCollection({ model: Report, seedData: reportSeedData, uniqueField: "reportId" });

  return {
    synced: true,
    counts: {
      leads: leadSeedData.length,
      applications: applicationSeedData.length,
      documents: documentSeedData.length,
      interactions: interactionSeedData.length,
      followUps: followUpSeedData.length,
      decisions: admissionDecisionSeedData.length,
      reports: reportSeedData.length,
    },
  };
};
