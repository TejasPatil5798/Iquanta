import API from "./axios";

export interface PortalLead {
  _id: string;
  leadId: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  assignedCounselor: string;
  leadScore: number;
  courseInterest: string;
  createdAt: string;
  notes?: string;
}

export interface PortalApplication {
  _id: string;
  applicationId: string;
  leadId?: string;
  studentId?: string;
  studentName: string;
  program: string;
  status: string;
  counselor: string;
  completionPercentage: number;
  submittedAt: string;
  decisionStatus: string;
}

export interface PortalDocument {
  _id: string;
  documentId: string;
  applicationId?: string;
  studentId?: string;
  studentName: string;
  documentType: string;
  status: "Pending" | "Verified" | "Rejected";
  submittedAt: string;
  verifiedBy?: string;
  fileName?: string;
}

export interface PortalInteraction {
  _id: string;
  interactionId: string;
  leadId?: string;
  studentId?: string;
  personName: string;
  type: string;
  channel: string;
  summary: string;
  counselor: string;
  timestamp: string;
}

export interface PortalFollowUp {
  _id: string;
  followUpId: string;
  leadId?: string;
  studentId?: string;
  title: string;
  status: "Open" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  assignedTo: string;
  dueDate: string;
  relatedTo: string;
}

export interface CreateFollowUpPayload {
  followUpId: string;
  leadId?: string;
  studentId?: string;
  title: string;
  status: PortalFollowUp["status"];
  priority: PortalFollowUp["priority"];
  assignedTo: string;
  dueDate: string;
  relatedTo: string;
}

export const getLeads = () => API.get<PortalLead[]>("/admissions/leads");
export const getApplications = () =>
  API.get<PortalApplication[]>("/admissions/applications");
export const getDocuments = () => API.get<PortalDocument[]>("/admissions/documents");
export const getInteractions = () =>
  API.get<PortalInteraction[]>("/admissions/interactions");
export const getFollowUps = () =>
  API.get<PortalFollowUp[]>("/admissions/follow-ups");
export const createFollowUp = (payload: CreateFollowUpPayload) =>
  API.post<PortalFollowUp>("/admissions/follow-ups", payload);
export const updateFollowUp = (id: string, payload: CreateFollowUpPayload) =>
  API.put<PortalFollowUp>(`/admissions/follow-ups/${id}`, payload);
export const deleteFollowUp = (id: string) =>
  API.delete<{ message: string }>(`/admissions/follow-ups/${id}`);
