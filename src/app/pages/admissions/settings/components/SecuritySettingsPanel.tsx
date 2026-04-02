import { Lock } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Switch } from "../../../../components/ui/switch";

export function SecuritySettingsPanel() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <Lock className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
      </div>

      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input
            id="current-password"
            type="password"
            placeholder="Enter current password"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" placeholder="Enter new password" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm new password"
          />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">
                Add an extra layer of security
              </p>
            </div>
            <Switch />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Login Alerts</p>
            <p className="text-sm text-gray-500">
              Get notified of new login attempts
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Session Timeout</p>
            <p className="text-sm text-gray-500">
              Auto logout after 30 minutes of inactivity
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Update Security
        </Button>
      </div>
    </Card>
  );
}

