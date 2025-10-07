export type OrderStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED"

export interface Order {
  order_id: string
  user_id: string
  customer_name: string
  customer_email: string
  items: OrderItem[]
  total_amount: number
  status: OrderStatus
  created_at: string
  updated_at: string
  processing_time?: number
}

export interface OrderItem {
  product_id: string
  product_name: string
  quantity: number
  price: number
}

// Simulated order data
export const mockOrders: Order[] = [
  {
    order_id: "ORD-2847",
    user_id: "USR-1001",
    customer_name: "Sarah Johnson",
    customer_email: "sarah.j@example.com",
    items: [
      { product_id: "PROD-001", product_name: "Wireless Headphones", quantity: 1, price: 129.99 },
      { product_id: "PROD-002", product_name: "USB-C Cable", quantity: 2, price: 19.99 },
    ],
    total_amount: 169.97,
    status: "COMPLETED",
    created_at: "2025-10-07T14:23:00Z",
    updated_at: "2025-10-07T14:23:15Z",
    processing_time: 142,
  },
  {
    order_id: "ORD-2846",
    user_id: "USR-1002",
    customer_name: "Michael Chen",
    customer_email: "m.chen@example.com",
    items: [{ product_id: "PROD-003", product_name: "Laptop Stand", quantity: 1, price: 49.99 }],
    total_amount: 49.99,
    status: "COMPLETED",
    created_at: "2025-10-07T14:18:00Z",
    updated_at: "2025-10-07T14:18:12Z",
    processing_time: 128,
  },
  {
    order_id: "ORD-2845",
    user_id: "USR-1003",
    customer_name: "Emily Rodriguez",
    customer_email: "emily.r@example.com",
    items: [{ product_id: "PROD-004", product_name: "Mechanical Keyboard", quantity: 1, price: 159.99 }],
    total_amount: 159.99,
    status: "FAILED",
    created_at: "2025-10-07T14:11:00Z",
    updated_at: "2025-10-07T14:11:05Z",
  },
  {
    order_id: "ORD-2844",
    user_id: "USR-1004",
    customer_name: "David Kim",
    customer_email: "david.k@example.com",
    items: [
      { product_id: "PROD-005", product_name: 'Monitor 27"', quantity: 1, price: 299.99 },
      { product_id: "PROD-006", product_name: "HDMI Cable", quantity: 1, price: 14.99 },
    ],
    total_amount: 314.98,
    status: "COMPLETED",
    created_at: "2025-10-07T14:05:00Z",
    updated_at: "2025-10-07T14:05:18Z",
    processing_time: 156,
  },
  {
    order_id: "ORD-2843",
    user_id: "USR-1005",
    customer_name: "Jessica Taylor",
    customer_email: "j.taylor@example.com",
    items: [{ product_id: "PROD-007", product_name: "Wireless Mouse", quantity: 2, price: 39.99 }],
    total_amount: 79.98,
    status: "COMPLETED",
    created_at: "2025-10-07T13:58:00Z",
    updated_at: "2025-10-07T13:58:11Z",
    processing_time: 135,
  },
  {
    order_id: "ORD-2842",
    user_id: "USR-1006",
    customer_name: "Robert Martinez",
    customer_email: "r.martinez@example.com",
    items: [{ product_id: "PROD-008", product_name: "Desk Lamp", quantity: 1, price: 34.99 }],
    total_amount: 34.99,
    status: "PROCESSING",
    created_at: "2025-10-07T13:52:00Z",
    updated_at: "2025-10-07T13:52:08Z",
  },
  {
    order_id: "ORD-2841",
    user_id: "USR-1007",
    customer_name: "Amanda White",
    customer_email: "a.white@example.com",
    items: [
      { product_id: "PROD-009", product_name: "Webcam HD", quantity: 1, price: 89.99 },
      { product_id: "PROD-010", product_name: "Microphone", quantity: 1, price: 69.99 },
    ],
    total_amount: 159.98,
    status: "PENDING",
    created_at: "2025-10-07T13:45:00Z",
    updated_at: "2025-10-07T13:45:00Z",
  },
  {
    order_id: "ORD-2840",
    user_id: "USR-1008",
    customer_name: "Christopher Lee",
    customer_email: "c.lee@example.com",
    items: [{ product_id: "PROD-011", product_name: "External SSD 1TB", quantity: 1, price: 119.99 }],
    total_amount: 119.99,
    status: "COMPLETED",
    created_at: "2025-10-07T13:38:00Z",
    updated_at: "2025-10-07T13:38:14Z",
    processing_time: 145,
  },
]

export function getOrderById(orderId: string): Order | undefined {
  return mockOrders.find((order) => order.order_id === orderId)
}

export function getOrders(): Order[] {
  return mockOrders
}

export function createOrder(orderData: Omit<Order, "order_id" | "created_at" | "updated_at">): Order {
  const newOrder: Order = {
    ...orderData,
    order_id: `ORD-${Math.floor(Math.random() * 10000)}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
  mockOrders.unshift(newOrder)
  return newOrder
}
