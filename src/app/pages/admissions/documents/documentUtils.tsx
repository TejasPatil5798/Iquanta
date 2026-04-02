import type { ReactNode } from "react";
import { CheckCircle, Clock, XCircle } from "lucide-react";

export const documentCategories = [
  "ID Proof",
  "Academic Certificates",
  "Entrance Exam Scorecard",
  "Other Documents",
];

export function getDocumentStatusColor(status: string) {
  const colors: Record<string, string> = {
    Verified: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return colors[status] || "bg-gray-100 text-gray-700";
}

export function getDocumentStatusIcon(status: string): ReactNode {
  const icons: Record<string, ReactNode> = {
    Verified: <CheckCircle className="h-4 w-4 text-green-600" />,
    Pending: <Clock className="h-4 w-4 text-yellow-600" />,
    Rejected: <XCircle className="h-4 w-4 text-red-600" />,
  };

  return icons[status];
}
