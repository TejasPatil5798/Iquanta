import { Book, Building2, User, FileText, SlidersHorizontal } from "lucide-react";

export function BrzKnowledgeVaults() {
  return (
    <div className="min-h-screen bg-white text-[#1f2937] font-sans">
      <div className="mx-auto max-w-[1200px] px-8 py-10">
        {/* Top Navigation / Tabs */}
        <div className="flex items-center gap-4 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 cursor-pointer">
            <Building2 className="h-4 w-4 text-gray-500" />
            <span>Companies</span>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 cursor-pointer">
            <User className="h-4 w-4 text-gray-500" />
            <span>Contacts</span>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 cursor-pointer">
            <FileText className="h-4 w-4 text-gray-500" />
            <span>Deals</span>
          </div>
          <div className="ml-2 rounded-md border border-gray-200 p-2 hover:bg-gray-50 cursor-pointer">
            <SlidersHorizontal className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Book className="h-8 w-8 text-gray-400" />
            <h1 className="text-3xl font-bold tracking-tight text-[#111827]">Knowledge Documents</h1>
          </div>

          {/* Table */}
          <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/3">Name</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-8">
                    <span className="text-lg font-semibold text-[#2b64d9] hover:underline cursor-pointer">
                      Manage Breeze context with knowledge <span className="bg-[#fef3c7] px-1 rounded font-bold">vaults</span>
                    </span>
                  </td>
                  <td className="px-6 py-8">
                    <p className="text-base leading-relaxed text-gray-700">
                      Learn more about using Breeze knowledge <span className="bg-[#fef3c7] px-1 rounded font-bold">vaults</span> to enhance your work with agents and assistants.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Buttons */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <button className="flex h-20 items-center justify-center rounded-lg border border-gray-300 bg-white text-xl font-bold text-[#111827] shadow-sm transition-all hover:border-gray-400 hover:shadow-md">
              Create a new contact for vault
            </button>
            <button className="flex h-20 items-center justify-center rounded-lg border border-gray-300 bg-white text-xl font-bold text-[#111827] shadow-sm transition-all hover:border-gray-400 hover:shadow-md">
              Create a new company for vault
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}