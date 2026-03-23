import React from "react";

export function CntEmbeds() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Hero */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 mb-24 cursor-default text-left">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Manage your content across Iquanta and WordPress pages
            </h1>
            <p className="text-xl text-gray-600">
              Create personalized experiences for your website visitors using
              content embeds to publish Iquanta-built content to your WordPress
              site.
            </p>
            <p className="text-xl text-gray-800 font-medium">
              Unlock this and more with Content Hub Professional.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
              <button className="bg-gray-900 hover:bg-gray-800 hover:cursor-pointer text-white font-semibold flex-1 sm:flex-none py-3 px-12 text-sm rounded shadow-sm transition-colors duration-200">
                Talk to Sales
              </button>
              <button className="bg-white border text-gray-800 hover:bg-gray-50 hover:cursor-pointer border-gray-300 font-semibold flex-1 sm:flex-none py-3 px-12 text-sm rounded shadow-sm transition-colors">
                Start 14-day trial
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              No commitment or credit card required.
            </p>
          </div>
          <div className="lg:w-1/2 w-full relative h-[400px]">
            {/* Mockup 1: Overlapping browser windows */}
            <div className="absolute top-0 right-0 w-[85%] bg-white border border-gray-200 shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] z-10">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              {/* Browser Content */}
              <div className="p-4 space-y-4 bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-20 bg-gray-50 border rounded-md overflow-hidden flex flex-col p-2 space-y-2">
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-2 w-4/6 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-16 h-20 bg-gray-50 border rounded-md overflow-hidden flex flex-col p-2 space-y-2">
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-16 h-20 border-2 border-orange-200 rounded-md bg-orange-50/20 flex flex-col items-center justify-center p-2">
                    <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center mb-1">
                      <svg
                        className="w-3.5 h-3.5 text-white"
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
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-1/3 bg-gray-100 rounded"></div>
                  <div className="h-2 w-full bg-gray-50 rounded"></div>
                  <div className="h-2 w-full bg-gray-50 rounded"></div>
                  <div className="h-2 w-5/6 bg-gray-50 rounded"></div>
                </div>
              </div>
            </div>

            {/* Background window */}
            <div className="absolute bottom-4 left-0 w-[85%] bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden transform -translate-x-4 translate-y-4 z-0 opacity-80">
              <div className="bg-gray-100 px-4 py-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-gray-50 border rounded-sm"
                    ></div>
                  ))}
                </div>
                <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-50 rounded"></div>
                  <div className="h-2 w-full bg-gray-50 rounded"></div>
                </div>
              </div>
            </div>

            {/* Decorative dots/shapes from image */}
            <div className="absolute top-1/4 right-0 w-4 h-4 text-orange-200 transform translate-x-4">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="10" r="4" />
              </svg>
            </div>
            <div className="absolute bottom-1/4 left-0 w-6 h-6 text-blue-200 transform -translate-x-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Section 2: Personalization */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20 cursor-default text-left">
          <div className="lg:w-1/2 w-full">
            {/* Mockup 2: Iquanta Content Embed Choice */}
            <div className="bg-[#FFF0F4]/30 border border-pink-50 rounded-lg shadow-inner overflow-hidden transform duration-500 hover:shadow-md p-10 h-[500px] relative flex items-center justify-center">
              {/* Main "Browser" Window */}
              <div className="w-full h-full bg-white border border-gray-200 rounded-md shadow-2xl relative overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 border-b flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="h-40 w-full bg-gray-50 border rounded-lg flex items-center justify-center relative">
                    <div className="absolute top-2 left-2 flex gap-2">
                      <div className="h-4 w-12 bg-gray-200 rounded text-[6px] flex items-center justify-center font-bold text-gray-500">
                        Download app
                      </div>
                      <div className="h-4 w-12 bg-gray-200 rounded text-[6px] flex items-center justify-center font-bold text-gray-500">
                        From industry
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 w-full p-8 opacity-20">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="h-10 bg-gray-300 rounded"></div>
                      ))}
                    </div>

                    {/* The Floating Popover from Image */}
                    <div className="absolute bottom-[-20px] left-[10%] w-[320px] bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 z-50 transform translate-y-4">
                      <div className="p-3 border-b flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-white"
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
                          <span className="text-[10px] font-bold text-gray-700">
                            Iquanta Content <br />
                            <span className="text-[8px] font-normal text-gray-400 italic">
                              Select Embed
                            </span>
                          </span>
                        </div>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                      <div className="p-3">
                        <div className="relative mb-3">
                          <input
                            type="text"
                            className="w-full border rounded px-8 py-1.5 cursor-default text-[10px]"
                            placeholder="Search"
                            readOnly
                          />
                          <svg
                            className="absolute left-2.5 top-2 w-3 h-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">
                            Embeds outside a theme
                          </div>
                          <div className="text-[9px] py-1.5 px-2  text-gray-700  rounded">
                            Services LATAM
                          </div>
                          <div className="text-[9px] py-1.5 px-2  text-gray-700  rounded border-t">
                            Services updated
                          </div>
                          <div className="text-[9px] py-1.5 px-2  text-gray-700  rounded border-t">
                            Team 2024
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <div className="text-[9px] text-teal-600 font-bold">
                            Create new in Iquanta &rarr;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-12">
                    <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
                    <div className="h-2 w-full bg-gray-50 rounded"></div>
                    <div className="h-2 w-4/5 bg-gray-50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Use embeddable content to deliver personalized web experiences
            </h2>
            <h3 className="text-2xl font-bold text-gray-800">
              Revamp your website without rebuilding or migrating it
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              It's not common to hear someone saying, 'What a great time to
              rebuild our entire website.' The truth is, even when your website
              or CMS platform is not meeting your expectations or your
              customer's needs, it can be incredibly daunting to consider the
              cost and time required to retool or migrate it.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Use Iquanta's content embeds to bridge the gap between the
              experience your customers expect and your current CMS platform
              delivers. With content embeds, you can create engaging, dynamic
              content blocks in Iquanta and integrate them into your WordPress
              site, without having to rip and replace what you already have.
            </p>
          </div>
        </div>

        {/* Section 3: Efficiency */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-20 cursor-default text-left">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">
              Breeze through dev and design bottlenecks
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              As your business grows online, it's possible for developers to
              unintentionally become the sole gatekeepers for publishing
              content. This can lead to an overload of work and a decrease in
              content productivity. With Iquanta content embeds, anyone can
              create and embed content easily, regardless of their technical
              expertise.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* Mockup 3: Embed details popover */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden flex transform duration-500 hover:shadow-2xl h-[450px] relative">
              {/* Background Content List */}
              <div className="w-full flex">
                {/* Sidebar */}
                <div className="w-12 border-r bg-gray-50 flex flex-col items-center py-4 gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gray-200 rounded-sm"
                    ></div>
                  ))}
                </div>
                {/* Main Content */}
                <div className="flex-1 p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-32 bg-gray-100 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-20 bg-gray-900 rounded"></div>
                      <div className="h-8 w-32 border rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-teal-500 rounded-sm"></div>
                          <div className="h-3 w-40 bg-gray-100 rounded"></div>
                        </div>
                        <div className="flex gap-8">
                          <div className="h-3 w-20 bg-gray-50 rounded"></div>
                          <div className="h-3 w-24 bg-gray-50 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Popover overlay */}
              <div className="absolute top-[10%] right-[10%] w-[340px] bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 z-50">
                <div className="bg-teal-600 text-white p-3 flex justify-between items-center rounded-t-lg">
                  <span className="text-xs font-bold">Embed details</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                <div className="p-4 space-y-4">
                  <div className="font-bold text-sm">Team 2024</div>
                  <div className="flex border-b text-[10px] font-bold text-gray-500 gap-4">
                    <div className="border-b-2 border-teal-500 pb-2 text-teal-600">
                      General
                    </div>
                    <div className="pb-2">Domains & pixels</div>
                    <div className="pb-2">Embed history</div>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-[8px] text-gray-400 font-bold uppercase">
                          Created by
                        </div>
                        <div className="text-[10px] font-medium">
                          Christian Korrap
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[8px] text-gray-400 font-bold uppercase">
                          Created on
                        </div>
                        <div className="text-[10px] font-medium">
                          February 23, 2024 2:32 PM
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[8px] text-gray-400 font-bold uppercase">
                          Updated by
                        </div>
                        <div className="text-[10px] font-medium">
                          Christian Korrap
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[8px] text-gray-400 font-bold uppercase">
                          Updated on
                        </div>
                        <div className="text-[10px] font-medium">
                          February 26, 2024 10:43 AM
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[8px] text-gray-400 font-bold uppercase">
                        Preview
                      </div>
                      <div className="border border-gray-100 rounded-md p-3 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                            ></div>
                          ))}
                        </div>
                        <div className="text-[9px] font-bold text-gray-700">
                          Sarah, Michael + 2 more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Comparison Table */}
        <div className="py-24 max-w-5xl mx-auto cursor-default font-sans">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center tracking-tight">
            Create Content
          </h2>

          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-white text-center">
              <div className="p-6 hidden md:block"></div>
              <div className="p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l relative group">
                <div className="font-extrabold text-gray-900 mb-5 text-sm tracking-wide uppercase">
                  Free Content tools
                </div>
                <div className="text-gray-500 border border-gray-200 rounded px-5 py-2 text-xs bg-white font-medium hover:bg-gray-50 cursor-pointer shadow-sm">
                  Your current plan
                </div>
              </div>
              <div className="p-8 flex flex-col items-center justify-center md:border-l bg-gray-50/80 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
                <div className="font-extrabold text-gray-900 mb-5 text-sm tracking-wide uppercase">
                  Content Hub Professional
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-8 rounded text-xs transition-colors hover:cursor-pointer shadow-sm">
                  Talk to Sales
                </button>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100 text-sm">
              {/* Row: Ad management */}
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

              {/* Row: AI assistants */}
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  AI assistants
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

              {/* Row: AI image generator */}
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

              {/* Row: CTAs */}
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

              {/* Row: Forms */}
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
                  <span className="font-medium">Remove Iquanta branding</span>
                  <span className="mt-1">Additional features</span>
                </div>
              </div>

              {/* Row: SEO recommendations */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  SEO recommendations & optimizations
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l text-gray-600 flex items-center justify-center text-[13px] md:bg-white font-medium">
                  Basic recommendations.
                </div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex items-center justify-center text-[13px] leading-relaxed font-medium text-center">
                  Advanced recommendations, full site auditing, and topics.
                </div>
              </div>

              {/* Row: HubDB */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  HubDB
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

              {/* Row: Dynamic pages */}
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Dynamic pages
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

              {/* Row: Memberships */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  Memberships
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l md:bg-white"></div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex items-center justify-center text-[13px] font-medium">
                  Up to 2 access groups.
                </div>
              </div>

              {/* Row: Member blog */}
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Member blog
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l md:bg-white"></div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex items-center justify-center text-[13px] font-medium">
                  Up to 2 access groups.
                </div>
              </div>

              {/* Row: Password protected pages */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  Password protected pages
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

              {/* Row: Video hosting */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors border-b">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  Video hosting & management
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l md:bg-white"></div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex items-center justify-center text-[13px] font-medium">
                  Up to 150 videos
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-right pr-4">
            <span className="text-[10px] text-gray-500 italic">
              View the{" "}
              <span className="text-teal-600 font-bold cursor-pointer hover:underline">
                Product & Services Catalog
              </span>{" "}
              for full technical limits and definitions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
