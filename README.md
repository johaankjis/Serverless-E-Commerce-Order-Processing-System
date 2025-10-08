# OrderFlow - Serverless E-Commerce Order Processing System

A modern, serverless e-commerce order processing system with real-time monitoring and queue management capabilities. Built with Next.js and designed to showcase AWS Lambda-powered order management architecture.

## 🌟 Features

### Order Management
- **Create Orders**: Intuitive form-based order creation with multiple items support
- **Order Tracking**: Real-time order status tracking (Pending, Processing, Completed, Failed)
- **Order Details**: Comprehensive order information including customer details, items, and processing times
- **Search & Filter**: Quick search functionality for orders by ID, customer name, or email

### Real-Time Monitoring
- **API Gateway Metrics**: Monitor request rates, response times, and data transfer
- **Lambda Function Insights**: Track invocations, errors, throttles, and average duration
- **DynamoDB Analytics**: Monitor read/write operations and table metrics
- **SQS Queue Metrics**: Track message flow, sent/received messages, and visible messages
- **Performance Indicators**: Key metrics with trend analysis and percentage changes

### Queue Management
- **SQS Integration**: Visual representation of order processing queue
- **Message States**: Track messages across different states (Available, In-Flight, Delayed, DLQ)
- **Queue Statistics**: Real-time stats for queue depth, processing rate, and failed messages
- **Message Actions**: Retry failed messages and manage dead-letter queue items

### System Settings
- **Lambda Configuration**: Adjust timeout and memory settings
- **DynamoDB Settings**: Configure read/write capacity and auto-scaling
- **Notifications**: Email alerts for system events
- **Security**: API key authentication and rate limiting controls

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.2.4**: React framework with App Router
- **React 19**: Latest React with modern hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Recharts**: Data visualization and charting
- **Lucide React**: Beautiful icon library

### UI Components & Libraries
- **Radix UI**: Accessible component primitives
- **Class Variance Authority**: Component variants
- **React Hook Form**: Form management
- **Zod**: Schema validation
- **Date-fns**: Date manipulation
- **Sonner**: Toast notifications

### Development Tools
- **pnpm**: Fast, disk space efficient package manager
- **Geist Font**: Modern font family
- **Vercel Analytics**: Performance monitoring

## 🏗️ Architecture Overview

This application is designed to demonstrate a serverless e-commerce order processing system that could be deployed on AWS with the following architecture:

```
Client → API Gateway → Lambda Functions → DynamoDB
                              ↓
                          SQS Queue
                              ↓
                      Processing Lambda
```

### Key Components

1. **API Gateway**: RESTful API endpoints for order operations
2. **Lambda Functions**: Serverless compute for order processing
3. **DynamoDB**: NoSQL database for order storage
4. **SQS**: Message queue for asynchronous order processing
5. **Dead Letter Queue (DLQ)**: Failed message handling

## 📋 Prerequisites

- Node.js 18+ or higher
- pnpm 8+ (recommended) or npm
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Serverless-E-Commerce-Order-Processing-System.git
   cd Serverless-E-Commerce-Order-Processing-System
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

### Application Navigation

- **Overview (/)**: Dashboard with system metrics and performance indicators
- **/orders**: View and manage all orders
- **/orders/new**: Create new orders
- **/orders/[id]**: View individual order details
- **/monitoring**: Real-time monitoring of all system components
- **/queue**: SQS queue management interface
- **/settings**: Configure system settings

## 📁 Project Structure

```
.
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Overview/Dashboard page
│   ├── monitoring/          # Monitoring page
│   ├── orders/              # Order management pages
│   │   ├── [id]/           # Dynamic order detail page
│   │   ├── new/            # Create order page
│   │   └── page.tsx        # Orders list page
│   ├── queue/              # Queue management page
│   └── settings/           # Settings page
├── components/             # React components
│   ├── metric-chart.tsx   # Chart component for metrics
│   ├── navigation.tsx     # Main navigation component
│   ├── order-status-badge.tsx
│   ├── queue-status-badge.tsx
│   ├── theme-provider.tsx
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions and data
│   ├── mock-data.ts      # Mock order data
│   ├── monitoring-data.ts # Mock monitoring metrics
│   ├── queue-data.ts     # Mock queue data
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── styles/              # Additional styles
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🎨 Key Features Explanation

### Dashboard Metrics

The overview dashboard displays real-time metrics including:
- **Total Orders**: Current order count with weekly trend
- **Processing Rate**: Percentage of successfully processed orders
- **Avg Response Time**: Average API response time in milliseconds
- **Active Requests**: Current number of active API requests

### Order Processing Flow

1. Order created via web interface
2. Order data sent to API Gateway
3. Lambda function validates and stores order in DynamoDB
4. Message queued in SQS for processing
5. Processing Lambda handles order fulfillment
6. Order status updated in real-time

### Monitoring Capabilities

- **Lambda Metrics**: Invocations, errors, throttles, duration
- **DynamoDB Metrics**: Read/write operations, item count, table size
- **SQS Metrics**: Messages sent/received, visible messages, approximate age
- **API Gateway**: Request count, response times, error rates

## 🔧 Configuration

The application uses mock data for demonstration purposes. In a production environment, you would:

1. Set up AWS credentials
2. Configure DynamoDB table names
3. Set up SQS queue URLs
4. Configure Lambda function ARNs
5. Set up API Gateway endpoints

Environment variables (for production):
```env
AWS_REGION=us-east-1
DYNAMODB_TABLE_NAME=orders
SQS_QUEUE_URL=https://sqs.region.amazonaws.com/account/queue
API_GATEWAY_URL=https://api.example.com
```

## 🎯 Development

### Mock Data

The application uses mock data generators for demonstration:
- `lib/mock-data.ts`: Sample order data
- `lib/monitoring-data.ts`: Generated metrics data
- `lib/queue-data.ts`: Sample queue messages

### Adding New Features

1. Create new components in `components/`
2. Add new pages in `app/`
3. Update navigation in `components/navigation.tsx`
4. Add data handling in `lib/`

## 🐛 Troubleshooting

### Build Issues

If you encounter build issues:
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Type Errors

TypeScript errors are currently set to be ignored during builds (`ignoreBuildErrors: true`). To enable strict type checking, update `next.config.mjs`.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Johaan Kjis**
- GitHub: [@johaankjis](https://github.com/johaankjis)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Design inspired by modern AWS monitoring dashboards

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [Amazon DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
- [Amazon SQS Documentation](https://docs.aws.amazon.com/sqs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Note**: This is a demonstration application using mock data. For production use, integrate with actual AWS services and implement proper authentication, error handling, and security measures.
