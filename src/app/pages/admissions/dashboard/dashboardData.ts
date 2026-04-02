import type { AdmissionsSummary } from "../../../api/admissionsApi";

export const dashboardChartColors = [
  "#2563EB",
  "#7C3AED",
  "#DB2777",
  "#EA580C",
  "#CA8A04",
];

export const applicationStages = [
  "Application Started",
  "Documents Pending",
  "Documents Verified",
  "Under Review",
  "Admission Offered",
  "Enrolled",
];

export const defaultAdmissionsSummary: AdmissionsSummary = {
  leads: {
    total: 0,
    qualified: 0,
    new: 0,
  },
  applications: {
    total: 0,
    underReview: 0,
    offered: 0,
  },
  documents: {
    total: 0,
    pending: 0,
    verified: 0,
  },
  interactions: {
    total: 0,
    recent: 0,
  },
  followUps: {
    total: 0,
    open: 0,
  },
  decisions: {
    total: 0,
    approved: 0,
    pending: 0,
  },
  students: {
    total: 0,
    active: 0,
    enrolled: 0,
  },
  reports: {
    total: 0,
    ready: 0,
  },
  users: {
    total: 0,
    byRole: {},
  },
};

type RoleStat = {
  title: string;
  value: (summary: AdmissionsSummary) => string;
  tone: string;
};

export const roleStats: Record<string, RoleStat[]> = {
  admin: [
    {
      title: "Total Leads",
      value: (summary) => String(summary.leads.total),
      tone: "text-blue-600",
    },
    {
      title: "Applications",
      value: (summary) => String(summary.applications.total),
      tone: "text-violet-600",
    },
    {
      title: "Pending Documents",
      value: (summary) => String(summary.documents.pending),
      tone: "text-amber-600",
    },
    {
      title: "Open Tasks",
      value: (summary) => String(summary.followUps.open),
      tone: "text-emerald-600",
    },
  ],
  user: [
    {
      title: "Qualified Leads",
      value: (summary) => String(summary.leads.qualified),
      tone: "text-blue-600",
    },
    {
      title: "Applications",
      value: (summary) => String(summary.applications.total),
      tone: "text-violet-600",
    },
    {
      title: "Open Follow-ups",
      value: (summary) => String(summary.followUps.open),
      tone: "text-amber-600",
    },
    {
      title: "Interactions",
      value: (summary) => String(summary.interactions.total),
      tone: "text-emerald-600",
    },
  ],
  teacher: [
    {
      title: "Lead Sources",
      value: (summary) => String(Object.keys(summary.users.byRole).length || summary.leads.total),
      tone: "text-blue-600",
    },
    {
      title: "High Intent Leads",
      value: (summary) => String(summary.leads.qualified),
      tone: "text-violet-600",
    },
    {
      title: "New Leads",
      value: (summary) => String(summary.leads.new),
      tone: "text-amber-600",
    },
    {
      title: "Qualified Pipeline",
      value: (summary) => String(summary.leads.qualified),
      tone: "text-emerald-600",
    },
  ],
  manager: [
    {
      title: "Qualified Leads",
      value: (summary) => String(summary.leads.qualified),
      tone: "text-blue-600",
    },
    {
      title: "Offers Released",
      value: (summary) => String(summary.applications.offered),
      tone: "text-violet-600",
    },
    {
      title: "Pending Decisions",
      value: (summary) => String(summary.decisions.pending),
      tone: "text-amber-600",
    },
    {
      title: "Ready Reports",
      value: (summary) => String(summary.reports.ready),
      tone: "text-emerald-600",
    },
  ],
  student: [
    {
      title: "Applications",
      value: (summary) => String(summary.applications.total),
      tone: "text-blue-600",
    },
    {
      title: "Pending Documents",
      value: (summary) => String(summary.documents.pending),
      tone: "text-violet-600",
    },
    {
      title: "Verified Documents",
      value: (summary) => String(summary.documents.verified),
      tone: "text-amber-600",
    },
    {
      title: "Recent Updates",
      value: (summary) => String(summary.interactions.recent),
      tone: "text-emerald-600",
    },
  ],
};
