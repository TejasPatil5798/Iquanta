import { useEffect, useState } from "react";
import {
  getApplications,
  getDocuments,
  getInteractions,
  type PortalApplication,
  type PortalDocument,
  type PortalInteraction,
} from "../../../../api/admissionsEntitiesApi";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import { applicationStages } from "../dashboardData";

export function StudentDashboardView({ userName }: { userName?: string }) {
  const fallbackName = userName || "Rahul Sharma";
  const [application, setApplication] = useState<PortalApplication | null>(null);
  const [documents, setDocuments] = useState<PortalDocument[]>([]);
  const [updates, setUpdates] = useState<PortalInteraction[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadStudentData = async () => {
      try {
        const [applicationsResponse, documentsResponse, interactionsResponse] =
          await Promise.all([
            getApplications(),
            getDocuments(),
            getInteractions(),
          ]);

        const resolvedApplication =
          applicationsResponse.data.find((item) => item.studentName === fallbackName) ??
          applicationsResponse.data[0] ??
          null;

        const studentName = resolvedApplication?.studentName ?? fallbackName;

        if (isMounted) {
          setApplication(resolvedApplication);
          setDocuments(
            documentsResponse.data.filter((item) => item.studentName === studentName),
          );
          setUpdates(
            interactionsResponse.data.filter((item) => item.personName === studentName),
          );
        }
      } catch (error) {
        console.error("Unable to load student dashboard data", error);
      }
    };

    loadStudentData();

    return () => {
      isMounted = false;
    };
  }, [fallbackName]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Application Journey
          </h3>
          <div className="space-y-4">
            {applicationStages.map((stage) => {
              const reached =
                applicationStages.indexOf(stage) <=
                applicationStages.indexOf(
                  application?.status ?? "Documents Pending",
                );
              const current = stage === (application?.status ?? "Documents Pending");

              return (
                <div key={stage} className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      current
                        ? "bg-blue-600"
                        : reached
                          ? "bg-green-600"
                          : "bg-gray-300"
                    }`}
                  ></div>
                  <p
                    className={`text-sm ${
                      current ? "font-semibold text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {stage}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Document Checklist
          </h3>
          <div className="space-y-3">
            {documents.map((document) => (
              <div
                key={document._id}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {document.documentType}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(document.submittedAt).toLocaleDateString()}
                  </p>
                </div>
                <Badge
                  className={
                    document.status === "Verified"
                      ? "bg-green-100 text-green-700"
                      : document.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                  }
                >
                  {document.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Admission Updates
        </h3>
        <div className="space-y-4">
          {updates.map((update) => (
            <div
              key={update._id}
              className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-b-0"
            >
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-600"></div>
              <div>
                <p className="text-sm text-gray-900">{update.summary}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {new Date(update.timestamp).toLocaleString()} · {update.counselor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
