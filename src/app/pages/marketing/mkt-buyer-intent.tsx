import { useState } from "react";
import { ChevronDown, Info, Code2 } from "lucide-react";

export function MktBuyerIntent() {
  const [activeTab, setActiveTab] = useState("Visitors");

  return (
    <div className="min-h-screen bg-[#f5f8fa]">

      {/* Main Workspace */}
      <div className="bg-white min-h-screen">

        {/* Header */}
        <div className="px-14 pt-10 border-b border-[#dfe3eb]">

          <div className="flex items-center gap-2 mb-8">
            <h1 className="text-[42px] font-semibold text-[#213343]">
              Buyer Intent
            </h1>
            <Info size={18} className="text-gray-400" />
          </div>

          {/* Tabs */}
          <div className="flex gap-14 text-[20px]">

            {["Overview", "Visitors", "Research", "Signals", "Configuration"].map((tab) => (
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

        {/* Main Content */}
        <div className="grid grid-cols-[420px_1px_1fr] min-h-[800px]">

          {/* Left Filter Panel */}
          <div className="px-8 py-10 border-r border-[#dfe3eb]">

            <p className="text-[20px] text-[#213343] leading-9 mb-10">
              Identify companies visiting your website,
              filter by fit, intent, and engagement.
            </p>

            <div className="flex gap-12 border-b border-[#dfe3eb] mb-8">
              <button className="pb-4 font-semibold border-b-4 border-black">
                Filters
              </button>
              <button className="pb-4 text-[#516f90]">
                Saved views
              </button>
            </div>

            {/* Filter Card */}
            <div className="border rounded-xl p-6 bg-white">

              <div className="flex items-center gap-3 font-semibold mb-6">
                <ChevronDown size={18} />
                Visitors & Visitor Intent
              </div>

              <div className="space-y-8">

                <div>
                  <label className="text-sm text-[#516f90] mb-2 block">
                    Time frame
                  </label>

                  <div className="border rounded-md px-4 py-3 flex justify-between items-center">
                    Last 7 days
                    <ChevronDown size={18} />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#516f90] mb-2 block">
                    Showing visitor intent
                  </label>

                  <div className="w-14 h-8 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-[#f5f8fa] rounded-lg text-[#7c98b6] font-medium">
              Save view and automate
            </button>
          </div>

          {/* Divider */}
          <div className="bg-[#dfe3eb]" />

          {/* Right Content */}
          <div className="px-16 py-16">

            <div className="max-w-[900px] mx-auto">

              <div className="flex justify-center mb-8">
                <div className="w-14 h-14 border rounded-lg flex items-center justify-center">
                  <Code2 size={24} />
                </div>
              </div>

              <h2 className="text-[36px] font-semibold text-center mb-8">
                HubSpot Tracking Code Required
              </h2>

              <div className="text-[22px] text-[#213343] leading-10 space-y-6">

                <p>
                  Buyer intent, and revealing companies visiting your website,
                  requires having the HubSpot tracking code embedded on your website.
                </p>

                <p>
                  Once installed, HubSpot will match visitor IPs to companies
                  and display them here.
                </p>

                <p>
                  Install the code snippet below on your website,
                  just before the {"</body>"} tag.
                </p>
              </div>

              <div className="border-t mt-12 pt-10">

                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[28px] font-semibold">
                    HubSpot tracking code
                  </h3>

                  <button className="border px-6 py-3 rounded-md text-[18px]">
                    Check code installation
                  </button>
                </div>

                <div className="bg-[#f5f8fa] border rounded-xl p-8 font-mono text-[18px] leading-8 overflow-x-auto">
{`<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader"></script>`}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}