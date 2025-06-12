"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardHeader } from "./dashboard-header"
import { DashboardContent } from "./dashboard-content"
import { DashboardSidebar } from "./dashboard-sidebar"

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-950">
      <SidebarProvider defaultOpen={false}>
        <div className="flex h-screen w-full">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <DashboardHeader />
            <DashboardContent />
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
