import React, { useState } from "react";
import { X, ExternalLink, CreditCard, ShoppingCart, FileText, Receipt, Link, Calendar, Zap } from "lucide-react";

export function ComOverview() {
  // Modal states
  const [showQuotesModal, setShowQuotesModal] = useState(false);
  const [showGenericModal, setShowGenericModal] = useState(false);
  const [genericModalTitle, setGenericModalTitle] = useState("");
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [showPaymentsModal, setShowPaymentsModal] = useState(false);
  const [showCommerceGuideModal, setShowCommerceGuideModal] = useState(false);

  const handleQuickLinkClick = (title: string) => {
    if (title === "Quotes") {
      setShowQuotesModal(true);
    } else {
      setGenericModalTitle(title);
      setShowGenericModal(true);
    }
  };

  const handleLearnMore = () => setShowLearnMoreModal(true);
  const handleSetUpPayments = () => setShowPaymentsModal(true);
  const handleCommerceGuide = () => setShowCommerceGuideModal(true);

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
      {/* ===== HEADER ===== */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Commerce Hub</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">Welcome !</p>
      </div>

      {/* ===== QUICK LINKS ===== */}
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-8 border">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-3 sm:gap-4 text-blue-600 font-medium">
          {["Quotes", "Products", "Invoices", "Payments", "Credit Memos", "Payment Links", "Subscriptions"].map((item) => (
            <button
              key={item}
              onClick={() => handleQuickLinkClick(item)}
              className="hover:underline text-sm sm:text-base"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-8">
        <div className="flex-1">
          <div className="text-orange-500 text-2xl mb-3">●</div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-snug">
            Streamline your revenue lifecycle with <br />
            Commerce Hub Professional
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            Unlock AI-powered quoting, seamless approval workflows, advanced
            pricing, and give your customers 24/7 AI quote support using closing
            agent. Close deals faster and manage everything—from billing to
            payments—in one place.
          </p>
          <button
            onClick={handleLearnMore}
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Learn More
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px]"
              src="https://www.youtube-nocookie.com/embed/qK_EQ-3BifM"
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="bg-black/70 text-white text-xs sm:text-sm px-3 py-2">3 minutes • Demo</div>
          </div>
        </div>
      </div>

      {/* ===== ONLINE PAYMENTS SECTION ===== */}
      <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 mb-8 flex flex-col lg:flex-row justify-between gap-6 items-center">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Get paid faster with online payments
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Join more than 10,000 customers and enable online payments across
            all of Commerce Hub’s billing tools—quotes, invoices, subscriptions,
            and payment links.
          </p>
          <button
            onClick={handleSetUpPayments}
            className="border px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Set up online payments
          </button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {/* Logos – same as original */}
          {[
            "data:image/png;base64,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",
            "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPS139Mjt3ZrUxsR4wpOMqE72V1o-lzLdYw&s",
            "data:image/jpeg;base64,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",
            "data:image/png;base64,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",
            "https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg",
            "data:image/png;base64,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",
            "data:image/png;base64,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",
          
          ].map((logo, index) => (
            <div key={index} className="border rounded-md p-2 sm:p-3 bg-gray-50 flex items-center justify-center">
              <img src={logo} alt="payment-logo" className="h-5 sm:h-6 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== GET STARTED ===== */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Get started</h2>

      <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Your commerce guide</h3>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Set up the basics and try out your commerce tools to get started.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-3">
          <div className="bg-green-600 h-2 sm:h-3 rounded-full w-[19%]"></div>
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-6">
          <span>2 of 11 tasks completed</span>
          <span className="font-semibold text-gray-800">19%</span>
        </div>
        <button
          onClick={handleCommerceGuide}
          className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Go to your commerce guide
        </button>
      </div>

      {/* ===== MODALS ===== */}

      {/* Quotes Modal (Legacy Quotes) */}
      {showQuotesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowQuotesModal(false)}>
          <div className="bg-white rounded-lg w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">You are accessing Legacy Quotes</h2>
              <button onClick={() => setShowQuotesModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-gray-700 text-sm">
                You still have access to Legacy Quotes. Our new AI-powered CPQ offers enhanced features for faster, more efficient quote creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => alert("Learn more about AI-powered CPQ")}
                  className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
                >
                  Learn more about AI-powered CPQ
                </button>
                <button
                  onClick={() => alert("Continue to Legacy Quotes")}
                  className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition"
                >
                  Continue to Legacy Quotes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Generic Feature Modal (Products, Invoices, Payments, etc.) */}
      {showGenericModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowGenericModal(false)}>
          <div className="bg-white rounded-lg w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">{genericModalTitle}</h2>
              <button onClick={() => setShowGenericModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-gray-700">This feature is coming soon. Stay tuned for updates!</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowGenericModal(false)}
                  className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowLearnMoreModal(false)}>
          <div className="bg-white rounded-lg w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Commerce Hub Professional</h2>
              <button onClick={() => setShowLearnMoreModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-gray-700 mb-3">Streamline your revenue lifecycle with advanced features:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>AI-powered quoting</li>
                <li>Seamless approval workflows</li>
                <li>Advanced pricing and billing</li>
                <li>24/7 AI quote support</li>
              </ul>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowLearnMoreModal(false)}
                  className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Set up online payments Modal */}
      {showPaymentsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowPaymentsModal(false)}>
          <div className="bg-white rounded-lg w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Set up online payments</h2>
              <button onClick={() => setShowPaymentsModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-gray-700 mb-3">Connect your payment provider to start accepting payments online.</p>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Stripe
                </button>
                <button className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> PayPal
                </button>
                <button className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Other provider
                </button>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowPaymentsModal(false)}
                  className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Commerce Guide Modal */}
      {showCommerceGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowCommerceGuideModal(false)}>
          <div className="bg-white rounded-lg w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Your commerce guide</h2>
              <button onClick={() => setShowCommerceGuideModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-gray-700 mb-3">Complete these tasks to get started:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Set up your first product</li>
                <li>Connect payment provider</li>
                <li>Create a quote template</li>
                <li>Invite team members</li>
              </ul>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowCommerceGuideModal(false)}
                  className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
