import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

type StudentDocument = {
  type?: string;
  fileName?: string;  status?: string;
  url?: string;
  notes?: string;
  uploadedAt?: string;
};

type StudentProfile = {
  studentId?: string;
  name?: string;
  email?: string;
  phone?: string;
  program?: string;
  status?: string;
  enrollmentDate?: string;
  counselor?: string;
  city?: string;
  state?: string;
  applicationStage?: string;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  postalCode?: string;
  guardianName?: string;
  guardianPhone?: string;
  category?: string;
  notes?: string;
  documents?: StudentDocument[];
};

type StudentProfileCardProps = {
  student: StudentProfile | null;
};

const renderValue = (value?: string) => value || "—";

export function StudentProfileCard({ student }: StudentProfileCardProps) {
  if (!student) {
    return null;
  }

  const documentCount = student.documents?.length ?? 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{student.name || "Student Profile"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Student ID</p>
              <p className="text-sm text-foreground">{renderValue(student.studentId)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</p>
              <p className="text-sm text-foreground">{renderValue(student.email)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Phone</p>
              <p className="text-sm text-foreground">{renderValue(student.phone)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Program</p>
              <p className="text-sm text-foreground">{renderValue(student.program)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Counselor</p>
              <p className="text-sm text-foreground">{renderValue(student.counselor)}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Status</p>
              <p className="text-sm capitalize text-foreground">{renderValue(student.status)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Application Stage</p>
              <p className="text-sm capitalize text-foreground">{renderValue(student.applicationStage)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Enrollment Date</p>
              <p className="text-sm text-foreground">{renderValue(student.enrollmentDate)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Location</p>
              <p className="text-sm text-foreground">
                {[student.city, student.state].filter(Boolean).join(", ") || "—"}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Documents</p>
              <p className="text-sm text-foreground">{documentCount} tracked</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t pt-6 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Date of Birth</p>
              <p className="text-sm text-foreground">{renderValue(student.dateOfBirth)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Gender</p>
              <p className="text-sm text-foreground">{renderValue(student.gender)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Category</p>
              <p className="text-sm text-foreground">{renderValue(student.category)}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Guardian Name</p>
              <p className="text-sm text-foreground">{renderValue(student.guardianName)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Guardian Phone</p>
              <p className="text-sm text-foreground">{renderValue(student.guardianPhone)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Postal Code</p>
              <p className="text-sm text-foreground">{renderValue(student.postalCode)}</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Address</p>
          <p className="mt-1 text-sm text-foreground">{renderValue(student.address)}</p>
        </div>

        <div className="border-t pt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Notes</p>
          <p className="mt-1 whitespace-pre-wrap text-sm text-foreground">{renderValue(student.notes)}</p>
        </div>
      </CardContent>
    </Card>
  );
}