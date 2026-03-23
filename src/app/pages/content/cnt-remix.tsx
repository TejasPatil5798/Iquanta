import React from "react";
export function CntRemix() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Hero */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 mb-24 cursor-default">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Save time and effort with AI-powered multichannel content creation
            </h1>
            <p className="text-xl text-gray-600">
              Boost your inbound marketing strategy using content repurposing
              software to adapt assets for diverse channels effortlessly.
            </p>
            <p className="text-xl text-gray-800 font-medium">
              Unlock this and more with Content Hub Professional.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold flex-1 sm:flex-none py-3 px-12 text-sm rounded shadow-sm transition-colors duration-200">
                Talk to Sales
              </button>
              <button className="bg-white border text-gray-800 hover:bg-gray-50 border-gray-300 font-semibold flex-1 sm:flex-none py-3 px-12 text-sm rounded shadow-sm transition-colors">
                Start 14-day trial
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              No commitment or credit card required.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* Mockup 1: Content Grid */}
            <div className="bg-gray-50/50 border border-gray-100 shadow-xl rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 p-8">
              <div className="grid grid-cols-3 gap-6 relative">
                {/* Background lines connecting grid items */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                <div className="absolute top-1/4 left-1/6 w-2/3 h-1/2 border-l-2 border-r-2 border-gray-200 z-0"></div>
                {/* Nodes */}
                {[
                  "Landing page",
                  "Blog post",
                  "Social post",
                  "Ad copy",
                  "Image",
                  "Email",
                  "SMS",
                  "Web page",
                  "Blog post",
                ].map((type, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded shadow-sm p-4 relative z-10 flex flex-col hover:border-orange-300 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {/* Small color indicator based on type */}
                      <div
                        className={`w-4 h-4 rounded text-white flex items-center justify-center ${
                          type.includes("page")
                            ? "bg-orange-400"
                            : type.includes("Blog")
                              ? "bg-orange-500"
                              : type.includes("Social")
                                ? "bg-purple-500"
                                : type.includes("Ad")
                                  ? "bg-blue-500"
                                  : type.includes("Image")
                                    ? "bg-yellow-500"
                                    : type.includes("Email")
                                      ? "bg-red-400"
                                      : "bg-green-500"
                        }`}
                      >
                        <svg
                          className="w-2.5 h-2.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-gray-700">
                        {type}
                      </span>
                    </div>
                    <div className="space-y-2 flex-grow">
                      <div className="h-2 w-full bg-gray-100 rounded group-hover:bg-gray-200 transition-colors"></div>
                      <div className="h-2 w-5/6 bg-gray-100 rounded group-hover:bg-gray-200 transition-colors"></div>
                      <div className="h-2 w-4/6 bg-gray-100 rounded group-hover:bg-gray-200 transition-colors"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Section 2: Expand Reach */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-20 cursor-default text-left">
          <div className="lg:w-1/2 w-full">
            {/* Mockup 2: Cascading cards */}
            <div className="bg-[#FFF0F4] border border-pink-50 rounded-lg shadow-inner overflow-hidden transform duration-500 hover:shadow-md p-10 h-[500px] relative flex items-center justify-center">
              {/* Card 1 */}
              <div className="absolute top-[10%] left-[10%] w-64 bg-white border border-gray-200 rounded-md shadow-xl z-10 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="border-b px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-700">
                    Landing page
                  </span>
                </div>
                <div className="p-4 flex gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded shrink-0"></div>
                  <div className="space-y-2 w-full mt-1">
                    <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-4/5 bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-3/5 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="absolute top-[22%] left-[22%] w-64 bg-white border border-gray-200 rounded-md shadow-xl z-20 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="border-b px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-700">Ad</span>
                </div>
                <div className="p-4 flex gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded shrink-0"></div>
                  <div className="space-y-2 w-full mt-1">
                    <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-4/5 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="absolute top-[34%] left-[34%] w-64 bg-white border border-gray-200 rounded-md shadow-xl z-30 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="border-b px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-700">Image</span>
                </div>
                <div className="p-4">
                  <div className="h-24 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-1.5 w-1/2 bg-gray-200 rounded mx-auto"></div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="absolute top-[46%] left-[46%] w-64 bg-white border border-gray-200 rounded-md shadow-xl z-40 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="border-b px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-700">SMS</span>
                </div>
                <div className="p-4">
                  <div className="bg-gray-100 rounded-lg p-3 space-y-2">
                    <div className="h-1.5 w-full bg-gray-300 rounded"></div>
                    <div className="h-1.5 w-5/6 bg-gray-300 rounded"></div>
                    <div className="h-1.5 w-4/6 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="absolute top-[58%] left-[58%] w-64 bg-white border border-gray-200 rounded-md shadow-xl z-50 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="border-b px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-700">
                    Social post
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-1.5 w-full">
                    <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Card 6 */}
              <div className="absolute top-[70%] left-[70%] w-64 bg-white border border-gray-200 rounded-md shadow-xl z-50 transition-transform duration-300 hover:translate-y-[-5px] hidden sm:block">
                <div className="border-b px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-700">
                    Blog post
                  </span>
                </div>
                <div className="p-4 space-y-2 w-full">
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-4/5 bg-gray-200 rounded"></div>
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-3/5 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">
              Expand your reach quickly with content repurposing software
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              When it takes days to complete a single asset, repurposing it for
              multiple channels and audiences can take weeks or more, often
              meaning it's already dated by the time it reaches your audience.
              Distilling blog posts into compelling emails, crafting social
              media copy and images, and providing ad and landing page campaign
              ideas across all your product lines can drain your time and
              resources.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Until now. Introducing Content Remix. With Content Remix, you can
              effortlessly repurpose your most valuable marketing assets in a
              flash. Break free from content creation bottlenecks, unlock new
              growth opportunities, and propel your marketing strategy to new
              heights with AI-driven efficiency.
            </p>
          </div>
        </div>
        {/* Section 3: Reach wider audiences */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20 cursor-default text-left">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">
              Reach wider audiences with less effort and money
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Creating content for multiple channels is a resource- and
              time-intensive process. But, if you limit distribution to save
              time and money, you may miss out on valuable opportunities to
              reach and engage your audiences. HubSpot's content repurposing
              software effortlessly reworks your existing assets for various
              channels such as social media, blogs, images, ads, and email. By
              using Content Remix, you can easily create unified messaging
              across different platforms, expand your reach, attract more
              prospects, and drive customer acquisition.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* Mockup 3: Select content types */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden flex transform duration-500 hover:shadow-2xl h-[450px]">
              {/* Sidebar */}
              <div className="w-1/3 border-r border-gray-100 bg-white flex flex-col p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-800 text-xs text-center w-full">
                    Select content types
                  </span>
                </div>
                <div className="space-y-2 flex-grow overflow-y-auto pr-1">
                  {/* Option 1 */}
                  <div className="border border-gray-200 rounded p-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                      <span className="text-[10px] font-bold text-gray-700">
                        Blog post
                      </span>
                    </div>
                    <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                  </div>
                  {/* Option 2 */}
                  <div className="border border-gray-200 rounded p-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                      <span className="text-[10px] font-bold text-gray-700">
                        Image
                      </span>
                    </div>
                    <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                  </div>
                  {/* Option 3 - Checked */}
                  <div className="border-2 border-teal-500 bg-teal-50/30 rounded p-2 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-[10px] font-bold text-gray-800">
                        Ad copy
                      </span>
                    </div>
                    <div className="w-3 h-3 bg-teal-500 rounded-sm flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/* Option 4 */}
                  <div className="border border-gray-200 rounded p-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-[10px] font-bold text-gray-700">
                        Social post
                      </span>
                    </div>
                    <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                  </div>
                  {/* Option 5 - Checked */}
                  <div className="border-2 border-teal-500 bg-teal-50/30 rounded p-2 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
                      <span className="text-[10px] font-bold text-gray-800">
                        Landing page
                      </span>
                    </div>
                    <div className="w-3 h-3 bg-teal-500 rounded-sm flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/* Option 6 */}
                  <div className="border border-gray-200 rounded p-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                      <span className="text-[10px] font-bold text-gray-700">
                        SMS message
                      </span>
                    </div>
                    <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                  </div>
                  {/* Option 7 */}
                  <div className="border border-gray-200 rounded p-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-400 rounded-sm"></div>
                      <span className="text-[10px] font-bold text-gray-700">
                        Email
                      </span>
                    </div>
                    <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-white border border-gray-200 text-gray-600 font-bold py-1.5 rounded text-[10px] hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="flex-1 bg-[#ff7a59] hover:bg-[#e06b4e] text-white font-bold py-1.5 rounded text-[10px] shadow-sm">
                    Add content
                  </button>
                </div>
              </div>
              {/* Main graph area */}
              <div className="w-2/3 bg-gray-50/50 p-6 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-200 z-0 hidden sm:block"></div>
                {/* Selected nodes shown blurrily or beautifully laid out */}
                <div className="grid grid-cols-2 gap-4 relative z-10 w-full opacity-80 scale-90">
                  {/* Root */}
                  <div className="col-span-2 flex justify-center mb-2">
                    <div className="bg-white border border-gray-200 rounded shadow-sm p-3 w-40 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                      <div className="h-1.5 w-5/6 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  {/* Children */}
                  <div className="bg-white border shadow-sm rounded p-2 border-teal-400 ring-1 ring-teal-400 flex flex-col gap-1.5 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="h-1.5 w-12 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-1 w-full bg-gray-100 rounded"></div>
                    <div className="h-1 w-4/5 bg-gray-100 rounded"></div>
                    <div className="h-1 w-full bg-gray-100 rounded"></div>
                  </div>
                  <div className="bg-white border shadow-sm rounded p-2 border-teal-400 ring-1 ring-teal-400 flex flex-col gap-1.5 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
                      <div className="h-1.5 w-12 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded"></div>
                      <div className="flex flex-col gap-1 flex-1">
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                        <div className="h-1 w-2/3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 4: Maximize competitiveness */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-20 cursor-default text-left">
          <div className="lg:w-1/2 w-full">
            {/* Mockup 4: Test Remix Flow */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
              {/* Header bar */}
              <div className="bg-[#1f2937] px-4 py-3 flex justify-between items-center text-white">
                <div className="flex items-center gap-2 text-[10px] font-medium text-gray-300 hover:text-white cursor-pointer transition">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Back to dashboard
                </div>
                <div className="font-bold text-sm tracking-wide">
                  Test_Remix flow
                </div>
                <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 text-[10px] py-1 px-3 rounded font-medium transition-colors">
                  Save remix workflow
                </button>
              </div>
              {/* Sub header */}
              <div className="border-b bg-gray-50/80 px-4 py-2 flex justify-between items-center">
                <span className="text-[10px] text-blue-600 font-medium cursor-pointer hover:underline">
                  Show attrib.
                </span>
                <span className="text-[10px] text-gray-500 font-medium cursor-pointer hover:text-gray-700">
                  View all content
                </span>
              </div>
              {/* Node Tree Area */}
              <div className="bg-white h-[360px] p-6 relative overflow-hidden flex items-center justify-center">
                {/* Connecting Lines */}
                <svg
                  className="absolute inset-0 w-full h-full text-gray-200 z-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Central to middle row */}
                  <path d="M50% 30% L 20% 55%" />
                  <path d="M50% 30% L 50% 55%" />
                  <path d="M50% 30% L 80% 55%" />
                  {/* Middle to bottom row */}
                  <path d="M20% 65% L 20% 85%" />
                  <path d="M50% 65% L 50% 85%" />
                  <path d="M80% 65% L 80% 85%" />
                </svg>
                {/* Top Node */}
                <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 z-10 w-44">
                  <div className="bg-white border border-orange-200 shadow-sm rounded-md p-3 hover:shadow-md transition cursor-pointer group">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-3.5 h-3.5 bg-orange-500 rounded-sm"></div>
                      <span className="text-[10px] font-bold text-gray-800">
                        Blog post
                      </span>
                    </div>
                    <div className="space-y-1.5 px-1 pb-1">
                      <div className="h-1.5 w-full bg-gray-100 group-hover:bg-gray-200 rounded"></div>
                      <div className="h-1.5 w-full bg-gray-100 group-hover:bg-gray-200 rounded"></div>
                      <div className="h-1.5 w-4/5 bg-gray-100 group-hover:bg-gray-200 rounded"></div>
                      <div className="h-1.5 w-full bg-gray-100 group-hover:bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* Middle Row */}
                <div className="absolute top-[45%] left-[20%] transform -translate-x-1/2 z-10 w-36">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-md p-2 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-2 border-b pb-1.5">
                      <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
                      <span className="text-[9px] font-bold text-gray-700">
                        Landing page
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded shrink-0"></div>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                        <div className="h-1 w-2/3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 z-10 w-36">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-md p-2 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-2 border-b pb-1.5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-[9px] font-bold text-gray-700">
                        Social post
                      </span>
                    </div>
                    <div className="space-y-1 w-full mt-1">
                      <div className="h-1 w-full bg-gray-100 rounded"></div>
                      <div className="h-1 w-full bg-gray-100 rounded"></div>
                      <div className="h-1 w-5/6 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[45%] left-[80%] transform -translate-x-1/2 z-10 w-36">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-md p-2 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-2 border-b pb-1.5">
                      <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                      <span className="text-[9px] font-bold text-gray-700">
                        Image
                      </span>
                    </div>
                    <div className="h-12 w-full bg-gray-200 rounded mb-1"></div>
                  </div>
                </div>
                {/* Bottom Row */}
                <div className="absolute top-[75%] left-[20%] transform -translate-x-1/2 z-10 w-36">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-md p-2 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-2 border-b pb-1.5">
                      <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                      <span className="text-[9px] font-bold text-gray-700">
                        Image
                      </span>
                    </div>
                    <div className="flex gap-2 items-center justify-center py-1">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[75%] left-[50%] transform -translate-x-1/2 z-10 w-36">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-md p-2 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-2 border-b pb-1.5">
                      <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
                      <span className="text-[9px] font-bold text-gray-700">
                        Landing page
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded shrink-0"></div>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                        <div className="h-1 w-4/5 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[75%] left-[80%] transform -translate-x-1/2 z-10 w-36">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-md p-2 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-2 border-b pb-1.5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-[9px] font-bold text-gray-700">
                        Ad copy
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded shrink-0"></div>
                      <div className="flex flex-col gap-1 w-full mt-1">
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">
              Maximize your competitiveness without scaling your budget
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Trying to create content that stands out among competitors who
              have large budgets and teams can be a daunting task. But, with the
              help of content remix, you can level the playing field by using AI
              to increase the output and reach of your content without having to
              increase your budget or resources.
            </p>
          </div>
        </div>
        {/* Section 5: Create Content Table */}
        <div className="py-24 max-w-4xl mx-auto cursor-default font-sans">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center tracking-tight">
            Create Content
          </h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-white text-center">
              <div className="p-6 hidden md:block"></div>
              <div className="p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l relative group">
                <div className="font-extrabold text-gray-900 mb-5 text-sm tracking-wide">
                  Free Content tools
                </div>
                <div className="text-gray-500 border border-gray-200 rounded px-5 py-2 text-xs bg-white font-medium hover:bg-gray-50 cursor-pointer shadow-sm">
                  Your current plan
                </div>
              </div>
              <div className="p-8 flex flex-col items-center justify-center md:border-l bg-gray-50/80 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
                <div className="font-extrabold text-gray-900 mb-5 text-sm tracking-wide">
                  Content Hub Professional
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-8 rounded text-xs transition-colors shadow-sm">
                  Talk to Sales
                </button>
              </div>
            </div>
            {/* Table Rows */}
            <div className="divide-y divide-gray-100 text-sm">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  Ad management
                </div>
                <div className="p-5 border-b md:border-b-0 md:border-l flex items-center justify-center md:bg-white">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white shadow">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="p-5 md:border-l bg-gray-50/80 flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white shadow">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide gap-3">
                  <svg
                    className="w-4 h-4 text-gray-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11v-1a2 2 0 00-2-2h-3l-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2h4l4-4h3a2 2 0 002-2v-1M7 9v11M14 9V6m0 3v3m0-3h3m-3 0H8m6 0v3m0-3V6"
                    />
                  </svg>
                  AI assistants
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l md:bg-white text-gray-600"></div>
                <div className="p-5 md:border-l bg-gray-50/80 flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white shadow">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide gap-3">
                  <svg
                    className="w-4 h-4 text-gray-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  AI image generator
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l md:bg-white"></div>
                <div className="p-5 md:border-l bg-gray-50/80 flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white shadow">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  CTAs
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l md:bg-white"></div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex items-center justify-center text-[13px] leading-relaxed font-medium">
                  Includes custom targeting by device type, country, referral
                  URL, and more.
                </div>
              </div>
              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center gap-3 tracking-wide">
                  <svg
                    className="w-4 h-4 text-gray-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Forms
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l text-gray-600 flex items-center justify-center text-[13px] md:bg-white font-medium">
                  Limited features
                </div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex flex-col justify-center items-center text-[13px] leading-relaxed">
                  <span className="font-medium">Remove HubSpot branding</span>
                  <span className="mt-1">Additional features</span>
                </div>
              </div>
              {/* Row 6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  Landing pages
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l text-gray-600 flex items-center justify-center text-[13px] md:bg-white font-medium">
                  Up to 20 total landing pages. Includes HubSpot branding.
                </div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex flex-col justify-center items-center text-[13px] leading-relaxed">
                  <span className="font-medium">
                    Up to 10K landing pages. Includes custom templates, smart
                    content for personalization, A/B testing, adaptive testing,
                    and SEO recommendations. Remove HubSpot branding.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}