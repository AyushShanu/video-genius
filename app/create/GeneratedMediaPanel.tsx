"use client"

import { useState } from "react"
import { Video } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = ["Generated", "Suggestions"]

export function GeneratedMediaPanel() {
  const [activeTab, setActiveTab] = useState("Generated")

  return (
    <div className="w-full rounded-lg border border-gray-800 bg-gray-950 p-4">
      {/* Tabs */}
      <div className="mb-5 flex gap-1 rounded-md overflow-hidden border border-gray-800 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "text-sm px-4 py-2 transition",
              activeTab === tab
                ? "bg-gray-900 text-white"
                : "text-gray-400 hover:text-white"
            )}
          >
            {tab === "Generated" ? (
              <span className="flex items-center gap-2">
                <Video className="h-4 w-4" /> {tab}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                ✨ {tab}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Panel Content */}
      {activeTab === "Generated" ? (
        <div className="flex flex-col items-center justify-center gap-2 text-center py-12 text-gray-400">
          <Video className="h-8 w-8 opacity-30" />
          <p className="text-sm font-medium text-white">No generated media yet</p>
          <p className="text-xs text-gray-500">Ask the AI to create videos or images</p>
        </div>
      ) : (
        <div className="py-12 text-center text-gray-400 text-sm">
          Suggestions panel coming soon...
        </div>
      )}
    </div>
  )
}
