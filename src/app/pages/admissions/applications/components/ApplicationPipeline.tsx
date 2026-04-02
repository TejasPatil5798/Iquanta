import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import type { PortalApplication } from "../../../../api/admissionsEntitiesApi";
import {
  applicationStages,
  getApplicationStatusColor,
  getApplicationStatusIcon,
} from "../applicationUtils";

export function ApplicationPipeline({
  selectedStage,
  applications,
  onStageChange,
}: {
  selectedStage: string;
  applications: PortalApplication[];
  onStageChange: (stage: string) => void;
}) {
  const applicationsByStage = applicationStages.map((stage) => ({
    stage,
    count: applications.filter((application) => application.status === stage).length,
  }));

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Application Pipeline
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {applicationsByStage.map(({ stage, count }) => (
          <button
            key={stage}
            onClick={() => onStageChange(stage)}
            className={`rounded-lg border-2 p-4 transition-all ${
              selectedStage === stage
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div
              className={`${getApplicationStatusColor(stage)} mb-2 flex h-10 w-10 items-center justify-center rounded-lg`}
            >
              {getApplicationStatusIcon(stage)}
            </div>
            <p className="text-2xl font-bold text-gray-900">{count}</p>
            <p className="mt-1 text-xs text-gray-600">{stage}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Button
          variant={selectedStage === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => onStageChange("all")}
        >
          View All
        </Button>
      </div>
    </Card>
  );
}
