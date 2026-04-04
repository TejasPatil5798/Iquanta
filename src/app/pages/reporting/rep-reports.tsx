import React from "react";

type Report = {
  id: string;
  name: string;
  dashboards: number;
  owner: string;
  totalViews: number;
  assigned: string;
  lastViewed: string;
  lastUpdated: string;
};

const reports: Report[] = []; // Empty like your screenshot

export function RepReports() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-lg font-semibold mb-4">Reports</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 border rounded-md mb-4"
        />

        {/* Navigation */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">My dashboards</p>
          <p className="flex justify-between text-sm">
            <span>My dashboards</span>
            <span>0</span>
          </p>

          <p className="flex justify-between text-sm mt-2 font-medium bg-gray-100 p-2 rounded">
            <span>My reports</span>
            <span>0</span>
          </p>
        </div>

        {/* Analytics suites */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Analytics suites</p>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Marketing</span>
              <span>ⓘ</span>
            </li>
            <li className="flex justify-between">
              <span>Sales</span>
              <span>ⓘ</span>
            </li>
            <li className="flex justify-between">
              <span>Service</span>
              <span>ⓘ</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">My reports</h2>

          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-md text-sm">
              Restore deleted reports
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md text-sm">
              Create ▾
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4 text-sm">
          <button className="px-4 py-2 border-b-2 border-black font-medium">
            All reports
          </button>
          <button className="px-4 py-2 text-gray-500">
            Custom reports
          </button>
          <button className="px-4 py-2 text-gray-500">Favorites</button>
        </div>

        {/* Table Controls */}
        <div className="flex items-center gap-2 mb-2">
          <button className="p-2 border rounded">☰</button>
          <button className="p-2 border rounded">▦</button>

          <div className="flex gap-6 text-sm ml-4">
            <span className="cursor-pointer">Dashboard ▾</span>
            <span className="cursor-pointer">Owner ▾</span>
            <span className="cursor-pointer">Last updated ▾</span>
            <span className="cursor-pointer">Assigned ▾</span>
          </div>
        </div>

        {/* Table */}
        <div className="border rounded bg-white">
          <table className="w-full text-sm">
            <thead className="border-b bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left"></th>
                <th className="p-3 text-left">Name ↕</th>
                <th className="p-3 text-left">Dashboards</th>
                <th className="p-3 text-left">Owner ↕</th>
                <th className="p-3 text-left">Total views ⓘ</th>
                <th className="p-3 text-left">Assigned ↕</th>
                <th className="p-3 text-left">Last viewed ⓘ ↕</th>
                <th className="p-3 text-left">Last updated</th>
              </tr>
            </thead>

            <tbody>
              {reports.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-10 text-gray-500">
                    No reports found
                  </td>
                </tr>
              ) : (
                reports.map((report) => (
                  <tr key={report.id} className="border-b">
                    <td className="p-3">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3">{report.name}</td>
                    <td className="p-3">{report.dashboards}</td>
                    <td className="p-3">{report.owner}</td>
                    <td className="p-3">{report.totalViews}</td>
                    <td className="p-3">{report.assigned}</td>
                    <td className="p-3">{report.lastViewed}</td>
                    <td className="p-3">{report.lastUpdated}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Horizontal Scroll Indicator */}
          <div className="overflow-x-auto">
            <div className="h-2 bg-gray-200 mt-2 rounded-full w-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}