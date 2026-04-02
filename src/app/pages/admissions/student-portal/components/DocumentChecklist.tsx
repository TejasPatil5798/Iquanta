import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import type { StudentPortalRecord } from "../studentPortalData";

const statusClassNames: Record<string, string> = {
  Verified: "bg-green-100 text-green-700 hover:bg-green-100",
  Pending: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  Rejected: "bg-red-100 text-red-700 hover:bg-red-100",
  "Not Submitted": "bg-slate-100 text-slate-700 hover:bg-slate-100",
};

export function DocumentChecklist({
  documents,
}: Pick<StudentPortalRecord, "documents">) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-slate-900">
          Document Checklist
        </CardTitle>
        <p className="text-sm text-slate-500">
          Review each admission requirement and track its verification status.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {documents.map((document) => (
          <div
            key={document.documentType}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {document.documentType}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {document.uploadDate
                  ? `Uploaded on ${document.uploadDate}`
                  : "Awaiting upload from student portal"}
              </p>
              {document.verifiedBy ? (
                <p className="mt-1 text-xs text-slate-500">
                  Verified by {document.verifiedBy}
                </p>
              ) : null}
            </div>
            <Badge className={statusClassNames[document.status]}>
              {document.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

