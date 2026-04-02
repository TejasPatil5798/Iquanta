import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { getRoleLabel } from "../../../../lib/portalRoles";
import { Mail, Phone } from "lucide-react";
import { getUserRoleColor, getUserStatusColor } from "../userUtils";
import { portalUsers } from "../usersData";

export function UsersTable() {
  return (
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
        {portalUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-sm font-semibold text-blue-600">
                    {user.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </span>
                </div>
                <p className="font-medium text-gray-900">{user.name}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="flex items-center gap-1 text-sm text-gray-900">
                  <Mail className="h-3 w-3" />
                  {user.email}
                </p>
                <p className="flex items-center gap-1 text-sm text-gray-600">
                  <Phone className="h-3 w-3" />
                  {user.phone}
                </p>
              </div>
            </TableCell>
            <TableCell>
              <Badge className={getUserRoleColor(user.role)}>
                {getRoleLabel(user.role)}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge className={getUserStatusColor(user.status)}>
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>
              <p className="text-sm text-gray-900">{user.lastLogin}</p>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
