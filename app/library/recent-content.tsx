"use client"

import { RecentProjects } from "./recent-projects"
import { PlatformPerformance } from "./platform-performance"

export function RecentContent() {
  return (
    <div className="flex-1 bg-gray-900 p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        <RecentProjects />
        <PlatformPerformance />
      </div>
    </div>
  )
}