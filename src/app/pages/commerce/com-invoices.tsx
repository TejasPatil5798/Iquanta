import React, { useEffect, useState } from "react";

export function ComInvoices() {
  const images = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQhzVfLnWMcG9dLSNxnzOCMJG8FOgquuXXJw4QAVKd5DuPH6U6",
    "data:image/png;base64,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",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ71rtVy4c-phIOphQPp7TZsMXbofLCG4vAQhNWrFdNZKUl26Ex",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdw_TbOYyfj1-HeM4hoOP67VapEAc0cysT4BZyDBUjQanqEJ3o",
  ];

  const [current, setCurrent] = useState(0);

  // Auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-10">

      {/* ===== TOP TITLE ===== */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">
        Invoice
      </h1>

      {/* ===== MAIN SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* ===== LEFT CONTENT ===== */}
        <div className="max-w-xl">

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            send invoices to move from <br />
            deal to payment in a few clicks 
          </h2>

          {/* BULLETS */}
          <div className="space-y-4 mb-8">

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Report and bill from your CRM
                </span>{" "}
                to easily track invoice status and gain revenue insights alongside customer data 
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Automate your bookkeeping 
                </span>{" "}
                with a two-way accounting sync for Quickbooks Online
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  No hidden charges
                </span>{" "}
                and only pay transaction fees to collect online pyment
              </p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Create 
            </button>

            
          </div>

        </div>

      

        {/* ===== RIGHT IMAGE CAROUSEL ===== */}
<div className="w-full max-w-md bg-white border rounded-xl p-6 shadow-sm">

  {/* IMAGE AREA */}
  <div className="flex justify-center items-center h-[260px] w-full bg-gray-50 rounded-md overflow-hidden">

    <img
      src={images[current]}
      alt="carousel"
      className="max-h-full max-w-full object-contain transition-all duration-500"
    />

  </div>

  {/* DOT INDICATORS */}
  <div className="flex justify-center gap-2 mt-4">
    {images.map((_, index) => (
      <div
        key={index}
        className={`h-2 w-2 rounded-full ${
          current === index ? "bg-orange-500" : "bg-gray-300"
        }`}
      ></div>
    ))}
  </div>

</div>

      </div>
    </div>
  );
}