"use client"

import {
    BarChart3,
    Calendar,
    Folder,
    Home,
    Plus,
    Settings,
    User,
    Video,
    HelpCircle,
    MessageSquare,
    LogOut,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"

const sidebarItems = [
    { icon: Video, label: "VideoGenius",},
    { icon: Plus, label: "Create" ,active: true},
    { icon: Home, label: "Dashboard" ,active:false},
    { icon: BarChart3, label: "Analytics" },
    { icon: Video, label: "Videos" },
    { icon: Folder, label: "Library" },
    { icon: Calendar, label: "Schedule" },
]

const bottomItems = [
    { icon: HelpCircle, label: "Help Center" },
    { icon: MessageSquare, label: "Support" },
    { icon: Settings, label: "Settings" },
]

export function DashboardSidebar() {
    return (
        <Sidebar collapsible="icon" className="border-r-0">
            <SidebarContent className="bg-gray-950">
                {/* Main Navigation */}
                <SidebarGroup className="h-15">
                    <SidebarGroupContent>
                        <SidebarMenu >
                            {sidebarItems.map((item) => (
                                <SidebarMenuItem  key={item.label}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={item.active}
                                        className="data-[active=true]:bg-white data-[active=true]:p-4 data-[active=true]:text-blue-400  hover:bg-gray-800/50 data-[active=false]:text-white "

                                    >
                                        <a href="#" className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5 text-xl" />
                                            <span className="h-5 ">{item.label}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Spacer to push footer to bottom */}
                <div className="flex-1" />

                {/* Bottom Section */}
                <SidebarGroup>
                    <SidebarSeparator className="bg-gray-800" />
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {bottomItems.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    <SidebarMenuButton asChild className="hover:bg-gray-800/50 text-white hover:text-white">
                                        <a href="#" className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.label}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* User Profile Footer */}
            <SidebarFooter className="bg-gray-950 border-t border-gray-800">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton size="lg" className="data-[state=open]:bg-gray-800/50 hover:bg-gray-800/50">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                        <AvatarFallback className="bg-blue-600 text-white">S</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold text-white">Sarah Johnson</span>
                                        <span className="truncate text-xs text-gray-400">sarah@company.com</span>
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-gray-800 border-gray-700"
                                side="right"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700">
                                    <User className="h-4 w-4 mr-2" />
                                    View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700">
                                    <Settings className="h-4 w-4 mr-2" />
                                    Account Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-gray-700" />
                                <DropdownMenuItem className="text-red-400 hover:bg-red-600/20 focus:bg-red-600/20">
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
