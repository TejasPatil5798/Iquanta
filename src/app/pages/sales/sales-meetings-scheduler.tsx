export function SalesMeetingsScheduler() {
  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] overflow-x-hidden">
      <div className="bg-white min-h-screen px-10 py-14">

        {/* Main Content */}
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-[28px] leading-[1.3] font-semibold text-black mb-8">
              Run meetings more efficiently with your
              <br />
              personal meeting link
            </h2>

            <ul className="space-y-8 text-[16px] leading-9 text-black">
              <li>
                • <span className="font-semibold">Allow contacts to schedule meetings</span>{" "}
                by connecting your calendar and sharing your link on your website,
                emails, and more.
              </li>

              <li>
                • <span className="font-semibold">Customize your meeting</span>{" "}
                by setting your availability, meeting duration, and scheduling preferences.
              </li>

              <li>
                • <span className="font-semibold">If you need help</span>{" "}
                setting up your meeting link, we’ll guide you through in just a few steps.
              </li>
            </ul>

            {/* Button */}
            <button className="mt-10 bg-black text-white px-8 py-3 rounded-md text-[18px] font-medium hover:bg-gray-900 transition">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.harvestroi.com/hubfs/HubSpot%20Iconography/meetings.svg"
              alt="meetings"
              className="w-full max-w-[580px]"
            />

            <p className="mt-4 text-[15px] text-black">
              Scheduling page for setting up meetings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}