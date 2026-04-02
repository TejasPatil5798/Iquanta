import { useEffect, useState } from "react";
import { getLeads, type PortalLead } from "../../../api/admissionsEntitiesApi";
import { Button } from "../../../components/ui/button";
import { LeadFilters } from "./components/LeadFilters";
import { LeadPipeline } from "./components/LeadPipeline";
import { LeadTable } from "./components/LeadTable";

export function LeadsPage() {
  const [view, setView] = useState<"table" | "kanban">("table");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [leads, setLeads] = useState<PortalLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadLeads = async () => {
      try {
        const response = await getLeads();
        if (isMounted) {
          setLeads(response.data);
        }
      } catch (error) {
        console.error("Unable to load leads", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadLeads();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus =
      selectedStatus === "all" || lead.status === selectedStatus;

    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="w-full space-y-6">
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <p className="mt-1 text-gray-500">
            Manage and track all your admission leads
          </p>
        </div>

        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          + Add New Lead
        </Button>
      </div>

      <LeadFilters
        view={view}
        selectedStatus={selectedStatus}
        searchQuery={searchQuery}
        onViewChange={setView}
        onStatusChange={setSelectedStatus}
        onSearchChange={setSearchQuery}
      />

      {loading ? <div className="text-sm text-gray-500">Loading leads...</div> : null}

      {view === "table" ? (
        <LeadTable leads={filteredLeads} />
      ) : (
        <LeadPipeline leads={filteredLeads} />
      )}
    </div>
  );
}
