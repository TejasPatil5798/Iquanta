

import React from "react";

export function ServChatFlows() {
  return (
    <div className="bg-gray-100 min-h-screen px-10 py-6">

      {/* ===== TOP HEADER ===== */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Chatflows
        </h1>

        <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">
          Create chatflow
        </button>
      </div>

      {/* ===== TABS ===== */}
      <div className="flex gap-8 text-sm text-gray-700 mb-2">
        <button className="font-medium border-b-2 border-black pb-2">
          Web Chat
        </button>
        <button className="pb-2 hover:text-black text-gray-500">
          Mobile Chat
        </button>
        <button className="pb-2 hover:text-black text-gray-500">
          Facebook Messenger
        </button>
      </div>

      {/* ===== LINE ===== */}
      <div className="border-b border-gray-300 mb-16"></div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex items-center justify-center gap-20">

        {/* LEFT CONTENT */}
        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Create your first chatflow
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            With chatflows, you can create custom chat experiences for visitors
            on your website or Facebook pages—with as little or as much
            automation as you need. Create a simple welcome message to greet
            visitors and direct them to your live team, or build bots to help
            qualify leads or support customers.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/chat-1159.png?width=4000&height=4000&name=chat-1159.png"
            alt="chat illustration"
            className="w-52"
          />
        </div>

      </div>
    </div>
  );
}