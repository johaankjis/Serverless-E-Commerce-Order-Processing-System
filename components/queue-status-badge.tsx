import { cn } from "@/lib/utils"
import type { QueueMessage } from "@/lib/queue-data"

interface QueueStatusBadgeProps {
  status: QueueMessage["status"]
  className?: string
}

export function QueueStatusBadge({ status, className }: QueueStatusBadgeProps) {
  const statusConfig = {
    AVAILABLE: {
      label: "Available",
      className: "bg-success/10 text-success border-success/20",
    },
    IN_FLIGHT: {
      label: "In Flight",
      className: "bg-info/10 text-info border-info/20",
    },
    DELAYED: {
      label: "Delayed",
      className: "bg-warning/10 text-warning border-warning/20",
    },
    DLQ: {
      label: "Dead Letter",
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
