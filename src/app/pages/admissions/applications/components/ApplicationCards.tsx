import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import type { PortalApplication } from "../../../../api/admissionsEntitiesApi";
import { Calendar, FileCheck } from "lucide-react";
import { applicationStages, getApplicationStatusColor } from "../applicationUtils";

export function ApplicationCards({
  applications,
}: {
  applications: PortalApplication[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {applications.map((application) => (
        <Card key={application._id} className="p-6 transition-shadow hover:shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {application.studentName}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Application ID: {application.applicationId}
                </p>
              </div>
              <Badge className={getApplicationStatusColor(application.status)}>
                {application.status}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FileCheck className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">
                  Program: {application.program}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileCheck className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">
                  Student ID: {application.studentId || "Not assigned yet"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">
                  Submitted:{" "}
                  {new Date(application.submittedAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Completion
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {application.completionPercentage}%
                </span>
              </div>
              <Progress
                value={application.completionPercentage}
                className="h-2"
              />
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-xs text-gray-500">Assigned Counselor</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {application.counselor}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="mb-3 text-xs font-medium text-gray-700">
                Application Timeline
              </p>
              <div className="space-y-2">
                {applicationStages
                  .slice(0, applicationStages.indexOf(application.status) + 1)
                  .map((stage) => (
                    <div key={stage} className="flex items-start gap-2">
                      <div
                        className={`mt-1.5 h-2 w-2 rounded-full ${
                          stage === application.status
                            ? "bg-blue-600"
                            : "bg-green-600"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p
                          className={`text-xs ${
                            stage === application.status
                              ? "font-medium text-blue-600"
                              : "text-gray-600"
                          }`}
                        >
                          {stage}
                        </p>
                      </div>
                      {stage === application.status && (
                        <span className="text-xs text-blue-600">Current</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                View Details
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Update Status
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
