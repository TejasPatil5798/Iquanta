import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import type { StudentPortalRecord } from "../studentPortalData";

const stageDescriptions: Record<string, string> = {
  "Application Started": "Complete the remaining profile fields and submit required details.",
  "Documents Pending": "Upload the missing documents so verification can begin.",
  "Documents Verified": "Your file is complete and ready for the admissions team review.",
  "Under Review": "The admissions committee is evaluating your application.",
  "Admission Offered": "Your offer is ready. Accept it to move toward enrollment.",
  Enrolled: "Your admission is complete. Watch for orientation and onboarding updates.",
};

export function ApplicationStatusCard({
  application,
}: Pick<StudentPortalRecord, "application">) {
  return (
    <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-white">
      <CardHeader className="gap-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-700">Application Status</p>
            <CardTitle className="mt-1 text-2xl font-semibold text-slate-900">
              {application.program}
            </CardTitle>
            <p className="mt-2 text-sm text-slate-600">
              {stageDescriptions[application.status]}
            </p>
          </div>
          <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100">
            {application.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
            <span>Completion progress</span>
            <span className="font-semibold text-slate-900">
              {application.completionPercentage}%
            </span>
          </div>
          <Progress value={application.completionPercentage} className="h-2.5" />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border bg-white/80 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Application ID
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {application.applicationId}
            </p>
          </div>
          <div className="rounded-lg border bg-white/80 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Submitted On
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {new Date(application.submittedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="rounded-lg border bg-white/80 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Counselor
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {application.counselor}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
