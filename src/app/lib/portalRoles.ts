export type AppRole = "admin" | "manager" | "user" | "student" | "teacher";

export interface RoleOption {
  value: AppRole;
  label: string;
  description: string;
}

export const roleOptions: RoleOption[] = [
  {
    value: "admin",
    label: "Admin",
    description: "Full access to portal setup, users, and admissions operations.",
  },
  {
    value: "user",
    label: "Admission Counselor",
    description: "Manage leads, applications, student communication, and tasks.",
  },
  {
    value: "teacher",
    label: "Marketing Manager",
    description: "Track campaigns, lead generation, and top-of-funnel performance.",
  },
  {
    value: "manager",
    label: "Management",
    description: "Monitor admissions performance, reporting, and team outcomes.",
  },
  {
    value: "student",
    label: "Student",
    description: "View application progress, documents, and admission updates.",
  },
];

const roleLabels: Record<AppRole, string> = {
  admin: "Admin",
  user: "Admission Counselor",
  teacher: "Marketing Manager",
  manager: "Management",
  student: "Student",
};

export function getRoleLabel(role?: string | null) {
  if (!role) return "User";
  return roleLabels[role as AppRole] ?? role;
}

export function hasRoleAccess(
  role: string | undefined | null,
  allowedRoles?: AppRole[],
) {
  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }

  if (!role) {
    return false;
  }

  return allowedRoles.includes(role as AppRole);
}
