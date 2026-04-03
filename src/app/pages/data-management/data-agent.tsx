import React from 'react';
import { 
  Sparkles, 
  Search, 
  Plus, 
  Settings, 
  HelpCircle, 
  ChevronRight,
  Database,
  Wand2,
  FileText,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export function DataAgent(){
  return (
    <div className="min-h-screen bg-[#f5f8fa] font-sans text-[#33475b]">
      {/* Header */}
      <header className="bg-white border-b border-[#eaf0f6] px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-[#2d3e50]">Data Agent</h1>
          <span className="bg-[#eaf0f6] text-[#516f90] text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
            Beta
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#516f90]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-[#f5f8fa] border border-[#cbd6e2] rounded-sm text-sm focus:outline-none focus:border-[#00a4bd] w-64"
            />
          </div>

          <button className="bg-[#ff7a59] text-white px-4 py-2 rounded-sm font-bold text-sm hover:bg-[#ff8f73] transition-colors flex items-center">
            <Plus size={16} className="mr-2" />
            Create smart property
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        {/* Welcome */}
        <section className="bg-white border border-[#cbd6e2] rounded-sm p-8 mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="md:w-3/5 z-10">
            <h2 className="text-3xl font-bold text-[#2d3e50] mb-4">
              Welcome to Data Agent
            </h2>
            <p className="text-lg text-[#516f90] mb-6">
              Your personal data operations professional. Use AI to answer questions,
              transform your data, and enhance workflows.
            </p>

            <div className="flex space-x-4">
              <button className="bg-[#2d3e50] text-white px-6 py-2.5 rounded-sm font-bold hover:bg-[#1e2a36] transition-colors">
                Get started
              </button>

              <button className="text-[#00a4bd] font-bold hover:underline flex items-center">
                Learn how it works
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="md:w-2/5 mt-8 md:mt-0 flex justify-end relative">
            <div className="w-64 h-64 bg-gradient-to-br from-[#ff7a59] to-[#00a4bd] rounded-full opacity-10 blur-3xl absolute top-0 right-0" />

            <div className="relative bg-white p-6 rounded-lg shadow-xl border border-[#eaf0f6] w-full max-w-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-[#e5f5f8] rounded-lg">
                  <Sparkles className="text-[#00a4bd]" size={24} />
                </div>
                <div className="font-bold">Data Agent</div>
              </div>

              <div className="space-y-3">
                <div className="h-2 bg-[#eaf0f6] rounded w-full" />
                <div className="h-2 bg-[#eaf0f6] rounded w-5/6" />
                <div className="h-2 bg-[#eaf0f6] rounded w-4/6" />
              </div>

              <div className="mt-6 pt-4 border-t border-[#eaf0f6]">
                <div className="text-xs text-[#516f90] mb-2 uppercase font-bold">
                  Suggested action
                </div>

                <div className="text-sm font-medium p-2 bg-[#f5f8fa] rounded border border-[#cbd6e2] flex justify-between items-center cursor-pointer hover:bg-white transition-colors">
                  Clean duplicate contacts
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Smart Properties */}
          <div className="bg-white border border-[#cbd6e2] rounded-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#e5f5f8] rounded-sm mr-4">
                <Database className="text-[#00a4bd]" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-lg">Smart Properties</h3>
                <p className="text-sm text-[#516f90]">
                  AI-powered custom properties for business insights.
                </p>
              </div>
            </div>

            <div className="bg-[#f5f8fa] p-4 rounded-sm mb-4 border border-dashed border-[#cbd6e2]">
              <p className="text-sm italic text-[#516f90]">
                "Check if a company has a board of directors."
              </p>
            </div>

            <button className="text-[#00a4bd] font-bold text-sm hover:underline flex items-center">
              Create property
              <Plus size={14} className="ml-1" />
            </button>
          </div>

          {/* Smart Actions */}
          <div className="bg-white border border-[#cbd6e2] rounded-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#fff1f0] rounded-sm mr-4">
                <Wand2 className="text-[#ff7a59]" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-lg">Smart Actions</h3>
                <p className="text-sm text-[#516f90]">
                  Automate workflows with AI actions.
                </p>
              </div>
            </div>

            <div className="bg-[#f5f8fa] p-4 rounded-sm mb-4 border border-dashed border-[#cbd6e2]">
              <p className="text-sm italic text-[#516f90]">
                "Format phone numbers globally."
              </p>
            </div>

            <button className="text-[#00a4bd] font-bold text-sm hover:underline flex items-center">
              Explore actions
              <ChevronRight size={14} className="ml-1" />
            </button>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#2d3e50] mb-6">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Research', icon: <Search size={20} />, color: 'bg-blue-50 text-blue-600' },
              { title: 'Summarize', icon: <FileText size={20} />, color: 'bg-purple-50 text-purple-600' },
              { title: 'Clean', icon: <Database size={20} />, color: 'bg-green-50 text-green-600' },
              { title: 'Sentiment', icon: <MessageSquare size={20} />, color: 'bg-orange-50 text-orange-600' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#cbd6e2] rounded-sm p-4 hover:shadow-md cursor-pointer"
              >
                <div className={`w-10 h-10 ${item.color} flex items-center justify-center mb-2 rounded`}>
                  {item.icon}
                </div>
                <p className="font-bold text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activity */}
        <section className="bg-white border border-[#cbd6e2] rounded-sm p-8 text-center">
          <Database size={32} className="mx-auto text-[#cbd6e2] mb-4" />
          <h4 className="font-bold">No activity yet</h4>
          <p className="text-sm text-[#516f90]">
            Your actions will appear here.
          </p>
        </section>
      </main>
    </div>
  );
}