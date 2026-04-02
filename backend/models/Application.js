import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicationId: { type: String, required: true, unique: true, trim: true },
    leadId: { type: String, trim: true, default: "" },
    studentId: { type: String, trim: true, default: "" },
    studentName: { type: String, required: true, trim: true },
    program: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: [
        "Application Started",
        "Documents Pending",
        "Documents Verified",
        "Under Review",
        "Admission Offered",
        "Enrolled",
        "Rejected",
      ],
      default: "Application Started",
    },
    counselor: { type: String, trim: true, default: "" },
    completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
    submittedAt: { type: Date, default: Date.now },
    decisionStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Waitlisted"],
      default: "Pending",
    },
    isSeedExample: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Application", applicationSchema);
