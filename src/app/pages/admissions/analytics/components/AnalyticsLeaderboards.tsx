import { Card } from "../../../../components/ui/card";
import type { AdmissionsInsights } from "../../../../lib/admissionsInsights";
import { analyticsColors } from "../analyticsData";

export function AnalyticsLeaderboards({
  insights,
}: {
  insights: AdmissionsInsights;
}) {
  const maxLeadSourceValue = Math.max(
    ...insights.leadSourceData.map((source) => source.value),
    1,
  );

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Top Performing Counselors
        </h3>
        <div className="space-y-4">
          {insights.counselorPerformanceData.map((counselor, index) => (
            <div key={counselor.name} className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <span className="text-sm font-bold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{counselor.name}</p>
                <p className="text-sm text-gray-500">
                  {counselor.conversions} conversions from {counselor.leads} leads
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">
                  ₹{(counselor.revenue / 100000).toFixed(1)}L
                </p>
                <p className="text-xs text-gray-500">Revenue</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Top Lead Sources
        </h3>
        <div className="space-y-4">
          {insights.leadSourceData.map((source, index) => (
            <div key={source.name} className="flex items-center gap-4">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: analyticsColors[index % analyticsColors.length] }}
              >
                <span className="text-sm font-bold text-white">{index + 1}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{source.name}</p>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${(source.value / maxLeadSourceValue) * 100}%`,
                      backgroundColor: analyticsColors[index % analyticsColors.length],
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{source.value}</p>
                <p className="text-xs text-gray-500">Leads</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
