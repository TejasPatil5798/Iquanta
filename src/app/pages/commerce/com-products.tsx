import React, { useEffect, useState } from "react";

export function ComProducts() {
  const images = [
    "data:image/png;base64,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",
    "https://monodeepsamanta.com/storage/service/slider/P8x7Jr6iOWDHKFuHQbYRj3oFISiQ2C7LlL1hXSVq.webp",
    "https://www.protocol80.com/hs-fs/hubfs/hubspot-sales-integration-Step-3B.png?width=512&height=399&name=hubspot-sales-integration-Step-3B.png",
    "https://2832391.fs1.hubspotusercontent-na1.net/hub/2832391/hubfs/Sales/Documents/updated-create-documents-shareable-link.png?width=500&height=445&name=updated-create-documents-shareable-link.png",
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
        Products
      </h1>

      {/* ===== MAIN SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* ===== LEFT CONTENT ===== */}
        <div className="max-w-xl">

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Create products and simplify <br />
            your billing workflow
          </h2>

          {/* BULLETS */}
          <div className="space-y-4 mb-8">

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Organize and store your product data
                </span>{" "}
                so your sales team can easily bill and get paid
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Add and reuse your products
                </span>{" "}
                for sending deals, quotes, invoices, and payment links to customers
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Configure quantity-based pricing tiers
                </span>{" "}
                and easily access in-depth sales performance reporting
              </p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Create a product
            </button>

            <button className="border px-6 py-2 rounded-md hover:bg-gray-100">
              Import
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