import { Search, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export interface StudentFilterState {
  query: string;
  status: string;
  program: string;
}

export function StudentFilters({
  filters,
  programs,
  onChange,
  onReset,
}: {
  filters: StudentFilterState;
  programs: string[];
  onChange: (filters: StudentFilterState) => void;
  onReset: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr_1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={filters.query}
            onChange={(event) =>
              onChange({ ...filters, query: event.target.value })
            }
            placeholder="Search by name, ID, email, counselor, city..."
            className="pl-9"
          />
        </div>

        <Select
          value={filters.status}
          onValueChange={(value) => onChange({ ...filters, status: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
            <SelectItem value="Graduated">Graduated</SelectItem>
            <SelectItem value="Dropped">Dropped</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.program}
          onValueChange={(value) => onChange({ ...filters, program: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by program" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Programs</SelectItem>
            {programs.map((program) => (
              <SelectItem key={program} value={program}>
                {program}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button type="button" variant="outline" onClick={onReset}>
          <X className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}