import React, { useMemo, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../../../components/ui/dialog";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

type StudentDocumentStatus = "pending" | "received" | "verified" | "rejected";

type StudentDocument = {
  type: string;
  fileName: string;
  status: StudentDocumentStatus;
  url?: string;
  notes?: string;
  uploadedAt?: string;
};

type StudentFormValues = {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  status: string;
  enrollmentDate: string;
  counselor: string;
  city: string;
  state: string;
  applicationStage: string;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  postalCode?: string;
  guardianName?: string;
  guardianPhone?: string;
  category?: string;
  tenthBoard?: string;
  tenthPercentage?: string;
  twelfthBoard?: string;
  twelfthPercentage?: string;
  graduationCourse?: string;
  graduationPercentage?: string;
  notes?: string;
  documents: StudentDocument[];
};

type StudentFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: StudentFormValues) => void;
  initialValues?: Partial<StudentFormValues> | null;
  mode?: "create" | "edit";
};

const DOCUMENT_TYPES = [
  "10th Marksheet",
  "12th Marksheet",
  "Aadhaar Card",
  "Caste Certificate",
  "Transfer Certificate",
  "Migration Certificate",
  "Passport Photo",
  "Signature",
  "Income Certificate",
  "Domicile Certificate",
] as const;

const DOCUMENT_STATUSES: StudentDocumentStatus[] = ["pending", "received", "verified", "rejected"];

const createEmptyDocument = (type = ""): StudentDocument => ({
  type,
  fileName: "",
  status: "pending",
  url: "",
  notes: "",
  uploadedAt: "",
});

const buildInitialDocuments = (documents?: StudentDocument[]) => {
  if (documents && documents.length > 0) {
    return documents.map((document) => ({
      ...createEmptyDocument(),
      ...document,
    }));
  }

  return DOCUMENT_TYPES.slice(0, 5).map((type) => createEmptyDocument(type));
};

const defaultValues: StudentFormValues = {
  studentId: "",
  name: "",
  email: "",
  phone: "",
  program: "",
  status: "new",
  enrollmentDate: "",
  counselor: "",
  city: "",
  state: "",
  applicationStage: "lead",
  dateOfBirth: "",
  gender: "",
  address: "",
  postalCode: "",
  guardianName: "",
  guardianPhone: "",
  category: "",
  tenthBoard: "",
  tenthPercentage: "",
  twelfthBoard: "",
  twelfthPercentage: "",
  graduationCourse: "",
  graduationPercentage: "",
  notes: "",
  documents: buildInitialDocuments(),
};

export function StudentFormDialog({
  open,
  onOpenChange,
  onSubmit,
  initialValues,
  mode = "create",
}: StudentFormDialogProps) {
  const mergedInitialValues = useMemo<StudentFormValues>(
    () => ({
      ...defaultValues,
      ...initialValues,
      documents: buildInitialDocuments(initialValues?.documents),
    }),
    [initialValues],
  );

  const [formValues, setFormValues] = useState<StudentFormValues>(mergedInitialValues);

  React.useEffect(() => {
    setFormValues(mergedInitialValues);
  }, [mergedInitialValues, open]);

  const handleChange = <K extends keyof StudentFormValues>(key: K, value: StudentFormValues[K]) => {
    setFormValues((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleDocumentChange = (index: number, key: keyof StudentDocument, value: string) => {
    setFormValues((previous) => ({
      ...previous,
      documents: previous.documents.map((document, documentIndex) =>
        documentIndex === index ? { ...document, [key]: value } : document,
      ),
    }));
  };

  const addDocument = () => {
    setFormValues((previous) => ({
      ...previous,
      documents: [...previous.documents, createEmptyDocument()],
    }));
  };

  const removeDocument = (index: number) => {
    setFormValues((previous) => ({
      ...previous,
      documents: previous.documents.filter((_, documentIndex) => documentIndex !== index),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...formValues,
      documents: formValues.documents.filter(
        (document) => document.type.trim() || document.fileName.trim() || document.notes?.trim() || document.url?.trim(),
      ),
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === "edit" ? "Edit Student Profile" : "Add Student Profile"}</DialogTitle>
        </DialogHeader>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <section className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Basic Details</h3>
              <p className="text-sm text-muted-foreground">Capture the core admissions and contact information.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" value={formValues.studentId} onChange={(event) => handleChange("studentId", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={formValues.name} onChange={(event) => handleChange("name", event.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formValues.email} onChange={(event) => handleChange("email", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={formValues.phone} onChange={(event) => handleChange("phone", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Program</Label>
                <Input id="program" value={formValues.program} onChange={(event) => handleChange("program", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={formValues.status} onValueChange={(value) => handleChange("status", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="follow-up">Follow Up</SelectItem>
                    <SelectItem value="admitted">Admitted</SelectItem>
                    <SelectItem value="on-hold">On Hold</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="enrollmentDate">Enrollment Date</Label>
                <Input id="enrollmentDate" type="date" value={formValues.enrollmentDate} onChange={(event) => handleChange("enrollmentDate", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="counselor">Counselor</Label>
                <Input id="counselor" value={formValues.counselor} onChange={(event) => handleChange("counselor", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Application Stage</Label>
                <Select value={formValues.applicationStage} onValueChange={(value) => handleChange("applicationStage", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lead">Lead</SelectItem>
                    <SelectItem value="application-submitted">Application Submitted</SelectItem>
                    <SelectItem value="documents-pending">Documents Pending</SelectItem>
                    <SelectItem value="verification">Verification</SelectItem>
                    <SelectItem value="fee-pending">Fee Pending</SelectItem>
                    <SelectItem value="enrolled">Enrolled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Personal Details</h3>
              <p className="text-sm text-muted-foreground">Useful for verification and counselling follow-up.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input id="dateOfBirth" type="date" value={formValues.dateOfBirth} onChange={(event) => handleChange("dateOfBirth", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" value={formValues.gender} onChange={(event) => handleChange("gender", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" value={formValues.category} onChange={(event) => handleChange("category", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardianName">Guardian Name</Label>
                <Input id="guardianName" value={formValues.guardianName} onChange={(event) => handleChange("guardianName", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardianPhone">Guardian Phone</Label>
                <Input id="guardianPhone" value={formValues.guardianPhone} onChange={(event) => handleChange("guardianPhone", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" value={formValues.postalCode} onChange={(event) => handleChange("postalCode", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" value={formValues.city} onChange={(event) => handleChange("city", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" value={formValues.state} onChange={(event) => handleChange("state", event.target.value)} />
              </div>
              <div className="space-y-2 md:col-span-2 xl:col-span-3">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" value={formValues.address} onChange={(event) => handleChange("address", event.target.value)} rows={3} />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Academic Details</h3>
              <p className="text-sm text-muted-foreground">Capture educational background for admissions review.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="tenthBoard">10th Board</Label>
                <Input id="tenthBoard" value={formValues.tenthBoard} onChange={(event) => handleChange("tenthBoard", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tenthPercentage">10th Percentage</Label>
                <Input id="tenthPercentage" value={formValues.tenthPercentage} onChange={(event) => handleChange("tenthPercentage", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twelfthBoard">12th Board</Label>
                <Input id="twelfthBoard" value={formValues.twelfthBoard} onChange={(event) => handleChange("twelfthBoard", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twelfthPercentage">12th Percentage</Label>
                <Input id="twelfthPercentage" value={formValues.twelfthPercentage} onChange={(event) => handleChange("twelfthPercentage", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationCourse">Graduation Course</Label>
                <Input id="graduationCourse" value={formValues.graduationCourse} onChange={(event) => handleChange("graduationCourse", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationPercentage">Graduation Percentage</Label>
                <Input id="graduationPercentage" value={formValues.graduationPercentage} onChange={(event) => handleChange("graduationPercentage", event.target.value)} />
              </div>
              <div className="space-y-2 md:col-span-2 xl:col-span-3">
                <Label htmlFor="notes">Counselor Notes</Label>
                <Textarea id="notes" value={formValues.notes} onChange={(event) => handleChange("notes", event.target.value)} rows={4} />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Documents</h3>
                <p className="text-sm text-muted-foreground">Store uploaded document metadata for admissions checks.</p>
              </div>
              <Button type="button" variant="outline" onClick={addDocument}>
                Add Document
              </Button>
            </div>

            <div className="space-y-4">
              {formValues.documents.map((document, index) => (
                <div key={`${document.type}-${index}`} className="rounded-lg border border-border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">Document {index + 1}</p>
                    <Button type="button" variant="ghost" className="text-destructive hover:text-destructive" onClick={() => removeDocument(index)}>
                      Remove
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Document Type</Label>
                      <Select value={document.type || undefined} onValueChange={(value) => handleDocumentChange(index, "type", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          {DOCUMENT_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>File Name</Label>
                      <Input value={document.fileName} onChange={(event) => handleDocumentChange(index, "fileName", event.target.value)} placeholder="e.g. 12th-marksheet.pdf" />
                    </div>
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select value={document.status} onValueChange={(value) => handleDocumentChange(index, "status", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {DOCUMENT_STATUSES.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Document URL</Label>
                      <Input value={document.url || ""} onChange={(event) => handleDocumentChange(index, "url", event.target.value)} placeholder="Optional link" />
                    </div>
                    <div className="space-y-2">
                      <Label>Uploaded Date</Label>
                      <Input value={document.uploadedAt || ""} type="date" onChange={(event) => handleDocumentChange(index, "uploadedAt", event.target.value)} />
                    </div>
                    <div className="space-y-2 md:col-span-2 xl:col-span-3">
                      <Label>Notes</Label>
                      <Textarea value={document.notes || ""} onChange={(event) => handleDocumentChange(index, "notes", event.target.value)} rows={2} placeholder="Verification remarks or missing pages note" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">{mode === "edit" ? "Save Changes" : "Create Student"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}