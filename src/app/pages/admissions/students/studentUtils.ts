export function getStudentStatusColor(status: string) {
  const colors: Record<string, string> = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-700",
    Graduated: "bg-blue-100 text-blue-700",
    Dropped: "bg-red-100 text-red-700",
  };

  return colors[status] || "bg-gray-100 text-gray-700";
}

export function formatPortalDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
