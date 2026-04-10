import React, { useState } from "react";
import { X, CreditCard, AlertCircle } from "lucide-react";

export function ComPayments() {
  const [showStripeModal, setShowStripeModal] = useState(false);

  const handleSetUpPayments = () => setShowStripeModal(true);

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        {/* LEFT SECTION */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-base sm:text-lg font-semibold text-gray-500 mb-3">
            Payments
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug">
            Payment processing with your CRM
          </h1>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Process secure payments</span>{" "}
                with HubSpot’s tools — no code required.
              </p>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Accept payments</span> through
                payment links, invoices, subscriptions, quotes, and more.
              </p>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Use your payment objects</span>{" "}
                for list segmentation, automation, reporting, and more.
              </p>
            </li>
          </ul>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Process secure payments with HubSpot payments, our native payment
            processing option. Planning to process high volumes with HubSpot
            payments?{" "}
            <span className="text-blue-600 cursor-pointer underline">
              Contact us
            </span>{" "}
            to see if you qualify for custom rates.
          </p>

          <button
            onClick={handleSetUpPayments}
            className="bg-black text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Set up payments
          </button>
        </div>

        {/* RIGHT SECTION - VIDEO */}
        <div className="w-full lg:w-[500px]">
          <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-xl overflow-hidden shadow-md">
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

      {/* ===== MODAL: Connect Stripe (exactly as in screenshot) ===== */}
      {showStripeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowStripeModal(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-2xl mt-15 mx-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-semibold">Connect Stripe</h2>
              <button
                onClick={() => setShowStripeModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-5">
              <p className="text-gray-700 text-sm">
                Collect payments through a Stripe account.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  See how Commerce Hub features compare to commonly used payment options.
                </a>
              </p>
              <p className="text-gray-700 text-sm">
                If you don’t have an existing Stripe account, you’ll be able to create a new one.
              </p>

              {/* Processor Selection Steps */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-medium text-gray-800 mb-3">Processor Selection</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs">1</span>
                  <span className="font-medium">Apply or connect account</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="bg-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs">2</span>
                  <span className="text-gray-600">Review and finish</span>
                </div>
              </div>

              {/* Integrate with Stripe */}
              <div>
                <p className="font-medium text-gray-800 mb-2">
                  Integrate with a Stripe payment processing account
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>
                    Standard or existing account fees plus a platform fee. See Stripe pricing for more details.
                  </li>
                  <li>Pay fees for each transaction and invoice.</li>
                </ul>
              </div>

              {/* Credit / Debit Fees */}
              <div>
                <p className="font-medium text-gray-800 mb-2">Credit / Debit Fees</p>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>2.9% per transaction + 30¢ fee per transaction</li>
                  <li>$15 per dispute</li>
                </ul>
              </div>

              {/* ACH Fees */}
              <div>
                <p className="font-medium text-gray-800 mb-2">ACH Fees</p>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>0.8% per transaction, capped at $5</li>
                </ul>
              </div>

              {/* Platform fee */}
              <div>
                <p className="font-medium text-gray-800 mb-2">Platform fee</p>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>0.75% per transaction, ACH not capped</li>
                </ul>
              </div>
            </div>
            <div className="border-t p-4 flex justify-end">
              <button
                onClick={() => setShowStripeModal(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
