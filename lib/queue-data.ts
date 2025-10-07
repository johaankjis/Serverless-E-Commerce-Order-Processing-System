export interface QueueMessage {
  message_id: string
  order_id: string
  customer_name: string
  status: "AVAILABLE" | "IN_FLIGHT" | "DELAYED" | "DLQ"
  timestamp: string
  retry_count: number
  visibility_timeout?: string
  approximate_receive_count: number
}

export const mockQueueMessages: QueueMessage[] = [
  {
    message_id: "MSG-8472",
    order_id: "ORD-2842",
    customer_name: "Robert Martinez",
    status: "IN_FLIGHT",
    timestamp: "2025-10-07T13:52:08Z",
    retry_count: 0,
    visibility_timeout: "2025-10-07T13:52:38Z",
    approximate_receive_count: 1,
  },
  {
    message_id: "MSG-8471",
    order_id: "ORD-2841",
    customer_name: "Amanda White",
    status: "AVAILABLE",
    timestamp: "2025-10-07T13:45:00Z",
    retry_count: 0,
    approximate_receive_count: 0,
  },
  {
    message_id: "MSG-8470",
    order_id: "ORD-2848",
    customer_name: "Daniel Brown",
    status: "AVAILABLE",
    timestamp: "2025-10-07T13:43:15Z",
    retry_count: 0,
    approximate_receive_count: 0,
  },
  {
    message_id: "MSG-8469",
    order_id: "ORD-2849",
    customer_name: "Lisa Anderson",
    status: "AVAILABLE",
    timestamp: "2025-10-07T13:41:22Z",
    retry_count: 0,
    approximate_receive_count: 0,
  },
  {
    message_id: "MSG-8468",
    order_id: "ORD-2850",
    customer_name: "Kevin Wilson",
    status: "DELAYED",
    timestamp: "2025-10-07T13:38:45Z",
    retry_count: 1,
    approximate_receive_count: 1,
  },
  {
    message_id: "MSG-8467",
    order_id: "ORD-2845",
    customer_name: "Emily Rodriguez",
    status: "DLQ",
    timestamp: "2025-10-07T13:11:05Z",
    retry_count: 3,
    approximate_receive_count: 4,
  },
  {
    message_id: "MSG-8466",
    order_id: "ORD-2851",
    customer_name: "Thomas Garcia",
    status: "DLQ",
    timestamp: "2025-10-07T12:58:12Z",
    retry_count: 3,
    approximate_receive_count: 4,
  },
  {
    message_id: "MSG-8465",
    order_id: "ORD-2852",
    customer_name: "Patricia Moore",
    status: "DLQ",
    timestamp: "2025-10-07T12:45:33Z",
    retry_count: 3,
    approximate_receive_count: 4,
  },
]

export function getQueueMessages(): QueueMessage[] {
  return mockQueueMessages
}

export function getQueueStats() {
  const messages = getQueueMessages()
  return {
    available: messages.filter((m) => m.status === "AVAILABLE").length,
    inFlight: messages.filter((m) => m.status === "IN_FLIGHT").length,
    delayed: messages.filter((m) => m.status === "DELAYED").length,
    dlq: messages.filter((m) => m.status === "DLQ").length,
    total: messages.length,
  }
}
