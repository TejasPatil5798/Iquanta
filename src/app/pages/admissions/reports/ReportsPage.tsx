import { ReportsLibrary } from "./components/ReportsLibrary";

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admissions Reports</h1>
        <p className="mt-1 text-gray-500">
          Generate recurring and ad hoc reports for leadership and operations.
        </p>
      </div>

      <ReportsLibrary />
    </div>
  );
}

