"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatsGrid } from "./stat-grid"
import { PerformanceChart } from "./performance-chart"
import { UpcomingContent } from "./upcoming-content"


export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here an overview of your content.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create New Video
        </Button>
      </div>

      {/* Stats Cards */}
      <StatsGrid />

      {/* Performance Overview and Upcoming Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceChart />
        <UpcomingContent />
      </div>
    </main>
  )
}
