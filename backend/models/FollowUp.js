import mongoose from "mongoose";

const followUpSchema = new mongoose.Schema(
  {
    followUpId: { type: String, required: true, unique: true, trim: true },
    leadId: { type: String, trim: true, default: "" },
    studentId: { type: String, trim: true, default: "" },
    title: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Completed"],
      default: "Open",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    assignedTo: { type: String, trim: true, default: "" },
    dueDate: { type: Date, default: Date.now },
    relatedTo: { type: String, trim: true, default: "" },
    isSeedExample: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("FollowUp", followUpSchema);
