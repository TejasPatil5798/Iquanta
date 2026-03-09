import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { UserPlus, Shield, Mail, Phone } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

export function UserManagement() {
  const users = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@iquanta.com',
      phone: '+91 98765 43210',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2026-03-07 09:30 AM'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@iquanta.com',
      phone: '+91 98765 43211',
      role: 'Admission Counselor',
      status: 'Active',
      lastLogin: '2026-03-07 08:15 AM'
    },
    {
      id: 3,
      name: 'Arjun Singh',
      email: 'arjun.singh@iquanta.com',
      phone: '+91 98765 43212',
      role: 'Admission Counselor',
      status: 'Active',
      lastLogin: '2026-03-07 10:00 AM'
    },
    {
      id: 4,
      name: 'Neha Kumar',
      email: 'neha.kumar@iquanta.com',
      phone: '+91 98765 43213',
      role: 'Admission Counselor',
      status: 'Active',
      lastLogin: '2026-03-06 05:45 PM'
    },
    {
      id: 5,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@iquanta.com',
      phone: '+91 98765 43214',
      role: 'Marketing Manager',
      status: 'Active',
      lastLogin: '2026-03-07 09:00 AM'
    },
    {
      id: 6,
      name: 'Suresh Reddy',
      email: 'suresh.reddy@iquanta.com',
      phone: '+91 98765 43215',
      role: 'Management',
      status: 'Inactive',
      lastLogin: '2026-02-28 04:30 PM'
    }
  ];

  const getRoleColor = (role: string) => {
    const colors: Record<string, string> = {
      'Admin': 'bg-red-100 text-red-700',
      'Admission Counselor': 'bg-blue-100 text-blue-700',
      'Marketing Manager': 'bg-purple-100 text-purple-700',
      'Management': 'bg-green-100 text-green-700'
    };
    return colors[role] || 'bg-gray-100 text-gray-700';
  };

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-500 mt-1">Manage team members and their permissions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <p className="text-sm text-gray-600">Total Users</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{users.length}</h3>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Active Users</p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            {users.filter(u => u.status === 'Active').length}
          </h3>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Counselors</p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            {users.filter(u => u.role === 'Admission Counselor').length}
          </h3>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Admins</p>
          <h3 className="text-3xl font-bold text-red-600 mt-2">
            {users.filter(u => u.role === 'Admin').length}
          </h3>
        </Card>
      </div>

      {/* Role Permissions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Admin', 'Admission Counselor', 'Marketing Manager', 'Management'].map((role) => (
            <div key={role} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">{role}</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {role === 'Admin' && (
                  <>
                    <li>• Full system access</li>
                    <li>• User management</li>
                    <li>• System settings</li>
                  </>
                )}
                {role === 'Admission Counselor' && (
                  <>
                    <li>• Lead management</li>
                    <li>• Student applications</li>
                    <li>• Communication</li>
                  </>
                )}
                {role === 'Marketing Manager' && (
                  <>
                    <li>• Campaign management</li>
                    <li>• Analytics access</li>
                    <li>• Lead sources</li>
                  </>
                )}
                {role === 'Management' && (
                  <>
                    <li>• Analytics & reports</li>
                    <li>• Performance review</li>
                    <li>• Strategic insights</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Users Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Contact Information</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-900 flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {user.email}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {user.phone}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getRoleColor(user.role)}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-900">{user.lastLogin}</p>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      Remove
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
