import React from "react";
import { FaSearch, FaBell, FaTrash } from "react-icons/fa";

export function SalesActivityFeed() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-6">Activity Feed</h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search activities"
            className="w-full border rounded-full px-5 py-3 pl-12 outline-none"
          />
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto mb-6 relative">

        {/* Close Button */}
        <button className="absolute right-4 top-3 text-gray-400 text-lg">
          ×
        </button>

        <h2 className="text-lg font-semibold mb-2">
          Want to start seeing some real activity?
        </h2>

        <p className="text-gray-600 mb-5 text-sm">
          Start by selecting how you plan to send tracked emails. Keep in mind,
          you will always be able to send emails through HubSpot’s CRM if you
          connect your inbox.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="gmail"
              className="w-5 h-5"
            />
            Gmail
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50">
            <img
              src="data:image/jpeg;base64,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"
              alt="outlook"
              className="w-5 h-5"
            />
            Outlook
          </button>
        </div>

        <p className="text-sm font-medium mb-4">
          I will only send emails through HubSpot
        </p>

        {/* Progress Line */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
          <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
          <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Sample Activity */}
      <div className="max-w-4xl mx-auto">

        <p className="text-gray-600 mb-3">Sample activity</p>

        {/* Activity Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>

            <div>
              <p className="text-sm">
                <span className="text-blue-600 font-medium">
                  Charlotte Walker
                </span>{" "}
                Marketing Director at Rocketsalt clicked link{" "}
                <span className="text-blue-600 underline">
                  Get the most out of your SEO
                </span>{" "}
                in email
              </p>
              <p className="text-xs text-gray-400 mt-1">3:18 PM</p>
              <p className="text-xs text-gray-400 mt-1">Other activity</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaBell className="text-gray-400 cursor-pointer" />
            <FaTrash className="text-gray-400 cursor-pointer" />
            <span className="border px-3 py-1 rounded-full text-sm">
              Click
            </span>
          </div>
        </div>

        {/* Activity Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-green-200"></div>

            <div>
              <p className="text-sm">
                <span className="text-blue-600 font-medium">
                  Aaron Rios
                </span>{" "}
                CEO at Steelworth Metalworks, Inc. opened email Interested in
                increasing the top of your funnel?
              </p>
              <p className="text-xs text-gray-400 mt-1">3:18 PM</p>
              <p className="text-xs text-gray-400 mt-1">Other activity</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaBell className="text-gray-400 cursor-pointer" />
            <FaTrash className="text-gray-400 cursor-pointer" />
            <span className="border px-3 py-1 rounded-full text-sm">
              Open
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
