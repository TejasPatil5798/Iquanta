import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    reportId: { type: String, required: true, unique: true, trim: true },
    reportType: { type: String, required: true, trim: true },
    generatedBy: { type: String, required: true, trim: true },
    generatedAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Ready", "Processing", "Archived"],
      default: "Ready",
    },
    isSeedExample: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Report", reportSchema);
