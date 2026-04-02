import { Settings as SettingsIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export function GeneralSettingsPanel() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <SettingsIcon className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">General Settings</h3>
      </div>

      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="org-name">Organization Name</Label>
          <Input id="org-name" defaultValue="Iquanta" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="primary-email">Primary Email</Label>
          <Input id="primary-email" type="email" defaultValue="admin@iquanta.com" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Contact Phone</Label>
          <Input id="phone" defaultValue="+91 98765 43210" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" defaultValue="Mumbai, Maharashtra, India" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Input id="timezone" defaultValue="Asia/Kolkata (IST)" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="currency">Currency</Label>
          <Input id="currency" defaultValue="INR (Rs)" />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>
    </Card>
  );
}

