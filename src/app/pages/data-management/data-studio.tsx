import React from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  Download, 
  Share2, 
  ChevronDown, 
  Sparkles,
  Table as TableIcon,
  LayoutDashboard,
  ArrowUpRight,
  Zap,
  Lock
} from 'lucide-react';

export function DataStudio() {
  return (
    <div className="min-h-screen bg-[#f5f8fa] font-sans text-[#33475b]">
      
      {/* Header */}
      <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-[#2d3e50]">Data studio</h1>
          <p className="text-xs text-[#516f90]">
            Combine and analyze your data in one place.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Share2 size={20} className="text-[#516f90]" />
          <button className="bg-[#ff7a59] text-white px-4 py-2 rounded-sm text-sm font-bold flex items-center">
            <Plus size={16} className="mr-2" />
            Create dataset
          </button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-white border-b px-8 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">View:</span>
          <button className="text-sm font-bold text-[#00a4bd] flex items-center">
            All datasets <ChevronDown size={14} className="ml-1" />
          </button>

          <div className="relative">
            <Search
              size={14}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              placeholder="Search datasets"
              className="pl-7 pr-3 py-1 border rounded-sm text-sm w-64"
            />
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="border px-3 py-1 text-xs rounded flex items-center">
            <Filter size={14} className="mr-1" /> Filter
          </button>
          <button className="border px-3 py-1 text-xs rounded flex items-center">
            <Download size={14} className="mr-1" /> Export
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-8 space-y-10">

        {/* Empty State */}
        <div className="bg-white border rounded-sm p-10 text-center shadow-sm">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <TableIcon size={40} className="text-blue-500" />
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Unify your data with Data Studio
          </h2>

          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            Blend multiple data sources into one powerful dataset for insights and automation.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-2 rounded">
              Create dataset
            </button>
            <button className="border px-6 py-2 rounded flex items-center">
              Explore <ArrowUpRight size={16} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            icon={<LayoutDashboard className="text-blue-500" />}
            title="Easy interface"
            desc="Work in a spreadsheet-like UI."
          />
          <Feature
            icon={<Sparkles className="text-purple-500" />}
            title="AI insights"
            desc="Discover patterns automatically."
          />
          <Feature
            icon={<Zap className="text-orange-500" />}
            title="Integrations"
            desc="Connect data across systems."
          />
        </div>

        {/* Upgrade Banner */}
        <div className="bg-gray-900 text-white rounded p-6 flex justify-between items-center">
          <div>
            <div className="flex items-center text-orange-400 text-xs mb-2">
              <Lock size={14} className="mr-1" />
              PRO FEATURE
            </div>

            <h3 className="text-xl font-bold mb-1">
              Unlock advanced data blending
            </h3>

            <p className="text-sm text-gray-300">
              Upgrade to access advanced analytics and AI features.
            </p>
          </div>

          <button className="bg-orange-500 px-6 py-2 rounded text-sm font-bold">
            Upgrade
          </button>
        </div>

      </main>
    </div>
  );
}

/* Reusable Feature Component */
function Feature({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border rounded-sm p-5">
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}