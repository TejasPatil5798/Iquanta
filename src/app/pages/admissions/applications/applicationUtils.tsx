import type { ReactNode } from "react";
import type { PortalApplication } from "../../../api/admissionsEntitiesApi";
import { CheckCircle2, Clock, FileCheck } from "lucide-react";

export const applicationStages: PortalApplication["status"][] = [
  "Application Started",
  "Documents Pending",
  "Documents Verified",
  "Under Review",
  "Admission Offered",
  "Enrolled",
];

export function getApplicationStatusColor(status: string) {
  const colors: Record<string, string> = {
    "Application Started": "bg-blue-100 text-blue-700",
    "Documents Pending": "bg-yellow-100 text-yellow-700",
    "Documents Verified": "bg-cyan-100 text-cyan-700",
    "Under Review": "bg-purple-100 text-purple-700",
    "Admission Offered": "bg-green-100 text-green-700",
    Enrolled: "bg-emerald-100 text-emerald-700",
  };

  return colors[status] ?? "bg-slate-100 text-slate-700";
}

export function getApplicationStatusIcon(status: string): ReactNode {
  const icons: Record<string, ReactNode> = {
    "Application Started": <Clock className="h-4 w-4" />,
    "Documents Pending": <FileCheck className="h-4 w-4" />,
    "Documents Verified": <CheckCircle2 className="h-4 w-4" />,
    "Under Review": <Clock className="h-4 w-4" />,
    "Admission Offered": <CheckCircle2 className="h-4 w-4" />,
    Enrolled: <CheckCircle2 className="h-4 w-4" />,
  };

  return icons[status] ?? <Clock className="h-4 w-4" />;
}
