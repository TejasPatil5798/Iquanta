export function SalesMeetingsScheduler() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 h-full">
      
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Run meetings more efficiently with your personal meeting link
        </h1>

        <ul className="space-y-4 text-gray-800 mb-6">
          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              <span className="font-semibold text-gray-900">
                Allow contacts to schedule meetings
              </span>{" "}
              by connecting your calendar and sharing your link on your website,
              emails, and more.
            </span>
          </li>

          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              <span className="font-semibold text-gray-900">
                Customize your meeting
              </span>{" "}
              by setting your availability, meeting duration, and scheduling
              preferences.
            </span>
          </li>

          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              <span className="font-semibold text-gray-900">
                If you need help
              </span>{" "}
              setting up your meeting link, we’ll guide you through in just a few
              steps.
            </span>
          </li>
        </ul>

        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-10 lg:mt-0 lg:ml-10 text-center">
        <img
          src="https://community.hubspot.com/t5/image/serverpage/image-id/141954iC18B72431AE396A9?v=v2"
          alt="Meeting Scheduler Preview"
          className="w-full max-w-md rounded-lg shadow-md"
        />

        <p className="mt-3 text-sm text-gray-500">
          Scheduling page for setting up meetings
        </p>
      </div>
    </div>
  );
}