import { ArrowRight, X } from "lucide-react";

export function ComSubscriptions() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 border-l border-gray-200">
      <div className="p-8 pb-4">
        <h1 className="text-xl font-bold tracking-tight">Subscriptions</h1>
      </div>

      <main className="max-w-[1200px] mx-auto px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-5xl font-extrabold leading-[1.1] text-[#111827] mb-12">
              Create Subscriptions to automate recurring billing
            </h2>

            <div className="space-y-8 mb-12">
              {[
                "Easily manage subscriptions from your CRM and generate reports to understand your recurring revenue",
                "Simplify payment collection with automatic reminders and saved payment methods",
                "No hidden charges and only pay transaction fees to collect online payment",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-600" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <button className="bg-[#101215] text-white px-10 py-4 rounded font-bold text-base hover:bg-black transition-colors">
              Create subscription
            </button>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex-1 relative flex justify-center items-center py-12">
            {/* Background Blob */}
            <div className="absolute w-[400px] h-[400px] bg-green-50 rounded-full -left-8 opacity-60"></div>

            {/* Email Mockup */}
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden transform lg:translate-x-12 translate-y-4">
              {/* Header */}
              <div className="bg-[#33a3ae] text-white px-4 py-3 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-white/20"></div>
                  <span>Email</span>
                </div>
                <X className="w-4 h-4" />
              </div>

              {/* Fields */}
              <div className="p-6 space-y-4 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase font-bold text-gray-400 w-12 text-right">To</span>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase font-bold text-gray-400 w-12 text-right">From</span>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase font-bold text-gray-400 w-12 text-right">Subject</span>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-xs text-gray-600 mb-6 font-medium">
                  Here&apos;s that subscription checkout.<br />
                  You can click the link and pay here:
                </p>
                <div className="w-full h-8 bg-blue-50 rounded mb-8"></div>
                
                <div className="flex gap-4">
                  <button className="bg-[#ff5a3d] text-white px-6 py-2 rounded text-[10px] font-bold  transition-colors uppercase">
                    Send
                  </button>
                  <div className="w-16 h-8 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}