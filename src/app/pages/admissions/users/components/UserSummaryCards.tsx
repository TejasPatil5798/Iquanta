import { Card } from "../../../../components/ui/card";

export function UserSummaryCards({
  total,
  active,
  counselors,
  admins,
}: {
  total: number;
  active: number;
  counselors: number;
  admins: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="p-6">
        <p className="text-sm text-gray-600">Total Users</p>
        <h3 className="mt-2 text-3xl font-bold text-gray-900">{total}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Active Users</p>
        <h3 className="mt-2 text-3xl font-bold text-green-600">{active}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Counselors</p>
        <h3 className="mt-2 text-3xl font-bold text-blue-600">{counselors}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Admins</p>
        <h3 className="mt-2 text-3xl font-bold text-red-600">{admins}</h3>
      </Card>
    </div>
  );
}
