import React from 'react';
import { 
  Search, 
  ChevronDown, 
  Plus, 
  Info, 
  Maximize2, 
  ZoomIn, 
  ZoomOut,
  MousePointer2,
  Share2,
  Database,
  MoreHorizontal
} from 'lucide-react';

export function DataModel() {
  return (
    <div className="min-h-screen bg-[#f5f8fa] font-sans text-[#33475b]">
      {/* Header */}
      <header className="bg-white border-b border-[#eaf0f6] px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-bold text-[#2d3e50]">
            Data model overview
          </h1>
          <p className="text-xs text-[#516f90]">
            Visualize how your CRM data is structured and connected.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button className="text-sm font-bold text-[#00a4bd] hover:underline">
            How it works
          </button>
          <button className="bg-[#ff7a59] text-white px-4 py-2 rounded-sm font-bold text-sm hover:bg-[#ff8f73]">
            Explore recommendations
          </button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-white border-b border-[#eaf0f6] px-8 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-[#516f90]">Filter by:</span>
          <button className="text-sm font-bold text-[#00a4bd] flex items-center">
            All objects <ChevronDown size={14} className="ml-1" />
          </button>

          <div className="relative ml-4">
            <Search
              size={14}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-[#516f90]"
            />
            <input
              placeholder="Search objects"
              className="pl-7 pr-3 py-1 border rounded-sm text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <MousePointer2 size={16} />
          <Maximize2 size={16} />
          <ZoomOut size={16} />
          <ZoomIn size={16} />
          <Share2 size={16} />
        </div>
      </div>

      {/* Main */}
      <main className="p-8 relative h-[calc(100vh-120px)]">
        <div className="w-full h-full bg-white border rounded-sm p-10 relative overflow-auto">

          {/* Object Groups */}
          <div className="flex space-x-20">

            {/* CRM */}
            <div>
              <h3 className="font-bold mb-4">
                CRM objects
              </h3>

              <div className="space-y-6">
                <Card title="Company" properties="152" associations="12" active />
                <Card title="Contact" properties="210" associations="8" />
              </div>
            </div>

            {/* Sales */}
            <div>
              <h3 className="font-bold mb-4">
                Sales objects
              </h3>

              <div className="space-y-6">
                <Card title="Deal" properties="84" associations="15" />
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="absolute top-10 right-10 w-72 bg-gray-50 border rounded-lg p-5 shadow">
            <div className="flex items-center mb-3">
              <Info size={18} className="text-[#00a4bd] mr-2" />
              <h4 className="font-bold">Understand your data</h4>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              View how objects connect and manage relationships.
            </p>

            <ul className="text-xs text-gray-600 space-y-2 mb-4">
              <li className="flex items-center">
                <Plus size={12} className="mr-2 text-[#00a4bd]" />
                Create objects
              </li>
              <li className="flex items-center">
                <Plus size={12} className="mr-2 text-[#00a4bd]" />
                Manage associations
              </li>
            </ul>

            <button className="w-full bg-black text-white py-2 rounded text-sm">
              Explore
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-8 left-8 bg-white border rounded-full px-4 py-2 flex space-x-4 text-xs">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Primary
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
            Standard
          </span>
        </div>
      </main>
    </div>
  );
}

/* Reusable Card Component */
function Card({
  title,
  properties,
  associations,
  active = false,
}: {
  title: string;
  properties: string;
  associations: string;
  active?: boolean;
}) {
  return (
    <div
      className={`w-64 border rounded-lg shadow-sm ${
        active ? "border-blue-500" : "border-gray-200"
      }`}
    >
      <div className="p-3 flex justify-between items-center border-b">
        <span className="font-semibold text-sm flex items-center">
          <Database size={14} className="mr-2" />
          {title}
        </span>
        <MoreHorizontal size={14} />
      </div>

      <div className="p-3 text-xs text-gray-600 space-y-1">
        <div className="flex justify-between">
          <span>Properties</span>
          <span>{properties}</span>
        </div>
        <div className="flex justify-between">
          <span>Associations</span>
          <span>{associations}</span>
        </div>
      </div>
    </div>
  );
}