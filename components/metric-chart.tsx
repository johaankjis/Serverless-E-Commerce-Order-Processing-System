"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface MetricChartProps {
  title: string
  data: Array<{ time: string; value: number; value2?: number }>
  dataKey: string
  dataKey2?: string
  color?: string
  color2?: string
  unit?: string
  height?: number
}

export function MetricChart({
  title,
  data,
  dataKey,
  dataKey2,
  color = "#8b5cf6",
  color2 = "#10b981",
  unit = "",
  height = 200,
}: MetricChartProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-sm font-medium text-muted-foreground">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}${unit}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.15 0 0)",
              border: "1px solid oklch(0.25 0 0)",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "oklch(0.95 0 0)" }}
          />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
          {dataKey2 && <Line type="monotone" dataKey={dataKey2} stroke={color2} strokeWidth={2} dot={false} />}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
