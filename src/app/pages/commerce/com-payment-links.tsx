import React, { useEffect, useState } from "react";

export function ComPaymentLinks() {
  const images = [
    "https://lh7-us.googleusercontent.com/SKi6b6TsLv8aDAHG5Arz5LzMG6PD-ftKlcBqggwUl0WSK6nwmwT0_4tE3w2FmPc0_Du2ZDv4ynvI2EFQymv0VVaajTFOi-BcJrZ-lvdstDIQF4QBRDt_tiAz3PtE8e26OHn1UgqHIDRLs-VVIPuPnvE",
    "https://monolith-ventures.com/wp-content/uploads/2023/09/Group-1-12.svg",
    "https://support.viabtc.com/hc/article_attachments/7214513642767",
    "https://img1.wsimg.com/cdnassets/transform/bd0536f5-0274-4b73-9bb6-7f3117d91c47/payLinks_howTo_01",
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
        Payment links
      </h1>

      {/* ===== MAIN SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* ===== LEFT CONTENT ===== */}
        <div className="max-w-xl">

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Create branded payment<br />
            links to effortlessly accept <br/>
            payments
          </h2>

          {/* BULLETS */}
          <div className="space-y-4 mb-8">

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Get paid faster
                </span>{" "}
                in just a few clicks without any coding  needed
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2">→</div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Track payment status directly from your CRM
                </span>{" "}
                by using payment links across emmails,websites, forms, meetings,and more
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
              Create a payemnt link
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