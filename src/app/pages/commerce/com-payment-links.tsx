import React, { useEffect, useState } from "react";
import { X, FileText, LayoutTemplate } from "lucide-react";

export function ComPaymentLinks() {
  const images = [
    "https://lh7-us.googleusercontent.com/SKi6b6TsLv8aDAHG5Arz5LzMG6PD-ftKlcBqggwUl0WSK6nwmwT0_4tE3w2FmPc0_Du2ZDv4ynvI2EFQymv0VVaajTFOi-BcJrZ-lvdstDIQF4QBRDt_tiAz3PtE8e26OHn1UgqHIDRLs-VVIPuPnvE",
    "https://monolith-ventures.com/wp-content/uploads/2023/09/Group-1-12.svg",
    "https://support.viabtc.com/hc/article_attachments/7214513642767",
    "https://img1.wsimg.com/cdnassets/transform/bd0536f5-0274-4b73-9bb6-7f3117d91c47/payLinks_howTo_01",
  ];

  const [current, setCurrent] = useState(0);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleCreateOption = (option: string) => {
    alert(`Selected: ${option}`);
    setShowCreateModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
      {/* ===== TOP TITLE ===== */}
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
        Payment links
      </h1>

      {/* ===== MAIN SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Create branded payment<br className="hidden sm:block" />
            links to effortlessly accept <br className="hidden sm:block" />
            payments
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Get paid faster</span>{" "}
                in just a few clicks without any coding needed
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Track payment status directly from your CRM</span>{" "}
                by using payment links across emails, websites, forms, meetings, and more
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">No hidden charges</span>{" "}
                and only pay transaction fees to collect online payment
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Create a payment link
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CAROUSEL */}
        <div className="w-full max-w-md bg-white border rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex justify-center items-center h-[200px] sm:h-[260px] w-full bg-gray-50 rounded-md overflow-hidden">
            <img
              src={images[current]}
              alt="carousel"
              className="max-h-full max-w-full object-contain transition-all duration-500"
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === index ? "bg-orange-500 w-3" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MODAL: Create Payment Link Options ===== */}
      {showCreateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowCreateModal(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Create payment link</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <button
                onClick={() => handleCreateOption("Use blank")}
                className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition flex items-center gap-3"
              >
                <FileText className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Use blank</p>
                  <p className="text-xs text-gray-500">Start from scratch</p>
                </div>
              </button>
              <button
                onClick={() => handleCreateOption("Use template")}
                className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition flex items-center gap-3"
              >
                <LayoutTemplate className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Use template</p>
                  <p className="text-xs text-gray-500">Choose from pre‑made templates</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}