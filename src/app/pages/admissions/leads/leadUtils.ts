import type { PortalLead } from "../../../api/admissionsEntitiesApi";

export const leadPipelineStages: PortalLead["status"][] = [
  "New",
  "Contacted",
  "Qualified",
  "Interested",
  "Application Started",
  "Closed Lost",
];

export function getLeadStatusColor(status: string) {
  const colors: Record<string, string> = {
    New: "bg-gray-100 text-gray-700",
    Contacted: "bg-blue-100 text-blue-700",
    Qualified: "bg-purple-100 text-purple-700",
    Interested: "bg-indigo-100 text-indigo-700",
    "Application Started": "bg-cyan-100 text-cyan-700",
    "Closed Lost": "bg-red-100 text-red-700",
  };

  return colors[status] ?? "bg-slate-100 text-slate-700";
}

export function getLeadScoreColor(score: number) {
  if (score >= 80) return "text-green-600 font-semibold";
  if (score >= 60) return "text-blue-600 font-semibold";
  if (score >= 40) return "text-yellow-600 font-semibold";
  return "text-red-600 font-semibold";
}
