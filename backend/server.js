import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import admissionsRoutes from "./routes/admissionsRoutes.js";
import { syncSeedStudents } from "./utils/syncSeedStudents.js";
import { syncAdmissionsSeedData } from "./utils/syncAdmissionsSeedData.js";

dotenv.config({ path: "./.env" });

await connectDB();
await syncSeedStudents();
await syncAdmissionsSeedData();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admissions", admissionsRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
