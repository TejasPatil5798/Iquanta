import { Database, Mail, MessageSquare, Smartphone } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

const integrations = [
  {
    title: "Email Integration",
    description: "Connect Gmail or Outlook",
    icon: Mail,
    accent: "bg-green-100 text-green-600",
    connected: false,
  },
  {
    title: "MongoDB Atlas",
    description: "Database connection",
    icon: Database,
    accent: "bg-blue-100 text-blue-600",
    connected: true,
  },
  {
    title: "WhatsApp Business",
    description: "Message students via WhatsApp",
    icon: Smartphone,
    accent: "bg-purple-100 text-purple-600",
    connected: false,
  },
  {
    title: "SMS Gateway",
    description: "Send SMS notifications",
    icon: MessageSquare,
    accent: "bg-orange-100 text-orange-600",
    connected: false,
  },
];

export function IntegrationsPanel() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <Database className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Integrations</h3>
      </div>

      <div className="space-y-4">
        {integrations.map((integration) => {
          const Icon = integration.icon;

          return (
            <div
              key={integration.title}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${integration.accent}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{integration.title}</p>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </div>
              </div>
              {integration.connected ? (
                <Button className="bg-green-600 hover:bg-green-700">Connected</Button>
              ) : (
                <Button variant="outline">Configure</Button>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

