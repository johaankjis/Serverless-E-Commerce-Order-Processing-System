import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Activity, Package, Clock, AlertCircle } from "lucide-react"
import { MetricChart } from "@/components/metric-chart"
import { generateRequestsData, generateResponseTimeData } from "@/lib/monitoring-data"
import Link from "next/link"

export default function OverviewPage() {
  const requestsData = generateRequestsData()
  const responseTimeData = generateResponseTimeData()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">System Overview</h1>
          <p className="mt-2 text-muted-foreground">
            Real-time monitoring of your serverless order processing pipeline
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                <p className="mt-2 text-3xl font-bold">1,284</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-success">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>12.5%</span>
                  <span className="text-muted-foreground">vs last week</span>
                </div>
              </div>
              <div className="rounded-lg bg-primary/10 p-3">
                <Package className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Processing Rate</p>
                <p className="mt-2 text-3xl font-bold">98.7%</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-success">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>2.1%</span>
                  <span className="text-muted-foreground">vs last week</span>
                </div>
              </div>
              <div className="rounded-lg bg-success/10 p-3">
                <Activity className="h-6 w-6 text-success" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                <p className="mt-2 text-3xl font-bold">142ms</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-success">
                  <ArrowDownRight className="h-4 w-4" />
                  <span>8.3%</span>
                  <span className="text-muted-foreground">vs last week</span>
                </div>
              </div>
              <div className="rounded-lg bg-chart-2/10 p-3">
                <Clock className="h-6 w-6 text-chart-2" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Failed Orders</p>
                <p className="mt-2 text-3xl font-bold">3</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-destructive">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>0.23%</span>
                  <span className="text-muted-foreground">error rate</span>
                </div>
              </div>
              <div className="rounded-lg bg-destructive/10 p-3">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <MetricChart
            title="Edge Requests (Last 12 Hours)"
            data={requestsData}
            dataKey="requests"
            color="#8b5cf6"
            height={200}
          />
          <MetricChart
            title="Response Time (Last 12 Hours)"
            data={responseTimeData}
            dataKey="responseTime"
            color="#10b981"
            unit="ms"
            height={200}
          />
        </div>

        {/* System Status */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">System Health</h2>
              <Link href="/monitoring" className="text-sm text-primary hover:underline">
                View Details
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-sm">API Gateway</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-success">Operational</span>
                  <span className="text-xs text-muted-foreground">99.9% uptime</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-sm">Lambda Functions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-success">Operational</span>
                  <span className="text-xs text-muted-foreground">2,847 invocations</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-sm">SQS Queue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-success">Operational</span>
                  <span className="text-xs text-muted-foreground">23 messages</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-sm">DynamoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-success">Operational</span>
                  <span className="text-xs text-muted-foreground">1,284 items</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-warning" />
                  <span className="text-sm">CloudWatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-warning">Degraded</span>
                  <span className="text-xs text-muted-foreground">High latency</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <Link href="/orders" className="text-sm text-primary hover:underline">
                View All Orders
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-success" />
                <div className="flex-1">
                  <p className="text-sm">Order #ORD-2847 processed successfully</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-success" />
                <div className="flex-1">
                  <p className="text-sm">Order #ORD-2846 processed successfully</p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-destructive" />
                <div className="flex-1">
                  <p className="text-sm">Order #ORD-2845 failed validation</p>
                  <p className="text-xs text-muted-foreground">12 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-success" />
                <div className="flex-1">
                  <p className="text-sm">Order #ORD-2844 processed successfully</p>
                  <p className="text-xs text-muted-foreground">18 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-success" />
                <div className="flex-1">
                  <p className="text-sm">Order #ORD-2843 processed successfully</p>
                  <p className="text-xs text-muted-foreground">25 minutes ago</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
