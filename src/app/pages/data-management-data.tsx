export type AgentTemplate = {
  id: string;
  name: string;
  category: "Research" | "Clean" | "Summarize" | "Enrich";
  prompt: string;
  impact: string;
};

export type AgentActivity = {
  id: string;
  title: string;
  status: "Queued" | "Running" | "Completed";
  owner: string;
  updatedAt: string;
};

export const agentTemplates: AgentTemplate[] = [
  {
    id: "agent-1",
    name: "Duplicate contact cleanup",
    category: "Clean",
    prompt: "Find duplicate contacts by email, phone, and company domain.",
    impact: "214 records resolved this week",
  },
  {
    id: "agent-2",
    name: "Account research snapshot",
    category: "Research",
    prompt: "Summarize company size, ICP fit, and decision makers before handoff.",
    impact: "Used in 31 handoffs",
  },
  {
    id: "agent-3",
    name: "Lifecycle summary",
    category: "Summarize",
    prompt: "Generate a timeline summary from activities, tickets, and deals.",
    impact: "Average prep time down 42%",
  },
  {
    id: "agent-4",
    name: "Lead enrichment triage",
    category: "Enrich",
    prompt: "Identify missing title, region, and employee band for new leads.",
    impact: "89 leads ready for outreach",
  },
];

export const agentActivityFeed: AgentActivity[] = [
  { id: "act-1", title: "Normalize phone numbers", status: "Completed", owner: "RevOps", updatedAt: "10 min ago" },
  { id: "act-2", title: "Backfill industry values", status: "Running", owner: "Growth", updatedAt: "22 min ago" },
  { id: "act-3", title: "Summarize Q2 onboarding churn", status: "Queued", owner: "CS Ops", updatedAt: "1 hour ago" },
];

export type EnrichmentTask = {
  id: string;
  title: string;
  coverage: string;
  credits: number;
  type: "Company" | "Contact";
};

export const enrichmentTasks: EnrichmentTask[] = [
  { id: "enrich-1", title: "Fill missing business emails", coverage: "1,482 contacts", credits: 140, type: "Contact" },
  { id: "enrich-2", title: "Refresh employee count", coverage: "840 companies", credits: 95, type: "Company" },
  { id: "enrich-3", title: "Detect buying department", coverage: "620 contacts", credits: 60, type: "Contact" },
  { id: "enrich-4", title: "Backfill industry and NAICS", coverage: "510 companies", credits: 72, type: "Company" },
];

export const enrichmentMappings = [
  { source: "Work email", target: "email", status: "Mapped" },
  { source: "Mobile number", target: "phone", status: "Mapped" },
  { source: "HQ employee band", target: "employee_band", status: "Pending review" },
  { source: "Funding stage", target: "funding_stage", status: "Mapped" },
];

export const enrichmentExclusions = [
  { id: "exc-1", label: "Competitor domains", count: 18 },
  { id: "exc-2", label: "Students and personal emails", count: 44 },
  { id: "exc-3", label: "Suppressed territories", count: 6 },
];

export type IntegrationRecord = {
  id: string;
  name: string;
  type: "File import" | "App sync" | "Data studio sync";
  object: string;
  status: "Healthy" | "Needs attention" | "Paused";
  updatedAt: string;
  volume: string;
};

export const integrationRecords: IntegrationRecord[] = [
  { id: "int-1", name: "Spring webinar leads", type: "File import", object: "Contacts", status: "Healthy", updatedAt: "Today, 09:40", volume: "1,208 rows" },
  { id: "int-2", name: "Salesforce pipeline sync", type: "App sync", object: "Deals", status: "Needs attention", updatedAt: "Today, 08:15", volume: "2 failed jobs" },
  { id: "int-3", name: "Product usage warehouse", type: "Data studio sync", object: "Events", status: "Healthy", updatedAt: "Yesterday", volume: "14.2M events" },
  { id: "int-4", name: "Partner import archive", type: "File import", object: "Companies", status: "Paused", updatedAt: "2 days ago", volume: "Awaiting approval" },
];

export type DataObject = {
  id: string;
  name: string;
  family: "CRM" | "Sales" | "Service" | "Custom";
  properties: number;
  associations: number;
  health: number;
  description: string;
};

export const dataObjects: DataObject[] = [
  { id: "obj-1", name: "Contact", family: "CRM", properties: 210, associations: 8, health: 94, description: "Primary person-level CRM record used by marketing and sales." },
  { id: "obj-2", name: "Company", family: "CRM", properties: 152, associations: 12, health: 91, description: "Account-level object linked to contacts, deals, and support data." },
  { id: "obj-3", name: "Deal", family: "Sales", properties: 84, associations: 15, health: 88, description: "Commercial pipeline object with stage history and revenue attributes." },
  { id: "obj-4", name: "Ticket", family: "Service", properties: 73, associations: 7, health: 97, description: "Support queue object for service issues and escalations." },
  { id: "obj-5", name: "Product usage", family: "Custom", properties: 46, associations: 4, health: 79, description: "Custom telemetry object sourced from the warehouse for activation signals." },
];

export const modelRecommendations = [
  "Merge overlapping lifecycle fields into a single governed property set.",
  "Associate Product usage records with Deals for expansion reporting.",
  "Archive unused custom objects with no updates in the last 90 days.",
];

export type QualityIssue = {
  id: string;
  category: "Formatting" | "Duplicate" | "Sync" | "Unused";
  title: string;
  owner: string;
  affected: number;
  severity: "High" | "Medium" | "Low";
  autoFixable: boolean;
};

export const qualityIssues: QualityIssue[] = [
  { id: "qual-1", category: "Formatting", title: "Phone numbers missing country code", owner: "RevOps", affected: 42, severity: "High", autoFixable: true },
  { id: "qual-2", category: "Duplicate", title: "Duplicate companies by domain", owner: "Sales Ops", affected: 15, severity: "High", autoFixable: false },
  { id: "qual-3", category: "Sync", title: "Paused Salesforce field sync", owner: "Integrations", affected: 12, severity: "Medium", autoFixable: false },
  { id: "qual-4", category: "Unused", title: "Properties with no values in 180 days", owner: "Admin", affected: 245, severity: "Low", autoFixable: true },
];

export const qualityAutomations = [
  { id: "auto-1", label: "Standardize casing for city and state values", savings: "2 min / record" },
  { id: "auto-2", label: "Archive empty legacy properties", savings: "Reduce admin overhead" },
  { id: "auto-3", label: "Repair malformed mobile numbers", savings: "15 records instantly" },
];

export type StudioDataset = {
  id: string;
  name: string;
  status: "Draft" | "Published" | "Syncing";
  source: string;
  rows: string;
  owner: string;
  updatedAt: string;
};

export const studioDatasets: StudioDataset[] = [
  { id: "ds-1", name: "Lifecycle health score", status: "Published", source: "CRM + product usage", rows: "82K", owner: "Revenue Ops", updatedAt: "Today" },
  { id: "ds-2", name: "Demo-to-paid conversion", status: "Syncing", source: "CRM + billing", rows: "14K", owner: "Growth", updatedAt: "30 min ago" },
  { id: "ds-3", name: "At-risk onboarding accounts", status: "Draft", source: "CRM + support", rows: "3.8K", owner: "CS Ops", updatedAt: "Yesterday" },
];

export type ManagedEvent = {
  id: string;
  name: string;
  source: string;
  status: "Live" | "Draft" | "Paused";
  volume: string;
  lastSeen: string;
  owner: string;
};

export const managedEvents: ManagedEvent[] = [
  { id: "evt-1", name: "application_submitted", source: "Web app", status: "Live", volume: "6.2K / week", lastSeen: "5 min ago", owner: "Admissions" },
  { id: "evt-2", name: "payment_failed", source: "Billing", status: "Live", volume: "124 / week", lastSeen: "18 min ago", owner: "Finance" },
  { id: "evt-3", name: "mentor_session_booked", source: "Student portal", status: "Draft", volume: "Not collecting", lastSeen: "-", owner: "Student Success" },
  { id: "evt-4", name: "checkout_started", source: "Marketing site", status: "Paused", volume: "Paused", lastSeen: "2 days ago", owner: "Growth" },
];
