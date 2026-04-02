import { Card } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { goalsTracker } from "../reportsData";

export function GoalsTracker() {
  return (
    <Card className="p-6">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-900">Goal Tracker</h3>
        <p className="mt-1 text-sm text-gray-500">
          Monitor progress against operational admissions targets.
        </p>
      </div>

      <div className="space-y-5">
        {goalsTracker.map((goal) => {
          const percentage = Math.min(
            100,
            Math.round((goal.achieved / goal.target) * 100),
          );

          return (
            <div key={goal.goal} className="space-y-3 rounded-xl border border-gray-200 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{goal.goal}</p>
                  <p className="text-sm text-gray-500">{goal.owner}</p>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {goal.achieved} / {goal.target}
                </p>
              </div>
              <Progress value={percentage} className="h-2.5" />
              <p className="text-xs text-gray-500">{percentage}% achieved</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

