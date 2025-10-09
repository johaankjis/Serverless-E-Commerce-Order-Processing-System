# Serverless E-Commerce Order Processing System - Codebase Documentation

## Overview

This is a modern serverless e-commerce order processing system built with Next.js 15, React 19, and TypeScript. The application provides a comprehensive dashboard for monitoring and managing order processing workflows powered by AWS serverless architecture (Lambda, SQS, DynamoDB, API Gateway).

## Tech Stack

### Core Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Headless UI component library
- **Lucide React** - Icon library
- **class-variance-authority** - CSS class composition
- **tailwindcss-animate** - Animation utilities

### Data Visualization
- **Recharts** - Chart library for metrics visualization

### State Management & Forms
- **React Hook Form 7.60.0** - Form validation
- **Zod 3.25.67** - Schema validation
- **@hookform/resolvers** - Form resolvers

### Other Dependencies
- **next-themes** - Dark mode support
- **date-fns** - Date utility library
- **sonner** - Toast notifications
- **Geist** - Font family

## Project Structure

```
.
├── app/                          # Next.js App Router pages
│   ├── monitoring/               # System monitoring dashboard
│   ├── orders/                   # Order management pages
│   │   ├── [id]/                # Individual order details
│   │   └── new/                 # Create new order form
│   ├── queue/                   # SQS queue management
│   ├── settings/                # System settings
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage/Overview
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (60+ components)
│   ├── metric-chart.tsx         # Chart component for metrics
│   ├── navigation.tsx           # Top navigation bar
│   ├── order-status-badge.tsx   # Order status indicator
│   ├── queue-status-badge.tsx   # Queue status indicator
│   └── theme-provider.tsx       # Dark mode provider
│
├── lib/                         # Utility functions and data
│   ├── mock-data.ts             # Mock order data
│   ├── monitoring-data.ts       # Mock monitoring metrics
│   ├── queue-data.ts            # Mock SQS queue data
│   └── utils.ts                 # Utility functions
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
│
├── public/                      # Static assets
│   └── placeholder-*.{png,svg,jpg}
│
└── styles/                      # Additional styles
    └── globals.css
```

## Key Features

### 1. System Overview Dashboard (`app/page.tsx`)
- Real-time metrics display
- Total orders, success rate, average response time
- Active orders tracking
- Request rate and response time charts
- Quick access to recent orders

**Key Metrics Displayed:**
- Total Orders: 1,284
- Success Rate: 94.3%
- Average Response Time: 142ms
- Active Orders: Real-time count

### 2. Order Management (`app/orders/`)

#### Order List Page (`app/orders/page.tsx`)
- Displays all orders with filtering and search
- Shows order status, customer info, total amount
- Quick actions: View details, Edit, Delete
- Status-based filtering (All, Pending, Processing, Completed, Failed)

#### Order Details Page (`app/orders/[id]/page.tsx`)
- Detailed order information
- Customer details
- Line items with quantities and prices
- Order timeline and status
- Processing information

#### Create Order Page (`app/orders/new/page.tsx`)
- Form for creating new orders
- Customer information input
- Dynamic line items (add/remove products)
- Real-time total calculation
- Form validation

**Order Types:**
```typescript
type OrderStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED"

interface Order {
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

interface OrderItem {
  product_id: string
  product_name: string
  quantity: number
  price: number
}
```

### 3. System Monitoring (`app/monitoring/page.tsx`)
Comprehensive monitoring dashboard with real-time metrics for:

#### API Gateway Metrics
- Edge Requests (requests/min)
- Average Response Time (ms)

#### Data Transfer
- Outgoing Data (MB)
- Incoming Data (MB)

#### AWS Lambda Metrics
- Function Invocations
- Error Count
- Throttle Count

#### DynamoDB Metrics
- Read Operations
- Write Operations

#### SQS Queue Metrics
- Messages Sent
- Messages Received
- Visible Messages

### 4. Queue Management (`app/queue/page.tsx`)
SQS queue monitoring and management:

**Features:**
- Queue statistics (Available, In-Flight, Delayed, DLQ)
- Message list with details
- Message actions (Retry, Delete)
- Real-time queue metrics chart
- Visibility timeout tracking

**Queue Message Types:**
```typescript
interface QueueMessage {
  message_id: string
  order_id: string
  customer_name: string
  status: "AVAILABLE" | "IN_FLIGHT" | "DELAYED" | "DLQ"
  timestamp: string
  retry_count: number
  visibility_timeout?: string
  approximate_receive_count: number
}
```

### 5. Settings Page (`app/settings/page.tsx`)
System configuration interface:

**Configuration Sections:**
- **Lambda Settings:** Runtime, timeout, memory allocation
- **DynamoDB Settings:** Read/write capacity, auto-scaling
- **Notifications:** Email alerts, Slack integration
- **Security:** API key authentication, CORS, rate limiting

## Component Library

The project includes 60+ pre-built UI components from Radix UI, located in `components/ui/`:

### Key Components
- **Accordion** - Collapsible content sections
- **Alert Dialog** - Modal confirmations
- **Badge** - Status indicators
- **Button** - Interactive buttons with variants
- **Card** - Container component
- **Chart** - Data visualization
- **Dialog** - Modal windows
- **Dropdown Menu** - Context menus
- **Form** - Form components with validation
- **Input** - Text input fields
- **Select** - Dropdown selections
- **Sheet** - Slide-out panels
- **Switch** - Toggle switches
- **Table** - Data tables
- **Tabs** - Tabbed interfaces
- **Toast** - Notification popups
- **Tooltip** - Hover information

### Custom Components

#### Navigation (`components/navigation.tsx`)
Top navigation bar with:
- Logo and branding ("OrderFlow")
- Route links: Overview, Orders, Monitoring, Queue, Settings
- Active state indication
- Responsive design

#### Metric Chart (`components/metric-chart.tsx`)
Recharts-based component for displaying time-series metrics

#### Status Badges
- **Order Status Badge** - Visual indicators for order states
- **Queue Status Badge** - Visual indicators for queue message states

## Data Layer

### Mock Data (`lib/mock-data.ts`)
Provides sample order data for development and demonstration:
- 8 sample orders with various statuses
- CRUD operations: `getOrderById()`, `getOrders()`, `createOrder()`

### Monitoring Data (`lib/monitoring-data.ts`)
Generates simulated real-time metrics:
- `generateRequestsData()` - API request metrics
- `generateResponseTimeData()` - Response time metrics
- `generateDataTransferData()` - Network transfer metrics
- `generateLambdaMetricsData()` - Lambda function metrics
- `generateDynamoDBMetricsData()` - Database metrics
- `generateSQSMetricsData()` - Queue metrics

### Queue Data (`lib/queue-data.ts`)
Provides SQS queue message data:
- 8 sample queue messages
- Queue statistics calculation
- Message status tracking

## Styling Architecture

### Tailwind CSS Configuration
- Uses Tailwind CSS v4 with PostCSS
- Custom theme with dark mode as default
- Configuration in `postcss.config.mjs`

### CSS Class Utilities (`lib/utils.ts`)
```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
Combines `clsx` and `tailwind-merge` for conditional class composition

### Global Styles (`app/globals.css`)
- Base styles and CSS variables
- Dark mode color scheme
- Typography and spacing utilities

## Routing

### App Router Structure
- `/` - System Overview
- `/orders` - Order list
- `/orders/[id]` - Order details
- `/orders/new` - Create new order
- `/monitoring` - System monitoring
- `/queue` - Queue management
- `/settings` - System settings

### Navigation Pattern
All pages use the `<Navigation />` component and follow consistent layout:
```tsx
<div className="min-h-screen bg-background">
  <Navigation />
  <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    {/* Page content */}
  </main>
</div>
```

## Development

### Getting Started

1. **Install dependencies:**
```bash
pnpm install
```

2. **Run development server:**
```bash
pnpm dev
```

3. **Build for production:**
```bash
pnpm build
```

4. **Start production server:**
```bash
pnpm start
```

5. **Run linter:**
```bash
pnpm lint
```

### Development Server
- Runs on `http://localhost:3000` by default
- Hot module replacement enabled
- Fast refresh for React components

## Configuration Files

### `next.config.mjs`
Next.js configuration with:
- ESLint build warnings ignored
- TypeScript build errors ignored
- Unoptimized images

### `tsconfig.json`
TypeScript configuration with:
- Strict mode enabled
- Path aliases (`@/*` maps to root)
- Next.js plugin integration

### `package.json`
Project metadata and scripts:
- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint

### `components.json`
Shadcn/UI configuration for component generation

## Architecture Concepts

### Serverless Design
The application is designed to monitor and manage a serverless e-commerce order processing pipeline:

1. **API Gateway** - Entry point for order requests
2. **AWS Lambda** - Order processing functions
3. **SQS Queue** - Message queue for order processing
4. **DynamoDB** - Order data storage
5. **Dead Letter Queue (DLQ)** - Failed message handling

### Order Processing Flow
1. Order submitted via API
2. Message sent to SQS queue
3. Lambda function processes order
4. Order data stored in DynamoDB
5. Status updates published
6. Monitoring metrics collected

### Real-time Monitoring
- Metrics generated every 30 minutes
- Time-series data visualization
- Alert thresholds and notifications
- Performance tracking

## UI/UX Patterns

### Color System
- **Primary** - Purple (#8b5cf6)
- **Success** - Green (#10b981)
- **Destructive** - Red
- **Muted** - Gray tones
- **Chart Colors** - Multiple color scheme for charts

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Grid layouts adapt to screen size
- Touch-friendly interface elements

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility (via Radix UI)

## Performance Optimizations

- **Next.js Image Optimization** - Configured (unoptimized for flexibility)
- **Code Splitting** - Automatic via Next.js
- **React 19 Features** - Suspense boundaries, streaming SSR
- **Font Optimization** - Geist fonts with variable font support

## Future Enhancements

### Potential Features
- Real AWS service integration
- WebSocket for real-time updates
- Advanced filtering and search
- Export functionality (CSV, PDF)
- User authentication and authorization
- Role-based access control
- Audit logging
- Advanced analytics and reporting
- Cost optimization insights
- Multi-region support

### API Integration
Currently uses mock data. Future versions could integrate with:
- AWS SDK for actual service calls
- REST API backend
- GraphQL API
- WebSocket connections

## Best Practices

### Code Organization
- Feature-based folder structure
- Separation of concerns
- Reusable components
- Type safety with TypeScript

### Component Design
- Composition over inheritance
- Single responsibility principle
- Props interface definitions
- Default props and prop validation

### State Management
- React hooks for local state
- Form state with React Hook Form
- No global state management (can add Redux/Zustand if needed)

### Error Handling
- Try-catch blocks for async operations
- Error boundaries (can be added)
- User-friendly error messages
- Toast notifications for feedback

## Deployment

### Vercel Deployment (Recommended)
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically on push

### Build Configuration
```bash
pnpm build    # Creates .next directory
pnpm start    # Runs production server
```

### Environment Variables
Currently none required. Future versions may need:
- `NEXT_PUBLIC_API_URL`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

## Testing

### Current State
No test infrastructure currently implemented.

### Recommended Testing Strategy
- **Unit Tests:** Jest + React Testing Library
- **E2E Tests:** Playwright or Cypress
- **Component Tests:** Storybook
- **Type Checking:** TypeScript strict mode

## Contributing

### Development Workflow
1. Create feature branch
2. Make changes
3. Run linter: `pnpm lint`
4. Build: `pnpm build`
5. Test locally
6. Submit pull request

### Code Style
- Use TypeScript for type safety
- Follow existing component patterns
- Use Tailwind CSS for styling
- Keep components focused and reusable
- Document complex logic

## License

Not specified in the project.

## Support

For issues or questions, refer to the repository's issue tracker or documentation.

---

**Last Updated:** January 2025
**Version:** 0.1.0
**Maintained by:** Repository owner
