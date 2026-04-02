import { Card } from "../../../../components/ui/card";
import { FileText } from "lucide-react";
import { documentCategories } from "../documentUtils";

export function DocumentCategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {documentCategories.map((category) => (
        <Card
          key={category}
          className="cursor-pointer p-4 transition-shadow hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{category}</p>
              <p className="mt-1 text-xs text-gray-500">Click to filter</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
