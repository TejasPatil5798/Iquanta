import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';

export function CntBrand() {
  return (
    <div className="min-h-screen bg-[#f5f8fa] text-[#33475b] font-sans -m-6 p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-0">
          <h1 className="text-2xl font-bold text-[#33475b] mb-6">Brand Identity</h1>
          
          <div className="border-b border-gray-300 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-black pb-3 px-1 text-sm font-bold text-[#33475b]">
                Brand Overview
              </button>
            </nav>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-6">
          
          {/* Overview Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row items-center p-10 gap-10">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-4 text-[#33475b]">Overview</h2>
              <p className="text-[#33475b] mb-6 leading-relaxed text-sm">
                Updating your Brand here will feed into content you and your team create on <span className="font-bold">Iquanta</span>, ensuring consistent, powerful brand communication across every touchpoint.
              </p>
              <a href="#" className="text-[#0091ae] hover:underline font-bold flex items-center gap-1.5 text-sm">
                Learn more <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="relative">
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="70" cy="70" r="65" fill="#f5f8fa" />
                  <path d="M45 40L55 105C55 105 57 115 65 115C73 115 75 105 75 105L85 40" fill="white" stroke="#33475b" strokeWidth="2" />
                  <rect x="58" y="30" width="4" height="60" fill="#33475b" transform="rotate(-5 60 60)" />
                  <rect x="68" y="25" width="4" height="70" fill="#ff7a59" />
                  <rect x="78" y="30" width="4" height="60" fill="#00a38d" transform="rotate(5 80 60)" />
                  <rect x="50" y="95" width="40" height="2" fill="#33475b" />
                  <path d="M95 85L115 105L105 115L85 95L95 85Z" fill="#ff7a59" stroke="#33475b" strokeWidth="1" />
                  <rect x="100" y="70" width="20" height="25" rx="2" fill="#CBD6E2" stroke="#33475b" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* Brand Kit Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-10 col-span-3">
              <h2 className="text-lg font-bold mb-4 text-[#33475b]">Brand Kit</h2>
              <p className="text-[#33475b] text-sm mb-10 leading-relaxed">
                Set your logo and colors for tools where you can show your branding. These settings will help you quickly choose brand options when creating public facing content.
              </p>
              
              <div className="space-y-0">
                {[
                  { name: 'Logos', status: '--' },
                  { name: 'Favicons', status: '--' },
                  { name: 'Colors', status: '--' },
                  { name: 'Theme', status: '--' },
                  { name: 'Fonts', status: '--' },
                ].map((item, idx) => (
                  <div key={item.name} className={`py-4 flex items-center justify-between ${idx !== 0 ? 'border-t border-gray-100' : ''}`}>
                    <span className="text-[#0091ae] font-bold text-sm cursor-pointer hover:underline">{item.name}</span>
                    <span className="text-[#516f90] text-sm flex-1 text-center">{item.status}</span>
                    <button className="bg-white border border-[#cbd6e2] text-[#33475b] px-5 py-1.5 rounded text-xs font-bold hover:bg-[#f5f8fa] transition-colors shadow-sm">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Voice Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-10 col-span-2 flex flex-col items-center text-center">
              <div className="mb-10 w-full flex justify-center">
                <div className="relative w-48 h-36 border border-gray-100 rounded-xl bg-[#f5f8fa]/50 flex items-center justify-center">
                   <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="10" width="80" height="50" rx="4" fill="white" stroke="#33475b" strokeWidth="2" />
                      <rect x="25" y="22" width="50" height="26" rx="2" fill="#f5f8fa" stroke="#DFE3E8" strokeWidth="1" />
                      <path d="M5 60H95L98 72H2L5 60Z" fill="#33475b" />
                      <path d="M50 30L53 36H59L54 40L55 46L50 42L45 46L46 40L41 36H47L50 30Z" fill="#ff7a59" />
                   </svg>
                </div>
              </div>
              
              <h2 className="text-lg font-bold mb-4 text-[#33475b]">Brand Voice</h2>
              <h3 className="font-bold text-[#33475b] mb-4 text-sm uppercase tracking-wider">Keep your written content on brand</h3>
              
              <p className="text-[#33475b] text-sm mb-6 leading-relaxed">
                Create a brand voice that represents your company's unique personality and use it to keep your content on brand.
                <br />
                <a href="#" className="text-[#0091ae] font-bold hover:underline inline-flex items-center gap-1 mt-2">
                  Learn more about brand voice <ExternalLink size={14} />
                </a>
              </p>

              <div className="w-full text-left space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#33475b] shrink-0" />
                  <p className="text-sm text-[#33475b]"><span className="font-bold">Provide a writing sample</span> to teach your brand voice how to write.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#33475b] shrink-0" />
                  <p className="text-sm text-[#33475b]"><span className="font-bold">Automatically use your brand voice</span> in AI-generated content.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#33475b] shrink-0" />
                  <p className="text-sm text-[#33475b]"><span className="font-bold">Easily update off-brand content</span> to be consistent with your voice.</p>
                </div>
              </div>

              <button className="w-full bg-[#2b3e50] hover:bg-[#1e2c3a] text-white font-bold py-3.5 px-6 rounded flex items-center justify-center gap-2 transition-all mt-auto shadow-md">
                Upgrade to generate brand voice <Lock size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}