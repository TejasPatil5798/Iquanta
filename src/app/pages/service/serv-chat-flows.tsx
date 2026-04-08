import React, { useState } from "react";
import { 
  X, 
  ExternalLink, 
  MessageSquare, 
  Monitor, 
  Smartphone, 
  Facebook, 
  Plus, 
  Info,
  ChevronRight,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function ServChatFlows() {
  const [activeTab, setActiveTab] = useState("Web Chat");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Yellow Tracking Code Banner */}
      <div className="bg-[#fffdf0] border-b border-[#f5e1a4] py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-[#1f2937] font-semibold text-base flex items-center gap-2">
            Install your tracking code
          </p>
          <span className="text-gray-500 text-sm">
            You'll need to install the tracking code on your website, so we know where your chatflow should appear.
          </span>
          <button className="ml-4 border border-gray-300 bg-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center gap-1">
            Get tracking code <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-8 py-8">
        {/* 2. Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#1f2937]">Chatflows</h1>
          <Button className="bg-[#101215] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-colors">
            Create chatflow
          </Button>
        </div>

        {/* 3. Priority Order Green Alert */}
        <div className="bg-[#f0f9f1] border border-[#d1e7dd] rounded-xl p-4 mb-8 flex items-center justify-between relative overflow-hidden group">
          <div className="flex items-center gap-4">
            <span className="bg-[#22c55e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              New
            </span>
            <p className="text-[#1f2937] font-semibold text-base">
              Easily set chatflow priority order
              <span className="ml-2 font-normal text-gray-600">
                You can now easily assign a custom priority to your chatflows without using drag-and-drop. Read detailed 
                <a href="#" className="text-[#0091ae] hover:underline ml-1 inline-flex items-center gap-0.5">
                  instructions <ExternalLink className="w-3.5 h-3.5" />
                </a>.
              </span>
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 4. Tabs Section */}
        <div className="border-b border-gray-200 mb-20">
          <div className="flex gap-12">
            {["Web Chat", "Mobile Chat", "Facebook Messenger"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab 
                    ? "text-[#1f2937]" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1f2937]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Empty State Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mt-12 py-12">
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl font-bold text-[#111827] mb-6">
              Create your first chatflow
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              With chatflows, you can create custom chat experiences for visitors on your website or Facebook pages—with as little or as much automation as you need.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Create a simple welcome message to greet visitors and direct them to your live team, or build bots to help qualify leads or support customers.
            </p>
          </div>

          {/* Illustration Content */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative w-80 h-80">
              {/* Illustration Components using Lucide Icons and SVGs for a similar look */}
              <div className="absolute top-0 right-0 w-[240px] h-[180px] bg-[#f0f9ff] rounded-3xl border border-blue-50 shadow-sm flex flex-col justify-center items-center p-6 transform rotate-3 z-10">
                <div className="w-full h-2 bg-blue-100 rounded-full mb-3" />
                <div className="w-3/4 h-2 bg-blue-100 rounded-full mb-3 self-start" />
                <div className="w-1/2 h-2 bg-blue-100 rounded-full self-start" />
                <div className="absolute -bottom-4 -left-4 p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                  <MessageCircle className="w-8 h-8 text-[#0091ae]" />
                </div>
              </div>
              
              <div className="absolute bottom-10 left-0 w-[200px] h-[140px] bg-[#fff7ed] rounded-3xl border border-orange-50 shadow-sm flex flex-col p-6 transform -rotate-6 z-20">
                <div className="w-full h-2 bg-orange-100 rounded-full mb-3" />
                <div className="w-2/3 h-2 bg-orange-100 rounded-full mb-6 self-start" />
                <div className="flex gap-2 self-end mt-auto">
                    <div className="w-6 h-6 rounded-full bg-orange-200" />
                </div>
              </div>

              {/* Speech Bubble Icon Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                <Sparkles className="w-64 h-64 text-blue-200" />
              </div>
              
              {/* Dots Decoration */}
              <div className="absolute bottom-4 right-10 flex gap-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-blue-200" />
                ))}
              </div>
            </div>
            
            {/* Added a more explicit SVG illustration for the chat bubbles if possible */}
            <svg className="absolute w-[350px] h-[350px] z-0 opacity-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="url(#paint0_radial_0_1)" fillOpacity="0.1" />
                <defs>
                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(80)">
                        <stop stopColor="#0091ae" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}