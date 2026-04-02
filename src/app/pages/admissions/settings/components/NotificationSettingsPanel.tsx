import { Bell } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";

const notificationItems = [
  {
    title: "New Lead Notifications",
    description: "Get notified when a new lead is created",
    enabled: true,
  },
  {
    title: "Application Updates",
    description: "Receive updates on application status changes",
    enabled: true,
  },
  {
    title: "Document Verification",
    description: "Alerts for pending document verifications",
    enabled: true,
  },
  {
    title: "Task Reminders",
    description: "Daily reminders for pending tasks",
    enabled: true,
  },
  {
    title: "Email Notifications",
    description: "Send notifications via email",
    enabled: true,
  },
  {
    title: "SMS Notifications",
    description: "Send critical alerts via SMS",
    enabled: false,
  },
  {
    title: "Weekly Reports",
    description: "Receive weekly performance summary",
    enabled: true,
  },
];

export function NotificationSettingsPanel() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <Bell className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Notification Preferences
        </h3>
      </div>

      <div className="space-y-6">
        {notificationItems.map((item) => (
          <div key={item.title} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <Switch defaultChecked={item.enabled} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Save Preferences
        </Button>
      </div>
    </Card>
  );
}

