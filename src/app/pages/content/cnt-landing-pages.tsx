import React from "react";

import { FaSearch, FaPlus, FaEllipsisH } from "react-icons/fa";

export function CntLandingPages() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Landing pages</h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-md px-3 py-1 bg-white">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search pages"
              className="outline-none text-sm"
            />
          </div>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
            <FaPlus />
            Create
          </button>

          <FaEllipsisH className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Banner */}
      <div className="w-full bg-white border rounded-lg p-4 flex justify-between items-center mb-6">
        <p className="text-sm text-gray-700">
          Align your landing page design with your brand
          <span className="ml-2 text-gray-500">
            Brand kit helps align your landing pages and all your other HubSpot
            content with your brand.
          </span>
        </p>
        <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100">
          Set up Brand Kit
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Drive customers to your website with landing pages
          </h1>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                <b>Create and launch custom landing pages</b> for your campaigns
                within minutes.
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                <b>Easily convert visitors</b> into qualified business leads.
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                <b>Optimize your landing pages</b> with conversion analytics.
              </p>
            </li>
          </ul>

          {/* Info Box */}
          <div className="border rounded-lg p-4 bg-white mb-6">
            <p className="text-sm text-gray-700">
              <b>Use Breeze</b> to generate a beautiful, conversion-optimized
              landing page, including copy, images, an embedded HubSpot form,
              and more. You'll get input along the way and be able to edit the
              finished draft before it's live.
            </p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Create a landing page
          </button>
        </div>

        {/* Right Preview */}
        <div className="bg-[#0b1b34] rounded-xl p-6 w-[420px] shadow-lg">
          <div className="h-4 bg-gray-500 rounded mb-4"></div>

          <div className="flex gap-6">
            {/* Left Card */}
            <div className="bg-purple-700 w-32 h-40 rounded-lg p-3">
              <div className="h-2 bg-white mb-2 rounded"></div>
              <div className="h-2 bg-white w-3/4 mb-4 rounded"></div>
              <div className="w-full h-20 bg-purple-500 rounded-lg"></div>
            </div>

            {/* Right Form */}
            <div className="bg-[#1c2b4a] flex-1 rounded-lg p-4 space-y-3">
              <div className="h-2 bg-gray-400 rounded w-2/3"></div>
              <div className="h-8 bg-[#2e3d5c] rounded"></div>
              <div className="h-8 bg-[#2e3d5c] rounded"></div>
              <div className="h-8 bg-[#2e3d5c] rounded"></div>
              <div className="h-8 bg-purple-300 rounded mt-2"></div>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            Iquanta landing page builder
          </p>
        </div>
      </div>
    </div>
  );
}
