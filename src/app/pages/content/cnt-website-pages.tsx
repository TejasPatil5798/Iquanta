import { FaSearch, FaPlus, FaEllipsisH } from "react-icons/fa";

export function CntWebsitePages() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Top Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Website pages</h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-md px-3 py-1 bg-white">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search pages"
              className="outline-none text-sm"
            />
          </div>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
            <FaPlus />
            Create
          </button>

          <FaEllipsisH className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Banner */}
      <div className="w-full bg-white border rounded-lg p-4 flex justify-between items-center mb-6">
        <p className="text-sm text-gray-700">
          Align your website page design with your brand
          <span className="ml-2 text-gray-500">
            Brand kit helps align your website pages and all your other content.
          </span>
        </p>
        <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100">
          Set up Brand Kit
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Create a website to grow your business
          </h1>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                Quickly get started with AI assistance, or use a{" "}
                <span className="text-blue-600 cursor-pointer">theme</span>.
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>Customize your site just how you want it — no code needed.</p>
            </li>

            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>Start generating leads with just a few clicks.</p>
            </li>

            <li className="flex items-start gap-2">
              <span>➜</span>
              <p>
                Already have a website?{" "}
                <span className="text-blue-600 cursor-pointer">
                  Import into HubSpot
                </span>
              </p>
            </li>
          </ul>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Create a website page
          </button>
        </div>

        {/* Right Preview Card */}
        <div className="bg-white shadow-lg rounded-xl p-4 w-[380px]">
          <div className="h-4 bg-gray-300 rounded mb-3"></div>

          <div className="h-32 bg-green-300 rounded mb-4 flex items-center justify-center">
            <span className="bg-white px-6 py-1 rounded"></span>
          </div>

          <div className="h-3 bg-gray-400 w-1/2 mx-auto mb-4 rounded"></div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                <div className="h-2 bg-gray-400 mb-1 rounded"></div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-20 h-14 bg-gray-300 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="h-2 bg-gray-400 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>

          <p className="text-xs text-center text-gray-500 mt-3">
            Website page builder
          </p>
        </div>
      </div>
    </div>
  );
}
