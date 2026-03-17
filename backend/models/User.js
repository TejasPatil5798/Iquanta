import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
      unique: true,
    },
    password: String,
    role: {
      type: String,
      enum: ["admin", "manager", "user", "student", "teacher"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);