import API from "./axios";

export interface AdmissionsSummary {
  leads: {
    total: number;
    qualified: number;
    new: number;
  };
  applications: {
    total: number;
    underReview: number;
    offered: number;
  };
  documents: {
    total: number;
    pending: number;
    verified: number;
  };
  interactions: {
    total: number;
    recent: number;
  };
  followUps: {
    total: number;
    open: number;
  };
  decisions: {
    total: number;
    approved: number;
    pending: number;
  };
  students: {
    total: number;
    active: number;
    enrolled: number;
  };
  reports: {
    total: number;
    ready: number;
  };
  users: {
    total: number;
    byRole: Record<string, number>;
  };
}

export const getAdmissionsSummary = () =>
  API.get<AdmissionsSummary>("/admissions/summary");
