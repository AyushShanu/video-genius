"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
    Video,
    Plus,
    Home,
    BarChart3,
    Folder,
    Calendar,
    HelpCircle,
    MessageSquare,
    Settings,
    User,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function DashboardSidebar() {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    const mainMenu = [
        { icon: Video, label: "VideoGenius", href: "/videogenius", },
        { icon: Plus, label: "Create", href: "/create", },
        { icon: Home, label: "Dashboard", href: "/dashboard" },
        { icon: BarChart3, label: "Analytics", href: "/analytics" },
        { icon: Video, label: "Videos", href: "/videos" },
        { icon: Folder, label: "Library", href: "/library" },
        { icon: Calendar, label: "Templates", href: "/templates" },
    ]

    const bottomMenu = [
        { icon: HelpCircle, label: "Help Center", href: "/help" },
        { icon: MessageSquare, label: "Support", href: "/support" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ]

    return (
        <TooltipProvider>
            <aside className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
                {/* Collapse Toggle Button */}
                <div className="p-4 flex justify-between items-center">
                    {!collapsed && <span className="font-semibold text-xl">AI Video Genrator</span>}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 hover:bg-gray-800 rounded-md"
                    >
                        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                {/* Main Navigation */}
                <nav className="flex-1 space-y-1 px-2">
                    {mainMenu.map((item) => {
                        const isActive = pathname === item.href
                        const ButtonContent = (
                            <button
                                className={`w-full flex items-center gap-3 p-3 rounded-md transition
                                    ${isActive
                                        ? "bg-white text-blue-500"
                                        : "text-white hover:bg-gray-800/50"}`}
                            >
                                <item.icon className="h-5 w-5" />
                                {!collapsed && <span>{item.label}</span>}
                            </button>
                        )

                        return (
                            <Link key={item.label} href={item.href}>
                                {collapsed ? (
                                    <Tooltip>
                                        <TooltipTrigger asChild>{ButtonContent}</TooltipTrigger>
                                        <TooltipContent side="right">{item.label}</TooltipContent>
                                    </Tooltip>
                                ) : (
                                    ButtonContent
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* Bottom Menu */}
                <nav className="space-y-1 px-2 border-t border-gray-800 pt-4">
                    {bottomMenu.map((item) => {
                        const ButtonContent = (
                            <button className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-gray-800">
                                <item.icon className="h-5 w-5" />
                                {!collapsed && <span>{item.label}</span>}
                            </button>
                        )

                        return (
                            <Link key={item.label} href={item.href}>
                                {collapsed ? (
                                    <Tooltip>
                                        <TooltipTrigger asChild>{ButtonContent}</TooltipTrigger>
                                        <TooltipContent side="right">{item.label}</TooltipContent>
                                    </Tooltip>
                                ) : (
                                    ButtonContent
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* User Footer */}
                <div className="p-4 border-t border-gray-800">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-800 rounded-md">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback className="bg-blue-600 text-white">S</AvatarFallback>
                                </Avatar>
                                {!collapsed && (
                                    <div className="text-left">
                                        <div className="text-sm font-semibold">Sarah Johnson</div>
                                        <div className="text-xs text-gray-400">sarah@company.com</div>
                                    </div>
                                )}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56 bg-gray-800 text-white border border-gray-700 rounded-md"
                            side="top"
                            align="start"
                        >
                            <DropdownMenuItem className="hover:bg-gray-700">
                                <User className="h-4 w-4 mr-2" />
                                View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-700">
                                <Settings className="h-4 w-4 mr-2" />
                                Account Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem className="text-red-400 hover:bg-red-600/20">
                                <LogOut className="h-4 w-4 mr-2" />
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </aside>
        </TooltipProvider>
    )
}
