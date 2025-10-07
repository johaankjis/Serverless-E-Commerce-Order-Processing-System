// Generate mock monitoring data
export function generateRequestsData() {
  const data = []
  const now = Date.now()
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now - i * 30 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      requests: Math.floor(1800 + Math.random() * 400 + Math.sin(i / 3) * 200),
      errors: Math.floor(5 + Math.random() * 10),
    })
  }
  return data
}

export function generateResponseTimeData() {
  const data = []
  const now = Date.now()
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now - i * 30 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      responseTime: Math.floor(120 + Math.random() * 60 + Math.sin(i / 4) * 30),
    })
  }
  return data
}

export function generateDataTransferData() {
  const data = []
  const now = Date.now()
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now - i * 30 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      outgoing: Math.floor(400 + Math.random() * 100 + Math.sin(i / 5) * 50),
      incoming: Math.floor(150 + Math.random() * 50 + Math.sin(i / 6) * 30),
    })
  }
  return data
}

export function generateLambdaMetricsData() {
  const data = []
  const now = Date.now()
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now - i * 30 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      invocations: Math.floor(2000 + Math.random() * 500 + Math.sin(i / 3) * 300),
      errors: Math.floor(3 + Math.random() * 8),
      throttles: Math.floor(0 + Math.random() * 3),
    })
  }
  return data
}

export function generateDynamoDBMetricsData() {
  const data = []
  const now = Date.now()
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now - i * 30 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      reads: Math.floor(1500 + Math.random() * 400 + Math.sin(i / 4) * 200),
      writes: Math.floor(800 + Math.random() * 200 + Math.sin(i / 5) * 100),
    })
  }
  return data
}

export function generateSQSMetricsData() {
  const data = []
  const now = Date.now()
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now - i * 30 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      sent: Math.floor(1800 + Math.random() * 400 + Math.sin(i / 3) * 200),
      received: Math.floor(1750 + Math.random() * 380 + Math.sin(i / 3.2) * 190),
      visible: Math.floor(20 + Math.random() * 30 + Math.sin(i / 2) * 15),
    })
  }
  return data
}
