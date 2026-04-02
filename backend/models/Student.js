import mongoose from "mongoose";

const studentDocumentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
      enum: [
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
      ],
    },
    fileName: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ["Pending", "Uploaded", "Verified", "Rejected", "Not Applicable"],
      default: "Uploaded",
    },
    url: {
      type: String,
      trim: true,
      default: "",
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
    verifiedAt: {
      type: Date,
    },
    issuer: {
      type: String,
      trim: true,
      default: "",
    },
    documentNumber: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: false },
);

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    program: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Graduated", "Dropped"],
      default: "Active",
    },
    enrollmentDate: {
      type: Date,
      required: true,
    },
    counselor: {
      type: String,
      required: true,
      trim: true,
    },
    documents: {
      type: [studentDocumentSchema],
      default: [],
    },
    documentCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    applicationStage: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
      enum: ["Male", "Female", "Other", "Prefer not to say"],
    },
    dateOfBirth: {
      type: Date,
    },
    alternatePhone: {
      type: String,
      trim: true,
    },
    addressLine1: {
      type: String,
      trim: true,
    },
    addressLine2: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    nationality: {
      type: String,
      trim: true,
    },
    guardianName: {
      type: String,
      trim: true,
    },
    guardianRelation: {
      type: String,
      trim: true,
    },
    guardianPhone: {
      type: String,
      trim: true,
    },
    guardianEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      trim: true,
      enum: ["General", "OBC", "SC", "ST", "EWS", "Other"],
    },
    bloodGroup: {
      type: String,
      trim: true,
    },
    admissionSession: {
      type: String,
      trim: true,
    },
    intakeYear: {
      type: Number,
      min: 1900,
      max: 3000,
    },
    previousQualification: {
      type: String,
      trim: true,
    },
    previousInstitution: {
      type: String,
      trim: true,
    },
    previousBoardOrUniversity: {
      type: String,
      trim: true,
    },
    academicPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    entranceExam: {
      type: String,
      trim: true,
    },
    entranceScore: {
      type: String,
      trim: true,
    },
    preferredCampus: {
      type: String,
      trim: true,
    },
    sourceOfLead: {
      type: String,
      trim: true,
    },
    emergencyContactName: {
      type: String,
      trim: true,
    },
    emergencyContactPhone: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    isSeedExample: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

studentSchema.pre("validate", function setDocumentCount(next) {
  this.documentCount = Array.isArray(this.documents) ? this.documents.length : 0;
  next();
});

studentSchema.set("toJSON", {
  virtuals: true,
  transform: (_doc, ret) => {
    ret.documents = Array.isArray(ret.documents) ? ret.documents : [];
    ret.documentCount = ret.documents.length;
    return ret;
  },
});

export default mongoose.model("Student", studentSchema);