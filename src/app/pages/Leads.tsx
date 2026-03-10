import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Search,
  Filter,
  Download,
  LayoutGrid,
  Table as TableIcon,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

import { mockLeads, type Lead } from "../data/mockData";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { Badge } from "../components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function Leads() {
  const [view, setView] = useState<"table" | "kanban">("table");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLeads = mockLeads.filter((lead) => {
    const matchesStatus =
      selectedStatus === "all" || lead.status === selectedStatus;

    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);

    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: Lead["status"]) => {
    const colors: Record<Lead["status"], string> = {
      "New Lead": "bg-gray-100 text-gray-700",
      "Contact Attempted": "bg-yellow-100 text-yellow-700",
      Contacted: "bg-blue-100 text-blue-700",
      Qualified: "bg-purple-100 text-purple-700",
      Interested: "bg-indigo-100 text-indigo-700",
      "Application Started": "bg-cyan-100 text-cyan-700",
      "Application Submitted": "bg-teal-100 text-teal-700",
      "Admission Offered": "bg-green-100 text-green-700",
      Enrolled: "bg-emerald-100 text-emerald-700",
      "Lost Lead": "bg-red-100 text-red-700",
    };
    return colors[status];
  };

  const getLeadScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 font-semibold";
    if (score >= 60) return "text-blue-600 font-semibold";
    if (score >= 40) return "text-yellow-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  const leadPipelineStages: Lead["status"][] = [
    "New Lead",
    "Contact Attempted",
    "Contacted",
    "Qualified",
    "Interested",
    "Application Started",
    "Application Submitted",
    "Admission Offered",
    "Enrolled",
  ];

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-500 mt-1">
            Manage and track all your admission leads
          </p>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          + Add New Lead
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full">
          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

              <Input
                placeholder="Search leads..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
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

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>

            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>

            <div className="flex border rounded-lg">
              <button
                onClick={() => setView("table")}
                className={`p-2 ${
                  view === "table"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                <TableIcon className="w-4 h-4" />
              </button>

              <button
                onClick={() => setView("kanban")}
                className={`p-2 ${
                  view === "kanban"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* TABLE VIEW */}
      {view === "table" && (
        <Card className="w-full overflow-hidden">
          {/* Table scroll container */}
          <div className="w-full overflow-x-auto">
            <Table className="min-w-[1100px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Lead Name</TableHead>
                  <TableHead>Contact Info</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Assigned Counselor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Lead Score</TableHead>
                  <TableHead>Next Follow-up</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-xs text-gray-500">{lead.id}</p>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {lead.email}
                        </p>
                        <p className="text-sm flex items-center gap-1 text-gray-600">
                          <Phone className="w-3 h-3" />
                          {lead.phone}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div>
                        <p className="font-medium">{lead.program}</p>
                        <p className="text-xs text-gray-500">{lead.location}</p>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge variant="outline">{lead.source}</Badge>
                    </TableCell>

                    <TableCell>{lead.assignedCounselor}</TableCell>

                    <TableCell>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <span className={getLeadScoreColor(lead.leadScore)}>
                        {lead.leadScore}
                      </span>
                    </TableCell>

                    <TableCell>
                      <p className="text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(lead.nextFollowUp).toLocaleDateString()}
                      </p>
                    </TableCell>

                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* KANBAN VIEW */}

      {view === "kanban" && (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {leadPipelineStages.map((stage) => {
            const stageLeads = filteredLeads.filter(
              (lead) => lead.status === stage,
            );

            return (
              <div
                key={stage}
                className="min-w-[280px] max-w-[320px] flex-shrink-0"
              >
                <Card>
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{stage}</h3>

                      <Badge variant="secondary">{stageLeads.length}</Badge>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
                    {stageLeads.map((lead) => (
                      <Card
                        key={lead.id}
                        className="p-4 hover:shadow-md cursor-pointer"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{lead.name}</h4>

                            <span className={getLeadScoreColor(lead.leadScore)}>
                              {lead.leadScore}
                            </span>
                          </div>

                          <p className="text-xs text-gray-500">
                            {lead.program}
                          </p>

                          <p className="text-xs flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {lead.email}
                          </p>

                          <p className="text-xs flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {lead.phone}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
