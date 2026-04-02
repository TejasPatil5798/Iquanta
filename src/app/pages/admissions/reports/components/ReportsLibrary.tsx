import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { reportLibrary } from "../reportsData";

export function ReportsLibrary() {
  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Report Library</h3>
          <p className="mt-1 text-sm text-gray-500">
            Reusable admissions reports for operations, management, and marketing.
          </p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Create Report
        </Button>
      </div>

      <div className="space-y-4">
        {reportLibrary.map((report) => (
          <div
            key={report.title}
            className="rounded-xl border border-gray-200 p-4"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-semibold text-gray-900">{report.title}</p>
                <p className="mt-2 text-sm text-gray-500">{report.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  {report.frequency}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                  {report.owner}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

