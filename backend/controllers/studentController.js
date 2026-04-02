import mongoose from "mongoose";
import { randomUUID } from "crypto";
import Student from "../models/Student.js";
import { studentSeedData } from "../data/studentSeedData.js";
import { syncSeedStudents } from "../utils/syncSeedStudents.js";

const inMemoryStudents = studentSeedData.map((student, index) => ({
  _id: `seed-student-${index + 1}`,
  ...student,
}));

const sortStudents = (students) =>
  [...students].sort(
    (left, right) =>
      new Date(right.enrollmentDate).getTime() -
        new Date(left.enrollmentDate).getTime() ||
      left.name.localeCompare(right.name),
  );

const normalizeStudentPayload = (payload, existingStudent = {}) => ({
  ...existingStudent,
  ...payload,
  documents: Number(payload.documents ?? existingStudent.documents ?? 0),
  email: String(payload.email ?? existingStudent.email ?? "").toLowerCase(),
  enrollmentDate: new Date(
    payload.enrollmentDate ?? existingStudent.enrollmentDate ?? new Date(),
  ),
});

export const getStudents = async (_req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json(sortStudents(inMemoryStudents));
    }

    const students = await Student.find().sort({ enrollmentDate: -1, name: 1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const normalizedStudent = normalizeStudentPayload(req.body);

      const duplicateStudent = inMemoryStudents.find(
        (student) =>
          student.studentId === normalizedStudent.studentId ||
          student.email === normalizedStudent.email,
      );

      if (duplicateStudent) {
        return res.status(400).json({
          message: "Student with the same ID or email already exists.",
        });
      }

      const student = {
        _id: `local-student-${randomUUID()}`,
        ...normalizedStudent,
      };

      inMemoryStudents.unshift(student);

      return res.status(201).json(student);
    }

    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    if (error?.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern ?? {})[0];
      const fieldLabel =
        duplicateField === "studentId"
          ? "Student ID"
          : duplicateField === "email"
            ? "Email"
            : "value";

      return res.status(400).json({
        message: `${fieldLabel} already exists. Please use a different ${fieldLabel.toLowerCase()}.`,
      });
    }

    if (error?.name === "ValidationError") {
      const validationMessage =
        Object.values(error.errors ?? {})[0]?.message ??
        "Please fill all required student fields correctly.";

      return res.status(400).json({ message: validationMessage });
    }

    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const studentIndex = inMemoryStudents.findIndex(
        (student) => student._id === req.params.id,
      );

      if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
      }

      const normalizedStudent = normalizeStudentPayload(
        req.body,
        inMemoryStudents[studentIndex],
      );

      const duplicateStudent = inMemoryStudents.find(
        (student, index) =>
          index !== studentIndex &&
          (student.studentId === normalizedStudent.studentId ||
            student.email === normalizedStudent.email),
      );

      if (duplicateStudent) {
        return res.status(400).json({
          message: "Student with the same ID or email already exists.",
        });
      }

      inMemoryStudents[studentIndex] = {
        ...inMemoryStudents[studentIndex],
        ...normalizedStudent,
      };

      return res.json(inMemoryStudents[studentIndex]);
    }

    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    if (error?.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern ?? {})[0];
      const fieldLabel =
        duplicateField === "studentId"
          ? "Student ID"
          : duplicateField === "email"
            ? "Email"
            : "value";

      return res.status(400).json({
        message: `${fieldLabel} already exists. Please use a different ${fieldLabel.toLowerCase()}.`,
      });
    }

    if (error?.name === "ValidationError") {
      const validationMessage =
        Object.values(error.errors ?? {})[0]?.message ??
        "Please fill all required student fields correctly.";

      return res.status(400).json({ message: validationMessage });
    }

    res.status(500).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const studentIndex = inMemoryStudents.findIndex(
        (student) => student._id === req.params.id,
      );

      if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
      }

      inMemoryStudents.splice(studentIndex, 1);

      return res.json({ message: "Student deleted successfully" });
    }

    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const seedStudents = async (_req, res) => {
  try {
    const result = await syncSeedStudents();
    res.json({
      message: "Student examples synced successfully",
      ...result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
