export function SalesDocuments() {
  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] overflow-x-hidden">
      {/* Top Header */}
      <div className="bg-white border-b px-8 py-5 flex items-center justify-between">
        <h1 className="text-[20px] font-semibold text-black">
          Documents
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-[14px] text-black">
            0 of 5 created
          </span>

          <button className="px-5 py-2 border rounded-md bg-white text-sm hover:bg-gray-50 transition">
            New folder
          </button>

          <button className="px-5 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-900 transition">
            Upload document
          </button>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="flex items-center justify-center min-h-[75vh] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[900px]">

          {/* Text Section */}
          <div>
            <h2 className="text-[28px] leading-[1.25] font-semibold text-black mb-6">
              Create and send content
              <br />
              that engages your
              <br />
              contacts
            </h2>

            <p className="text-[15px] leading-9 text-gray-800 max-w-[430px]">
              Build a library of content that’s easy to share and track.
              Upload any PDF, PowerPoint, or Word documents you have and
              see what content is most interesting to your contacts.
              Use your CRM or connected inbox to easily send these documents.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://static.hsappstatic.net/ui-images/static-2.1090/optimized/canvas/documents.svg"
              alt="documents"
              className="w-[210px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}