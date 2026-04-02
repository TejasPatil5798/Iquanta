import type { ReactNode } from "react";
import { Calendar, Mail, MessageSquare, Phone, Send } from "lucide-react";

export function getCommunicationTypeIcon(type: string): ReactNode {
  const icons: Record<string, ReactNode> = {
    Email: <Mail className="h-4 w-4" />,
    Call: <Phone className="h-4 w-4" />,
    WhatsApp: <MessageSquare className="h-4 w-4" />,
    SMS: <Send className="h-4 w-4" />,
    Meeting: <Calendar className="h-4 w-4" />,
  };

  return icons[type];
}

export function getCommunicationTypeColor(type: string) {
  const colors: Record<string, string> = {
    Email: "bg-blue-100 text-blue-700",
    Call: "bg-green-100 text-green-700",
    WhatsApp: "bg-emerald-100 text-emerald-700",
    SMS: "bg-purple-100 text-purple-700",
    Meeting: "bg-orange-100 text-orange-700",
  };

  return colors[type] || "bg-gray-100 text-gray-700";
}
