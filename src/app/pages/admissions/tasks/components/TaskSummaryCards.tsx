import { Card } from "../../../../components/ui/card";

export function TaskSummaryCards({
  total,
  pending,
  inProgress,
  completed,
}: {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="p-6">
        <p className="text-sm text-gray-600">Total Tasks</p>
        <h3 className="mt-2 text-3xl font-bold text-gray-900">{total}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Pending</p>
        <h3 className="mt-2 text-3xl font-bold text-yellow-600">{pending}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">In Progress</p>
        <h3 className="mt-2 text-3xl font-bold text-blue-600">{inProgress}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Completed</p>
        <h3 className="mt-2 text-3xl font-bold text-green-600">{completed}</h3>
      </Card>
    </div>
  );
}
