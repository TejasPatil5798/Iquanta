import mongoose from "mongoose";

const admissionDecisionSchema = new mongoose.Schema(
  {
    decisionId: { type: String, required: true, unique: true, trim: true },
    applicationId: { type: String, required: true, trim: true },
    studentId: { type: String, trim: true, default: "" },
    studentName: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Waitlisted"],
      default: "Pending",
    },
    decisionBy: { type: String, trim: true, default: "" },
    decisionDate: { type: Date, default: Date.now },
    notes: { type: String, trim: true, default: "" },
    isSeedExample: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("AdmissionDecision", admissionDecisionSchema);
