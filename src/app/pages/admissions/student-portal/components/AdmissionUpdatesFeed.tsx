import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import type { StudentPortalRecord } from "../studentPortalData";

export function AdmissionUpdatesFeed({
  updates,
}: Pick<StudentPortalRecord, "updates">) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-slate-900">
          Admission Updates
        </CardTitle>
        <p className="text-sm text-slate-500">
          Recent communication shared by your admissions team.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {updates.length > 0 ? (
          updates.map((update) => (
            <div
              key={update._id}
              className="flex gap-4 rounded-xl border border-slate-200 p-4"
            >
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                    {update.type}
                  </Badge>
                  <span className="text-xs text-slate-500">
                    {new Date(update.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-900">{update.summary}</p>
                <p className="mt-2 text-xs font-medium text-slate-500">
                  Shared by {update.counselor}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 p-6 text-sm text-slate-500">
            No updates yet. New communication will appear here once the admissions
            team contacts you.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
