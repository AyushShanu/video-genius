"use client"

import { Bell, Crown, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center gap-4">

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search videos, templates..."
            className="pl-10 w-80 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" className="text-gray-400 hover:text-black">
          <Crown className="h-4 w-4 mr-2" />
          Upgrade to Pro
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <span className="text-white text-sm">Sarah</span>
      </div>
    </header>
  )
}
