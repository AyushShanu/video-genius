"use client"

import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const performanceData = [
  { platform: "Instagram", value: 85, color: "#3B82F6" },
  { platform: "TikTok", value: 72, color: "#3B82F6" },
  { platform: "YouTube", value: 58, color: "#3B82F6" },
  { platform: "Facebook", value: 45, color: "#3B82F6" },
  { platform: "LinkedIn", value: 32, color: "#3B82F6" },
]

export function PlatformPerformance() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Platform Performance</h2>
          <p className="text-gray-400 text-sm">Compare performance across different platforms</p>
        </div>
        <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
          <TrendingUp className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="platform" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <YAxis hide />
            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
