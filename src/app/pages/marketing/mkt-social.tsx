import {
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function MktSocial() {
  return (
    <div className="min-h-screen bg-[#f5f8fa] flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-[#dfe3eb] overflow-hidden">

        {/* Top Section */}
        <div className="px-10 py-12 border-b border-[#dfe3eb]">

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-[#fff4f1] p-3 rounded-full">
              <Lock className="w-6 h-6 text-[#ff5c35]" />
            </div>

            <div>
              <h1 className="text-[30px] font-semibold text-[#213343]">
                Upgrade to unlock this feature
              </h1>
              <p className="text-[#516f90] mt-1 text-sm">
                This feature is available on premium plans only.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">

            <div className="border rounded-lg p-5">
              <Sparkles className="w-5 h-5 text-[#ff5c35] mb-3" />
              <h3 className="font-medium text-[#213343] mb-2">
                Premium Automation
              </h3>
              <p className="text-sm text-[#516f90]">
                Access advanced automation and campaign workflows.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <CheckCircle2 className="w-5 h-5 text-[#00a4bd] mb-3" />
              <h3 className="font-medium text-[#213343] mb-2">
                Advanced Analytics
              </h3>
              <p className="text-sm text-[#516f90]">
                View enterprise-grade reporting dashboards.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <Lock className="w-5 h-5 text-[#7c98b6] mb-3" />
              <h3 className="font-medium text-[#213343] mb-2">
                Premium Integrations
              </h3>
              <p className="text-sm text-[#516f90]">
                Connect premium external apps and services.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-10 py-8 flex justify-between items-center bg-[#f9fbfc]">

          <div>
            <h2 className="text-lg font-medium text-[#213343]">
              Unlock premium tools for your team
            </h2>
            <p className="text-sm text-[#516f90] mt-1">
              Upgrade your plan to access advanced features.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="border border-[#cbd6e2] px-5 py-2 rounded-md text-sm bg-white hover:bg-gray-50">
              Compare plans
            </button>

            <button className="bg-[#ff5c35] text-white px-5 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-[#e04826]">
              Upgrade now
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}