import React from 'react';
import { 
  AlertTriangle, 
  Settings, 
  RefreshCw, 
  ChevronDown, 
  Info,
  Database,
  Zap,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export function DataQuality() {
  return (
    <div className="min-h-screen bg-[#f5f8fa] font-sans text-[#33475b]">
      
      {/* Header */}
      <header className="bg-white border-b border-[#eaf0f6] px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-[#2d3e50]">
            Data quality command center
          </h1>
          <p className="text-xs text-[#516f90]">
            Monitor and improve your CRM data health.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Settings size={20} className="text-[#516f90]" />
          <button className="bg-[#ff7a59] text-white px-4 py-2 rounded-sm text-sm font-bold">
            View all issues
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-white border-b px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Properties" value="1,240" status="Healthy" color="text-green-500" />
        <Stat label="Records" value="84,327" status="6 issues" color="text-orange-500" />
        <Stat label="Data sync" value="12 active" status="Healthy" color="text-green-500" />
        <Stat label="Workflows" value="458" status="12 unused" color="text-blue-500" />
      </div>

      <main className="max-w-7xl mx-auto p-8 space-y-8">

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Properties */}
          <Card title="Properties" icon={<Database size={18} />}>
            <Item
              icon={<AlertTriangle className="text-orange-500" />}
              title="Unused properties"
              desc="245 properties have no data"
              value="245"
            />
            <Item
              icon={<Sparkles className="text-blue-500" />}
              title="Duplicate properties"
              desc="12 duplicates detected"
              value="12"
            />
          </Card>

          {/* Sync */}
          <Card title="Data sync" icon={<RefreshCw size={18} />}>
            <Item
              icon={<RefreshCw />}
              title="Sync failures"
              desc="All apps syncing correctly"
              value="0"
              highlight="text-green-500"
            />
            <Item
              icon={<Info />}
              title="Inactive syncs"
              desc="2 apps turned off"
              value="2"
            />
          </Card>
        </div>

        {/* Record Health */}
        <div className="bg-white border rounded-sm p-6">
          <div className="flex justify-between mb-6">
            <h3 className="font-bold text-lg">Record health</h3>
            <button className="text-sm border px-3 py-1 rounded">
              Last 30 days <ChevronDown size={14} className="inline ml-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Health value="42" label="Formatting issues" />
            <Health value="15" label="Duplicate issues" />
            <Health value="0" label="Workflow errors" good />
          </div>
        </div>

        {/* AI Banner */}
        <div className="bg-blue-50 border border-blue-400 p-6 rounded flex gap-4">
          <Zap className="text-blue-500" />
          <div>
            <h4 className="font-bold mb-1">AI Recommendations</h4>
            <p className="text-sm text-gray-600 mb-3">
              15 records can be automatically fixed.
            </p>

            <div className="space-x-3">
              <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm">
                Fix all
              </button>
              <button className="text-blue-600 text-sm">
                Review
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

/* Reusable Components */

function Stat({
  label,
  value,
  status,
  color
}: {
  label: string;
  value: string;
  status: string;
  color: string;
}) {
  return (
    <div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className="flex items-center gap-2">
        <span className="font-bold">{value}</span>
        <span className={`text-xs ${color}`}>{status}</span>
      </div>
    </div>
  );
}

function Card({
  title,
  icon,
  children
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border rounded-sm p-5 space-y-4">
      <div className="flex items-center gap-2 font-bold">
        {icon} {title}
      </div>
      {children}
    </div>
  );
}

function Item({
  icon,
  title,
  desc,
  value,
  highlight
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  value: string;
  highlight?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div>{icon}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-gray-500">{desc}</div>
        </div>
      </div>
      <div className={`font-bold ${highlight || ""}`}>{value}</div>
    </div>
  );
}

function Health({
  value,
  label,
  good = false
}: {
  value: string;
  label: string;
  good?: boolean;
}) {
  return (
    <div>
      <div className={`text-2xl font-bold ${good ? "text-green-500" : "text-orange-500"}`}>
        {value}
      </div>
      <div className="text-sm font-semibold">{label}</div>
      <button className="text-xs text-blue-600 mt-2 flex items-center justify-center w-full">
        View <ArrowUpRight size={12} className="ml-1" />
      </button>
    </div>
  );
}