import { useEffect, useState } from "react";
import { getAdmissionsSummary, type AdmissionsSummary } from "../../../api/admissionsApi";
import { getApplications, getLeads } from "../../../api/admissionsEntitiesApi";
import { buildAdmissionsInsights, type AdmissionsInsights } from "../../../lib/admissionsInsights";
import { AnalyticsCharts } from "./components/AnalyticsCharts";
import { AnalyticsKpiCards } from "./components/AnalyticsKpiCards";
import { AnalyticsLeaderboards } from "./components/AnalyticsLeaderboards";

export function AnalyticsPage() {
  const [summary, setSummary] = useState<AdmissionsSummary | null>(null);
  const [insights, setInsights] = useState<AdmissionsInsights>({
    admissionTrendData: [],
    leadSourceData: [],
    counselorPerformanceData: [],
    conversionFunnelData: [],
  });

  useEffect(() => {
    let isMounted = true;

    const loadAnalytics = async () => {
      try {
        const [summaryResponse, leadsResponse, applicationsResponse] =
          await Promise.all([
            getAdmissionsSummary(),
            getLeads(),
            getApplications(),
          ]);

        if (isMounted) {
          setSummary(summaryResponse.data);
          setInsights(
            buildAdmissionsInsights(leadsResponse.data, applicationsResponse.data),
          );
        }
      } catch (error) {
        console.error("Unable to load analytics", error);
      }
    };

    loadAnalytics();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
        <p className="mt-1 text-gray-500">
          Comprehensive insights and performance metrics
        </p>
      </div>

      <AnalyticsKpiCards summary={summary} />
      <AnalyticsCharts insights={insights} />
      <AnalyticsLeaderboards insights={insights} />
    </div>
  );
}
