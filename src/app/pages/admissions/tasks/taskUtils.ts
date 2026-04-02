export function getTaskPriorityColor(priority: string) {
  const colors: Record<string, string> = {
    High: "bg-red-100 text-red-700 border-red-300",
    Medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Low: "bg-green-100 text-green-700 border-green-300",
  };

  return colors[priority] || "bg-gray-100 text-gray-700";
}

export function getTaskStatusColor(status: string) {
  const colors: Record<string, string> = {
    Open: "bg-yellow-100 text-yellow-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  return colors[status] || "bg-gray-100 text-gray-700";
}
