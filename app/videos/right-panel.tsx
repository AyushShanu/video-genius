"use client"

import { useState } from "react"
import { Sparkles, Hash, Copy, Send, Type, ImageIcon, Music, Wand2, Shapes, Video, Mic, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"

interface RightPanelProps {
  onGenerateAI?: () => void
  onApplyHashtags?: (hashtags: string[]) => void
}

export function RightPanel({ onGenerateAI, onApplyHashtags }: RightPanelProps) {
  const [customHashtag, setCustomHashtag] = useState("")
  const [fontSize, setFontSize] = useState([24])
  const [volume, setVolume] = useState([80])

  const transitions = [
    { name: "Fade", active: true },
    { name: "Zoom", active: false },
    { name: "Slide", active: false },
    { name: "Blur", active: false },
    { name: "Glow", active: false },
    { name: "Bounce", active: false },
  ]

  const hashtags = [
    "#Stickers",
    "#BeYourself",
    "#SatisfyYourHunger",
    "#HungryEmergency",
    "#ChocolateLovers",
    "#MoodChanger",
    "#SnackTime",
    "#StickerSatisfies",
    "#TreatYourself",
  ]

  const elements = [
    { name: "Shapes", icon: Shapes, items: ["Circle", "Rectangle", "Triangle", "Arrow", "Star", "Heart"] },
    { name: "Icons", icon: Sparkles, items: ["Social Media", "Business", "Technology", "Nature", "Food", "Travel"] },
    { name: "Stickers", icon: ImageIcon, items: ["Emoji", "Animals", "Objects", "Decorative", "Seasonal", "Custom"] },
  ]

  const textStyles = [
    { name: "Heading", style: "text-2xl font-bold" },
    { name: "Subheading", style: "text-lg font-semibold" },
    { name: "Body", style: "text-base" },
    { name: "Caption", style: "text-sm" },
    { name: "Handwritten", style: "text-lg font-cursive" },
    { name: "Modern", style: "text-lg font-sans tracking-wide" },
  ]

  const videoCategories = [
    { name: "Stock Videos", count: "1.2M+" },
    { name: "Backgrounds", count: "500K+" },
    { name: "Overlays", count: "200K+" },
    { name: "Animations", count: "150K+" },
    { name: "Templates", count: "50K+" },
    { name: "Trending", count: "New" },
  ]

  const audioCategories = [
    { name: "Background Music", count: "10K+" },
    { name: "Sound Effects", count: "5K+" },
    { name: "Voiceovers", count: "2K+" },
    { name: "Ambient", count: "1K+" },
    { name: "Trending", count: "New" },
    { name: "Royalty Free", count: "8K+" },
  ]

  const handleAddHashtag = () => {
    if (customHashtag.trim()) {
      setCustomHashtag("")
    }
  }

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
      <Tabs defaultValue="effects" className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-5 bg-gray-700 m-2">
          <TabsTrigger value="elements" className="text-xs">
            Elements
          </TabsTrigger>
          <TabsTrigger value="text" className="text-xs">
            Text
          </TabsTrigger>
          <TabsTrigger value="videos" className="text-xs">
            Videos
          </TabsTrigger>
          <TabsTrigger value="audio" className="text-xs">
            Audio
          </TabsTrigger>
          <TabsTrigger value="effects" className="text-xs">
            Effects
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-y-auto">
          <TabsContent value="elements" className="p-4 space-y-4 m-0">
            <div className="space-y-4">
              {elements.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-3">
                    <category.icon className="w-4 h-4" />
                    <h3 className="text-sm font-medium">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <Button key={itemIndex} variant="outline" size="sm" className="text-xs h-8">
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
              <Wand2 className="w-4 h-4 mr-2" />
              Generate Elements
            </Button>
          </TabsContent>

          <TabsContent value="text" className="p-4 space-y-4 m-0">
            <div>
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Type className="w-4 h-4" />
                Text Styles
              </h3>
              <div className="space-y-2">
                {textStyles.map((style, index) => (
                  <Button key={index} variant="outline" className="w-full justify-start text-xs h-10">
                    <span className={style.style}>{style.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Font Size</h3>
              <Slider value={fontSize} onValueChange={setFontSize} max={72} min={8} step={1} className="w-full" />
              <div className="text-xs text-gray-400 mt-1">{fontSize[0]}px</div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Colors</h3>
              <div className="grid grid-cols-6 gap-2">
                {["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"].map(
                  (color, index) => (
                    <div key={index} className={`w-8 h-8 rounded cursor-pointer ${color}`}></div>
                  ),
                )}
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Text Generator
            </Button>
          </TabsContent>

          <TabsContent value="videos" className="p-4 space-y-4 m-0">
            <div>
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Video className="w-4 h-4" />
                Video Library
              </h3>
              <div className="space-y-2">
                {videoCategories.map((category, index) => (
                  <Button key={index} variant="outline" className="w-full justify-between text-xs h-10">
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Upload Video</h3>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                <Video className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-xs text-gray-400">Drag & drop videos here</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Browse Files
                </Button>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Video Generator
            </Button>
          </TabsContent>

          <TabsContent value="audio" className="p-4 space-y-4 m-0">
            <div>
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Music className="w-4 h-4" />
                Audio Library
              </h3>
              <div className="space-y-2">
                {audioCategories.map((category, index) => (
                  <Button key={index} variant="outline" className="w-full justify-between text-xs h-10">
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Volume Control</h3>
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="flex-1" />
                <span className="text-xs text-gray-400 w-8">{volume[0]}%</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Record Audio</h3>
              <Button variant="outline" className="w-full">
                <Mic className="w-4 h-4 mr-2" />
                Start Recording
              </Button>
            </div>

            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Audio Generator
            </Button>
          </TabsContent>

          <TabsContent value="effects" className="p-4 space-y-4 m-0">
            <div>
              <h3 className="text-sm font-medium mb-3">Transitions</h3>
              <div className="grid grid-cols-2 gap-2">
                {transitions.map((transition, index) => (
                  <Button key={index} variant={transition.active ? "default" : "outline"} size="sm" className="text-xs">
                    {transition.name}
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500" onClick={onGenerateAI}>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate with AI
            </Button>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Recommended Hashtags</h3>
                <Hash className="w-4 h-4 text-gray-400" />
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex gap-1 flex-wrap">
                  {hashtags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs cursor-pointer hover:bg-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap">
                  {hashtags.slice(3, 6).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs cursor-pointer hover:bg-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap">
                  {hashtags.slice(6).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs cursor-pointer hover:bg-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400">Custom Hashtags</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add custom hashtag"
                    className="flex-1 bg-gray-700 border-gray-600 text-xs"
                    value={customHashtag}
                    onChange={(e) => setCustomHashtag(e.target.value)}
                  />
                  <Button size="sm" onClick={handleAddHashtag}>
                    Add
                  </Button>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy All
                </Button>
                <Button size="sm" className="flex-1" onClick={() => onApplyHashtags?.(hashtags)}>
                  Apply All
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Testing"
                  className="flex-1 bg-gray-700 border-gray-600 text-sm resize-none"
                  rows={2}
                />
                <Button size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
