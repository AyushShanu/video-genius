import { RecentChats } from "./RecentChats";
import { QuickPrompts } from "./QuickPrompts";
import { GeneratedMediaPanel } from "./GeneratedMediaPanel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AIAssistantPanel() {
  return (
 <div className="flex flex-col md:flex-row h-full gap-6 p-6 bg-gray-900 text-white">
  {/* Left Content */}
  <div className="flex-1 flex flex-col h-full">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold text-white">AI Assistant</h1>
      <Button className="border-2 text-white">
        <Plus className="h-4 w-4 mr-2" />
        New Chat
      </Button>
    </div>

    {/* Recent Chats */}
    <div className="mb-6">
      <RecentChats />
    </div>

    {/* Spacer grows to push AI panel to bottom */}
    <div className="flex-grow" />

    {/* AI Panel + Input */}
    <div className="space-y-4">
      <div className="rounded-lg border border-gray-800 bg-gray-900 px-6 py-6 text-center space-y-5 shadow-inner">
        <div className="text-white font-semibold text-lg">VideoGenius AI</div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
          I can help you create, edit, and enhance your videos. Ask me to generate video content or provide editing suggestions.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-[#1c1c1c] hover:bg-gray-700 text-white py-2 px-3 rounded text-sm border border-gray-700">Create a product video</button>
          <button className="bg-[#1c1c1c] hover:bg-gray-700 text-white py-2 px-3 rounded text-sm border border-gray-700">Edit my video</button>
          <button className="bg-[#1c1c1c] hover:bg-gray-700 text-white py-2 px-3 rounded text-sm border border-gray-700">Social media ads</button>
          <button className="bg-[#1c1c1c] hover:bg-gray-700 text-white py-2 px-3 rounded text-sm border border-gray-700">Generate captions</button>
        </div>
      </div>

      <form className="flex items-center border border-gray-800 rounded-lg px-4 py-2 bg-[#121212]">
        <input
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-500"
          type="text"
          placeholder="Message VideoGenius AI..."
        />
        <button type="submit" className="text-blue-500 font-semibold px-2">Send</button>
      </form>
    </div>
  </div>

  {/* Right Sidebar */}
  <div className="w-full md:w-72 flex flex-col gap-5 h-full">
    <GeneratedMediaPanel />
    <QuickPrompts />
  </div>
</div>

  );
}