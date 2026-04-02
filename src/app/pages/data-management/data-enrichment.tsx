import React from "react";
import { FaSearch, FaDatabase } from "react-icons/fa";

export function DataEnrichment() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Data Quality <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded ml-2">Beta</span>
          </h1>

          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded-lg text-sm">
              View enrichment settings
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              Scan for enrichment gaps
            </button>
          </div>
        </div>
      </div>

      {/* Data Enrichment Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-lg font-semibold mb-3">Data Enrichment</h2>

        <p className="text-gray-600 text-sm max-w-2xl">
          Check the enrichment coverage for company and contact records.
          Enable automatic enrichment to ensure records are enriched with available data.
        </p>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center mt-10 mb-6">
          <h3 className="text-lg font-semibold">
            Take the first step towards clean, reliable data
          </h3>

          <p className="text-gray-500 text-sm mt-2 max-w-md">
            Scan your portal to identify opportunities to enrich your data
            and improve accuracy.
          </p>

          <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
            Scan portal
          </button>
        </div>
      </div>

      {/* Available Enrichment */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Available Enrichment
        </h2>

        {/* Dropdown */}
        <div className="flex items-center gap-4 mb-6">
          <select className="border rounded-lg px-4 py-2 w-72">
            <option>Select a segment to preview</option>
            <option>Customers</option>
            <option>Leads</option>
          </select>

          <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed">
            Enrich segment
          </button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center text-center py-10">
          <FaSearch className="text-3xl text-gray-400 mb-3" />

          <h3 className="text-md font-semibold">
            Update any segment with enrichment data
          </h3>

          <p className="text-gray-500 text-sm max-w-md mt-2">
            Choose a segment to preview available enrichment data and update it.
          </p>
        </div>
      </div>

      {/* Data Agent Section */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Welcome to Data Agent
          </h2>

          <p className="text-gray-600 text-sm max-w-md">
            Use AI to transform your data, answer questions,
            and enhance workflows.
          </p>

          <button className="mt-4 border px-4 py-2 rounded-lg">
            See how it works
          </button>
        </div>

        {/* Illustration */}
        <div className="mt-6 md:mt-0">
          <img
            src="https://via.placeholder.com/300x120"
            alt="data-agent"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}