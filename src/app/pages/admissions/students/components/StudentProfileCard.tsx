import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import type { PortalStudent } from "../../../../api/studentsApi";
import { formatPortalDate, getStudentStatusColor } from "../studentUtils";

export function StudentProfileCard({
  student,
}: {
  student: PortalStudent;
}) {
  return (
    <Card className="border-slate-200">
      <CardHeader className="border-b border-slate-100">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <UserRound className="h-7 w-7" />
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-xl text-slate-900">
              {student.name}
            </CardTitle>
            <p className="mt-1 text-sm text-slate-500">{student.studentId}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className={getStudentStatusColor(student.status)}>
                {student.status}
              </Badge>
              <Badge variant="outline">{student.program}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 pt-6">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Contact Details
          </p>
          <div className="mt-3 space-y-3 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-400" />
              {student.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-slate-400" />
              {student.phone}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-400" />
              {student.city && student.state
                ? `${student.city}, ${student.state}`
                : student.city || student.state || "Location not added"}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Counselor
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {student.counselor}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Enrollment Date
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {formatPortalDate(student.enrollmentDate)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

