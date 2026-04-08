import { Sparkles, Database, Users, Workflow, BarChart3, Check, Search, ChevronDown, Plus, Info } from "lucide-react";

export function BrzStudio() {
  return (
    <div className="min-h-screen bg-white text-[#1f2937]">
      {/* Header / Nav (Simplified version of what's in images/other pages) */}
      <header className="border-b border-[#d1d5db] bg-white px-8 pb-0 pt-7">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center gap-3">
            <Sparkles className="h-9 w-9 text-[#ff5a3d]" />
            <h1 className="text-4xl font-semibold tracking-tight text-[#111827]">Breeze</h1>
          </div>
          <div className="mt-8 flex items-end gap-8 text-lg">
            <button className="border-b-[5px] border-black pb-4 font-semibold text-[#111827]">Studio</button>
            <button className="pb-4 text-[#374151]">Marketplace</button>
            <button className="pb-4 text-[#374151]">Settings</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-8 py-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold leading-[1.1] text-[#111827] md:text-6xl">
              Turn scattered data into complete customer understanding
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-[#374151]">
              Bring together data from across your tech stack to create actionable datasets that help you — and your AI — work smarter.
            </p>
            <p className="mt-6 text-lg font-medium text-[#111827]">
              Unlock this and more with Data Hub Professional.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex h-12 items-center justify-center rounded bg-[#101215] px-10 text-base font-semibold text-white hover:bg-black">
                Talk to Sales
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded border border-[#b6bcc5] bg-white px-10 text-base font-semibold text-[#374151] hover:bg-[#f7f8fa]">
                Start 14-day trial
              </button>
            </div>
            <p className="mt-4 text-sm text-[#6b7280]">No commitment or credit card required.</p>
          </div>

          <div className="relative w-full max-w-[500px]">
            <div className="aspect-[4/3] rounded-2xl bg-[#eef2f6] p-8 shadow-sm">
              <div className="relative h-full w-full">
                {/* Central Hub Graphic */}
                <div className="absolute left-1/2 top-1/2 flex h-32 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-[#d1d5db] bg-white p-4 shadow-lg">
                  <div className="h-full w-full border-b border-[#e5e7eb]">
                    <div className="flex h-1/2 w-full items-center justify-center border-b border-[#e5e7eb]">
                      <div className="relative h-12 w-12 rounded-full border-2 border-orange-400 bg-white p-1">
                        <div className="grid h-full w-full place-items-center rounded-full bg-orange-50">
                          <Check className="h-6 w-6 text-orange-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Satellite Icons */}
                <div className="absolute -left-4 top-1/2 flex -translate-y-1/2 flex-col gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shadow-sm">
                    <Database className="h-5 w-5" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 shadow-sm">
                    <Database className="h-5 w-5" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2b64d9] text-white shadow-sm">
                    <span className="font-bold">S</span>
                  </div>
                </div>

                <div className="absolute -right-4 top-1/2 flex -translate-y-1/2 flex-col gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white p-1.5 px-3 shadow-sm">
                    <div className="grid h-5 w-5 place-items-center rounded-full bg-orange-100">
                      <Database className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#374151]">CRM</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white p-1.5 px-3 shadow-sm">
                    <div className="grid h-5 w-5 place-items-center rounded-full bg-orange-100">
                      <Users className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#374151]">Segments</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white p-1.5 px-3 shadow-sm">
                    <div className="grid h-5 w-5 place-items-center rounded-full bg-orange-100">
                      <Workflow className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#374151]">Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white p-1.5 px-3 shadow-sm">
                    <div className="grid h-5 w-5 place-items-center rounded-full bg-orange-100">
                      <BarChart3 className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#374151]">Reporting</span>
                  </div>
                </div>

                {/* Connecting Lines (Simulated with div/border) */}
                <svg className="absolute inset-0 -z-10 h-full w-full" style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.05))" }}>
                   <path d="M 40 135 Q 120 135 150 160" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 2" />
                   <path d="M 40 185 Q 120 185 150 160" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 2" />
                   <path d="M 40 235 Q 120 235 150 160" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 2" />
                   <path d="M 40 285 Q 120 285 150 160" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 2" />

                   <path d="M 460 115 Q 380 115 350 160" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                   <path d="M 460 165 Q 380 165 350 160" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                   <path d="M 460 215 Q 380 215 350 160" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                   <path d="M 460 265 Q 380 265 350 160" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Transform Scattered Data Section */}
        <section className="mt-32">

          <div className="mt-16 text-center">
            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
              Transform scattered data into unified insights and simplify complex data management
            </h2>
          </div>

          <div className="relative mt-32 flex justify-center py-12">
            {/* Background Table Mockup */}
            <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm opacity-40">
              <table className="w-full text-left">
                <thead className="bg-[#f9fafb] text-xs font-semibold uppercase text-[#6b7280]">
                  <tr>
                    <th className="px-6 py-4">Name <ChevronDown className="inline h-3 w-3" /></th>
                    <th className="px-6 py-4">Email <ChevronDown className="inline h-3 w-3" /></th>
                    <th className="px-6 py-4">Source <ChevronDown className="inline h-3 w-3" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb] text-sm text-[#374151]">
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Customer {i}</td>
                      <td className="px-6 py-4 text-[#6b7280]">customer{i}@example.com</td>
                      <td className="px-6 py-4">CRM</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add External Data Source Overlay */}
            <div className="absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#e5e7eb] bg-[#f9f9f7] p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-[#111827]">Add external data source</h3>
              <p className="mt-2 text-base font-semibold text-[#374151]">Sync data continuously from an app</p>
              
              <div className="relative mt-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-10 w-full rounded-md border border-[#d1d5db] bg-white px-4 pr-10 text-sm outline-none focus:border-orange-500"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-lg border border-[#e5e7eb] bg-white p-3 hover:bg-[#f3f4f6] cursor-pointer">
                  <div className="grid h-10 w-10 place-items-center rounded bg-green-50">
                    <Database className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-[#111827]">Google Sheets</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-[#e5e7eb] bg-white p-3 hover:bg-[#f3f4f6] cursor-pointer text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded bg-black">
                     <span className="text-xl text-white font-bold">M</span>
                  </div>
                  <span className="font-semibold text-[#111827]">Mailchimp</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-[#e5e7eb] bg-white p-3 hover:bg-[#f3f4f6] cursor-pointer">
                  <div className="grid h-10 w-10 place-items-center rounded bg-blue-500">
                    <span className="text-xl text-white font-bold">A</span>
                  </div>
                  <span className="font-semibold text-[#111827]">Airtable</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prepare Data Section */}
        <section className="mt-40">
           <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
              <div className="max-w-xl">
                 <h2 className="text-4xl font-bold leading-tight text-[#111827]">Prepare data before it reaches your CRM</h2>
                 <p className="mt-6 text-xl leading-relaxed text-[#374151]">
                    Clean, standardize, and transform data in the data studio, and choose what you sync to your CRM.
                 </p>
              </div>

              <div className="relative mt-12 flex w-full max-w-2xl items-center py-16">
                 {/* Table Background */}
                 <div className="w-full overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm opacity-40">
                    <table className="w-full text-left">
                       <thead className="bg-[#f9fafb] text-xs font-semibold uppercase text-[#6b7280]">
                          <tr>
                             <th className="px-6 py-4">ANNUAL REVENUE <Plus className="ml-1 inline h-3 w-3" /></th>
                             <th className="px-6 py-4">RANK <Plus className="ml-1 inline h-3 w-3" /></th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-[#e5e7eb] text-sm text-[#374151]">
                          {[120000, 60000, 90000].map((val, i) => (
                             <tr key={i}>
                                <td className="px-6 py-4">{val}</td>
                                <td className="px-6 py-4">{val > 100000 ? "High" : "Medium"}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>

                 {/* Sources Panel Overlay */}
                 <div className="absolute -right-4 top-1/2 w-full max-w-sm -translate-y-1/2 rounded-3xl border border-pink-200 bg-[#fce4ec] p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-[#111827]">Sources</h3>
                    
                    <div className="mt-8">
                       <p className="text-sm font-bold text-[#111827]">Primary Source</p>
                       <div className="mt-2 rounded-lg border-2 border-orange-500 bg-white p-4">
                          <p className="text-base font-bold text-[#111827]">Contacts</p>
                          <div className="mt-1 flex items-center gap-2 text-xs text-[#6b7280]">
                             <Database className="h-3.5 w-3.5 text-orange-600" />
                             <span>CRM object | 1,284 rows</span>
                          </div>
                       </div>
                    </div>

                    <div className="mt-6">
                       <p className="text-sm font-bold text-[#111827]">Secondary Sources</p>
                       <div className="mt-2 rounded-lg border border-[#d1d5db] bg-white p-4">
                          <p className="text-base font-bold text-[#111827]">Contacts</p>
                          <div className="mt-1 flex items-center gap-2 text-xs text-[#6b7280]">
                             <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                             <span>Snowflake | 926 rows</span>
                          </div>
                       </div>
                    </div>

                    <button className="mt-6 inline-flex items-center gap-2 rounded border border-[#d1d5db] bg-white px-4 py-2 text-sm font-semibold text-[#374151] hover:bg-[#f3f4f6]">
                       <Plus className="h-4 w-4" />
                       Add Source
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Enhance with AI Section */}
        <section className="mt-40 flex flex-col items-center justify-between gap-20 lg:flex-row-reverse">
           <div className="max-w-xl text-right lg:text-left">
              <h2 className="text-4xl font-bold leading-tight text-[#111827]">Enhance your data with AI</h2>
              <p className="mt-6 text-xl leading-relaxed text-[#374151]">
                 Let AI help create datasets, fill in missing information, and create custom insights that make your customer data even more valuable.
              </p>
           </div>

           <div className="relative mt-12 flex w-full max-w-2xl items-center py-16">
              {/* Table Background */}
              <div className="w-full overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm opacity-40">
                 <table className="w-full text-left">
                    <thead className="bg-[#5a1c3b] text-white text-xs font-semibold uppercase">
                       <tr>
                          <th className="px-6 py-4">NAME <ChevronDown className="inline h-3 w-3" /></th>
                          <th className="px-6 py-4">EMAIL</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e7eb] text-sm text-[#374151]">
                       {["Eliza Thornberry", "Marcus Delgado", "Priya Kapoor", "Dominic Fletcher", "Naomi Watkins"].map((name, i) => (
                          <tr key={i}>
                             <td className="px-6 py-4 font-semibold">{name}</td>
                             <td className="px-6 py-4 text-[#6b7280]">{name.toLowerCase().replace(' ', '.') + "@example.com"}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              {/* Add New Column Overlay */}
              <div className="absolute top-1/2 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-2xl">
                 <h3 className="text-lg font-bold text-[#111827]">Add new column</h3>
                 <div className="mt-6">
                    <p className="text-xs font-bold text-[#111827]">Browse all column types</p>
                    <div className="relative mt-2">
                       <input type="text" placeholder="Search for column type" className="h-10 w-full rounded-md border border-[#d1d5db] px-4 pr-10 text-sm outline-none focus:border-orange-500" />
                       <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                    </div>
                 </div>

                 <div className="mt-6 space-y-4">
                    {[
                       { label: "Smart columns", desc: "Data Agent for research and generating new data", ai: true },
                       { label: "Enrichment", desc: "Fill in missing or inaccurate data", ai: true },
                       { label: "Modifiers", desc: "Apply formatting changes and normalizations" },
                       { label: "Formulas", desc: "Create calculations based on other columns" },
                    ].map((item, i) => (
                       <div key={i} className="flex items-start gap-3 rounded-lg p-2 hover:bg-[#f3f4f6] cursor-pointer">
                          <div className="mt-1 h-5 w-5 text-[#6b7280]">
                             {i === 0 ? <Sparkles className="h-4 w-4" /> : i === 1 ? <Database className="h-4 w-4" /> : i === 2 ? <Workflow className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </div>
                          <div className="flex-1">
                             <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-[#111827]">{item.label}</span>
                                {item.ai && <span className="rounded bg-pink-600 px-1.5 py-0.5 text-[8px] font-bold text-white uppercase italic">✨ AI</span>}
                             </div>
                             <p className="mt-0.5 text-[10px] text-[#6b7280] leading-tight">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Combine Data Section (Visual) */}
        <section className="mt-40 flex flex-col items-center justify-between gap-20 lg:flex-row">
           <div className="max-w-xl">
              <h2 className="text-4xl font-bold leading-tight text-[#111827]">Combine data from multiple sources</h2>
              <p className="mt-6 text-xl leading-relaxed text-[#374151]">
                Bring customer data from different systems together and create unified datasets that give you complete customer understanding.
              </p>
           </div>
           <div className="w-full max-w-md rounded-2xl bg-[#f0f2f5] p-8">
              <div className="flex flex-col gap-4">
                 {[1,2,3].map(i => (
                    <div key={i} className="h-8 w-full rounded-md bg-white border border-[#e5e7eb] opacity-50"></div>
                 ))}
                 <div className="flex justify-center py-4">
                    <div className="h-16 w-16 rounded-full border-2 border-orange-400 bg-white grid place-items-center">
                       <Check className="h-8 w-8 text-orange-500" />
                    </div>
                 </div>
                 {[1,2].map(i => (
                    <div key={i} className="h-8 w-full rounded-md bg-white border border-[#e5e7eb] opacity-50"></div>
                 ))}
              </div>
           </div>
        </section>

        {/* Comparison Table Section */}
        <section className="mt-48 pb-32">
           <div className="flex items-center justify-between gap-10">
              <h2 className="text-5xl font-bold text-[#111827]">Combine Data</h2>
              <div className="flex gap-4">
                 <div className="text-center">
                    <p className="text-sm font-semibold text-[#6b7280]">Free Data tools</p>
                    <button className="mt-2 rounded border border-[#d1d5db] px-8 py-2 text-sm font-semibold text-[#111827]">Your current plan</button>
                 </div>
                 <div className="text-center">
                    <p className="text-sm font-semibold text-[#6b7280]">Data Hub Professional</p>
                    <button className="mt-2 rounded bg-[#101215] px-8 py-2 text-sm font-semibold text-white hover:bg-black">Talk to Sales</button>
                 </div>
              </div>
           </div>

           <div className="mt-16 w-full border-t border-[#d1d5db]">
              <div className="flex border-b border-[#e5e7eb] py-8">
                 <div className="flex-[2] flex items-center gap-2">
                    <Database className="h-4 w-4 text-[#6b7280]" />
                    <span className="text-lg font-bold text-[#111827]">Data studio <span className="text-xs font-normal text-[#6b7280]">(Beta)</span></span>
                 </div>
                 <div className="flex-1"></div>
                 <div className="flex-1 text-sm text-[#374151]">
                    This feature uses Iquanta Credits.
                 </div>
              </div>

              <div className="flex border-b border-[#e5e7eb] py-8">
                 <div className="flex-[2] flex items-center gap-2">
                    <span className="text-sm font-bold text-[#111827]">Data sync</span>
                 </div>
                 <div className="flex-1 flex justify-center">
                    <div className="h-8 w-8 rounded-full bg-[#101215] grid place-items-center">
                       <Check className="h-4 w-4 text-white" />
                    </div>
                 </div>
                 <div className="flex-1 flex justify-center">
                    <div className="h-8 w-8 rounded-full bg-[#101215] grid place-items-center">
                       <Check className="h-4 w-4 text-white" />
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-32">
              <h2 className="text-5xl font-bold text-[#111827]">Enhance Data</h2>
              <div className="mt-16 w-full border-t border-[#d1d5db]">
                 <div className="flex border-b border-[#e5e7eb] py-8">
                    <div className="flex-[2] flex items-center gap-2">
                       <Sparkles className="h-4 w-4 text-[#ff5a3d]" />
                       <span className="text-lg font-bold text-[#111827]">Data Agent</span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex-1 text-sm text-[#374151]">
                       10 Iquanta Credits per enriched record.
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}