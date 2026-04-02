import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import type { PortalLead } from "../../../../api/admissionsEntitiesApi";
import { Mail, Phone } from "lucide-react";
import { getLeadScoreColor, leadPipelineStages } from "../leadUtils";

export function LeadPipeline({ leads }: { leads: PortalLead[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {leadPipelineStages.map((stage) => {
        const stageLeads = leads.filter((lead) => lead.status === stage);

        return (
          <div key={stage} className="min-w-[280px] max-w-[320px] flex-shrink-0">
            <Card>
              <div className="border-b p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{stage}</h3>
                  <Badge variant="secondary">{stageLeads.length}</Badge>
                </div>
              </div>

              <div className="max-h-[600px] space-y-3 overflow-y-auto p-4">
                {stageLeads.map((lead) => (
                  <Card
                    key={lead._id}
                    className="cursor-pointer p-4 hover:shadow-md"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{lead.name}</h4>
                        <span className={getLeadScoreColor(lead.leadScore)}>
                          {lead.leadScore}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {lead.courseInterest || lead.source}
                      </p>

                      <p className="flex items-center gap-1 text-xs">
                        <Mail className="h-3 w-3" />
                        {lead.email}
                      </p>

                      <p className="flex items-center gap-1 text-xs">
                        <Phone className="h-3 w-3" />
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
  );
}
