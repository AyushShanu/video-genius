"use client"

import { ProjectHeader } from "./project-header"
import { RightPanel } from "./right-panel"
import { VideoPlayer } from "./video-player"
import { DashboardLayout } from "../(dashboard)/dashboard-layout"

interface VideoEditorProps {
  projectTitle?: string
}

export function VideoEditor({ projectTitle = "Summer Collection Promo" }: VideoEditorProps) {

  const handleSave = () => {
    console.log("Save project")
  }

  const handleShare = () => {
    console.log("Share project")
  }

  const handleExport = () => {
    console.log("Export project")
  }

  const handlePlay = () => {
    console.log("Play video")
  }

  const handlePause = () => {
    console.log("Pause video")
  }

  const handleGenerateAI = () => {
    console.log("Generate with AI")
  }

  const handleApplyHashtags = (hashtags: string[]) => {
    console.log("Apply hashtags:", hashtags)
  }

  return (
    <DashboardLayout>
        <ProjectHeader title={projectTitle} onSave={handleSave} onShare={handleShare} onExport={handleExport} />

        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col">
            <VideoPlayer onPlay={handlePlay} onPause={handlePause} />
          </div>

          <RightPanel onGenerateAI={handleGenerateAI} onApplyHashtags={handleApplyHashtags} />
        </div>
    </DashboardLayout>
  )
}
