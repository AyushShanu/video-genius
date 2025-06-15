"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardHeader } from "./dashboard-header"
import DashboardSidebar from "./dashboard-sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <SidebarProvider defaultOpen={false}>
        <div className="flex h-screen w-full">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <DashboardHeader />
            {children} {/* Inject content dynamically */}
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
