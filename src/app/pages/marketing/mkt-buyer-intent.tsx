import { useState } from "react";
import {
  Info,
  Circle,
  Check,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Code2,
} from "lucide-react";

export function MktBuyerIntent() {
  const [activeTab, setActiveTab] = useState("Overview");

  const steps = [
    {
      title: "Set up target markets",
      desc: "Define the market segments you're targeting to focus on high-fit companies showing intent.",
      action: "Set up target markets",
      done: false,
    },
    {
      title: "Install HubSpot’s tracking code",
      desc: "Identify companies visiting your website by installing HubSpot’s tracking code.",
      action: "Install tracking code",
      done: false,
    },
    {
      title: "Set up research topics",
      desc: "Find companies researching the topics that matter most to your business.",
      action: "Complete",
      done: true,
    },
    {
      title: "Configure intent criteria",
      desc: "Filter for companies that are showing intent based on visits to specific pages on your site.",
      action: "Configure intent criteria",
      done: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f8fa]">
      <div className="bg-white min-h-screen">
        {/* HEADER */}
        <div className="px-6 pt-10 border-b border-[#dfe3eb]">
          <div className="flex items-center gap-2 mb-8">
            <h1 className="text-[32px] font-semibold text-[#213343]">
              Buyer Intent
            </h1>
            <Info size={18} className="text-gray-400" />
          </div>

          {/* TABS */}
          <div className="flex gap-14 text-sm">
            {[
              "Overview",
              "Visitors",
              "Research",
              "Signals",
              "Configuration",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 relative ${
                  activeTab === tab
                    ? "font-semibold text-black"
                    : "text-[#516f90]"
                }`}
              >
                {tab}

                {tab === "Signals" && (
                  <span className="ml-2 bg-green-600 text-white text-[12px] px-2 py-1 rounded-full">
                    New
                  </span>
                )}

                {activeTab === tab && (
                  <div className="absolute left-0 bottom-0 w-full h-[4px] bg-black rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <>
            <div className="px-6 py-8 border-b border-[#dfe3eb]">
              <p className="text-sm text-[#213343]">
                Overview of companies showing buying intent and your progress
                toward winning your market.
              </p>
            </div>

            <div className="px-6 py-10">
              <div className="flex items-center gap-3 mb-10">
                <Sparkles size={20} className="text-[#ff5c35]" />
                <h2 className="text-2xl font-semibold">
                  Finish setting up Buyer Intent
                </h2>
              </div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-8"
                  >
                    <div className="flex gap-6">
                      <div className="mt-2">
                        {step.done ? (
                          <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                            <Check size={10} className="text-white" />
                          </div>
                        ) : (
                          <Circle size={22} />
                        )}
                      </div>

                      <div>
                        <h3 className="text-[21px] font-semibold">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#516f90] mt-2">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <button className="px-8 py-4 border rounded-md text-sm">
                      <div className="flex items-center gap-2">
                        {step.action}
                        {!step.done && index === 0 && (
                          <ExternalLink size={16} />
                        )}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* VISITORS TAB */}
        {activeTab === "Visitors" && (
          <div className="grid grid-cols-[350px_1px_1fr] min-h-[800px]">
            <div className="px-8 py-10 border-r">
              <p className="text-sm leading-9 mb-10">
                Identify companies visiting your website, filter by fit, intent,
                and engagement.
              </p>

              <div className="border rounded-xl p-6">
                <div className="flex items-center gap-3 font-semibold mb-6">
                  <ChevronDown size={18} />
                  Visitors & Visitor Intent
                </div>

                <div>
                  <label className="text-sm text-[#516f90] block mb-2">
                    Time frame
                  </label>

                  <div className="border rounded-md px-4 py-3 flex justify-between">
                    Last 7 days
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#dfe3eb]" />

            <div className="px-16 py-16">
              <div className="max-w-[900px] mx-auto">
                <div className="flex justify-center mb-8">
                  <div className="w-14 h-14 border rounded-lg flex items-center justify-center">
                    <Code2 size={24} />
                  </div>
                </div>

                <h2 className="text-[26px] font-semibold text-center mb-8">
                  HubSpot Tracking Code Required
                </h2>

                <div className="text-[16px] text-[#213343] leading-10 space-y-6">
                  <p>
                    Buyer intent, and revealing companies visiting your website,
                    requires having the HubSpot tracking code embedded on your
                    website.
                  </p>

                  <p>
                    Once installed, HubSpot will match visitor IPs to companies
                    and display them here.
                  </p>

                  <p>
                    Install the code snippet below on your website, just before
                    the {"</body>"} tag.
                  </p>
                </div>

                <div className="border-t mt-12 pt-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[22px] font-semibold">
                      HubSpot tracking code
                    </h3>

                    <button className="border px-6 py-3 rounded-md text-[14px]">
                      Check code installation
                    </button>
                  </div>

                  <div className="bg-[#f5f8fa] border rounded-xl p-8 font-mono text-[16px] leading-8 overflow-x-auto">
                    {`<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader"></script>`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* RESEARCH TAB */}
        {activeTab === "Research" && (
          <div className="grid grid-cols-[350px_1px_1fr] min-h-[800px]">
            {/* LEFT FILTER PANEL */}
            <div className="px-8 py-8 border-r bg-white">
              <p className="text-sm leading-8 mb-8 text-[#213343]">
                Find companies researching topics you care about, filter by fit,
                and intent level.
              </p>

              <div className="flex gap-10 border-b border-[#dfe3eb] mb-8">
                <button className="pb-3 border-b-4 border-black font-semibold text-sm">
                  Filters
                </button>
                <button className="pb-3 text-sm text-[#516f90]">
                  Saved views
                </button>
              </div>

              <div className="border rounded-xl p-5">
                <div className="flex justify-between items-center mb-5 font-semibold text-sm">
                  <div className="flex items-center gap-2">
                    <ChevronDown size={16} />
                    Research Intent
                  </div>

                  <div className="w-3 h-3 rounded-full bg-red-500" />
                </div>

                <div>
                  <label className="text-sm text-[#516f90] block mb-2">
                    Research topics
                  </label>

                  <div className="border rounded-md px-4 py-3 flex justify-between text-sm">
                    Any research topic
                    <ChevronDown size={16} />
                  </div>

                  <button className="mt-3 text-sm text-[#007a8c] font-medium">
                    Edit topics
                  </button>
                </div>

                <div className="mt-8">
                  <label className="text-sm font-medium block mb-2">
                    Filter by research level
                  </label>

                  <div className="border rounded-md px-4 py-3 text-sm">
                    All levels
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-black text-white rounded-md text-sm">
                Save view and automate
              </button>
            </div>

            {/* DIVIDER */}
            <div className="bg-[#dfe3eb]" />

            {/* RIGHT CONTENT */}
            <div className="px-8 py-6 bg-[#f5f8fa]">
              {/* TOP CREDIT CARD */}
              <div className="bg-white border rounded-xl px-6 py-5 flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <Sparkles size={20} className="text-[#ff5c35]" />

                  <p className="text-sm leading-7 text-[#213343] max-w-[650px]">
                    <span className="font-semibold">
                      Unlock research intent:
                    </span>{" "}
                    See all companies researching the topics you care about —
                    plus add net-new enriched companies to your CRM.
                  </p>
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-md text-sm">
                  Get HubSpot Credits
                </button>
              </div>

              {/* TABLE TOOLBAR */}
              <div className="flex gap-3 mb-5">
                <div className="border rounded-full px-5 py-2 bg-white text-sm">
                  322,990 companies are researching 9 topics
                </div>

                <div className="border rounded-md px-4 py-2 bg-white text-sm text-gray-400">
                  Search for companies
                </div>
              </div>

              {/* TABLE */}
              <div className="bg-white border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium text-[#007a8c]">
                        Futurism Technologies
                      </td>

                      <td className="p-4">United States</td>

                      <td className="p-4">
                        <span className="border px-3 py-1 rounded-full text-xs">
                          business growth
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-medium text-[#007a8c]">FMX</td>

                      <td className="p-4">Japan</td>

                      <td className="p-4">
                        <span className="border px-3 py-1 rounded-full text-xs">
                          digital marketing
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SIGNALS TAB */}
        {activeTab === "Signals" && (
          <div className="px-6 py-8">
            {/* Intro Row */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#213343] max-w-[760px] leading-7">
                Select companies to track for intent signals. Tracked signals
                will show up as events on record activity timelines and as
                workflow triggers, segment filters, and lead scoring criteria.
              </p>

              <div className="flex gap-8 text-sm">
                <button className="text-[#007a8c] font-medium">
                  Usage guide
                </button>

                <button className="text-[#007a8c] font-medium flex items-center gap-2">
                  Automated tracking
                  <span className="bg-green-600 text-white text-[10px] px-2 py-[2px] rounded-full">
                    New
                  </span>
                </button>

                <button className="text-[#007a8c] font-medium">Settings</button>
              </div>
            </div>

            {/* TABLE */}
            <div className="border rounded-xl overflow-hidden bg-white">
              <table className="w-full text-sm">
                <thead className="bg-[#f5f8fa] text-left">
                  <tr>
                    <th className="p-4">Company</th>
                    <th className="p-4">Signal count</th>
                    <th className="p-4">Signals received</th>
                    <th className="p-4">Stage</th>
                    <th className="p-4">Latest signal</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-medium text-[#213343]">HubSpot</td>

                    <td className="p-4">17</td>

                    <td className="p-4 flex gap-2">
                      <span className="border px-3 py-1 rounded-full text-xs bg-yellow-50">
                        Visitor intent
                      </span>

                      <span className="border px-3 py-1 rounded-full text-xs bg-purple-50">
                        Research
                      </span>
                    </td>

                    <td className="p-4">Opportunity</td>

                    <td className="p-4">Mar 17, 2026</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-medium text-[#213343]">Clearbit</td>

                    <td className="p-4">12</td>

                    <td className="p-4">
                      <span className="border px-3 py-1 rounded-full text-xs bg-yellow-50">
                        Visitor intent
                      </span>
                    </td>

                    <td className="p-4">Lead</td>

                    <td className="p-4">Mar 17, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Unlock Section */}
            <div className="flex flex-col items-center justify-center py-20">
              <Sparkles size={28} className="text-[#ff5c35] mb-4" />

              <h2 className="text-xl font-semibold mb-4">
                Unlock intent signals
              </h2>

              <p className="text-sm text-[#516f90] text-center max-w-[700px] leading-7 mb-6">
                Continuously enrich company records with real-time intent data
                like recent funding, website visits, research intent and more to
                help sales, marketing, and ops teams prioritize the right
                accounts.
              </p>

              <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
                Get HubSpot Credits
              </button>
            </div>
          </div>
        )}

        {/* CONFIGURATION TAB */}
        {activeTab === "Configuration" && (
          <div className="px-14 py-10 space-y-10">
            {/* TOP SECTION */}
            <div className="grid grid-cols-[420px_1fr] gap-12 border-b pb-10">
              {/* Left Text */}
              <div>
                <h2 className="text-[23px] font-semibold text-[#213343] mb-4">
                  Total Addressable Market (TAM) and Target Markets
                </h2>

                <p className="text-sm text-[#516f90] leading-7">
                  Build a profile for each of the market segments you're
                  targeting to focus on high-fit visitors to your site.
                </p>
              </div>

              {/* Right Card */}
              <div className="border rounded-xl bg-white overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4 border-b">
                  <h3 className="font-semibold text-sm">Target Markets</h3>

                  <button className="border px-4 py-2 rounded-md text-sm">
                    Manage markets
                  </button>
                </div>

                <div className="py-16 text-center">
                  <h4 className="text-lg font-semibold mb-3">
                    No target markets found
                  </h4>

                  <p className="text-sm text-[#516f90] leading-7 max-w-[600px] mx-auto">
                    Use target markets to focus your attention and resources on
                    high-fit visitors to your website, based on the markets you
                    want to capture.
                  </p>

                  <button className="mt-6 text-[#007a8c] font-medium text-sm">
                    Manage markets
                  </button>
                </div>
              </div>
            </div>

            {/* SECOND SECTION */}
            <div className="grid grid-cols-[420px_1fr] gap-12">
              {/* Left Text */}
              <div>
                <h2 className="text-[23px] font-semibold text-[#213343] mb-4">
                  Visitor Intent Criteria
                </h2>

                <p className="text-sm text-[#516f90] leading-7">
                  Identify and filter for companies that are showing intent by
                  defining your Intent criteria. Criteria are based on number of
                  visits/visitors and visit recency to specific page paths on
                  your site.
                </p>

                {/* Mini Card */}
                <div className="mt-8 border rounded-xl p-5 bg-white w-[250px]">
                  <div className="text-sm text-[#516f90] mb-3">
                    17 page views
                  </div>

                  <span className="border px-3 py-1 rounded-full text-xs bg-green-50">
                    Intent
                  </span>
                </div>
              </div>

              {/* Right Card */}
              <div className="border rounded-xl bg-white overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4 border-b">
                  <h3 className="font-semibold text-sm">Intent Criteria</h3>

                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#516f90]">
                      0 of 10 criteria added
                    </span>

                    <button className="border px-4 py-2 rounded-md text-sm">
                      + Add visitor intent criteria
                    </button>
                  </div>
                </div>

                <div className="py-16 text-center">
                  <h4 className="text-lg font-semibold mb-3">
                    No intent criteria found
                  </h4>

                  <p className="text-sm text-[#516f90] leading-7 max-w-[650px] mx-auto">
                    Intent allows you to define the activity on your website
                    that indicates a visitor is interested in your business.
                  </p>

                  <button className="mt-6 bg-black text-white px-5 py-2 rounded-md text-sm">
                    Add visitor intent criteria
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
