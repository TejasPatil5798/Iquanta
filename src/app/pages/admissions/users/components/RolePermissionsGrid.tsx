import { Card } from "../../../../components/ui/card";
import { Shield } from "lucide-react";
import { roleOptions } from "../../../../lib/portalRoles";
import { permissionSets } from "../usersData";

export function RolePermissionsGrid() {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Role Permissions
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {roleOptions
          .filter((role) => role.value !== "student")
          .map((role) => (
            <div
              key={role.value}
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-300"
            >
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">{role.label}</h4>
              </div>
              <p className="mb-3 text-sm text-gray-500">{role.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {permissionSets[role.value].map((permission) => (
                  <li key={permission}>{permission}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </Card>
  );
}
