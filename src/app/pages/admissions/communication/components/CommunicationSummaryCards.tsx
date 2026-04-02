import { Card } from "../../../../components/ui/card";
import type { PortalInteraction } from "../../../../api/admissionsEntitiesApi";
import { Calendar, Mail, MessageSquare, Phone, Send } from "lucide-react";

export function CommunicationSummaryCards({
  interactions,
}: {
  interactions: PortalInteraction[];
}) {
  const summaryCards = [
    {
      label: "Emails",
      value: interactions.filter((item) => item.type === "Email").length,
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      tone: "bg-blue-100",
    },
    {
      label: "Calls",
      value: interactions.filter((item) => item.type === "Call").length,
      icon: <Phone className="h-5 w-5 text-green-600" />,
      tone: "bg-green-100",
    },
    {
      label: "WhatsApp",
      value: interactions.filter((item) => item.type === "WhatsApp").length,
      icon: <MessageSquare className="h-5 w-5 text-emerald-600" />,
      tone: "bg-emerald-100",
    },
    {
      label: "SMS",
      value: interactions.filter((item) => item.type === "SMS").length,
      icon: <Send className="h-5 w-5 text-purple-600" />,
      tone: "bg-purple-100",
    },
    {
      label: "Meetings",
      value: interactions.filter((item) => item.type === "Meeting").length,
      icon: <Calendar className="h-5 w-5 text-orange-600" />,
      tone: "bg-orange-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {summaryCards.map((card) => (
        <Card key={card.label} className="p-4">
          <div className="flex items-center gap-3">
            <div className={`${card.tone} rounded-lg p-3`}>{card.icon}</div>
            <div>
              <p className="text-sm text-gray-600">{card.label}</p>
              <p className="text-xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
