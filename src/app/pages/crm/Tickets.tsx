import React from "react";
import { FaSearch, FaPlus, FaEllipsisH } from "react-icons/fa";

export function Tickets() {
  return (
    <div className="w-full h-screen bg-gray-100 p-4">
      {/* Top Tabs */}
      <div className="flex items-center gap-3 mb-4">
        <button className="border px-4 py-2 rounded bg-white">Tickets ▾</button>

        <div className="flex gap-2">
          <button className="border px-4 py-2 rounded bg-white">
            My open tickets
            <span className="ml-2 bg-black text-white px-2 rounded-full text-xs">
              0
            </span>
          </button>

          <button className="border px-4 py-2 rounded bg-white">
            Unassigned tickets
          </button>

          <button className="border px-4 py-2 rounded bg-white">
            All tickets-1
          </button>

          <button className="border px-3 py-2 rounded bg-white">
            <FaPlus />
          </button>
        </div>

        <div className="ml-auto flex gap-2">
          <button className="border px-3 py-2 rounded bg-white">
            <FaEllipsisH />
          </button>

          <button className="bg-black text-white px-4 py-2 rounded">
            Add tickets ▾
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center border rounded px-3 py-2 bg-white w-64">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <button className="bg-gray-200 px-3 py-2 rounded">
          Ticket owner (1) ✕
        </button>

        <button className="px-3 py-2 border rounded bg-white">
          Create date ▾
        </button>

        <button className="px-3 py-2 border rounded bg-white">
          Last activity date ▾
        </button>

        <button className="px-3 py-2 border rounded bg-white">
          Priority ▾
        </button>

        <button className="px-3 py-2 border rounded bg-white">+ More</button>

        <button className="text-blue-600">Clear all</button>

        <button className="border px-3 py-2 rounded bg-gray-200">
          Advanced filters ✕
        </button>

        {/* Right Side Controls */}
        <div className="ml-auto flex gap-2">
          <button className="border px-3 py-2 rounded bg-white">
            Table view ▾
          </button>

          <button className="border px-3 py-2 rounded bg-white">⚙</button>

          <button className="border px-3 py-2 rounded bg-white">
            Edit columns
          </button>

          <button className="border px-3 py-2 rounded bg-white">
            All Pipelines ▾
          </button>

          <button className="border px-3 py-2 rounded bg-white">
            Filters (2)
          </button>

          <button className="border px-3 py-2 rounded bg-white">Sort</button>

          <button className="border px-3 py-2 rounded bg-white">Export</button>

          <button className="border px-3 py-2 rounded bg-white">⧉</button>

          <button className="border px-3 py-2 rounded bg-gray-200 text-gray-400">
            Save
          </button>
        </div>
      </div>

      {/* Empty Tickets Section */}
      <div className="bg-white border rounded-lg h-[65vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-xl font-semibold mb-2">
          No Tickets match the current filters.
        </h2>

        <p className="text-gray-500 text-sm">
          Expecting to see new Tickets? Try again in a few seconds as the system
          catches up.
        </p>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4 text-gray-600">
        <button>{"< Prev"}</button>
        <button>{"Next >"}</button>
        <span>25 per page ▾</span>
      </div>
    </div>
  );
}
