
import { useState } from "react";
import { Search, ChevronDown, Plus, X, Calendar, Link, AlertCircle } from "lucide-react";

export function SalesMeetingsScheduler() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("Anki Suryavanshi (me)");
  const [typeFilter, setTypeFilter] = useState("All meeting types");

  const meetingsData = [
    {
      name: "60 min, 30 min, and 15 min meeting anki (default)",
      organizer: "Anki Suryavanshi",
      type: "One-on-one",
      duration: "Multiple",
      views: 0,
      booked: 0,
      conversion: "N/A",
    },
  ];

  const handleGetStarted = () => setShowDashboard(true);
  const handleUpgrade = () => alert("Upgrade to Starter Customer Platform");
  const handleConnectCalendar = () => alert("Connect your calendar");
  const handleCreateSchedulingPage = () => alert("Create a new scheduling page");
  const handleClearFilters = () => {
    setSearchTerm("");
    setOwnerFilter("Anki Suryavanshi (me)");
    setTypeFilter("All meeting types");
  };

  return (
    <div className="bg-white min-h-screen">
      {!showDashboard ? (
        // ----- Initial "Get Started" View -----
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 lg:p-12 h-full">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Run meetings more efficiently with your personal meeting link
            </h1>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="mr-2 text-lg">•</span>
                <span>
                  <span className="font-semibold text-gray-900">
                    Allow contacts to schedule meetings
                  </span>{" "}
                  by connecting your calendar and sharing your link on your website,
                  emails, and more.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-lg">•</span>
                <span>
                  <span className="font-semibold text-gray-900">
                    Customize your meeting
                  </span>{" "}
                  by setting your availability, meeting duration, and scheduling
                  preferences.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-lg">•</span>
                <span>
                  <span className="font-semibold text-gray-900">
                    If you need help
                  </span>{" "}
                  setting up your meeting link, we’ll guide you through in just a few
                  steps.
                </span>
              </li>
            </ul>
            <button
              onClick={handleGetStarted}
              className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </button>
          </div>
          <div className="mt-10 lg:mt-0 text-center">
            <img
              src="https://community.hubspot.com/t5/image/serverpage/image-id/141954iC18B72431AE396A9?v=v2"
              alt="Meeting Scheduler Preview"
              className="w-full max-w-md rounded-lg shadow-md"
            />
            <p className="mt-3 text-sm text-gray-500">
              Scheduling page for setting up meetings
            </p>
          </div>
        </div>
      ) : (
        // ----- Full Meetings Dashboard (exactly as in screenshot) -----
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Meetings</h1>
            <button
              onClick={handleCreateSchedulingPage}
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition self-start sm:self-center"
            >
              Create scheduling page
            </button>
          </div>

          {/* Upgrade Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-800">
                  <strong>Remove the HubSpot logo from your booking page, and everywhere else.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Plus, unlock premium features with Starter Customer Platform.{" "}
                  <button onClick={handleUpgrade} className="text-blue-600 font-medium hover:underline">
                    Upgrade
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Calendar Connection Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-sm text-gray-800">
              <strong>Your calendar is not connected.</strong> Please connect your calendar to activate your scheduling pages.{" "}
              <button onClick={handleConnectCalendar} className="text-blue-600 font-medium hover:underline">
                Connect calendar
              </button>
            </p>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search meeting names"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="relative">
              <select
                value={ownerFilter}
                onChange={(e) => setOwnerFilter(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option>Anisha (me)</option>
                <option>All owners</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option>All meeting types</option>
                <option>One-on-one</option>
                <option>Group</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <button
              onClick={handleClearFilters}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Clear filters
            </button>
          </div>

          {/* Table (horizontal scroll on mobile) */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-[800px] w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Meeting name</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Organizer</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Type</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Duration</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Views</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Meetings Booked</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Conversion Rate</th>
                </tr>
              </thead>
              <tbody>
                {meetingsData
                  .filter((m) =>
                    m.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((meeting, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">{meeting.name}</td>
                      <td className="px-4 py-3 text-gray-600">{meeting.organizer}</td>
                      <td className="px-4 py-3 text-gray-600">{meeting.type}</td>
                      <td className="px-4 py-3 text-gray-600">{meeting.duration}</td>
                      <td className="px-4 py-3 text-gray-600">{meeting.views}</td>
                      <td className="px-4 py-3 text-gray-600">{meeting.booked}</td>
                      <td className="px-4 py-3 text-gray-600">{meeting.conversion}</td>
                    </tr>
                  ))}
                {meetingsData.filter((m) =>
                  m.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-500">
                      No meetings found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer note (optional) */}
          <div className="mt-4 text-xs text-gray-400 text-center">
            * Conversion rate is calculated based on views and bookings.
          </div>
        </div>
      )}
    </div>
  );
}
