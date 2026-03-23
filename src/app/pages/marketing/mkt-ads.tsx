export function MktAds() {
  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] overflow-x-hidden px-6 md:px-10 py-10">
      <div className="max-w-[1400px] mx-auto bg-white rounded-xl border min-h-[780px] px-10 md:px-16 py-12">

        {/* Title */}
        <h1 className="text-[20px] font-semibold text-black mb-16">
          Ads
        </h1>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-[30px] leading-[1.08] font-bold text-black max-w-[700px]">
              Track and optimize your ad campaigns to turn prospects into customers
            </h2>

            {/* Points */}
            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  →
                </div>
                <p className="text-[16px] text-black">
                  <span className="font-bold">View the ROI</span> of each ad campaign
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  →
                </div>
                <p className="text-[16px] text-black">
                  <span className="font-bold">Use CRM data</span> to create and optimize targeted ads
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  →
                </div>
                <p className="text-[16px] text-black">
                  <span className="font-bold">Automatically follow up</span> with new leads
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-12 bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
              Get started with Ads
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://static.hsappstatic.net/AdsUI/static-1.76664/imgs/empty-state.png"
              alt="ads"
              className="w-full max-w-[480px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}