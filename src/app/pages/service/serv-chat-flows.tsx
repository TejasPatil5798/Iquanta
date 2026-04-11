

import React, { useState } from "react";
import { X, Globe, Smartphone, Facebook } from "lucide-react";

export function ServChatFlows() {
  const [activeTab, setActiveTab] = useState<"web" | "mobile" | "facebook">("web");
  const [showModal, setShowModal] = useState(false);

  const handleCreateChatflow = () => setShowModal(true);
  const handleChannelSelect = (channel: string) => {
    alert(`Create chatflow for ${channel}`);
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6">
      {/* ===== TOP HEADER ===== */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Chatflows
        </h1>
        <button
          onClick={handleCreateChatflow}
          className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition self-start sm:self-center"
        >
          Create chatflow
        </button>
      </div>

      {/* ===== TABS ===== */}
      <div className="flex gap-4 sm:gap-8 text-sm text-gray-700 mb-2">
        <button
          onClick={() => setActiveTab("web")}
          className={`pb-2 font-medium ${
            activeTab === "web"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Web Chat
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`pb-2 font-medium ${
            activeTab === "mobile"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Mobile Chat
        </button>
        <button
          onClick={() => setActiveTab("facebook")}
          className={`pb-2 font-medium ${
            activeTab === "facebook"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Facebook Messenger
        </button>
      </div>

      {/* ===== LINE ===== */}
      <div className="border-b border-gray-300 mb-8 sm:mb-16"></div>

      {/* ===== MAIN CONTENT (same for all tabs) ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20">
        {/* LEFT CONTENT */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
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
        <div className="w-40 sm:w-52">
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/chat-1159.png?width=4000&height=4000&name=chat-1159.png"
            alt="chat illustration"
            className="w-full"
          />
        </div>
      </div>

      {/* ===== MODAL: Create Chatflow (matches screenshot) ===== */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Where would you like to add this chatflow?</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => handleChannelSelect("Website")}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition"
                >
                  <Globe className="w-4 h-4" />
                  Website
                </button>
                <button
                  onClick={() => handleChannelSelect("Mobile")}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition"
                >
                  <Smartphone className="w-4 h-4" />
                  Mobile
                </button>
                <button
                  onClick={() => handleChannelSelect("Facebook Messenger")}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook Messenger
                </button>
              </div>
              <div className="text-xs text-gray-500 text-center pt-2">
                CHANNEL &nbsp;&nbsp;&nbsp; WORKSPACE &nbsp;&nbsp;&nbsp; CHATFLOW
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}