import { 
  Handshake, 
  DollarSign, 
  Wallet, 
  BarChart3, 
  Check, 
  MessageSquare, 
  ArrowDown, 
  ChevronRight,
  Sparkles
} from "lucide-react";

export function ComQuotes() {
  return (
    <div className="min-h-screen bg-white text-[#1f2937] font-sans">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-[1.1] text-[#111827] mb-8">
                Go from quote-to-close faster with AI-powered CPQ
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Streamline your revenue lifecycle with quoting, billing, and payments fully integrated into your customer platform with CPQ.
              </p>
              <p className="text-lg text-gray-800 font-semibold mb-10">
                Unlock this and more with Commerce Hub Professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center lg:justify-start">
                <button className="bg-[#101215] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-black transition-colors">
                  Start 14-day trial
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-6">No commitment or credit card required.</p>
              <div className="flex justify-center lg:justify-start">
                <button className="border border-gray-300 text-[#111827] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
                  Talk to Sales
                </button>
              </div>
            </div>

            <div className="flex-1 relative flex justify-center items-center py-12">
              <div className="absolute w-[450px] h-[450px] bg-green-50 rounded-full opacity-60"></div>
              <div className="relative space-y-4">
                {[
                  { text: "Create deal", icon: Handshake, color: "bg-gray-100" },
                  { text: "Quote, negotiate, and track", icon: DollarSign, color: "bg-blue-50" },
                  { text: "Get signature and payment", icon: Wallet, color: "bg-green-50" },
                  { text: "Gain revenue insights", icon: BarChart3, color: "bg-orange-50" },
                ].map((card, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-[320px] bg-white rounded-xl shadow-lg border border-gray-100 p-5 flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${card.color}`}>
                        <card.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <span className="text-lg font-bold text-[#111827]">{card.text}</span>
                    </div>
                    {idx < 3 && <ArrowDown className="w-8 h-8 text-blue-200 my-1 font-bold" strokeWidth={3} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Banner Section */}
      <section className="bg-white border-y border-gray-100 py-8 px-8">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="font-bold text-lg leading-none mb-1">Have questions?</p>
              <p className="text-gray-500">Our product expert can answer questions and tailor a solution for you.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-colors">Start 14-day trial</button>
            <button className="border border-gray-300 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-50 transition-colors">Talk to Sales</button>
          </div>
        </div>
      </section>

      {/* Pipeline Table */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#111827]">Close deals faster</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-6 text-left px-4"></th>
                  <th className="py-6 text-center px-4">
                    <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Free Sales tools</p>
                    <div className="bg-gray-50 border border-gray-200 inline-block px-4 py-1.5 rounded-md text-sm font-medium">
                      Your current plan
                    </div>
                  </th>
                  <th className="py-6 text-center px-4">
                    <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Sales Hub Professional</p>
                    <button className="bg-black text-white px-6 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors">
                      Talk to Sales
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-8 font-semibold text-[#111827]">Quotes</td>
                  <td className="py-8 text-center text-gray-600"> </td>
                  <td className="py-8 text-center text-gray-600 font-medium">10 Iquanta Credits per enriched record.</td>
                </tr>
                <tr>
                  <td className="py-8 font-semibold text-[#111827]">AI-generated quotes</td>
                  <td className="py-8 text-center text-gray-600">Up to 5 quotes</td>
                  <td className="py-8 text-center text-gray-600 font-medium">Up to 5,000 quotes</td>
                </tr>
                <tr>
                  <td className="py-8 font-semibold text-[#111827]">Quote activity tracking</td>
                  <td className="py-8 text-center text-gray-600">5 templates</td>
                  <td className="py-8 text-center text-gray-600 font-medium">5,000 templates</td>
                </tr>
                <tr>
                  <td className="py-8 font-semibold text-[#111827]">Quote reporting</td>
                  <td className="py-8 text-center"></td>
                  <td className="py-8 text-center">
                    <div className="bg-black rounded-full p-1 inline-block">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-8 font-semibold text-[#111827]">Sales email frequency controls</td>
                  <td className="py-8 text-center"></td>
                  <td className="py-8 text-center">
                    <div className="bg-black rounded-full p-1 inline-block">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-8 font-semibold text-lg text-black">Single-page quote editor</td>
                  <td className="py-8 text-center"></td>
                  <td className="py-8 text-center text-gray-600 font-medium">
                     <div className="bg-black rounded-full p-1 inline-block">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
    </div>
  );
}