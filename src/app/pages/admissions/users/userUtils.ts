export function getUserRoleColor(role: string) {
  const colors: Record<string, string> = {
    admin: "bg-red-100 text-red-700",
    user: "bg-blue-100 text-blue-700",
    teacher: "bg-purple-100 text-purple-700",
    manager: "bg-green-100 text-green-700",
    student: "bg-amber-100 text-amber-700",
  };

  return colors[role] || "bg-gray-100 text-gray-700";
}

export function getUserStatusColor(status: string) {
  return status === "Active"
    ? "bg-green-100 text-green-700"
    : "bg-gray-100 text-gray-700";
}
