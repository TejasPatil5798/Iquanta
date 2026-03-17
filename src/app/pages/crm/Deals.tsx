import React from "react";
import { FaSearch, FaPlus, FaEllipsisH } from "react-icons/fa";

export function Deals() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Left Tabs */}
        <div className="flex items-center gap-2">
          <button className="border px-4 py-2 bg-white rounded">Deals</button>

          <button className="border px-4 py-2 bg-gray-200 rounded">
            All deals
            <span className="ml-1 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              0
            </span>
          </button>

          <button className="border px-4 py-2 bg-gray-200 rounded">
            My deals
          </button>

          <button className="border px-3 py-2 bg-white rounded">
            <FaPlus />
          </button>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2">
          <button className="border px-3 py-2 rounded bg-white">
            <FaEllipsisH />
          </button>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded">
            <FaPlus />
            Add deals
          </button>
        </div>
      </div>

      {/* Search and Toolbar */}
      <div className="bg-white border rounded p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          {/* Search Bar */}
          <div className="relative w-1/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded pl-10 pr-3 py-2"
            />
          </div>

          {/* Toolbar Buttons */}
          <div className="flex gap-2">
            <button className="border px-3 py-2 rounded bg-white">
              Table view
            </button>

            <button className="border px-3 py-2 rounded bg-white">
              Edit columns
            </button>

            <button className="border px-3 py-2 rounded bg-white">
              All Pipelines
            </button>

            <button className="border px-3 py-2 rounded bg-white">
              Filters
            </button>

            <button className="border px-3 py-2 rounded bg-white">Sort</button>

            <button className="border px-3 py-2 rounded bg-white">
              Export
            </button>

            <button className="border px-3 py-2 rounded bg-gray-200">
              Save
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="flex gap-6 text-sm text-gray-600 border-t pt-3">
          <span>Deal owner</span>
          <span>Create date</span>
          <span>Last activity date</span>
          <span>Close date</span>
          <span>+ More</span>

          <span className="ml-auto">Advanced filters</span>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white border rounded p-16 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Create a deal to start building your winning sales process
        </h2>

        <div className="text-gray-600 space-y-2">
          <p>
            • Set up your deals pipeline with stages for the real-life
            milestones in your process.
          </p>

          <p>
            • Track deals to visualize the progress of your sales and make sure
            nothing gets lost.
          </p>

          <p>
            • Report on your sales so you can keep track of how much money you
            are making over time.
          </p>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6 text-sm text-gray-600">
        <button>Prev</button>
        <button>Next</button>

        <span>25 per page</span>
      </div>
    </div>
  );
}
