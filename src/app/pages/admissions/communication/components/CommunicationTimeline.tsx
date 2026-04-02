import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import type { PortalInteraction } from "../../../../api/admissionsEntitiesApi";
import {
  getCommunicationTypeColor,
  getCommunicationTypeIcon,
} from "../communicationUtils";

const communicationFilters = [
  "all",
  "Email",
  "Call",
  "WhatsApp",
  "SMS",
  "Meeting",
] as const;

export function CommunicationTimeline({
  interactions,
}: {
  interactions: PortalInteraction[];
}) {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-4 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
        {communicationFilters.map((filter) => (
          <TabsTrigger
            key={filter}
            value={filter}
            className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
          >
            {filter === "all" ? "All Communications" : filter}
          </TabsTrigger>
        ))}
      </TabsList>

      {communicationFilters.map((filter) => {
        const items =
          filter === "all"
            ? interactions
            : interactions.filter(
                (communication) => communication.type === filter,
              );

        return (
          <TabsContent key={filter} value={filter}>
            <Card className="p-6">
              <h3 className="mb-6 text-lg font-semibold text-gray-900">
                Communication Timeline
              </h3>
              <div className="space-y-4">
                {items.map((communication) => (
                  <div
                    key={communication._id}
                    className="flex items-start justify-between gap-4 rounded-lg border border-gray-100 p-4"
                  >
                    <div className="flex min-w-0 gap-4">
                      <div
                        className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${getCommunicationTypeColor(
                          communication.type,
                        )}`}
                      >
                        {getCommunicationTypeIcon(communication.type)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-medium text-gray-900">
                            {communication.personName}
                          </h4>
                          <Badge
                            className={getCommunicationTypeColor(
                              communication.type,
                            )}
                          >
                            {communication.type}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">
                          {communication.summary}
                        </p>
                        <p className="mt-2 text-xs text-gray-500">
                          By: <span className="font-medium">{communication.counselor}</span>
                        </p>
                      </div>
                    </div>

                    <p className="shrink-0 text-xs text-gray-500">
                      {new Date(communication.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
