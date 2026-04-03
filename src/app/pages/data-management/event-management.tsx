import React from 'react';
import { 
  ChevronDown, 
  ExternalLink,
  Play,
  LineChart
} from 'lucide-react';

export function EventManagement() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#33475b]">
      
      {/* Header */}
      <header className="border-b border-[#eaf0f6] px-8 py-4 flex justify-between items-center sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-[#2d3e50]">
          Event management
        </h1>

        <button className="bg-[#2d3e50] text-white px-4 py-2 rounded-sm text-sm font-bold flex items-center">
          Create an event
          <ChevronDown size={16} className="ml-2" />
        </button>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Left Content */}
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              Track the activity that matters most to your business.
            </h2>

            <p className="text-gray-500 mb-8">
              Create custom events to track user interactions and analyze performance
              across your tools.
            </p>

            <div>
              <p className="text-sm text-gray-500 mb-2">
                New to custom events?
              </p>

              <a
                href="#"
                className="text-blue-600 font-semibold flex items-center"
              >
                View guide
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full max-w-sm">

            {/* Screen */}
            <div className="bg-white border-2 rounded-xl h-44 flex items-center justify-center shadow rotate-[-6deg]">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Play size={28} className="text-blue-500 ml-1" />
              </div>
            </div>

            {/* Chart */}
            <div className="absolute bottom-[-20px] right-0 bg-white border rounded-lg w-40 h-28 p-3 shadow rotate-3">
              <div className="flex items-end gap-1 h-full">
                <div className="w-2 bg-orange-400 h-1/3 rounded"></div>
                <div className="w-2 bg-orange-400 h-1/2 rounded"></div>
                <div className="w-2 bg-orange-400 h-4/5 rounded"></div>
                <div className="w-2 bg-orange-400 h-2/5 rounded"></div>
              </div>

              <LineChart className="absolute inset-0 text-blue-500 opacity-70" />
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}