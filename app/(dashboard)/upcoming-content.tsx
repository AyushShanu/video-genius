"use client"

import { Calendar, ChevronRight, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingContent = [
  {
    title: "New Product Launch",
    date: "20 Jan",
    platform: "Instagram",
    status: "scheduled" as const,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Weekly Tips",
    date: "22 Jan",
    platform: "TikTok",
    status: "scheduled" as const,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Customer Spotlight",
    date: "25 Jan",
    platform: "Facebook",
    status: "draft" as const,
    image: "/placeholder.svg?height=40&width=40",
  },
]

export function UpcomingContent() {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Upcoming Content</CardTitle>
          <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <CardDescription className="text-gray-400">Scheduled posts for the next 7 days</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingContent.map((content, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30">
            <img
              src={content.image || "/placeholder.svg"}
              alt={content.title}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{content.title}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar className="h-3 w-3" />
                <span>{content.date}</span>
                <span>•</span>
                <span>{content.platform}</span>
              </div>
            </div>
            <Badge
              variant={content.status === "scheduled" ? "default" : "secondary"}
              className={content.status === "scheduled" ? "bg-blue-600/20 text-blue-400" : "bg-gray-700 text-gray-300"}
            >
              {content.status}
            </Badge>
          </div>
        ))}
        <Button variant="ghost" className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-600/10">
          <Plus className="h-4 w-4 mr-2" />
          Schedule New Content
        </Button>
      </CardContent>
    </Card>
  )
}
