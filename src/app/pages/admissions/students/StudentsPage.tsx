import { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router";
import { Download } from "lucide-react";
import { getStudents, type PortalStudent } from "../../../api/studentsApi";
import { Button } from "../../../components/ui/button";
import { createStudent, updateStudent } from "../../../api/studentsApi";
import {
  StudentFilters,
  type StudentFilterState,
} from "./components/StudentFilters";
import { StudentTable } from "./components/StudentTable";
import { StudentFormDialog } from "./components/StudentFormDialog";
import { StudentSummaryCards } from "./components/StudentSummaryCards";

export function StudentsPage() {
  const initialFilters: StudentFilterState = {
    query: "",
    status: "all",
    program: "all",
  };

  const [students, setStudents] = useState<PortalStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<StudentFilterState>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<PortalStudent | null>(
    null,
  );

  const studentsPerPage = 5;

  useEffect(() => {
    void loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to load students", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStudentCreated = (student: PortalStudent) => {
    setStudents((current) => [student, ...current]);
  };

  const handleStudentUpdated = (student: PortalStudent) => {
    setStudents((current) =>
      current.map((item) => (item._id === student._id ? student : item)),
    );
  };

  const handleStudentDeleted = (studentId: string) => {
    setStudents((current) => current.filter((item) => item._id !== studentId));
  };

  const total = students.length;
  const active = students.filter(
    (student) => student.status === "Active",
  ).length;
  const graduated = students.filter(
    (student) => student.status === "Graduated",
  ).length;
  const inactive = students.filter(
    (student) => student.status === "Inactive",
  ).length;
  const programs = useMemo(
    () =>
      Array.from(new Set(students.map((student) => student.program))).sort(),
    [students],
  );

  const filteredStudents = useMemo(() => {
    const normalizedQuery = filters.query.trim().toLowerCase();

    return students.filter((student) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          student.name,
          student.studentId,
          student.email,
          student.counselor,
          student.city,
          student.state,
        ]
          .filter(Boolean)
          .some((value) => value?.toLowerCase().includes(normalizedQuery));

      const matchesStatus =
        filters.status === "all" || student.status === filters.status;

      const matchesProgram =
        filters.program === "all" || student.program === filters.program;

      return matchesQuery && matchesStatus && matchesProgram;
    });
  }, [filters, students]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / studentsPerPage),
  );
  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * studentsPerPage;
    return filteredStudents.slice(startIndex, startIndex + studentsPerPage);
  }, [currentPage, filteredStudents]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const exportStudents = () => {
    const rows = [
      [
        "Student ID",
        "Name",
        "Email",
        "Phone",
        "Program",
        "Status",
        "Enrollment Date",
        "Counselor",
        "Documents",
        "City",
        "State",
        "Application Stage",
      ],
      ...filteredStudents.map((student) => [
        student.studentId,
        student.name,
        student.email,
        student.phone,
        student.program,
        student.status,
        student.enrollmentDate,
        student.counselor,
        String(student.documents?.length || 0),
        student.city ?? "",
        student.state ?? "",
        student.applicationStage ?? "",
      ]),
    ];

    const csv = rows
      .map((row) =>
        row
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(","),
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "students-export.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleStudentSubmit = async (values: any) => {
    try {
      const response = await createStudent(values);
      handleStudentCreated(response.data);
    } catch (error) {
      console.error("Failed to create student", error);
    }
  };

  return (
    <div className="space-y-6">
      <Outlet />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="mt-1 text-gray-500">
            Manage enrolled students and their information
          </p>
        </div>
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => setDialogOpen(true)}
        >
          + Add Student
        </Button>

        <StudentFormDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          mode="create"
          onSubmit={handleStudentSubmit}
        />
      </div>

      <StudentFormDialog
        open={Boolean(editingStudent)}
        onOpenChange={(open) => {
          if (!open) setEditingStudent(null);
        }}
        mode="edit"
        initialValues={editingStudent || undefined}
        onSubmit={async (values) => {
          if (!editingStudent) return;

          try {
            const response = await updateStudent(editingStudent._id, values);
            handleStudentUpdated(response.data);
            setEditingStudent(null);
          } catch (error) {
            console.error("Failed to update student", error);
          }
        }}
      />

      <StudentSummaryCards
        total={total}
        active={active}
        graduated={graduated}
        inactive={inactive}
      />

      <StudentFilters
        filters={filters}
        programs={programs}
        onChange={setFilters}
        onReset={() => setFilters(initialFilters)}
      />

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {paginatedStudents.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-900">
            {filteredStudents.length}
          </span>{" "}
          filtered students from{" "}
          <span className="font-semibold text-slate-900">
            {students.length}
          </span>{" "}
          total records.
        </div>
        <Button type="button" variant="outline" onClick={exportStudents}>
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <StudentTable
        students={paginatedStudents}
        loading={loading}
        onStudentUpdated={handleStudentUpdated}
        onStudentDeleted={handleStudentDeleted}
        onEditStudent={setEditingStudent}
      />

      {!loading && filteredStudents.length > 0 ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
