import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    leadId: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: { type: String, required: true, trim: true },
    source: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Interested",
        "Qualified",
        "Application Started",
        "Closed Lost",
      ],
      default: "New",
    },
    assignedCounselor: { type: String, trim: true, default: "" },
    leadScore: { type: Number, min: 0, max: 100, default: 0 },
    courseInterest: { type: String, trim: true, default: "" },
    createdAt: { type: Date, default: Date.now },
    notes: { type: String, trim: true, default: "" },
    isSeedExample: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Lead", leadSchema);
