import type { AdmissionsSummary } from "../../../../api/admissionsApi";
import { Card } from "../../../../components/ui/card";
import { DollarSign, Target, TrendingUp, Users } from "lucide-react";

export function AnalyticsKpiCards({
  summary,
}: {
  summary: AdmissionsSummary | null;
}) {
  const cards = [
    {
      title: "Estimated Revenue",
      value: `₹${(((summary?.decisions.approved ?? 0) * 0.85)).toFixed(1)}L`,
      change: `${summary?.decisions.approved ?? 0} approvals`,
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      tone: "bg-blue-100",
      changeTone: "text-green-600",
    },
    {
      title: "Conversion Rate",
      value: `${
        summary?.leads.total
          ? (
              ((summary.applications.offered + summary.students.enrolled) /
                summary.leads.total) *
              100
            ).toFixed(1)
          : "0.0"
      }%`,
      change: `${summary?.applications.offered ?? 0} offers released`,
      icon: <Target className="h-6 w-6 text-green-600" />,
      tone: "bg-green-100",
      changeTone: "text-green-600",
    },
    {
      title: "Active Leads",
      value: String(summary?.leads.total ?? 0),
      change: `${summary?.leads.new ?? 0} newly added`,
      icon: <Users className="h-6 w-6 text-purple-600" />,
      tone: "bg-purple-100",
      changeTone: "text-blue-600",
    },
    {
      title: "Verified Documents",
      value: String(summary?.documents.verified ?? 0),
      change: `${summary?.documents.pending ?? 0} pending review`,
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      tone: "bg-orange-100",
      changeTone: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{card.title}</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {card.value}
              </h3>
              <p className={`mt-1 text-sm ${card.changeTone}`}>{card.change}</p>
            </div>
            <div className={`${card.tone} rounded-lg p-3`}>{card.icon}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
