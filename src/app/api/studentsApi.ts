import API from "./axios";

export interface PortalStudent {
  _id: string;
  studentId: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  status: "Active" | "Inactive" | "Graduated" | "Dropped";
  enrollmentDate: string;
  counselor: string;
  documents: number;
  city?: string;
  state?: string;
  applicationStage?: string;
}

export interface CreateStudentPayload {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  status: PortalStudent["status"];
  enrollmentDate: string;
  counselor: string;
  documents: number;
  city?: string;
  state?: string;
  applicationStage?: string;
}

export const getStudents = () => API.get<PortalStudent[]>("/students");
export const createStudent = (data: CreateStudentPayload) =>
  API.post<PortalStudent>("/students", data);
export const updateStudent = (id: string, data: CreateStudentPayload) =>
  API.put<PortalStudent>(`/students/${id}`, data);
export const deleteStudent = (id: string) => API.delete(`/students/${id}`);
