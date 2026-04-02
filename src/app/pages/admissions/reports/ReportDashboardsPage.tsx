import { ReportsKpiCards } from "./components/ReportsKpiCards";
import { ReportsLibrary } from "./components/ReportsLibrary";

export function ReportDashboardsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admissions Dashboards</h1>
        <p className="mt-1 text-gray-500">
          Monitor high-level performance across the admissions pipeline.
        </p>
      </div>

      <ReportsKpiCards />
      <ReportsLibrary />
    </div>
  );
}

