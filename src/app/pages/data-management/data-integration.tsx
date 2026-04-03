import React from "react";
import {
  FaFileImport,
  FaSyncAlt,
  FaExchangeAlt,
  FaChartLine,
} from "react-icons/fa";

export function DataIntegration() {
  const cards = [
    {
      title: "Import a file",
      desc: "One-time import from a file directly into your CRM.",
      icon: <FaFileImport className="text-3xl text-orange-500 mb-3" />,
      action: "Import data",
      primary: true,
    },
    {
      title: "Sync from apps",
      desc: "Keep data synced between your CRM and external apps.",
      icon: <FaSyncAlt className="text-3xl text-blue-500 mb-3" />,
      action: "Connect an app",
    },
    {
      title: "Transfer your data",
      desc: "Seamlessly transfer your data using Smart Transfer.",
      icon: <FaExchangeAlt className="text-3xl text-purple-500 mb-3" />,
      action: "Transfer data",
    },
    {
      title: "Power better campaigns",
      desc: "Unify data across sources and activate it anywhere.",
      icon: <FaChartLine className="text-3xl text-green-500 mb-3" />,
      action: "Upgrade to Data Hub",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Data integration
      </h1>

      {/* Alert */}
      <div className="border border-orange-300 bg-orange-50 text-orange-700 p-3 rounded-md mb-6 text-sm">
        You’ve used <span className="font-semibold">2 of 1,000 contacts</span>. 
        Once you reach the limit, you won’t be able to add new contacts.
        <span className="ml-2 text-blue-600 cursor-pointer font-medium">
          Upgrade
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              {card.icon}
              <h2 className="font-semibold text-gray-800 mb-1">
                {card.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{card.desc}</p>
            </div>

            <button
              className={`px-4 py-2 text-sm rounded-md transition ${
                card.primary
                  ? "bg-gray-900 text-white hover:bg-black"
                  : "border hover:bg-gray-100"
              }`}
            >
              {card.action}
            </button>
          </div>
        ))}
      </div>

      {/* Monitor Section */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Tabs */}
        <div className="flex items-center gap-4 border-b pb-2 mb-6 text-sm text-gray-600">
          <button className="border-b-2 border-black pb-1 font-medium text-black">
            File imports
          </button>
          <button className="hover:text-black">App syncs</button>
          <button className="hover:text-black">Data studio syncs</button>

          <div className="ml-auto">
            <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
              Connected apps
            </button>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Get started with your first import
            </h2>

            <ul className="text-sm text-gray-600 space-y-2 mb-5">
              <li>• Import a file (CSV, XLS, XLSX)</li>
              <li>• Follow the import guide to avoid errors</li>
              <li>• Use a sample file for correct formatting</li>
            </ul>

            <button className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-900">
              Import a file
            </button>
          </div>

          {/* Right Illustration */}
          <div className="w-56 h-56 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <span className="text-gray-500 text-sm">Illustration</span>
          </div>
        </div>
      </div>
    </div>
  );
}