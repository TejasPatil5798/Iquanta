import express from "express";
import {
  createAdmissionUser,
  createApplication,
  createDecision,
  createDocument,
  createFollowUp,
  createInteraction,
  createLead,
  createReport,
  deleteAdmissionUser,
  deleteApplication,
  deleteDecision,
  deleteDocument,
  deleteFollowUp,
  deleteInteraction,
  deleteLead,
  deleteReport,
  getAdmissionsSummary,
  listAdmissionUsers,
  listApplications,
  listDecisions,
  listDocuments,
  listFollowUps,
  listInteractions,
  listLeads,
  listReports,
  updateAdmissionUser,
  updateApplication,
  updateDecision,
  updateDocument,
  updateFollowUp,
  updateInteraction,
  updateLead,
  updateReport,
} from "../controllers/admissionsController.js";

const router = express.Router();

router.get("/summary", getAdmissionsSummary);

router.route("/leads").get(listLeads).post(createLead);
router.route("/leads/:id").put(updateLead).delete(deleteLead);

router.route("/applications").get(listApplications).post(createApplication);
router.route("/applications/:id").put(updateApplication).delete(deleteApplication);

router.route("/documents").get(listDocuments).post(createDocument);
router.route("/documents/:id").put(updateDocument).delete(deleteDocument);

router.route("/interactions").get(listInteractions).post(createInteraction);
router.route("/interactions/:id").put(updateInteraction).delete(deleteInteraction);

router.route("/follow-ups").get(listFollowUps).post(createFollowUp);
router.route("/follow-ups/:id").put(updateFollowUp).delete(deleteFollowUp);

router.route("/decisions").get(listDecisions).post(createDecision);
router.route("/decisions/:id").put(updateDecision).delete(deleteDecision);

router.route("/reports").get(listReports).post(createReport);
router.route("/reports/:id").put(updateReport).delete(deleteReport);

router.route("/users").get(listAdmissionUsers).post(createAdmissionUser);
router.route("/users/:id").put(updateAdmissionUser).delete(deleteAdmissionUser);

export default router;
