import { ArrowRight } from "lucide-react";

export function MktForms() {
  return (
    <div className="min-h-screen bg-[#f5f8fa]">
      {/* Main Workspace */}
      <div className="bg-white min-h-screen px-16 py-12">

        {/* Header */}
        <h1 className="text-[32px] font-semibold text-[#213343] mb-16">
          Forms
        </h1>

        {/* Main Section */}
        <div className="flex justify-between items-center max-w-[1300px]">

          {/* Left Content */}
          <div className="max-w-[700px]">

            <h2 className="text-[38px] leading-[68px] font-semibold text-[#213343] mb-12">
              Capture even more quality leads with high-converting, smart forms
            </h2>

            {/* Bullet List */}
            <div className="space-y-8">

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#f5f8fa] flex items-center justify-center mt-1">
                  <ArrowRight size={18} />
                </div>

                <p className="text-[18px] text-[#213343] leading-[38px]">
                  <span className="font-semibold">Drive engagement</span> by designing forms your visitors want to fill out. Create multi-step forms in minutes using the drag-and-drop builder, then add your brand kits for styling
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#f5f8fa] flex items-center justify-center mt-1">
                  <ArrowRight size={18} />
                </div>

                <p className="text-[18px] text-[#213343] leading-[38px]">
                  <span className="font-semibold">Qualify more leads faster</span> by asking the right questions. Personalize your form with conditional logic and show, hide or skip questions based on your visitor’s answers.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#f5f8fa] flex items-center justify-center mt-1">
                  <ArrowRight size={18} />
                </div>

                <p className="text-[18px] text-[#213343] leading-[38px]">
                  <span className="font-semibold">Boost conversion</span> by streamlining form completion. Form shortening AI gives the data for you through enrichment — no need to ask your visitors for it!
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="mt-14 bg-black text-white px-10 py-4 rounded-md text-[22px] font-medium hover:bg-[#111]">
              Create form
            </button>
          </div>

          {/* Right Illustration */}
          <div className="w-[420px] h-[420px] flex items-center justify-center">

            <img
              src="https://static.hsappstatic.net/ui-images/static-2.1076/optimized/canvas/forms-success.svg"
              alt="forms illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}