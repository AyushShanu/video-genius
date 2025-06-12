"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PerformanceChart() {
  const days = ["Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12"]

  return (
    <Card className="lg:col-span-2 bg-gray-900/50 border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">Performance Overview</CardTitle>
            <CardDescription className="text-gray-400">Your content performance across platforms</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-gray-300">
              7D
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-600 border-blue-600 text-white">
              30D
            </Button>
            <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-gray-300">
              90D
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 rounded"
            style={{
              clipPath:
                "polygon(0 80%, 10% 75%, 20% 70%, 30% 65%, 40% 60%, 50% 55%, 60% 50%, 70% 45%, 80% 40%, 90% 35%, 100% 30%, 100% 100%, 0% 100%)",
            }}
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-400">
            {days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
