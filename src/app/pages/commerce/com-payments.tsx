import React from "react";

export function ComPayments() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex flex-col lg:flex-row justify-between gap-12">

        {/* LEFT SECTION */}
        <div className="max-w-xl">
          <h2 className="text-lg font-semibold text-gray-500 mb-4">
            Payments
          </h2>

          <h1 className="text-4xl font-bold mb-6 leading-snug">
            Payment processing with your CRM
          </h1>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              
              <p>
                <span className="font-semibold">Process secure payments</span>{" "}
                with HubSpot’s tools — no code required.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              
              <p>
                <span className="font-semibold">Accept payments</span> through
                payment links, invoices, subscriptions, quotes, and more.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
             
              <p>
                <span className="font-semibold">Use your payment objects</span>{" "}
                for list segmentation, automation, reporting, and more.
              </p>
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            Process secure payments with HubSpot payments, our native payment
            processing option. Planning to process high volumes with HubSpot
            payments?{" "}
            <span className="text-blue-600 cursor-pointer underline">
              Contact us
            </span>{" "}
            to see if you qualify for custom rates.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Set up payments
          </button>
        </div>

        {/* RIGHT SECTION - VIDEO */}
        <div className="w-full lg:w-[500px]">
          <div className="w-full h-[280px] lg:h-[300px] rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/qK_EQ-3BifM"
              title="HubSpot Payments Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}