import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { MetricChart } from "@/components/metric-chart"
import {
  generateRequestsData,
  generateResponseTimeData,
  generateDataTransferData,
  generateLambdaMetricsData,
  generateDynamoDBMetricsData,
  generateSQSMetricsData,
} from "@/lib/monitoring-data"
import { Activity, Zap, Database, MessageSquare, TrendingUp, TrendingDown } from "lucide-react"

export default function MonitoringPage() {
  const requestsData = generateRequestsData()
  const responseTimeData = generateResponseTimeData()
  const dataTransferData = generateDataTransferData()
  const lambdaData = generateLambdaMetricsData()
  const dynamoData = generateDynamoDBMetricsData()
  const sqsData = generateSQSMetricsData()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">System Monitoring</h1>
          <p className="mt-2 text-muted-foreground">Real-time performance metrics and observability data</p>
        </div>

        {/* API Gateway Metrics */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">API Gateway</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricChart title="Edge Requests" data={requestsData} dataKey="requests" color="#8b5cf6" height={250} />
            <MetricChart
              title="Average Response Time"
              data={responseTimeData}
              dataKey="responseTime"
              color="#10b981"
              unit="ms"
              height={250}
            />
          </div>
        </div>

        {/* Data Transfer */}
        <div className="mb-8">
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Fast Data Transfer</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-chart-1" />
                  <span className="text-xs text-muted-foreground">Outgoing</span>
                  <span className="text-sm font-semibold">102GB</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-chart-2" />
                  <span className="text-xs text-muted-foreground">Incoming</span>
                  <span className="text-sm font-semibold">3GB</span>
                </div>
              </div>
            </div>
            <MetricChart
              title=""
              data={dataTransferData}
              dataKey="outgoing"
              dataKey2="incoming"
              color="#8b5cf6"
              color2="#10b981"
              unit="MB"
              height={200}
            />
          </Card>
        </div>

        {/* Lambda Functions */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-semibold">Lambda Functions</h2>
          </div>
          <div className="mb-4 grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Invocations</p>
                  <p className="mt-1 text-2xl font-bold">2,847</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-success">
                  <TrendingUp className="h-4 w-4" />
                  <span>5.2%</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Error Rate</p>
                  <p className="mt-1 text-2xl font-bold">0.21%</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-success">
                  <TrendingDown className="h-4 w-4" />
                  <span>0.05%</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Duration</p>
                  <p className="mt-1 text-2xl font-bold">98ms</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-success">
                  <TrendingDown className="h-4 w-4" />
                  <span>12ms</span>
                </div>
              </div>
            </Card>
          </div>
          <MetricChart
            title="Lambda Invocations & Errors"
            data={lambdaData}
            dataKey="invocations"
            dataKey2="errors"
            color="#8b5cf6"
            color2="#ef4444"
            height={250}
          />
        </div>

        {/* DynamoDB */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Database className="h-5 w-5 text-chart-2" />
            <h2 className="text-xl font-semibold">DynamoDB</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricChart
              title="Read/Write Operations"
              data={dynamoData}
              dataKey="reads"
              dataKey2="writes"
              color="#10b981"
              color2="#f59e0b"
              height={250}
            />
            <Card className="p-6">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">Table Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Item Count</span>
                  <span className="text-sm font-semibold">1,284</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Table Size</span>
                  <span className="text-sm font-semibold">2.4 MB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Read Capacity</span>
                  <span className="text-sm font-semibold">On-Demand</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Write Capacity</span>
                  <span className="text-sm font-semibold">On-Demand</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Consumed RCU</span>
                  <span className="text-sm font-semibold">1,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Consumed WCU</span>
                  <span className="text-sm font-semibold">923</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* SQS Queue */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-chart-3" />
            <h2 className="text-xl font-semibold">SQS Queue</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricChart
              title="Messages Sent/Received"
              data={sqsData}
              dataKey="sent"
              dataKey2="received"
              color="#f59e0b"
              color2="#10b981"
              height={250}
            />
            <Card className="p-6">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">Queue Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Messages Available</span>
                  <span className="text-sm font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Messages In Flight</span>
                  <span className="text-sm font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Messages Delayed</span>
                  <span className="text-sm font-semibold">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">DLQ Messages</span>
                  <span className="text-sm font-semibold text-destructive">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Oldest Message</span>
                  <span className="text-sm font-semibold">2m 34s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Visibility Timeout</span>
                  <span className="text-sm font-semibold">30s</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
