import dotenv from "dotenv";
import connectDB from "../config/db.js";
import { syncSeedStudents } from "../utils/syncSeedStudents.js";

dotenv.config({ path: "./backend/.env" });

await connectDB();
const result = await syncSeedStudents();

console.log(`Student seed sync completed. Synced ${result.count} example students.`);

