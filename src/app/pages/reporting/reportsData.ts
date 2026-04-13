export type ReportFrequency = "Daily" | "Weekly" | "Monthly" | "Quarterly";

export type ReportCategory =
  | "Operations"
  | "Leadership"
  | "Marketing"
  | "Compliance";

export type ReportStatus = "Ready" | "Draft" | "Scheduled";

export interface ReportLibraryItem {
  id: string;
  title: string;
  description: string;
  frequency: ReportFrequency;
  owner: string;
  category: ReportCategory;
  dashboards: number;
  totalViews: number;
  assignedTo: string;
  lastViewed: string;
  lastUpdated: string;
  status: ReportStatus;
  favorite: boolean;
}

export const reportsKpis = [
  {
    label: "Applications This Month",
    value: "286",
    change: "+12%",
    tone: "text-blue-600",
  },
  {
    label: "Offer Conversion Rate",
    value: "34%",
    change: "+4.1%",
    tone: "text-emerald-600",
  },
  {
    label: "Pending Reviews",
    value: "42",
    change: "-8",
    tone: "text-amber-600",
  },
  {
    label: "Avg. Decision Time",
    value: "5.8 days",
    change: "-1.2 days",
    tone: "text-violet-600",
  },
];

export const reportLibrary = [
  {
    id: "report-1",
    title: "Admissions Funnel Summary",
    description:
      "Track lead-to-enrollment movement by campus, program, and counselor.",
    frequency: "Daily",
    owner: "Admissions Operations",
    category: "Operations",
    dashboards: 3,
    totalViews: 428,
    assignedTo: "Leadership",
    lastViewed: "Today",
    lastUpdated: "2 hours ago",
    status: "Ready",
    favorite: true,
  },
  {
    id: "report-2",
    title: "Counselor Productivity Report",
    description:
      "Compare follow-ups, application completions, and offer conversion by owner.",
    frequency: "Weekly",
    owner: "Management",
    category: "Leadership",
    dashboards: 2,
    totalViews: 276,
    assignedTo: "Management",
    lastViewed: "Yesterday",
    lastUpdated: "1 day ago",
    status: "Scheduled",
    favorite: false,
  },
  {
    id: "report-3",
    title: "Document Verification Ageing",
    description: "Monitor pending, rejected, and overdue verification queues.",
    frequency: "Daily",
    owner: "Admissions Desk",
    category: "Compliance",
    dashboards: 1,
    totalViews: 193,
    assignedTo: "Verification Desk",
    lastViewed: "Today",
    lastUpdated: "4 hours ago",
    status: "Ready",
    favorite: true,
  },
  {
    id: "report-4",
    title: "Source Performance Snapshot",
    description:
      "Measure lead quality, application starts, and enrollments by campaign source.",
    frequency: "Weekly",
    owner: "Marketing Team",
    category: "Marketing",
    dashboards: 2,
    totalViews: 154,
    assignedTo: "Growth Team",
    lastViewed: "2 days ago",
    lastUpdated: "3 days ago",
    status: "Draft",
    favorite: false,
  },
] satisfies ReportLibraryItem[];

export const goalsTracker = [
  {
    goal: "March Applications",
    target: 320,
    achieved: 286,
    owner: "Admissions Team",
  },
  {
    goal: "Offer Letters Issued",
    target: 120,
    achieved: 104,
    owner: "Review Committee",
  },
  {
    goal: "Document SLA Compliance",
    target: 95,
    achieved: 89,
    owner: "Verification Desk",
  },
];
