import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../components/ui/alert-dialog";
import {
  deleteStudent,
  updateStudent,
  type CreateStudentPayload,
  type PortalStudent,
} from "../../../../api/studentsApi";
import {
  Calendar,
  FileText,
  Mail,
  Pencil,
  Phone,
  Trash2,
  User,
} from "lucide-react";
import { formatPortalDate, getStudentStatusColor } from "../studentUtils";
import { StudentProfileDrawer } from "./StudentProfileDrawer";
import { StudentFormDialog } from "./StudentFormDialog";

export function StudentTable({
  students,
  loading,
  onStudentUpdated,
  onStudentDeleted,
}: {
  students: PortalStudent[];
  loading: boolean;
  onStudentUpdated: (student: PortalStudent) => void;
  onStudentDeleted: (studentId: string) => void;
}) {
  const [selectedStudent, setSelectedStudent] = useState<PortalStudent | null>(
    null,
  );
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [bulkStatus, setBulkStatus] = useState<PortalStudent["status"] | "">(
    "",
  );

  const allVisibleSelected =
    students.length > 0 &&
    students.every((student) => selectedStudentIds.includes(student._id));
  const hasSelection = selectedStudentIds.length > 0;

  const handleDeleteStudent = async (student: PortalStudent) => {
    try {
      await deleteStudent(student._id);
      onStudentDeleted(student._id);
      if (selectedStudent?._id === student._id) {
        setSelectedStudent(null);
      }
      toast.success("Student deleted successfully");
    } catch (error) {
      console.error("Failed to delete student", error);
      toast.error("Failed to delete student");
    }
  };

  const toggleStudentSelection = (studentId: string, checked: boolean) => {
    setSelectedStudentIds((current) =>
      checked
        ? [...new Set([...current, studentId])]
        : current.filter((id) => id !== studentId),
    );
  };

  const toggleSelectAllVisible = (checked: boolean) => {
    setSelectedStudentIds((current) => {
      if (checked) {
        return [
          ...new Set([...current, ...students.map((student) => student._id)]),
        ];
      }

      return current.filter(
        (id) => !students.some((student) => student._id === id),
      );
    });
  };

  const handleBulkDelete = async () => {
    const selectedStudents = students.filter((student) =>
      selectedStudentIds.includes(student._id),
    );

    try {
      await Promise.all(
        selectedStudents.map((student) => deleteStudent(student._id)),
      );

      selectedStudents.forEach((student) => {
        onStudentDeleted(student._id);
        if (selectedStudent?._id === student._id) {
          setSelectedStudent(null);
        }
      });

      setSelectedStudentIds([]);
      toast.success(
        `${selectedStudents.length} student${selectedStudents.length > 1 ? "s" : ""} deleted successfully`,
      );
    } catch (error) {
      console.error("Failed to delete selected students", error);
      toast.error("Failed to delete selected students");
    }
  };

  const handleBulkStatusUpdate = async () => {
    if (!bulkStatus) {
      toast.error("Select a status to update the selected students.");
      return;
    }

    const selectedStudents = students.filter((student) =>
      selectedStudentIds.includes(student._id),
    );

    try {
      const updatedStudents = await Promise.all(
        selectedStudents.map(async (student) => {
          const payload: CreateStudentPayload = {
            studentId: student.studentId,
            name: student.name,
            email: student.email,
            phone: student.phone,
            program: student.program,
            status: bulkStatus,
            enrollmentDate: student.enrollmentDate.slice(0, 10),
            counselor: student.counselor,
            documents: student.documents,
            city: student.city ?? "",
            state: student.state ?? "",
            applicationStage: student.applicationStage ?? "",
          };

          const response = await updateStudent(student._id, payload);
          return response.data;
        }),
      );

      updatedStudents.forEach((student) => onStudentUpdated(student));
      setBulkStatus("");
      setSelectedStudentIds([]);
      toast.success(
        `Status updated for ${updatedStudents.length} student${updatedStudents.length > 1 ? "s" : ""}.`,
      );
    } catch (error) {
      console.error("Failed to update selected students", error);
      toast.error("Failed to update selected students.");
    }
  };

  return (
    <>
      {hasSelection ? (
        <div className="flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-amber-900">
            <span className="font-semibold">{selectedStudentIds.length}</span>{" "}
            student
            {selectedStudentIds.length > 1 ? "s" : ""} selected.
          </p>
          <div className="flex items-center gap-2">
            <div className="min-w-[11rem]">
              <Select
                value={bulkStatus}
                onValueChange={(value) =>
                  setBulkStatus(value as PortalStudent["status"])
                }
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Bulk status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Graduated">Graduated</SelectItem>
                  <SelectItem value="Dropped">Dropped</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleBulkStatusUpdate}
            >
              Update Status
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setSelectedStudentIds([]);
                setBulkStatus("");
              }}
            >
              Clear Selection
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete selected students?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently remove {selectedStudentIds.length}{" "}
                    selected student
                    {selectedStudentIds.length > 1 ? "s" : ""} from the
                    admissions portal.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 text-white hover:bg-red-700"
                    onClick={handleBulkDelete}
                  >
                    Delete Selected
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ) : null}

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={allVisibleSelected}
                  onCheckedChange={(checked) =>
                    toggleSelectAllVisible(Boolean(checked))
                  }
                  aria-label="Select all students on this page"
                />
              </TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Contact Information</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Enrollment Date</TableHead>
              <TableHead>Counselor</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="py-10 text-center text-sm text-gray-500"
                >
                  Loading students from database...
                </TableCell>
              </TableRow>
            ) : students.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="py-10 text-center text-sm text-gray-500"
                >
                  No students found in the database.
                </TableCell>
              </TableRow>
            ) : (
              students.map((student) => (
                <TableRow key={student._id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedStudentIds.includes(student._id)}
                      onCheckedChange={(checked) =>
                        toggleStudentSelection(student._id, Boolean(checked))
                      }
                      aria-label={`Select ${student.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {student.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {student.studentId}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="flex items-center gap-1 text-sm text-gray-900">
                        <Mail className="h-3 w-3" />
                        {student.email}
                      </p>
                      <p className="flex items-center gap-1 text-sm text-gray-600">
                        <Phone className="h-3 w-3" />
                        {student.phone}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{student.program}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStudentStatusColor(student.status)}>
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <p className="flex items-center gap-1 text-sm text-gray-900">
                      <Calendar className="h-3 w-3" />
                      {formatPortalDate(student.enrollmentDate)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-gray-900">{student.counselor}</p>
                  </TableCell>
                  <TableCell>
                    <p className="flex items-center gap-1 text-sm text-gray-900">
                      <FileText className="h-3 w-3" />
                      {student.documents?.length || 0} files
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedStudent(student)}
                      >
                        View Profile
                      </Button>
                      <Button variant="ghost" size="icon" disabled>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Delete student record?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently remove {student.name} from
                              the admissions portal.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-red-600 text-white hover:bg-red-700"
                              onClick={() => handleDeleteStudent(student)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>

      <StudentProfileDrawer
        student={selectedStudent}
        open={Boolean(selectedStudent)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedStudent(null);
          }
        }}
      />
    </>
  );
}
