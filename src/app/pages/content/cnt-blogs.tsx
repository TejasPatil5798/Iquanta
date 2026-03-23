import React from "react";

import { FaSearch, FaPlus, FaEllipsisH } from "react-icons/fa";

export function CntBlogs() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Blog posts</h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-md px-3 py-1 bg-white">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search posts"
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

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Grow your audience with your first blog post
          </h1>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                <b>Drive traffic conversions</b> by providing valuable content
                to your customers.
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                <b>Write your own blog posts</b>, or let our AI tools assist by
                creating outlines and content.
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                <b>Already have a blog?</b>{" "}
                <span className="text-blue-600 cursor-pointer">
                  Import it into HubSpot
                </span>{" "}
                with just a few clicks.
              </p>
            </li>
          </ul>

          {/* Info Box */}
          <div className="border rounded-lg p-4 bg-white mb-6">
            <p className="text-sm text-gray-700">
              <b>Use Breeze</b> to generate an SEO-optimized blog post,
              including copy, titles, an outline, and an image. You'll get input
              along the way and be able to edit the finished draft before it's
              live.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2">
              Start with AI
            </button>

            <button className="border px-6 py-3 rounded-md bg-white hover:bg-gray-100">
              Start from scratch
            </button>
          </div>
        </div>

        {/* Right Preview */}
        <div className="bg-white rounded-xl p-4 w-[420px] shadow-lg">
          <div className="h-4 bg-gray-300 rounded mb-4"></div>

          <div className="space-y-2 mb-4">
            <div className="h-2 bg-gray-400 w-1/4 rounded"></div>
            <div className="h-2 bg-gray-300 w-1/2 rounded"></div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-800 rounded"></div>
            <div className="h-3 bg-gray-800 w-5/6 rounded"></div>
            <div className="h-3 bg-gray-800 w-2/3 rounded"></div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="h-2 bg-gray-400 w-16 rounded"></div>
          </div>

          <div className="h-32 bg-green-300 rounded mb-2"></div>

          <p className="text-xs text-center text-gray-500 mt-2">
            HubSpot blog post builder
          </p>
        </div>
      </div>
    </div>
  );
}
