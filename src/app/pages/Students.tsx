import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { mockStudents } from '../data/mockData';
import { Mail, Phone, Calendar, FileText, User } from 'lucide-react';
import { Outlet } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

export function Students() {
  const getStatusColor = (status: string) => {
    const colors: Record<string, string> =  {
      'Active': 'bg-green-100 text-green-700',
      'Inactive': 'bg-gray-100 text-gray-700',
      'Graduated': 'bg-blue-100 text-blue-700',
      'Dropped': 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">

      <Outlet />
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-500 mt-1">Manage enrolled students and their information</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          + Add Student
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <p className="text-sm text-gray-600">Total Students</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">287</h3>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Active</p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">245</h3>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Graduated</p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">38</h3>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Inactive</p>
          <h3 className="text-3xl font-bold text-gray-600 mt-2">4</h3>
        </Card>
      </div>

      {/* Students Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
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
            {mockStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-900 flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {student.email}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {student.phone}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{student.program}</Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(student.status)}>
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-900 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(student.enrollmentDate).toLocaleDateString()}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-900">{student.counselor}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-900 flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    {student.documents} files
                  </p>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">View Profile</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
