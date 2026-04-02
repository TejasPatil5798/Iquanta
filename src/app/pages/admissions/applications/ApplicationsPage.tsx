import { useEffect, useState } from "react";
import {
  getApplications,
  type PortalApplication,
} from "../../../api/admissionsEntitiesApi";
import { ApplicationCards } from "./components/ApplicationCards";
import { ApplicationPipeline } from "./components/ApplicationPipeline";

export function ApplicationsPage() {
  const [selectedStage, setSelectedStage] = useState<string>("all");
  const [applications, setApplications] = useState<PortalApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadApplications = async () => {
      try {
        const response = await getApplications();
        if (isMounted) {
          setApplications(response.data);
        }
      } catch (error) {
        console.error("Unable to load applications", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadApplications();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredApplications =
    selectedStage === "all"
      ? applications
      : applications.filter(
          (application) => application.status === selectedStage,
        );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Student Applications
          </h1>
          <p className="mt-1 text-gray-500">
            Track and manage student applications
          </p>
        </div>
      </div>

      <ApplicationPipeline
        selectedStage={selectedStage}
        applications={applications}
        onStageChange={setSelectedStage}
      />

      {loading ? (
        <div className="text-sm text-gray-500">Loading applications...</div>
      ) : null}

      <ApplicationCards applications={filteredApplications} />
    </div>
  );
}
