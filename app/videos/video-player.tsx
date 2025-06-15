"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface VideoPlayerProps {
  videoSrc?: string
  onPlay?: () => void
  onPause?: () => void
}

export function VideoPlayer({ videoSrc, onPlay, onPause }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState([80])

  const handlePlayPause = () => {
    const newPlayingState = !isPlaying
    setIsPlaying(newPlayingState)

    if (newPlayingState) {
      onPlay?.()
    } else {
      onPause?.()
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      {/* Video Preview */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
        
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" variant="secondary" className="rounded-full w-16 h-16" onClick={handlePlayPause}>
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="bg-gray-800 p-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handlePlayPause}>
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="sm">
            <SkipForward className="w-4 h-4" />
          </Button>

          <div className="flex-1 mx-4">
            <Slider
              value={[currentTime]}
              onValueChange={(value) => setCurrentTime(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <span className="text-sm text-gray-400">0:15 / 1:40</span>

          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-20" />
          </div>

          <Button variant="ghost" size="sm">
            <Maximize className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
