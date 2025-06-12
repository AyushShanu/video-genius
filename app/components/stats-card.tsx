"use client"

import { type LucideIcon, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  gradientFrom: string
  gradientTo: string
  clipPath: string
}

export function StatsCard({ title, value, change, icon: Icon, gradientFrom, gradientTo, clipPath }: StatsCardProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="flex items-center text-sm">
          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
          <span className="text-green-500">{change}</span>
        </div>
        <div
          className={`mt-4 h-16 bg-gradient-to-r ${gradientFrom}/20 ${gradientTo}/20 rounded relative overflow-hidden`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-30 rounded`}
            style={{ clipPath }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
