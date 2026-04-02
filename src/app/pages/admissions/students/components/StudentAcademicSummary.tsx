import { FileText, GraduationCap, Layers3, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import type { PortalStudent } from "../../../../api/studentsApi";

export function StudentAcademicSummary({
  student,
}: {
  student: PortalStudent;
}) {
  return (
    <Card className="border-slate-200">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-lg text-slate-900">
          Academic and Admission Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 pt-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              <GraduationCap className="h-4 w-4" />
              Program
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {student.program}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              <Layers3 className="h-4 w-4" />
              Application Stage
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {student.applicationStage || "Stage not assigned"}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              <FileText className="h-4 w-4" />
              Documents on File
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {student.documents}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              <UserCheck className="h-4 w-4" />
              Student Record
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Admissions profile active
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

