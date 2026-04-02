import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { GeneralSettingsPanel } from "./components/GeneralSettingsPanel";
import { IntegrationsPanel } from "./components/IntegrationsPanel";
import { NotificationSettingsPanel } from "./components/NotificationSettingsPanel";
import { SecuritySettingsPanel } from "./components/SecuritySettingsPanel";

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-gray-500">
          Manage admissions system preferences and operational configurations.
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <GeneralSettingsPanel />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettingsPanel />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecuritySettingsPanel />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <IntegrationsPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}

