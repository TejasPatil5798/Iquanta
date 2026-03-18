import { useState } from "react";
import {
  Search,
  ChevronDown,
  Plus,
  RotateCcw,
  Copy,
  Save,
  Settings2,
  Download,
} from "lucide-react";

type EmailRecord = {
  id: number;
  name: string;
  delivered: number;
  openRate: string;
  clickRate: string;
  updatedAt: string;
  updatedBy: string;
  publishDate: string;
  status: "Draft" | "Scheduled" | "Sent" | "Archived";
};

export function MktEmail() {
  const [activeMainTab, setActiveMainTab] = useState("Manage");
  const [activeView, setActiveView] = useState("All emails");

  const emails: EmailRecord[] = [
    {
      id: 1,
      name: "New email",
      delivered: 0,
      openRate: "0%",
      clickRate: "0%",
      updatedAt: "18 Mar 2026, 11:00 AM",
      updatedBy: "Tejas",
      publishDate: "18 Mar 2026",
      status: "Draft",
    },
  ];

  const views = [
    "All emails",
    "Drafts",
    "Scheduled",
    "Sent",
    "Archived",
  ];

  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-[34px] font-semibold text-[#213343]">
            Marketing Email
          </h1>
          <p className="text-sm text-[#516f90] mt-1">1 marketing email</p>
        </div>

        <div className="flex gap-3">
          <button className="border border-[#cbd6e2] px-4 py-2 rounded-md bg-white text-sm flex items-center gap-2 hover:bg-gray-50">
            Email tools <ChevronDown size={14} />
          </button>

          <button className="bg-[#ff5c35] text-white px-5 py-2 rounded-md text-sm hover:bg-[#e04826]">
            Create email
          </button>
        </div>
      </div>

      {/* MAIN TABS */}
      <div className="flex gap-10 border-b border-[#dfe3eb] mb-7 text-[15px]">
        {["Manage", "Analyze", "Health"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveMainTab(tab)}
            className={`pb-3 ${
              activeMainTab === tab
                ? "border-b-4 border-black font-medium text-black"
                : "text-[#516f90]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* VIEW TABS CONTAINER */}
      <div className="border border-[#dfe3eb] bg-white rounded-md overflow-hidden">
        {/* VIEW TAB BAR */}
        <div className="flex items-center border-b border-[#dfe3eb]">
          {views.map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-6 py-4 text-sm border-r border-[#dfe3eb] ${
                activeView === view
                  ? "bg-white font-medium"
                  : "bg-[#f5f8fa] text-[#516f90]"
              }`}
            >
              {view}
            </button>
          ))}

          <button className="px-6 py-4 text-sm flex items-center gap-2 text-[#33475b]">
            <Plus size={14} />
            Add view (5/5)
          </button>

          <button className="px-6 py-4 text-sm font-medium text-[#33475b]">
            All views
          </button>

          <div className="ml-auto px-6 py-4 border-l border-[#dfe3eb] text-sm text-[#33475b]">
            Folders
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-[#dfe3eb]">
          <div className="flex gap-8 text-sm font-medium text-[#33475b]">
            <button>Email type</button>
            <button>+ More</button>
            <button>Advanced filters</button>
          </div>

          <div className="flex gap-2">
            <button className="border border-[#cbd6e2] p-2 rounded-md">
              <RotateCcw size={16} />
            </button>

            <button className="border border-[#cbd6e2] p-2 rounded-md">
              <Copy size={16} />
            </button>

            <button className="border border-[#cbd6e2] p-2 rounded-md">
              <Save size={16} />
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-[#dfe3eb]">
          <div className="relative w-[520px]">
            <Search
              size={18}
              className="absolute left-4 top-3 text-[#7c98b6]"
            />

            <input
              className="w-full border border-[#cbd6e2] rounded-full pl-11 pr-4 py-2 text-sm focus:outline-none"
              placeholder="Search email name or subject line"
            />
          </div>

          <div className="flex gap-3">
            <button className="border border-[#cbd6e2] px-4 py-2 rounded-md text-sm flex items-center gap-2">
              <Settings2 size={14} />
              Edit columns
            </button>

            <button className="border border-[#cbd6e2] px-4 py-2 rounded-md text-sm flex items-center gap-2">
              <Download size={14} />
              Export emails
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white min-w-[800px]">
            <thead>
              <tr className="border-b border-[#dfe3eb] text-sm text-left text-[#33475b]">
                <th className="p-4 w-12">
                  <input type="checkbox" />
                </th>
                <th className="p-4">Email name</th>
                <th className="p-4">Delivered</th>
                <th className="p-4">Open rate</th>
                <th className="p-4">Click rate</th>
                <th className="p-4">Last updated</th>
                <th className="p-4">Updated by</th>
                <th className="p-4">Publish date</th>
              </tr>
            </thead>

            <tbody>
              {emails.map((email) => (
                <tr
                  key={email.id}
                  className="border-b border-[#dfe3eb] hover:bg-[#f8fafc]"
                >
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>

                  <td className="p-4 text-[#007a8c] font-medium cursor-pointer hover:underline">
                    {email.name}
                  </td>

                  <td className="p-4">{email.delivered}</td>
                  <td className="p-4">{email.openRate}</td>
                  <td className="p-4">{email.clickRate}</td>
                  <td className="p-4">{email.updatedAt}</td>
                  <td className="p-4">{email.updatedBy}</td>
                  <td className="p-4">{email.publishDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}