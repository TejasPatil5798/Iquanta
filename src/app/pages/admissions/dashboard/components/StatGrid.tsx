import type { AdmissionsSummary } from "../../../../api/admissionsApi";
import { Card } from "../../../../components/ui/card";
import { defaultAdmissionsSummary, roleStats } from "../dashboardData";

export function StatGrid({
  role,
  summary,
  loading,
}: {
  role: string;
  summary?: AdmissionsSummary | null;
  loading?: boolean;
}) {
  const stats = roleStats[role] ?? roleStats.user;
  const resolvedSummary = summary ?? defaultAdmissionsSummary;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <p className="text-sm text-gray-600">{stat.title}</p>
          <h3 className={`mt-2 text-3xl font-bold ${stat.tone}`}>
            {loading ? "..." : stat.value(resolvedSummary)}
          </h3>
          <p className="mt-2 text-sm text-gray-500">Role-based KPI snapshot</p>
        </Card>
      ))}
    </div>
  );
}
