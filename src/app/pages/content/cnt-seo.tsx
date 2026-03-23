import React from "react";

export function CntSeo() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Hero */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 mb-24 cursor-default">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Get found online by improving your search rank
            </h1>
            <p className="text-xl text-gray-600">
              Let HubSpot take the guesswork out of SEO with customized
              suggestions for improving your site's rankings, keyword
              recommendations, and more.
            </p>
            <p className="text-xl text-gray-800 font-medium">
              Unlock this and more with Marketing Hub Professional.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded transition-colors duration-200">
                Talk to Sales
              </button>
            </div>
            <div className="text-sm font-medium mt-4 flex items-center gap-2">
              <a
                href="#"
                className="text-teal-600 hover:text-teal-800 hover:underline"
              >
                Start 14-day trial
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="#"
                className="text-teal-600 hover:text-teal-800 hover:underline"
              >
                View pricing
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* Mockup 1: Inbound Marketing Graph */}
            <div className="bg-white border border-gray-100 shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
              <div className="h-6 bg-teal-600 flex items-center px-4 space-x-2">
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
              </div>
              <div className="p-6">
                <div className="w-1/3 h-4 bg-gray-200 rounded mb-4"></div>
                <div className="flex justify-center relative py-12">
                  <div className="w-32 h-16 border-2 border-teal-500 rounded flex items-center justify-center text-teal-700 font-bold bg-teal-50 relative z-10 shadow-sm text-center leading-tight p-2">
                    Inbound Marketing
                  </div>
                  {/* Lines spreading out roughly */}
                  <svg
                    className="absolute inset-0 w-full h-full text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M50% 50% Q 25% 25% 10% 20%" />
                    <path d="M50% 50% Q 75% 25% 90% 20%" />
                    <path d="M50% 50% Q 25% 75% 10% 80%" />
                    <path d="M50% 50% Q 75% 75% 90% 80%" />
                  </svg>
                  <div className="absolute top-8 left-1/4 w-24 h-8 bg-blue-50 border border-blue-200 rounded flex items-center justify-center text-xs text-blue-700">
                    Content URL
                  </div>
                  <div className="absolute top-8 right-1/4 w-24 h-8 bg-blue-50 border border-blue-200 rounded flex items-center justify-center text-xs text-blue-700">
                    Topic 2
                  </div>
                  <div className="absolute bottom-8 left-1/4 w-24 h-8 bg-blue-50 border border-blue-200 rounded flex items-center justify-center text-xs text-blue-700">
                    Subtopic
                  </div>
                  <div className="absolute bottom-8 right-1/4 w-24 h-8 bg-blue-50 border border-blue-200 rounded flex items-center justify-center text-xs text-blue-700">
                    Performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Integrated Tools */}
        <div className="py-20 text-center cursor-default">
          <h2 className="text-4xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight mb-20 text-center">
            HubSpot's SEO tools are integrated with all our content tools, so
            you never miss an optimization opportunity
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 text-left">
            <div className="lg:w-3/5 w-full">
              {/* Mockup 2: SEO Categories */}
              <div className="bg-white border rounded-lg shadow-xl overflow-hidden text-sm transform transition-all duration-500 hover:shadow-2xl">
                <div className="border-b px-6 py-4 flex gap-8 text-gray-500 font-medium">
                  <span className="text-teal-600 border-b-2 border-teal-600 pb-4 -mb-4 px-1 cursor-pointer hover:text-teal-700 transition">
                    Recommendations
                  </span>
                  <span className="cursor-pointer hover:text-gray-800 transition">
                    Analyze
                  </span>
                  <span className="cursor-pointer hover:text-gray-800 transition">
                    Topics
                  </span>
                </div>
                <div className="p-6 bg-gray-50 text-center text-lg font-bold border-b text-gray-800">
                  <div className="grid grid-cols-2 divide-x">
                    <div>
                      <span className="text-xs text-gray-500 font-semibold tracking-wide block mb-1">
                        PAGES SCANNED
                      </span>
                      <div className="text-3xl font-extrabold text-gray-900">
                        9
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-semibold tracking-wide block mb-1">
                        TOTAL ISSUES
                      </span>
                      <div className="text-3xl font-extrabold text-gray-900">
                        31
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 border-r p-6 space-y-4">
                    <div className="font-bold text-gray-700 mb-4">
                      SEO Categories
                    </div>
                    <div className="flex justify-between items-center text-teal-600 font-medium bg-teal-50 p-2 rounded -mx-2 cursor-pointer transition hover:bg-teal-100">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        On page SEO
                      </span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 p-2 cursor-pointer transition hover:bg-gray-50 hover:text-teal-600 rounded -mx-2">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="14"
                            height="20"
                            x="5"
                            y="2"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M12 18h.01"></path>
                        </svg>
                        Mobile Experience
                      </span>
                      <span>0</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 p-2 cursor-pointer transition hover:bg-gray-50 hover:text-teal-600 rounded -mx-2">
                      <span className="flex items-center gap-2">
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        Crawling and Indexing
                      </span>
                      <span>6</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-2/3 p-6 space-y-6 bg-gray-50/50">
                    <div className="bg-white border rounded p-4 shadow-sm hover:shadow transition duration-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm md:text-base leading-snug">
                            Reduce how long the page is blocked from responding
                            to user input
                          </h4>
                          <div className="flex flex-wrap items-center gap-3 text-xs mt-3">
                            <span className="text-gray-500 font-medium">
                              SEO impact:{" "}
                              <strong className="text-red-600 bg-red-50 border border-red-100 px-1 py-0.5 rounded ml-1 tracking-wide">
                                HIGH
                              </strong>
                            </span>
                            <span className="text-gray-500 font-medium">
                              Technical difficulty:{" "}
                              <strong className="text-red-600 bg-red-50 border border-red-100 px-1 py-0.5 rounded ml-1 tracking-wide">
                                HIGH
                              </strong>
                            </span>
                          </div>
                        </div>
                        <button className="hidden md:block text-teal-600 font-medium text-sm border border-teal-200 px-3 py-1 rounded hover:bg-teal-50 transition-colors whitespace-nowrap ml-4">
                          View pages
                        </button>
                      </div>
                      <p className="text-gray-500 text-xs mt-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                        Total Blocking Time (TBT) measures the total amount of
                        time that a page is blocked from responding to user
                        input, such as mouse clicks, screen taps, or keyboard
                        presses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Understand how to optimize your content in one convenient
                location
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                With limited time to learn the ins-and-outs of website best
                practices, it can be difficult to understand where to focus your
                efforts to have the biggest impact on content performance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                That's where HubSpot's recommendation tools come in. You'll get
                actionable recommendations on how to optimize your website's
                speed, mobile performance, on-page SEO, accessibility, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Have questions / Support */}
        <div className="my-16 flex flex-col items-center cursor-default">
          <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between shadow-sm transform transition duration-300 hover:shadow-md">
            <div className="flex items-center gap-5 mb-6 md:mb-0 text-center md:text-left">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xl mb-1 mt-1 md:mt-0">
                  Have questions?
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Our product expert can answer questions and tailor a solution
                  for you.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-1 px-3 rounded text-sm transition-colors shadow-sm w-full sm:w-auto h-[44px]">
                Talk to Sales
              </button>
              <button className="bg-white border text-gray-800 hover:bg-gray-50 border-gray-300 font-semibold py-2.5 px-6 rounded text-sm transition-colors shadow-sm w-full sm:w-auto h-[44px] whitespace-nowrap">
                Start 14-day trial
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: Content Strategy */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20 cursor-default text-left">
          <div className="lg:w-2/5 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">
              Plan your content strategy and build search authority
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, search engines reward websites whose content is organized
              by topics. HubSpot's content strategy tool makes it easy to
              discover and rank for the topics that matter to you and your
              customers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              You'll get topic suggestions based on relevance, competition, and
              popularity, as well as access to monthly search data so you can
              estimate how ranking for specific topics will translate to organic
              traffic gains. Then, use HubSpot's integrated content tools to
              create clusters of web pages and blog content around each of your
              core topics.
            </p>
          </div>
          <div className="lg:w-3/5 w-full">
            {/* Mockup 3: Topics / Content Strategy */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex h-[360px] md:h-[400px]">
                <div className="w-1/4 bg-gray-50 border-r border-gray-100 p-6 hidden md:block">
                  <div className="h-2 w-16 bg-gray-300 rounded mb-8"></div>
                  <div className="space-y-5">
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-4/5 bg-gray-200 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="w-full md:w-3/4 p-8 relative flex items-center justify-center bg-white overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-50/20 to-white">
                  <div className="w-44 h-[72px] border-2 border-teal-500 rounded bg-white relative z-10 flex items-center justify-center font-bold text-teal-700 shadow flex-col text-sm cursor-pointer hover:bg-teal-50 transition-colors">
                    inbound marketing
                    <span className="text-xs font-normal text-gray-500 mt-1 flex items-center gap-1">
                      Core Topic{" "}
                      <svg
                        className="w-3 h-3 text-teal-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </span>
                  </div>
                  {/* Lines connecting topic cluster */}
                  <svg
                    className="absolute inset-0 w-full h-full text-teal-100 z-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M50% 50% L 20% 25%" />
                    <path d="M50% 50% L 80% 25%" />
                    <path d="M50% 50% L 20% 75%" />
                    <path d="M50% 50% L 80% 75%" />
                    <path d="M50% 50% L 50% 80%" />
                  </svg>
                  <div className="absolute top-10 left-[10%] md:left-[15%] w-32 h-12 border border-teal-200 rounded bg-white flex items-center justify-center text-xs text-teal-800 shadow-sm cursor-pointer hover:bg-teal-50 transition-all font-medium text-center leading-tight p-2 flex-col">
                    Inbound marketing definition
                  </div>
                  <div className="absolute top-10 right-[10%] md:right-[15%] w-32 h-12 border border-teal-200 rounded bg-white flex items-center justify-center text-xs text-teal-800 shadow-sm cursor-pointer hover:bg-teal-50 transition-all font-medium text-center leading-tight p-2 flex-col">
                    Inbound marketing examples
                  </div>
                  <div className="absolute bottom-10 left-[10%] md:left-[15%] w-32 h-12 border border-teal-200 rounded bg-white flex items-center justify-center text-xs text-teal-800 shadow-sm cursor-pointer hover:bg-teal-50 transition-all font-medium text-center leading-tight p-2 flex-col">
                    Inbound marketing strategy
                  </div>
                  <div className="absolute bottom-10 right-[10%] md:right-[15%] w-32 h-12 border border-teal-200 rounded bg-white flex items-center justify-center text-xs text-teal-800 shadow-sm cursor-pointer hover:bg-teal-50 transition-all font-medium text-center leading-tight p-2 flex-col">
                    Market Analysis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Report Performance */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-20 cursor-default text-left">
          <div className="lg:w-3/5 w-full">
            {/* Mockup 4: Graph */}
            <div className="bg-white border rounded-lg shadow-xl overflow-hidden p-6 transform transition duration-500 hover:shadow-2xl hover:border-gray-300">
              <div className="flex gap-8 mb-6 border-b pb-4 text-sm font-bold text-gray-400">
                <div className="text-teal-600 border-b-2 border-teal-600 pb-4 -mb-[18px] flex items-center gap-2 cursor-pointer hover:text-teal-700 transition">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.23-1.8l3.72 3.72c.49.49 1.15.68 1.83.56l2.12 2.12c-.12.68.07 1.34.56 1.83l1.83 1.83c-.35.48-.76.92-1.22 1.3-1 .82-2.3 1.37-3.66 1.48L11 19.93zM19.77 13c-.22 2.54-1.57 4.75-3.56 6.09L13.73 16.6c.49-.49.68-1.15.56-1.83l-2.12-2.12c.12-.68-.07-1.34-.56-1.83l-4.14-4.14c.46-.22.95-.36 1.47-.41L12.06 9.4c.49.49 1.15.68 1.83.56l2.9 2.9c.04.4.15.78.33 1.14l2.58 2.58c.04-.52.07-1.05.07-1.58 0-.69-.07-1.36-.18-2.02l-1.46 1.46c-.49.49-1.15.68-1.83.56l-2.12-2.12c.12-.68-.07-1.34-.56-1.83L9.62 4.41C10.37 4.15 11.17 4 12 4c4.41 0 8 3.59 8 8 0 .62-.08 1.22-.23 1.8l-1.07-1.07c-.49-.49-1.15-.68-1.83-.56l-3.21 3.21c-.41.34-.87.58-1.36.71L19.77 13z"></path>
                  </svg>
                  Google Search Console
                </div>
                <div className="cursor-pointer hover:text-gray-600 transition">
                  Analytics
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                <div className="text-center p-3 rounded-md hover:bg-gray-50 transition cursor-pointer border border-transparent hover:border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase whitespace-nowrap">
                    Total Pages
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">9</div>
                  <div className="text-[11px] text-teal-600 font-bold bg-teal-50 inline-block px-1.5 py-0.5 rounded">
                    ▲ 30%
                  </div>
                </div>
                <div className="text-center p-3 rounded-md hover:bg-gray-50 transition cursor-pointer border border-transparent hover:border-gray-100 lg:border-l lg:border-l-gray-100 lg:rounded-none lg:hover:border-l-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase whitespace-nowrap">
                    Total Impressions
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    110
                  </div>
                  <div className="text-[11px] text-teal-600 font-bold bg-teal-50 inline-block px-1.5 py-0.5 rounded">
                    ▲ 1,300%
                  </div>
                </div>
                <div className="text-center p-3 rounded-md hover:bg-gray-50 transition cursor-pointer border border-transparent hover:border-gray-100 lg:border-l lg:border-l-gray-100 lg:rounded-none lg:hover:border-l-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase whitespace-nowrap">
                    Total Clicks
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    19
                  </div>
                  <div className="text-[11px] text-teal-600 font-bold bg-teal-50 inline-block px-1.5 py-0.5 rounded">
                    ▲ 111.1%
                  </div>
                </div>
                <div className="text-center p-3 rounded-md hover:bg-gray-50 transition cursor-pointer border border-transparent hover:border-gray-100 lg:border-l lg:border-l-gray-100 lg:rounded-none lg:hover:border-l-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase whitespace-nowrap">
                    Avg CTR
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    17.27%
                  </div>
                  <div className="text-[11px] text-red-600 font-bold bg-red-50 inline-block px-1.5 py-0.5 rounded">
                    ▼ -18.11%
                  </div>
                </div>
                <div className="text-center p-3 rounded-md hover:bg-gray-50 transition cursor-pointer border border-transparent hover:border-gray-100 lg:border-l lg:border-l-gray-100 lg:rounded-none lg:col-span-1 col-span-2">
                  <div className="text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase whitespace-nowrap">
                    Avg Position
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    13.14
                  </div>
                  <div className="text-[11px] text-teal-600 font-bold bg-teal-50 inline-block px-1.5 py-0.5 rounded">
                    ▲ 61.13%
                  </div>
                </div>
              </div>
              {/* Simulated Graph Area */}
              <div className="h-56 w-full mt-4 flex items-end relative px-4 ml-6 mb-6">
                <svg
                  className="absolute inset-0 w-full h-full text-orange-100 z-0"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,200 0,180 150,150 250,160 350,100 450,50 600,200"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <polyline
                    points="0,180 150,150 250,160 350,100 450,50 600,224"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data points */}
                  <circle
                    cx="150"
                    cy="150"
                    r="3"
                    fill="#F97316"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="250"
                    cy="160"
                    r="3"
                    fill="#F97316"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="350"
                    cy="100"
                    r="3"
                    fill="#F97316"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="450"
                    cy="50"
                    r="4"
                    fill="#F97316"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                {/* Y axis labels */}
                <div className="absolute top-0 -left-6 h-[85%] flex flex-col justify-between text-[10px] text-gray-400 font-medium">
                  <span>40</span>
                  <span>30</span>
                  <span>20</span>
                  <span>10</span>
                </div>
                {/* X axis lines */}
                <div className="absolute top-0 left-0 w-full h-[85%] flex flex-col justify-between z-[-1] border-l border-b border-gray-100">
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                  <div className="w-full"></div>
                </div>
                <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] text-gray-400 font-medium px-4">
                  <span>8/1/2022</span>
                  <span>8/15/2022</span>
                  <span>9/1/2022</span>
                  <span>9/15/2022</span>
                  <span>10/1/2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">
              Report on your performance and rank in search
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get detailed reports from HubSpot's SEO tools, ranging from what
              terms and topics people are searching for, to where your content
              ranks for any given query.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get data straight from Google that can be used to inform your SEO
              strategy when you integrate Google Search Console with HubSpot.
              Metrics like total impressions, average position, and clickthrough
              rate will tell you exactly where your content stands in Google's
              search results so you can lean into what's working, and take steps
              to improve what isn't.
            </p>
          </div>
        </div>

        {/* Section 6: Generate Leads Table */}
        <div className="py-24 max-w-4xl mx-auto cursor-default font-sans">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center tracking-tight">
            Generate Leads
          </h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-white text-center">
              <div className="p-6 hidden md:block"></div>
              <div className="p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent transition-colors group-hover:bg-gray-200"></div>
                <div className="font-extrabold text-gray-900 mb-5 text-base tracking-wide">
                  Free Marketing tools
                </div>
                <div className="text-gray-500 border border-gray-200 rounded px-5 py-2 text-xs bg-white font-medium hover:bg-gray-50 cursor-pointer shadow-sm">
                  Your current plan
                </div>
              </div>
              <div className="p-8 flex flex-col items-center justify-center md:border-l bg-gray-50/80 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
                <div className="font-extrabold text-gray-900 mb-5 text-base tracking-wide">
                  Marketing Hub Professional
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
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  Ad retargeting
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l text-gray-600 flex flex-col justify-center text-[13px] md:bg-white leading-relaxed">
                  <span className="font-medium">All available ad types</span>
                  <span className="mt-1">2 audiences</span>
                </div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex flex-col justify-center text-[13px] leading-relaxed">
                  <span className="font-medium">All available ad types</span>
                  <span className="mt-1">5 audiences</span>
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center md:hover:bg-gray-50 transition-colors">
                <div className="p-6 text-left font-bold text-gray-800 flex items-center tracking-wide">
                  Ad conversion events
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-l md:bg-white"></div>
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex items-center justify-center text-[13px] leading-relaxed font-medium">
                  Up to 50 synced events to ad accounts
                </div>
              </div>
              {/* Row 4 */}
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Ad goals
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
              {/* Row 5 */}
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
              {/* Row 6 */}
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
                <div className="p-6 md:border-l bg-gray-50/80 text-gray-600 flex flex-col justify-center text-[13px] leading-relaxed">
                  <span className="font-medium">Remove HubSpot branding</span>
                  <span className="mt-1">Additional features</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-8 text-center border-t border-gray-200 pt-8">
<button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-10 rounded shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                    Talk to Sales
</button>
</div> */}
        </div>
      </div>
    </div>
  );
}
