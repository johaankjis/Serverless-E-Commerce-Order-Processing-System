import { cn } from "@/lib/utils"
import type { OrderStatus } from "@/lib/mock-data"

interface OrderStatusBadgeProps {
  status: OrderStatus
  className?: string
}

export function OrderStatusBadge({ status, className }: OrderStatusBadgeProps) {
  const statusConfig = {
    PENDING: {
      label: "Pending",
      className: "bg-warning/10 text-warning border-warning/20",
    },
    PROCESSING: {
      label: "Processing",
      className: "bg-info/10 text-info border-info/20",
    },
    COMPLETED: {
      label: "Completed",
      className: "bg-success/10 text-success border-success/20",
    },
    FAILED: {
      label: "Failed",
      className: "bg-destructive/10 text-destructive border-destructive/20",
    },
  }

  const config = statusConfig[status]

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  )
}
