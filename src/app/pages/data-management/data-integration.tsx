import React from "react";
import { FaFileImport, FaSyncAlt, FaExchangeAlt, FaChartLine } from "react-icons/fa";

export function DataIntegration() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Data integration
      </h1>

      {/* Alert Banner */}
      <div className="border border-orange-300 bg-orange-50 text-orange-700 p-3 rounded-md mb-6 text-sm">
        You’ve used 2 of 1,000 contacts. Once you reach the limit, you won’t be able to add new contacts. 
        <span className="ml-2 text-blue-600 cursor-pointer font-medium">
          Upgrade
        </span>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <FaFileImport className="text-3xl text-orange-500 mb-3" />
          <h2 className="font-semibold text-gray-800 mb-1">Import a file</h2>
          <p className="text-sm text-gray-500 mb-3">
            One-time import from a file directly into your CRM.
          </p>
          <button className="px-4 py-2 text-sm bg-gray-900 text-white rounded-md">
            Import data
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <FaSyncAlt className="text-3xl text-blue-500 mb-3" />
          <h2 className="font-semibold text-gray-800 mb-1">Sync from apps</h2>
          <p className="text-sm text-gray-500 mb-3">
            Keep data synced between your CRM and external apps.
          </p>
          <button className="px-4 py-2 text-sm border rounded-md">
            Connect an app
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <FaExchangeAlt className="text-3xl text-purple-500 mb-3" />
          <h2 className="font-semibold text-gray-800 mb-1">Transfer your data</h2>
          <p className="text-sm text-gray-500 mb-3">
            Seamlessly transfer your data using Smart Transfer.
          </p>
          <button className="px-4 py-2 text-sm border rounded-md">
            Transfer data
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <FaChartLine className="text-3xl text-green-500 mb-3" />
          <h2 className="font-semibold text-gray-800 mb-1">Power better campaigns</h2>
          <p className="text-sm text-gray-500 mb-3">
            Unify data across sources and activate it anywhere.
          </p>
          <button className="px-4 py-2 text-sm border rounded-md">
            Upgrade to Data Hub
          </button>
        </div>
      </div>

      {/* Monitor Section */}
      <div className="bg-white rounded-xl shadow p-6">

        {/* Tabs */}
        <div className="flex gap-4 border-b pb-2 mb-4 text-sm text-gray-600">
          <button className="border-b-2 border-black pb-1 font-medium">
            File imports
          </button>
          <button className="hover:text-black">App syncs</button>
          <button className="hover:text-black">Data studio syncs</button>

          <div className="ml-auto">
            <button className="border px-3 py-1 rounded-md text-sm">
              Connected apps
            </button>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Get started with your first import
            </h2>

            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Begin adding data by importing a file (csv, xls, xlsx)</li>
              <li>• Read our import guide to avoid common mistakes</li>
              <li>• Download a sample file for reference</li>
            </ul>

            <button className="px-5 py-2 bg-black text-white rounded-md">
              Import a file
            </button>
          </div>

          {/* Right Illustration Placeholder */}
          <div className="mt-6 md:mt-0">
            <div className="w-56 h-56 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm">Illustration</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
