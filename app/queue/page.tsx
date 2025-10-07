import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QueueStatusBadge } from "@/components/queue-status-badge"
import { getQueueMessages, getQueueStats } from "@/lib/queue-data"
import { MessageSquare, RefreshCw, Trash2, AlertCircle, Clock, CheckCircle2, Loader2 } from "lucide-react"
import { MetricChart } from "@/components/metric-chart"
import { generateSQSMetricsData } from "@/lib/monitoring-data"

export default function QueuePage() {
  const messages = getQueueMessages()
  const stats = getQueueStats()
  const sqsData = generateSQSMetricsData()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">SQS Queue Management</h1>
            <p className="mt-2 text-muted-foreground">Monitor and manage order processing queue</p>
          </div>
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Queue
          </Button>
        </div>

        {/* Queue Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Messages</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-success/10 p-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-2xl font-bold">{stats.available}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-info/10 p-2">
                <Loader2 className="h-5 w-5 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">In Flight</p>
                <p className="text-2xl font-bold">{stats.inFlight}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-warning/10 p-2">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Delayed</p>
                <p className="text-2xl font-bold">{stats.delayed}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-destructive/10 p-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Dead Letter</p>
                <p className="text-2xl font-bold">{stats.dlq}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Queue Metrics Chart */}
        <div className="mb-8">
          <MetricChart
            title="Queue Throughput (Last 12 Hours)"
            data={sqsData}
            dataKey="sent"
            dataKey2="received"
            color="#f59e0b"
            color2="#10b981"
            height={250}
          />
        </div>

        {/* Queue Configuration */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Queue Configuration</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Queue Name</span>
                <span className="text-sm font-medium">order-processing-queue</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Queue Type</span>
                <span className="text-sm font-medium">Standard</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Visibility Timeout</span>
                <span className="text-sm font-medium">30 seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Message Retention</span>
                <span className="text-sm font-medium">4 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Max Message Size</span>
                <span className="text-sm font-medium">256 KB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Delivery Delay</span>
                <span className="text-sm font-medium">0 seconds</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Dead Letter Queue</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">DLQ Name</span>
                <span className="text-sm font-medium">order-processing-dlq</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Max Receive Count</span>
                <span className="text-sm font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Messages in DLQ</span>
                <span className="text-sm font-medium text-destructive">{stats.dlq}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Oldest Message</span>
                <span className="text-sm font-medium">2h 15m</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                Redrive Messages
              </Button>
              <Button variant="destructive" size="sm" className="flex-1">
                Purge DLQ
              </Button>
            </div>
          </Card>
        </div>

        {/* Messages Table */}
        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Queue Messages</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-transparent">
                Poll Messages
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Purge Queue
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Message ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Timestamp</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Receive Count</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.message_id} className="border-b border-border last:border-0">
                    <td className="py-4">
                      <span className="font-mono text-sm">{message.message_id}</span>
                    </td>
                    <td className="py-4">
                      <span className="font-mono text-sm text-primary">{message.order_id}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-sm">{message.customer_name}</span>
                    </td>
                    <td className="py-4">
                      <QueueStatusBadge status={message.status} />
                    </td>
                    <td className="py-4">
                      <span className="text-sm text-muted-foreground">
                        {new Date(message.timestamp).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="text-sm">{message.approximate_receive_count}</span>
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        {message.status === "DLQ" && (
                          <Button variant="outline" size="sm" className="bg-transparent">
                            Retry
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  )
}
