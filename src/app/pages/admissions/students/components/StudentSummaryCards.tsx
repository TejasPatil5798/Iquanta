import { Card } from "../../../../components/ui/card";

export function StudentSummaryCards({
  total,
  active,
  graduated,
  inactive,
}: {
  total: number;
  active: number;
  graduated: number;
  inactive: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="p-6">
        <p className="text-sm text-gray-600">Total Students</p>
        <h3 className="mt-2 text-3xl font-bold text-gray-900">{total}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Active</p>
        <h3 className="mt-2 text-3xl font-bold text-green-600">{active}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Graduated</p>
        <h3 className="mt-2 text-3xl font-bold text-blue-600">{graduated}</h3>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-600">Inactive</p>
        <h3 className="mt-2 text-3xl font-bold text-gray-600">{inactive}</h3>
      </Card>
    </div>
  );
}
