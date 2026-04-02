import React from "react";
import { FaPlus } from "react-icons/fa";

export function EventManagement() {
  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* Top Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">
          Event management
        </h1>

        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm">
          Create an event
          <FaPlus className="text-xs" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16">

        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Track the activity that matters most to your business.
          </h2>

          <p className="text-gray-600 mb-4">
            Create custom events to track any interaction a visitor has with your company. 
            Then use the event data across tools to create targeted campaigns and analyze 
            the effectiveness of your marketing.
          </p>

          <p className="text-gray-600">
            New to custom events?{" "}
            <span className="text-blue-600 cursor-pointer font-medium">
              Check out the user guide to learn more.
            </span>
          </p>
        </div>

        {/* Right Illustration */}
        <div className="mt-10 md:mt-0">
          <div className="w-72 h-72 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500 text-sm">
              Illustration
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
