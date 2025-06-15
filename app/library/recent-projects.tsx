"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Calendar } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Summer Collection...",
    duration: "0:45",
    totalDuration: "9:10",
    status: "Completed",
    statusColor: "bg-green-600",
    date: "Jun 16, 2023",
    platform: "Instagram",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Product Tutorial Series",
    duration: "2:00",
    totalDuration: "16:9",
    status: "In Progress",
    statusColor: "bg-blue-600",
    date: "Jun 14, 2023",
    platform: "Youtube",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Brand Story",
    duration: "1:00",
    totalDuration: "1:1",
    status: "Draft",
    statusColor: "bg-gray-600",
    date: "Jun 12, 2023",
    platform: "Facebook",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Quick Tips & Tricks",
    duration: "0:30",
    totalDuration: "9:16",
    status: "Completed",
    statusColor: "bg-green-600",
    date: "Jun 2, 2023",
    platform: "TikTok",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
]

export function RecentProjects() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
        <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
          View All →
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-700">
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {project.duration}
              </div>
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {project.totalDuration}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-black/70"
              >
                <MoreHorizontal className="h-4 w-4 text-white" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-white text-sm truncate flex-1">{project.title}</h3>
                <Badge className={`${project.statusColor} text-white text-xs ml-2`}>{project.status}</Badge>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  {project.platform}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
