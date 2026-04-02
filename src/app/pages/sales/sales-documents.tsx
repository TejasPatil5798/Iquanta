export function SalesDocuments() {
  return (
    <div className="bg-[#f5f7fa] h-full">
      {/* Top Section */}
      <div className="px-6 pt-6 pb-4 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Documents
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              0 of 5 created
            </span>

            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50">
              New folder
            </button>

            <button className="px-3 py-1.5 bg-black text-white rounded-md text-sm hover:bg-gray-800">
              Upload document
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Content Area (FIXED) */}
      <div className="flex justify-center px-6 mt-10">
        <div className="flex items-center gap-12 max-w-3xl">
          
          {/* Text */}
          <div className="max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
              Create and send content <br />
              that engages your <br />
              contacts
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed">
              Build a library of content that's easy <br />
              to share and track. Upload any PDF, <br />
              PowerPoint, or Word documents you <br />
              have and see what content is most <br />
              interesting to your contacts. Use your <br />
              CRM or connected inbox to easily send <br />
              these documents.
            </p>
          </div>

          {/* Image */}
          <img
            src="https://designers.hubspot.com/hubfs/Docs.png"
            alt="documents"
            className="w-32 h-32 opacity-90"
          />
        </div>
      </div>
    </div>
  );
}