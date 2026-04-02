import React from "react";
import { FaMagic, FaDatabase, FaFileImport, FaProjectDiagram, FaList, FaChartBar } from "react-icons/fa";

export function DataModel() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Structure your data to grow ambitiously
          </h1>
          <p className="text-gray-600 mt-2">
            A data model helps you organize, connect and use your data effectively.
          </p>

          <ul className="mt-3 text-gray-600 list-disc ml-5">
            <li>Report on what matters</li>
            <li>Segment your customers effectively</li>
            <li>Automate work</li>
          </ul>
        </div>

        {/* Illustration placeholder */}
        <div className="hidden md:block">
          <img
            src="https://via.placeholder.com/200"
            alt="illustration"
            className="w-48"
          />
        </div>
      </div>

      {/* AI Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Box */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow">
          <div className="bg-pink-200 p-6 rounded-t-2xl flex items-center gap-4">
            <FaMagic className="text-2xl text-pink-600" />
            <h2 className="text-lg font-semibold">
              Build your data model with AI
            </h2>
          </div>

          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Tell us how you want to use your system and get recommendations.
            </p>

            <textarea
              className="w-full border rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Example: I run an e-commerce business and want to manage orders, customers, and marketing..."
            />

            <button className="mt-4 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition">
              Get recommendations
            </button>
          </div>
        </div>

        {/* Right Suggestions */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            Apply quick suggestions
          </h2>

          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-800">Service</h3>
            <p className="text-sm text-gray-600 mt-2">
              Used for onboarding, consulting, repairs, and maintenance.
            </p>

            <div className="flex justify-between mt-4">
              <button className="text-gray-500 border px-3 py-1 rounded">
                Dismiss
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Activate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">
          Use your data model
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          <ActionCard icon={<FaDatabase />} label="Customize records" />
          <ActionCard icon={<FaFileImport />} label="Import data" />
          <ActionCard icon={<FaProjectDiagram />} label="Create workflow" />
          <ActionCard icon={<FaList />} label="Create list" />
          <ActionCard icon={<FaChartBar />} label="Create report" />

        </div>
      </div>
    </div>
  );
}

/* Reusable Card */
function ActionCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="border rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md cursor-pointer transition">
      <div className="text-blue-600 text-xl mb-2">{icon}</div>
      <p className="text-sm text-gray-700 text-center">{label}</p>
    </div>
  );
}