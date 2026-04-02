import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    documentId: { type: String, required: true, unique: true, trim: true },
    applicationId: { type: String, trim: true, default: "" },
    studentId: { type: String, trim: true, default: "" },
    studentName: { type: String, required: true, trim: true },
    documentType: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["Pending", "Verified", "Rejected"],
      default: "Pending",
    },
    submittedAt: { type: Date, default: Date.now },
    verifiedBy: { type: String, trim: true, default: "" },
    fileName: { type: String, trim: true, default: "" },
    isSeedExample: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Document", documentSchema);
