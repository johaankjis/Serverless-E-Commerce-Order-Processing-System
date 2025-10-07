import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OrderStatusBadge } from "@/components/order-status-badge"
import { getOrders } from "@/lib/mock-data"
import { Search, Plus, ArrowUpDown } from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  const orders = getOrders()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">Order Management</h1>
            <p className="mt-2 text-muted-foreground">View and manage all orders in the system</p>
          </div>
          <Link href="/orders/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Order
            </Button>
          </Link>
        </div>

        <Card className="p-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search orders by ID, customer name, or email..." className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Items</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Created</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Processing Time</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.order_id} className="border-b border-border last:border-0">
                    <td className="py-4">
                      <Link
                        href={`/orders/${order.order_id}`}
                        className="font-mono text-sm font-medium text-primary hover:underline"
                      >
                        {order.order_id}
                      </Link>
                    </td>
                    <td className="py-4">
                      <div>
                        <p className="text-sm font-medium">{order.customer_name}</p>
                        <p className="text-xs text-muted-foreground">{order.customer_email}</p>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="text-sm">{order.items.length} item(s)</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm font-medium">${order.total_amount.toFixed(2)}</p>
                    </td>
                    <td className="py-4">
                      <OrderStatusBadge status={order.status} />
                    </td>
                    <td className="py-4">
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm text-muted-foreground">
                        {order.processing_time ? `${order.processing_time}ms` : "-"}
                      </p>
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
