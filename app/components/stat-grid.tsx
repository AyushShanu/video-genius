"use client"

import { Eye, Heart, Share2, User } from "lucide-react"
import { StatsCard } from "./stats-card"

const statsData = [
  {
    title: "Total Views",
    value: "254,879",
    change: "12.4%",
    icon: Eye,
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-400",
    clipPath: "polygon(0 80%, 20% 70%, 40% 75%, 60% 65%, 80% 60%, 100% 50%, 100% 100%, 0% 100%)",
  },
  {
    title: "Engagement Rate",
    value: "15.8%",
    change: "3.2%",
    icon: Heart,
    gradientFrom: "from-green-600",
    gradientTo: "to-green-400",
    clipPath: "polygon(0 90%, 20% 85%, 40% 80%, 60% 75%, 80% 70%, 100% 65%, 100% 100%, 0% 100%)",
  },
  {
    title: "Followers",
    value: "45,620",
    change: "8.7%",
    icon: User,
    gradientFrom: "from-orange-600",
    gradientTo: "to-orange-400",
    clipPath: "polygon(0 85%, 20% 80%, 40% 75%, 60% 70%, 80% 65%, 100% 60%, 100% 100%, 0% 100%)",
  },
  {
    title: "Total Shares",
    value: "12,450",
    change: "18.3%",
    icon: Share2,
    gradientFrom: "from-purple-600",
    gradientTo: "to-purple-400",
    clipPath: "polygon(0 95%, 20% 90%, 40% 85%, 60% 80%, 80% 75%, 100% 70%, 100% 100%, 0% 100%)",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  )
}
