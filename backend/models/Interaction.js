import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema(
  {
    interactionId: { type: String, required: true, unique: true, trim: true },
    leadId: { type: String, trim: true, default: "" },
    studentId: { type: String, trim: true, default: "" },
    personName: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    channel: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    counselor: { type: String, trim: true, default: "" },
    timestamp: { type: Date, default: Date.now },
    isSeedExample: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Interaction", interactionSchema);
