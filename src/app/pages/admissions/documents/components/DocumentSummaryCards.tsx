import { Card } from "../../../../components/ui/card";
import { CheckCircle, Clock, FileText, XCircle } from "lucide-react";

export function DocumentSummaryCards({
  stats,
}: {
  stats: {
    total: number;
    verified: number;
    pending: number;
    rejected: number;
  };
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-3">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Documents</p>
            <h3 className="text-2xl font-bold text-gray-900">{stats.total}</h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-green-100 p-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Verified</p>
            <h3 className="text-2xl font-bold text-green-600">
              {stats.verified}
            </h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-yellow-100 p-3">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pending Review</p>
            <h3 className="text-2xl font-bold text-yellow-600">
              {stats.pending}
            </h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-red-100 p-3">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Rejected</p>
            <h3 className="text-2xl font-bold text-red-600">
              {stats.rejected}
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
}
