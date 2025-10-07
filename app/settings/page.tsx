import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Bell, Shield, Zap, Database, AlertTriangle } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">Settings</h1>
          <p className="mt-2 text-muted-foreground">Configure your serverless order processing system</p>
        </div>

        <div className="space-y-6">
          {/* AWS Configuration */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">AWS Configuration</h2>
                <p className="text-sm text-muted-foreground">Manage your AWS service settings</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="region">AWS Region</Label>
                  <Input id="region" value="us-east-1" readOnly className="bg-secondary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Account ID</Label>
                  <Input id="account" value="123456789012" readOnly className="bg-secondary" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiEndpoint">API Gateway Endpoint</Label>
                <Input id="apiEndpoint" value="https://api.orderflow.example.com" readOnly className="bg-secondary" />
              </div>
            </div>
          </Card>

          {/* Lambda Settings */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-warning/10 p-2">
                <Zap className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Lambda Functions</h2>
                <p className="text-sm text-muted-foreground">Configure Lambda execution settings</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-scaling</p>
                  <p className="text-sm text-muted-foreground">Automatically scale based on demand</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Provisioned Concurrency</p>
                  <p className="text-sm text-muted-foreground">Keep functions warm for faster response</p>
                </div>
                <Switch />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="timeout">Timeout (seconds)</Label>
                  <Input id="timeout" type="number" value="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memory">Memory (MB)</Label>
                  <Input id="memory" type="number" value="512" />
                </div>
              </div>
            </div>
          </Card>

          {/* DynamoDB Settings */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-chart-2/10 p-2">
                <Database className="h-5 w-5 text-chart-2" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">DynamoDB</h2>
                <p className="text-sm text-muted-foreground">Database configuration and capacity</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Point-in-time Recovery</p>
                  <p className="text-sm text-muted-foreground">Enable continuous backups</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">DynamoDB Streams</p>
                  <p className="text-sm text-muted-foreground">Capture table activity</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tableName">Table Name</Label>
                <Input id="tableName" value="orders-production" readOnly className="bg-secondary" />
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-info/10 p-2">
                <Bell className="h-5 w-5 text-info" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Notifications</h2>
                <p className="text-sm text-muted-foreground">Configure alert preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Error Alerts</p>
                  <p className="text-sm text-muted-foreground">Notify on processing failures</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Performance Alerts</p>
                  <p className="text-sm text-muted-foreground">Alert on high latency or throttling</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Daily Summary</p>
                  <p className="text-sm text-muted-foreground">Receive daily performance reports</p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Notification Email</Label>
                <Input id="email" type="email" placeholder="admin@example.com" />
              </div>
            </div>
          </Card>

          {/* Security */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-destructive/10 p-2">
                <Shield className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Security</h2>
                <p className="text-sm text-muted-foreground">Authentication and access control</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">API Key Authentication</p>
                  <p className="text-sm text-muted-foreground">Require API keys for requests</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Rate Limiting</p>
                  <p className="text-sm text-muted-foreground">Limit requests per client</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">IP Whitelisting</p>
                  <p className="text-sm text-muted-foreground">Restrict access by IP address</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive/50 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-destructive/10 p-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-destructive">Danger Zone</h2>
                <p className="text-sm text-muted-foreground">Irreversible and destructive actions</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <p className="font-medium">Clear All Orders</p>
                  <p className="text-sm text-muted-foreground">Delete all order data from DynamoDB</p>
                </div>
                <Button variant="destructive" size="sm">
                  Clear Data
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <p className="font-medium">Reset System</p>
                  <p className="text-sm text-muted-foreground">Reset all configurations to defaults</p>
                </div>
                <Button variant="destructive" size="sm">
                  Reset
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
