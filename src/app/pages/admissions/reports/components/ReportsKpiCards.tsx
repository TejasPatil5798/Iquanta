import { Card } from "../../../../components/ui/card";
import { reportsKpis } from "../reportsData";

export function ReportsKpiCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {reportsKpis.map((item) => (
        <Card key={item.label} className="p-6">
          <p className="text-sm text-gray-500">{item.label}</p>
          <h3 className="mt-3 text-3xl font-bold text-gray-900">{item.value}</h3>
          <p className={`mt-2 text-sm font-medium ${item.tone}`}>{item.change}</p>
        </Card>
      ))}
    </div>
  );
}

