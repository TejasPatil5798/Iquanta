import mongoose from "mongoose";
import Student from "../models/Student.js";
import { studentSeedData } from "../data/studentSeedData.js";

export const syncSeedStudents = async () => {
  if (mongoose.connection.readyState !== 1) {
    console.log("Skipping student seed sync because MongoDB is not connected.");
    return { synced: false, count: 0 };
  }

  const operations = studentSeedData.map((student) => ({
    updateOne: {
      filter: { email: student.email },
      update: {
        $set: {
          ...student,
          documents: Array.isArray(student.documents) ? student.documents : [],
        },
      },
      upsert: true,
    },
  }));

  if (operations.length > 0) {
    await Student.bulkWrite(operations);
  }

  await Student.deleteMany({
    isSeedExample: true,
    email: { $nin: studentSeedData.map((student) => student.email) },
  });

  return { synced: true, count: studentSeedData.length };
};