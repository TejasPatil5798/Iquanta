import { useState } from "react";
import {
  ChevronDown,
  Search,
  Settings,
  MoreHorizontal,
  Download,
  Upload,
  Filter,
  ArrowDownUp,
  Save,
  Lock,
  Plus,
  List,
  SearchX,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";

export function Calls() {
  const [activeTab, setActiveTab] = useState<"recorded" | "all">("recorded");

  const mockData = [
    {
      title: "Call with Maria Johnson (S...",

      date: "Mar 10, 2026 6:15 PM GMT+5:...",

      direction: "--",

      outcome: "--",
    },

    {
      title: "Call with Brian Halligan (S...",

      date: "Mar 10, 2026 6:15 PM GMT+5:...",

      direction: "--",

      outcome: "--",
    },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white -m-6 rounded-tl-lg shadow-sm border border-gray-200">
      {/* Top Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-4 border-b-2 border-transparent">
          <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">
            <List className="w-4 h-4 text-gray-500" />
            Calls
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>

          <button className="px-4 py-1.5 text-white bg-gray-900 rounded-md hover:bg-gray-800 text-sm font-medium">
            Import
          </button>
        </div>
      </div>

      <div className="px-6 flex items-end gap-1 border-b border-gray-200 bg-gray-50/50 pt-2">
        {/* Tabs */}

        <button
          onClick={() => setActiveTab("recorded")}
          className={`px-4 py-3 text-sm font-medium border-x border-t rounded-t-lg transition-colors flex items-center gap-2 ${
            activeTab === "recorded"
              ? "bg-white border-gray-200 text-gray-900 border-b-white relative top-[1px]"
              : "border-transparent text-gray-600 hover:bg-gray-100"
          }`}
        >
          Recorded calls
          <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            0
          </span>
        </button>

        <div className="h-6 w-px bg-gray-300 mx-1 mb-2" />

        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-3 text-sm font-medium border-x border-t rounded-t-lg transition-colors flex items-center gap-2 ${
            activeTab === "all"
              ? "bg-white border-gray-200 text-gray-900 border-b-white relative top-[1px]"
              : "border-transparent text-gray-600 hover:bg-gray-100"
          }`}
        >
          All calls
          <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            2
          </span>
        </button>

        <button className="px-3 py-2 mb-1 ml-2 text-gray-500 hover:bg-gray-200 rounded-md transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Toolbar Line 1 */}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative max-w-sm w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 font-medium hover:bg-gray-50 border-r border-gray-300">
                <List className="w-3.5 h-3.5" />
                Table view
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <button className="px-2 py-1.5 text-gray-500 hover:bg-gray-50">
                <Settings className="w-4 h-4" />
              </button>
            </div>

            <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap">
              Edit columns
            </button>

            <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap">
              <Filter className="w-3.5 h-3.5" />
              Filters {activeTab === "recorded" ? "(1)" : ""}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap">
              <ArrowDownUp className="w-3.5 h-3.5" /> Sort
            </button>

            {activeTab === "all" ? (
              <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap">
                Export
              </button>
            ) : (
              <button className="px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <Upload className="w-4 h-4" />
              </button>
            )}

            <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap">
              <Save className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        </div>

        {/* Toolbar Line 2 (Filters) */}

        <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-900">
            <button className="flex items-center gap-1.5 hover:text-blue-600 group">
              <Lock className="w-3 h-3 text-gray-400 group-hover:text-blue-600" />
              Transcript avail...
              <ChevronDown className="w-3 h-3 text-gray-500 ml-1" />
            </button>

            <button className="flex items-center gap-1.5 hover:text-blue-600">
              Activity assigned to
              <ChevronDown className="w-3 h-3 text-gray-500 ml-1" />
            </button>

            <button className="flex items-center gap-1.5 hover:text-blue-600">
              Activity date
              <ChevronDown className="w-3 h-3 text-gray-500 ml-1" />
            </button>

            <button className="flex items-center gap-1.5 hover:text-blue-600">
              Call duration
              <ChevronDown className="w-3 h-3 text-gray-500 ml-1" />
            </button>

            <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700">
              <Plus className="w-3.5 h-3.5" /> More
            </button>
          </div>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md whitespace-nowrap">
            <Filter className="w-3.5 h-3.5" /> Advanced filters
            {activeTab === "recorded" && (
              <span className="ml-1 opacity-50">X</span>
            )}
          </button>
        </div>
      </div>

      {/* Main Extensible Content */}

      <div className="border-t border-gray-200 bg-white min-h-[400px]">
        {activeTab === "recorded" ? (
          <div className="flex flex-col items-center justify-center h-full py-20 px-4 text-center">
            <div className="max-w-md w-full flex flex-col items-center">
              <div className="w-48 h-48 mb-8 text-blue-100 relative">
                {/* Empty State Vector Graphic */}

                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z"
                    fill="#F8FAFC"
                  />

                  <path
                    d="M135 135L165 165"
                    stroke="#E2E8F0"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="90"
                    cy="90"
                    r="45"
                    fill="white"
                    stroke="#CBD5E1"
                    strokeWidth="8"
                  />

                  <path
                    d="M105 105L125 125"
                    stroke="#CBD5E1"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />

                  <circle cx="80" cy="80" r="20" fill="#E0F2FE" />

                  <path
                    d="M90 40L95 35M140 90L145 85M40 90L35 85"
                    stroke="#94A3B8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 text-left w-full">
                No matches for the current filters.
              </h3>

              <p className="text-gray-600 text-left w-full">
                Expecting to see a new item? Try again in a few seconds as the
                system catches up.
              </p>
            </div>
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <th className="px-4 py-3 w-12 text-center border-r border-gray-200">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </th>

                <th className="px-4 py-3 border-r border-gray-200">
                  Call Title
                </th>

                <th className="px-4 py-3 border-r border-gray-200">
                  Activity date (GMT+5:30)
                </th>

                <th className="px-4 py-3 border-r border-gray-200">
                  Call direction
                </th>

                <th className="px-4 py-3">Call outcome</th>
              </tr>
            </thead>

            <tbody>
              {mockData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors group"
                >
                  <td className="px-4 py-3 text-center border-r border-gray-100 group-hover:bg-white transition-colors">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </td>

                  <td className="px-4 py-3 border-r border-gray-100 font-medium text-blue-600 hover:underline cursor-pointer group-hover:bg-white transition-colors">
                    {row.title}
                  </td>

                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600 group-hover:bg-white transition-colors text-sm">
                    {row.date}
                  </td>

                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600 group-hover:bg-white transition-colors">
                    {row.direction}
                  </td>

                  <td className="px-4 py-3 text-gray-600 group-hover:bg-white transition-colors">
                    {row.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer Pagination */}

      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-white">
        <div className="flex-1" />

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-400 cursor-not-allowed">
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          {activeTab === "all" && (
            <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded">
              1
            </span>
          )}

          <button className="flex items-center gap-1 text-sm font-medium text-gray-400 cursor-not-allowed">
            Next <ChevronRight className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 ml-4 text-sm font-bold text-gray-900">
            25 per page <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1" />
      </div>
    </div>
  );
}
