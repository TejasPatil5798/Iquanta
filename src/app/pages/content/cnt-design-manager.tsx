import React from 'react';
import { Search, ChevronRight, Folder, File, Eye, Settings, X, ArrowRight, Info, ExternalLink, Layers } from 'lucide-react';

export function CntDesignManager() {
  return (
    <div className="min-h-screen bg-white text-[#33475b] font-sans -m-6 flex flex-col h-[calc(100vh-64px)] overflow-hidden">
      {/* Top Banner (Purple/Blue Tone) */}
      <div className="bg-[#eaf0f6] border-b border-[#cbd6e2] py-2 px-6 flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-2">
           <span className="font-bold">Not a developer?</span>
           <span className="text-[#516f90]">If you need a developer to help you build your website, contact our awesome partners</span>
           <button className="bg-white border border-[#cbd6e2] rounded px-4 py-1.5 hover:bg-gray-50 transition-colors ml-3 font-bold text-[#33475b] shadow-sm">
             Contact a Developer
           </button>
        </div>
        <button className="text-[#516f90] hover:text-[#33475b] p-1">
          <X size={16} />
        </button>
      </div>

      {/* Main Container: Split View */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar: Asset Explorer */}
        <div className="w-[320px] border-r border-[#cbd6e2] flex flex-col bg-white">
          <div className="p-4 border-b border-[#cbd6e2]">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search assets" 
                className="w-full border border-[#cbd6e2] rounded pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a38d]/20 focus:border-[#00a38d]"
              />
              <Search className="absolute left-3 top-2.5 text-[#516f90]" size={16} />
            </div>
          </div>
          
          <div className="flex text-xs font-bold border-b border-[#cbd6e2] px-3 py-2.5 gap-5 text-[#516f90]">
             <button className="hover:text-[#00a38d] transition-colors cursor-pointer flex items-center gap-1.5">File</button>
             <button className="hover:text-[#00a38d] transition-colors cursor-pointer flex items-center gap-1.5">View</button>
             <button className="hover:text-[#00a38d] transition-colors cursor-pointer flex items-center gap-1.5">Actions</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
             <div className="flex items-center gap-2 text-sm hover:bg-[#f5f8fa] p-2 rounded cursor-pointer group transition-colors">
                <ChevronRight size={16} className="text-[#516f90] group-hover:text-[#33475b]" />
                <Folder size={18} fill="#CBD6E2" className="text-[#516f90]" />
                <span className="font-medium">@iquanta</span>
             </div>
          </div>
        </div>

        {/* Right Main Content Area */}
        <div className="flex-1 flex flex-col relative bg-white overflow-hidden">
           
           {/* Page Title Header */}
           <div className="pt-8 px-10">
              <div className="flex items-center gap-2 mb-10">
                 <h1 className="text-3xl font-bold text-[#33475b] tracking-tight">Design Manager</h1>
                 <Info size={18} className="text-[#516f90] cursor-pointer hover:text-[#33475b] mt-1" />
              </div>
           </div>

           {/* Empty State Body */}
           <div className="flex flex-col lg:flex-row items-center justify-center flex-1 p-10 gap-20 max-w-6xl mx-auto">
              
              {/* Left Column (Informative Content) */}
              <div className="flex-1 space-y-10">
                 <h2 className="text-2xl font-bold text-[#33475b] leading-tight">No files to display yet</h2>
                 
                 <div className="space-y-8">
                    {[
                      "Customize your themes, templates, and modules with basic editing of your HTML, CSS, JS, and IquantaL files.",
                      "Edit them here or use local development tools for advanced editing and control.",
                      "If you are not a developer and want custom modules, visit the Theme Marketplace."
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-start gap-5">
                         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f2eefc] flex items-center justify-center text-[#7c56da]">
                            <ArrowRight size={18} />
                         </div>
                         <p className={`text-[#33475b] leading-relaxed text-base ${idx === 2 ? 'font-bold' : ''}`}>
                            {text}
                         </p>
                      </div>
                    ))}
                 </div>

                 <div className="flex gap-4 pt-6">
                    <button className="bg-[#33475b] text-white px-8 py-3 rounded font-bold hover:bg-[#2b3e50] transition-all shadow-md text-sm">
                      Create a file
                    </button>
                    <button className="bg-white border border-[#cbd6e2] text-[#33475b] px-8 py-3 rounded font-bold hover:bg-gray-50 transition-all shadow-sm text-sm">
                      Visit theme marketplace
                    </button>
                 </div>
              </div>

              {/* Right Column (Visual Mockup) */}
              <div className="flex-1 w-full flex justify-center lg:justify-end">
                 <div className="relative w-full max-w-[450px]">
                    <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]">
                       {/* Main Browser Frame */}
                       <rect x="100" y="50" width="230" height="170" rx="8" fill="white" stroke="#33475b" strokeWidth="2.5" />
                       <rect x="110" y="60" width="210" height="130" rx="4" fill="#f5f8fa" stroke="#cbd6e2" strokeWidth="1" />
                       
                       {/* Mock Floating Code Editor Window */}
                       <g transform="translate(10, 20)">
                          <rect x="50" y="140" width="120" height="90" rx="6" fill="#2b3e50" className="rotate-[-6deg] shadow-lg" />
                          <text x="70" y="195" fill="#f5f8fa" className="rotate-[-6deg] font-mono text-[14px] font-bold">{"</code >"}</text>
                          <circle cx="65" cy="155" r="3" fill="#ff7a59" className="rotate-[-6deg]" />
                          <circle cx="75" cy="155" r="3" fill="#f5f8fa" className="rotate-[-6deg]" />
                       </g>

                       {/* 3D Wireframe Box */}
                       <g transform="translate(200, 100)">
                          <path d="M0 20 L50 0 L100 20 L50 40 Z" fill="#eaf0f6" stroke="#33475b" strokeWidth="1.5" />
                          <path d="M0 20 L0 70 L50 90 L50 40 Z" fill="#cbd6e2" stroke="#33475b" strokeWidth="1.5" />
                          <path d="M50 40 L50 90 L100 70 L100 20 Z" fill="#cad5e2" stroke="#33475b" strokeWidth="1.5" />
                          <line x1="25" y1="30" x2="25" y2="80" stroke="#33475b" strokeWidth="0.5" strokeDasharray="4" />
                          <line x1="75" y1="30" x2="75" y2="80" stroke="#33475b" strokeWidth="0.5" strokeDasharray="4" />
                       </g>
                    </svg>
                 </div>
              </div>
           </div>

           {/* Footer: Bottom Desktop Status Bar */}
           <div className="mt-auto border-t border-[#cbd6e2] bg-white flex items-center justify-between px-6 py-2.5 text-[11px] text-[#516f90] font-bold tracking-wide">
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00a38d] shadow-[0_0_8px_#00a38d]" />
                    <span className="uppercase">No errors found</span>
                 </div>
              </div>
              <div className="flex items-center gap-8">
                 <button className="flex items-center gap-1.5 hover:text-[#00a38d] transition-colors"><ExternalLink size={12} /> Get Started</button>
                 <button className="flex items-center gap-1.5 hover:text-[#00a38d] transition-colors"><Layers size={12} /> Projects</button>
                 <button className="hover:text-[#00a38d] transition-colors hover:underline">Changelog</button>
                 <button className="hover:text-[#00a38d] transition-colors hover:underline">Reference</button>
                 <button className="flex items-center gap-1.5 hover:text-[#00a38d] transition-colors hover:underline"><Settings size={12} /> Settings</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}