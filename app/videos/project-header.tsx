"use client"

import { ChevronLeft, Save, Share, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectHeaderProps {
  title: string
  onBack?: () => void
  onSave?: () => void
  onShare?: () => void
  onExport?: () => void
}

export function ProjectHeader({ title, onBack, onSave, onShare, onExport }: ProjectHeaderProps) {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onSave} className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-600">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={onShare} className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-600">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={onExport} className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-600">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
    </div>
  )
}
