import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { UserPlus } from "lucide-react";
import { RolePermissionsGrid } from "./components/RolePermissionsGrid";
import { UserSummaryCards } from "./components/UserSummaryCards";
import { UsersTable } from "./components/UsersTable";
import { portalUsers } from "./usersData";

export function UserManagementPage() {
  const total = portalUsers.length;
  const active = portalUsers.filter((user) => user.status === "Active").length;
  const counselors = portalUsers.filter((user) => user.role === "user").length;
  const admins = portalUsers.filter((user) => user.role === "admin").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="mt-1 text-gray-500">
            Manage portal roles, admissions teams, and role-based permissions.
          </p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <UserSummaryCards
        total={total}
        active={active}
        counselors={counselors}
        admins={admins}
      />

      <RolePermissionsGrid />

      <Card>
        <UsersTable />
      </Card>
    </div>
  );
}
