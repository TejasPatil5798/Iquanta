import type {
  PortalApplication,
  PortalDocument,
  PortalInteraction,
} from "../../../api/admissionsEntitiesApi";

const requiredDocumentTypes = [
  "Application Form",
  "ID Proof",
  "Academic Certificates",
  "Entrance Exam Scorecard",
  "Passport Photo",
];

export interface StudentPortalRecord {
  studentName: string;
  application: PortalApplication;
  documents: {
    documentType: string;
    status: "Pending" | "Verified" | "Rejected" | "Not Submitted";
    uploadDate?: string;
    verifiedBy?: string;
  }[];
  updates: PortalInteraction[];
}

export function buildStudentPortalRecord(
  applications: PortalApplication[],
  documentsData: PortalDocument[],
  updatesData: PortalInteraction[],
  userName?: string,
) {
  const application =
    applications.find((item) => item.studentName === userName) ??
    applications[0];

  if (!application) {
    return null;
  }

  const studentName = application.studentName;
  const submittedDocuments = documentsData.filter(
    (item) => item.studentName === studentName,
  );

  const documents = requiredDocumentTypes.map((documentType) => {
    const submitted = submittedDocuments.find(
      (item) => item.documentType === documentType,
    );

    return {
      documentType,
      status: submitted?.status ?? "Not Submitted",
      uploadDate: submitted?.submittedAt,
      verifiedBy: submitted?.verifiedBy,
    };
  });

  const updates = updatesData
    .filter((item) => item.personName === studentName)
    .sort((left, right) => right.timestamp.localeCompare(left.timestamp));

  return {
    studentName,
    application,
    documents,
    updates,
  } satisfies StudentPortalRecord;
}
