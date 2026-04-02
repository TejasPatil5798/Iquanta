import mongoose from "mongoose";
import { randomUUID } from "crypto";
import Student from "../models/Student.js";
import { studentSeedData } from "../data/studentSeedData.js";
import { syncSeedStudents } from "../utils/syncSeedStudents.js";

const DOCUMENT_TYPES = new Set([
  "10th Marksheet",
  "12th Marksheet",
  "Aadhaar Card",
  "Caste Certificate",
  "Transfer Certificate",
  "Migration Certificate",
  "Passport Photo",
  "Entrance Scorecard",
  "Degree Marksheet",
  "Income Certificate",
  "Domicile Certificate",
  "Offer Letter",
  "Other",
]);

const DOCUMENT_STATUSES = new Set([
  "Pending",
  "Uploaded",
  "Verified",
  "Rejected",
  "Not Applicable",
]);

const inMemoryStudents = studentSeedData.map((student, index) => {
  const normalizedStudent = normalizeStudentPayload(student);

  return {
    _id: `seed-student-${index + 1}`,
    ...normalizedStudent,
  };
});

const sortStudents = (students) =>
  [...students].sort(
    (left, right) =>
      new Date(right.enrollmentDate).getTime() -
        new Date(left.enrollmentDate).getTime() ||
      left.name.localeCompare(right.name),
  );

function normalizeOptionalString(value, fallback = "") {
  if (value === undefined || value === null) {
    return fallback;
  }

  return String(value).trim();
}

function normalizeOptionalDate(value) {
  if (!value) {
    return undefined;
  }

  const normalizedDate = new Date(value);
  return Number.isNaN(normalizedDate.getTime()) ? undefined : normalizedDate;
}

function normalizeDocument(document, index) {
  const typeCandidate = normalizeOptionalString(document?.type, "Other");
  const type = DOCUMENT_TYPES.has(typeCandidate) ? typeCandidate : "Other";

  const statusCandidate = normalizeOptionalString(document?.status, "Uploaded");
  const status = DOCUMENT_STATUSES.has(statusCandidate)
    ? statusCandidate
    : "Uploaded";

  return {
    type,
    fileName: normalizeOptionalString(
      document?.fileName,
      `${type.replace(/\s+/g, "-").toLowerCase()}-${index + 1}.pdf`,
    ),
    status,
    url: normalizeOptionalString(document?.url),
    notes: normalizeOptionalString(document?.notes),
    uploadedAt: normalizeOptionalDate(document?.uploadedAt) ?? new Date(),
    verifiedAt: normalizeOptionalDate(document?.verifiedAt),
    issuer: normalizeOptionalString(document?.issuer),
    documentNumber: normalizeOptionalString(document?.documentNumber),
  };
}

function normalizeDocuments(payload, existingStudent = {}) {
  if (Array.isArray(payload.documents)) {
    return payload.documents.map((document, index) =>
      normalizeDocument(document, index),
    );
  }

  if (Array.isArray(existingStudent.documents)) {
    return existingStudent.documents.map((document, index) =>
      normalizeDocument(document, index),
    );
  }

  const legacyDocumentCount = Number(
    payload.documents ??
      payload.documentCount ??
      existingStudent.documentCount ??
      existingStudent.documents ??
      0,
  );

  if (!Number.isFinite(legacyDocumentCount) || legacyDocumentCount <= 0) {
    return [];
  }

  return Array.from({ length: Math.max(0, Math.trunc(legacyDocumentCount)) }, (_, index) =>
    normalizeDocument(
      {
        type: "Other",
        fileName: `document-${index + 1}.pdf`,
        status: "Uploaded",
      },
      index,
    ),
  );
}

const normalizeStudentPayload = (payload, existingStudent = {}) => {
  const documents = normalizeDocuments(payload, existingStudent);

  return {
    ...existingStudent,
    ...payload,
    documents,
    documentCount: documents.length,
    email: String(payload.email ?? existingStudent.email ?? "").toLowerCase(),
    guardianEmail: normalizeOptionalString(
      payload.guardianEmail,
      existingStudent.guardianEmail,
    ).toLowerCase(),
    enrollmentDate: new Date(
      payload.enrollmentDate ?? existingStudent.enrollmentDate ?? new Date(),
    ),
    dateOfBirth: normalizeOptionalDate(
      payload.dateOfBirth ?? existingStudent.dateOfBirth,
    ),
    city: normalizeOptionalString(payload.city, existingStudent.city),
    state: normalizeOptionalString(payload.state, existingStudent.state),
    applicationStage: normalizeOptionalString(
      payload.applicationStage,
      existingStudent.applicationStage,
    ),
    gender: normalizeOptionalString(payload.gender, existingStudent.gender),
    alternatePhone: normalizeOptionalString(
      payload.alternatePhone,
      existingStudent.alternatePhone,
    ),
    addressLine1: normalizeOptionalString(
      payload.addressLine1,
      existingStudent.addressLine1,
    ),
    addressLine2: normalizeOptionalString(
      payload.addressLine2,
      existingStudent.addressLine2,
    ),
    postalCode: normalizeOptionalString(
      payload.postalCode,
      existingStudent.postalCode,
    ),
    country: normalizeOptionalString(payload.country, existingStudent.country),
    nationality: normalizeOptionalString(
      payload.nationality,
      existingStudent.nationality,
    ),
    guardianName: normalizeOptionalString(
      payload.guardianName,
      existingStudent.guardianName,
    ),
    guardianRelation: normalizeOptionalString(
      payload.guardianRelation,
      existingStudent.guardianRelation,
    ),
    guardianPhone: normalizeOptionalString(
      payload.guardianPhone,
      existingStudent.guardianPhone,
    ),
    category: normalizeOptionalString(payload.category, existingStudent.category),
    bloodGroup: normalizeOptionalString(
      payload.bloodGroup,
      existingStudent.bloodGroup,
    ),
    admissionSession: normalizeOptionalString(
      payload.admissionSession,
      existingStudent.admissionSession,
    ),
    intakeYear:
      payload.intakeYear ?? existingStudent.intakeYear ?? undefined,
    previousQualification: normalizeOptionalString(
      payload.previousQualification,
      existingStudent.previousQualification,
    ),
    previousInstitution: normalizeOptionalString(
      payload.previousInstitution,
      existingStudent.previousInstitution,
    ),
    previousBoardOrUniversity: normalizeOptionalString(
      payload.previousBoardOrUniversity,
      existingStudent.previousBoardOrUniversity,
    ),
    academicPercentage:
      payload.academicPercentage ??
      existingStudent.academicPercentage ??
      undefined,
    entranceExam: normalizeOptionalString(
      payload.entranceExam,
      existingStudent.entranceExam,
    ),
    entranceScore: normalizeOptionalString(
      payload.entranceScore,
      existingStudent.entranceScore,
    ),
    preferredCampus: normalizeOptionalString(
      payload.preferredCampus,
      existingStudent.preferredCampus,
    ),
    sourceOfLead: normalizeOptionalString(
      payload.sourceOfLead,
      existingStudent.sourceOfLead,
    ),
    emergencyContactName: normalizeOptionalString(
      payload.emergencyContactName,
      existingStudent.emergencyContactName,
    ),
    emergencyContactPhone: normalizeOptionalString(
      payload.emergencyContactPhone,
      existingStudent.emergencyContactPhone,
    ),
    notes: normalizeOptionalString(payload.notes, existingStudent.notes),
  };
};

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

    const student = await Student.create(normalizeStudentPayload(req.body));
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

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      normalizeStudentPayload(req.body),
      {
        new: true,
        runValidators: true,
      },
    );

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