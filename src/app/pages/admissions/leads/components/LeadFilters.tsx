import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Download, Filter, LayoutGrid, Search, Table as TableIcon } from "lucide-react";
import { leadPipelineStages } from "../leadUtils";

export function LeadFilters({
  view,
  selectedStatus,
  searchQuery,
  onViewChange,
  onStatusChange,
  onSearchChange,
}: {
  view: "table" | "kanban";
  selectedStatus: string;
  searchQuery: string;
  onViewChange: (view: "table" | "kanban") => void;
  onStatusChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}) {
  return (
    <Card className="w-full p-4">
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search leads..."
              className="w-full pl-10"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <Select value={selectedStatus} onValueChange={onStatusChange}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {leadPipelineStages.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>

          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          <div className="flex rounded-lg border">
            <button
              onClick={() => onViewChange("table")}
              className={`p-2 ${
                view === "table" ? "bg-blue-50 text-blue-600" : "text-gray-600"
              }`}
            >
              <TableIcon className="h-4 w-4" />
            </button>

            <button
              onClick={() => onViewChange("kanban")}
              className={`p-2 ${
                view === "kanban" ? "bg-blue-50 text-blue-600" : "text-gray-600"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
