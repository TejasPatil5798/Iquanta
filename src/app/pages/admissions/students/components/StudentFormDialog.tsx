import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  createStudent,
  updateStudent,
  type CreateStudentPayload,
  type PortalStudent,
} from "../../../../api/studentsApi";
import { Button } from "../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const emptyForm: CreateStudentPayload = {
  studentId: "",
  name: "",
  email: "",
  phone: "",
  program: "",
  status: "Active",
  enrollmentDate: "",
  counselor: "",
  documents: 0,
  city: "",
  state: "",
  applicationStage: "",
};

function RequiredMark() {
  return <span className="text-red-500">*</span>;
}

function toFormValues(student?: PortalStudent | null): CreateStudentPayload {
  if (!student) {
    return emptyForm;
  }

  return {
    studentId: student.studentId,
    name: student.name,
    email: student.email,
    phone: student.phone,
    program: student.program,
    status: student.status,
    enrollmentDate: student.enrollmentDate.slice(0, 10),
    counselor: student.counselor,
    documents: student.documents,
    city: student.city ?? "",
    state: student.state ?? "",
    applicationStage: student.applicationStage ?? "",
  };
}

export function StudentFormDialog({
  mode,
  student,
  trigger,
  onStudentCreated,
  onStudentUpdated,
}: {
  mode: "create" | "edit";
  student?: PortalStudent | null;
  trigger: React.ReactNode;
  onStudentCreated?: (student: PortalStudent) => void;
  onStudentUpdated?: (student: PortalStudent) => void;
}) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<CreateStudentPayload>(toFormValues(student));

  const title = useMemo(
    () => (mode === "create" ? "Add Student" : "Edit Student"),
    [mode],
  );

  useEffect(() => {
    if (open) {
      setForm(toFormValues(student));
    }
  }, [open, student]);

  const updateField = <K extends keyof CreateStudentPayload>(
    key: K,
    value: CreateStudentPayload[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        ...form,
        documents: Number(form.documents) || 0,
      };

      if (mode === "create") {
        const response = await createStudent(payload);
        onStudentCreated?.(response.data);
        toast.success("Student created successfully");
      } else if (student?._id) {
        const response = await updateStudent(student._id, payload);
        onStudentUpdated?.(response.data);
        toast.success("Student updated successfully");
      }

      setOpen(false);
      setForm(emptyForm);
    } catch (error) {
      console.error(`Failed to ${mode} student`, error);
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : `Failed to ${mode} student`;
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Create a new student record in the admissions portal."
              : "Update the selected student record."}
          </DialogDescription>
          <p className="text-xs text-slate-500">
            Fields marked with <span className="font-semibold text-red-500">*</span> are required.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-id`}>
                Student ID <RequiredMark />
              </Label>
              <Input
                id={`${mode}-student-id`}
                value={form.studentId}
                onChange={(event) => updateField("studentId", event.target.value)}
                placeholder="STU-2026-006"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-name`}>
                Full Name <RequiredMark />
              </Label>
              <Input
                id={`${mode}-student-name`}
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Student full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-email`}>
                Email <RequiredMark />
              </Label>
              <Input
                id={`${mode}-student-email`}
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="name@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-phone`}>
                Phone <RequiredMark />
              </Label>
              <Input
                id={`${mode}-student-phone`}
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-program`}>
                Program <RequiredMark />
              </Label>
              <Input
                id={`${mode}-student-program`}
                value={form.program}
                onChange={(event) => updateField("program", event.target.value)}
                placeholder="MBA"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>
                Status <RequiredMark />
              </Label>
              <Select
                value={form.status}
                onValueChange={(value) =>
                  updateField("status", value as CreateStudentPayload["status"])
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Graduated">Graduated</SelectItem>
                  <SelectItem value="Dropped">Dropped</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-enrollment-date`}>
                Enrollment Date <RequiredMark />
              </Label>
              <Input
                id={`${mode}-enrollment-date`}
                type="date"
                value={form.enrollmentDate}
                onChange={(event) =>
                  updateField("enrollmentDate", event.target.value)
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-counselor`}>
                Counselor <RequiredMark />
              </Label>
              <Input
                id={`${mode}-student-counselor`}
                value={form.counselor}
                onChange={(event) => updateField("counselor", event.target.value)}
                placeholder="Priya Patel"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-documents`}>Documents Count</Label>
              <Input
                id={`${mode}-student-documents`}
                type="number"
                min="0"
                value={String(form.documents)}
                onChange={(event) =>
                  updateField("documents", Number(event.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-stage`}>Application Stage</Label>
              <Input
                id={`${mode}-student-stage`}
                value={form.applicationStage ?? ""}
                onChange={(event) =>
                  updateField("applicationStage", event.target.value)
                }
                placeholder="Under Review"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-city`}>City</Label>
              <Input
                id={`${mode}-student-city`}
                value={form.city ?? ""}
                onChange={(event) => updateField("city", event.target.value)}
                placeholder="Mumbai"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${mode}-student-state`}>State</Label>
              <Input
                id={`${mode}-student-state`}
                value={form.state ?? ""}
                onChange={(event) => updateField("state", event.target.value)}
                placeholder="Maharashtra"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
              disabled={submitting}
            >
              {submitting
                ? mode === "create"
                  ? "Saving..."
                  : "Updating..."
                : mode === "create"
                  ? "Save Student"
                  : "Update Student"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
