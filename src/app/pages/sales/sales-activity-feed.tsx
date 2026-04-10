import React, { useState } from "react";
import { FaSearch, FaBell, FaTrash } from "react-icons/fa";

export function SalesActivityFeed() {
  const [view, setView] = useState<"choose" | "gmail" | "outlook">("choose");

  const handleGmailClick = () => setView("gmail");
  const handleOutlookClick = () => setView("outlook");
  const handleGoBack = () => setView("choose");

  const handleChromeStore = () => {
    window.open("https://chrome.google.com/webstore/detail/hubspot-sales/cnpeggcclgpmbknbcjkbjkjlfpkggeam", "_blank");
  };

  const handleInstallAddin = () => {
    window.open("https://www.hubspot.com/products/sales/outlook-add-in", "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <h1 className="text-2xl font-semibold mb-6">Activity Feed</h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search activities"
            className="w-full border rounded-full px-5 py-3 pl-12 outline-none focus:ring-1 focus:ring-black"
          />
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
        </div>
      </div>

      {/* Dynamic Card */}
      <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto mb-6 relative">
        <button
          onClick={handleGoBack}
          className="absolute right-4 top-3 text-gray-400 text-2xl hover:text-gray-600"
        >
          ×
        </button>

        {view === "choose" && (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Want to start seeing some real activity?
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Start by selecting how you plan to send tracked emails. Keep in mind,
              you will always be able to send emails through HubSpot’s CRM if you
              connect your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={handleGmailClick}
                className="flex items-center justify-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                  alt="gmail"
                  className="w-5 h-5"
                />
                Gmail
              </button>
              <button
                onClick={handleOutlookClick}
                className="flex items-center justify-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50 transition"
              >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/1280px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png"
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
              <button
                onClick={handleGoBack}
                className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer hover:opacity-80 transition"
                title="Return to selection"
              />
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </div>
          </>
        )}

        {view === "gmail" && (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Next, you're going to need the extension
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Download the HubSpot Sales extension from the Chrome web store. The button below will open up a new tab, so after you've added the extension, come back here to go to the last step.
            </p>
            <button
              onClick={handleChromeStore}
              className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
            >
              Go to Chrome web store
            </button>

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handleGoBack}
                className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer hover:opacity-80 transition"
              />
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </div>
          </>
        )}

        {view === "outlook" && (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Next, you're going to need the add-in.
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Download the HubSpot Sales add-in. After you've installed the add-in, come back here to go to the last step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={handleInstallAddin}
                className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
              >
                Install HubSpot add-in
              </button>
              <button
                onClick={handleGoBack}
                className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition"
              >
                I have completed this step.
              </button>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={handleGoBack}
                className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer hover:opacity-80 transition"
              />
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </div>
          </>
        )}
      </div>

      {/* Sample Activity Section (unchanged) */}
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 mb-3">Sample activity</p>

        {/* Activity Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <p className="text-sm">
                <span className="text-blue-600 font-medium">Charlotte Walker</span>{" "}
                Marketing Director at Rocketsalt clicked link{" "}
                <span className="text-blue-600 underline">Get the most out of your SEO</span>{" "}
                in email
              </p>
              <p className="text-xs text-gray-400 mt-1">3:18 PM</p>
              <p className="text-xs text-gray-400 mt-1">Other activity</p>
            </div>
          </div>
          <div className="flex items-center gap-4 self-end sm:self-center">
            <FaBell className="text-gray-400 cursor-pointer hover:text-gray-600" />
            <FaTrash className="text-gray-400 cursor-pointer hover:text-gray-600" />
            <span className="border px-3 py-1 rounded-full text-sm">Click</span>
          </div>
        </div>

        {/* Activity Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-green-200 flex-shrink-0"></div>
            <div>
              <p className="text-sm">
                <span className="text-blue-600 font-medium">Aaron Rios</span>{" "}
                CEO at Steelworth Metalworks, Inc. opened email Interested in
                increasing the top of your funnel?
              </p>
              <p className="text-xs text-gray-400 mt-1">3:18 PM</p>
              <p className="text-xs text-gray-400 mt-1">Other activity</p>
            </div>
          </div>
          <div className="flex items-center gap-4 self-end sm:self-center">
            <FaBell className="text-gray-400 cursor-pointer hover:text-gray-600" />
            <FaTrash className="text-gray-400 cursor-pointer hover:text-gray-600" />
            <span className="border px-3 py-1 rounded-full text-sm">Open</span>
          </div>
        </div>
      </div>
    </div>
  );
}