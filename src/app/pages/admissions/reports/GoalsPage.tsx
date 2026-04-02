import { GoalsTracker } from "./components/GoalsTracker";

export function GoalsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admissions Goals</h1>
        <p className="mt-1 text-gray-500">
          Track enrollment, application, and SLA goals across teams.
        </p>
      </div>

      <GoalsTracker />
    </div>
  );
}

