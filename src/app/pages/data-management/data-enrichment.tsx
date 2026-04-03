import React from 'react';
import { 
  Sparkles, 
  Settings, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  RefreshCw,
  Database,
  ArrowRight,
  Info
} from 'lucide-react';

export function DataEnrichment() {
  return (
    <div className="min-h-screen bg-[#f5f8fa] font-sans text-[#33475b]">
      {/* Header */}
      <header className="bg-white border-b border-[#eaf0f6] px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-[#2d3e50]">Data enrichment</h1>
            <span className="bg-[#eaf0f6] text-[#516f90] text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase flex items-center">
              <Sparkles size={10} className="mr-1 text-[#00a4bd]" />
              Breeze Intelligence
            </span>
          </div>
          <p className="text-xs text-[#516f90]">
            Automatically update and enhance your contact and company records.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 text-[#516f90] hover:bg-[#f5f8fa] rounded-sm">
            <Settings size={20} />
          </button>

          <button className="bg-[#ff7a59] text-white px-4 py-2 rounded-sm font-bold text-sm hover:bg-[#ff8f73] transition-colors">
            Enrich records
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-[#eaf0f6] px-8 flex">
        <button className="px-6 py-3 text-sm font-bold border-b-2 border-[#ff7a59]">
          Overview
        </button>
        <button className="px-6 py-3 text-sm text-[#516f90] hover:bg-[#f5f8fa]">
          Mapping
        </button>
        <button className="px-6 py-3 text-sm text-[#516f90] hover:bg-[#f5f8fa]">
          Exclusions
        </button>
      </div>

      <main className="max-w-7xl mx-auto p-8">
        {/* Credits */}
        <div className="bg-white border border-[#cbd6e2] rounded-sm p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-[#e5f5f8] rounded-full">
              <Zap size={20} className="text-[#00a4bd]" />
            </div>
            <div>
              <div className="text-sm font-bold">
                1,250 enrichment credits remaining
              </div>
              <div className="text-xs text-[#516f90]">
                Resets May 1, 2026
              </div>
            </div>
          </div>

          <button className="text-[#00a4bd] text-sm font-bold hover:underline">
            Manage credits
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status */}
            <div className="bg-white border border-[#cbd6e2] rounded-sm overflow-hidden">
              <div className="p-6 border-b border-[#eaf0f6]">
                <h3 className="font-bold text-lg">Enrichment status</h3>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex space-x-4">
                  <CheckCircle2 className="text-green-500 mt-1" size={24} />
                  <div>
                    <div className="text-2xl font-bold">12,482</div>
                    <div className="text-sm text-[#516f90]">Company records</div>
                    <div className="text-xs text-green-500 flex items-center mt-1">
                      <RefreshCw size={12} className="mr-1" />
                      Updated this week
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <CheckCircle2 className="text-[#00a4bd] mt-1" size={24} />
                  <div>
                    <div className="text-2xl font-bold">8,931</div>
                    <div className="text-sm text-[#516f90]">Contact records</div>
                    <div className="text-xs text-[#00a4bd] flex items-center mt-1">
                      <RefreshCw size={12} className="mr-1" />
                      Updated this week
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tasks */}
            <div>
              <h3 className="text-lg font-bold mb-4">
                Popular enrichment tasks
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Enrich companies', icon: <Database size={20} /> },
                  { title: 'Fill emails', icon: <Sparkles size={20} /> },
                  { title: 'Update titles', icon: <CheckCircle2 size={20} /> },
                  { title: 'Industry data', icon: <Info size={20} /> }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#cbd6e2] p-4 rounded-sm hover:shadow"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-bold text-sm">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#2d3e50] text-white p-6 rounded-sm">
              <h3 className="font-bold mb-3 flex items-center">
                <Sparkles size={18} className="mr-2" />
                Breeze Intelligence
              </h3>

              <p className="text-sm text-blue-100 mb-4">
                Enrich CRM data with millions of records.
              </p>

              <ul className="text-xs space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight size={12} className="mr-2" />
                  40+ company fields
                </li>
                <li className="flex items-center">
                  <ArrowRight size={12} className="mr-2" />
                  20+ contact fields
                </li>
              </ul>

              <button className="w-full bg-[#00a4bd] py-2 rounded text-sm font-bold">
                View properties
              </button>
            </div>

            {/* Resources */}
            <div className="bg-white border border-[#cbd6e2] p-6 rounded-sm">
              <h4 className="font-bold text-sm mb-3">Resources</h4>

              <ul className="space-y-3 text-xs">
                <li className="flex justify-between items-center text-[#00a4bd] font-bold">
                  Best practices <ExternalLink size={12} />
                </li>
                <li className="flex justify-between items-center text-[#00a4bd] font-bold">
                  Mapping guide <ExternalLink size={12} />
                </li>
                <li className="flex justify-between items-center text-[#00a4bd] font-bold">
                  Credit usage <ExternalLink size={12} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}