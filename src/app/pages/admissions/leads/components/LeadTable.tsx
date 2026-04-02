import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import type { PortalLead } from "../../../../api/admissionsEntitiesApi";
import { Calendar, Mail, Phone } from "lucide-react";
import { getLeadScoreColor, getLeadStatusColor } from "../leadUtils";

export function LeadTable({ leads }: { leads: PortalLead[] }) {
  return (
    <Card className="w-full overflow-hidden">
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
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead._id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.leadId}</p>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="space-y-1">
                    <p className="flex items-center gap-1 text-sm">
                      <Mail className="h-3 w-3" />
                      {lead.email}
                    </p>
                    <p className="flex items-center gap-1 text-sm text-gray-600">
                      <Phone className="h-3 w-3" />
                      {lead.phone}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  <div>
                    <p className="font-medium">
                      {lead.courseInterest || "General Inquiry"}
                    </p>
                    <p className="text-xs text-gray-500">{lead.source}</p>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge variant="outline">{lead.source}</Badge>
                </TableCell>

                <TableCell>{lead.assignedCounselor}</TableCell>

                <TableCell>
                  <Badge className={getLeadStatusColor(lead.status)}>
                    {lead.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <span className={getLeadScoreColor(lead.leadScore)}>
                    {lead.leadScore}
                  </span>
                </TableCell>

                <TableCell>
                  <p className="flex items-center gap-1 text-sm">
                    <Calendar className="h-3 w-3" />
                    {new Date(lead.createdAt).toLocaleDateString()}
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
  );
}
