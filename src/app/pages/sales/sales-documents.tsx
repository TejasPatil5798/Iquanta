import { useState } from "react";
import { X, FolderPlus, Upload, FileText, Cloud, Briefcase, HardDrive } from "lucide-react";

export function SalesDocuments() {
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [folderName, setFolderName] = useState("");

  const handleCreatedClick = () => {
    alert("This HubSpot account has created 0 of 5 documents.");
  };

  const handleCreateFolder = () => {
    if (folderName.trim()) {
      alert(`Folder "${folderName}" created.`);
      setFolderName("");
      setShowFolderModal(false);
    } else {
      alert("Please enter a folder name.");
    }
  };

  const handleUploadOption = (option: string) => {
    alert(`Upload from ${option} – this would open a file picker.`);
    setShowUploadModal(false);
  };

  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      {/* Top Section */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 bg-white">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-800">Documents</h1>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCreatedClick}
              className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              0 of 5 created
            </button>

            <button
              onClick={() => setShowFolderModal(true)}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50 transition"
            >
              New folder
            </button>

            <button
              onClick={() => setShowUploadModal(true)}
              className="px-3 py-1.5 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
            >
              Upload document
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Content Area (Responsive) */}
      <div className="flex justify-center px-4 sm:px-6 mt-8 sm:mt-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 max-w-3xl">
          {/* Text */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 leading-snug">
              Create and send content <br className="hidden sm:block" />
              that engages your <br className="hidden sm:block" />
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
            className="w-24 h-24 sm:w-32 sm:h-32 opacity-90"
          />
        </div>
      </div>

      {/* ===== MODAL: Create New Folder ===== */}
      {showFolderModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowFolderModal(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Create new folder</h2>
              <button
                onClick={() => setShowFolderModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Folder name
              </label>
              <input
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="e.g., Sales Decks"
                autoFocus
              />
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <button
                onClick={() => setShowFolderModal(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Create folder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL: Upload Document ===== */}
      {showUploadModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowUploadModal(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-semibold">Documents</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700 text-sm">
                <strong>Create and send content that engages your contacts</strong>
              </p>
              <p className="text-gray-600 text-sm">
                Build a library of content that’s easy to share and track. Upload any PDF, PowerPoint, or Word documents you have and see what content is most interesting to your contacts. Use your CRM or connected inbox to easily send these documents.
              </p>

              <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                <p>
                  <strong>Upload document</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Please note: as documents are publicly shared, the documents tool should not be used to send sensitive or confidential information.{" "}
                  <a href="#" className="text-blue-600 hover:underline">Learn more</a>
                </p>
              </div>

              <div>
                <p className="font-medium text-sm text-gray-700 mb-2">Choose from</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleUploadOption("Your computer")}
                    className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <HardDrive className="w-4 h-4 text-gray-500" />
                    <span>Your computer</span>
                  </button>
                  <button
                    onClick={() => handleUploadOption("Existing file in HubSpot")}
                    className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <Briefcase className="w-4 h-4 text-gray-500" />
                    <span>Existing file in HubSpot</span>
                  </button>
                  <button
                    onClick={() => handleUploadOption("Dropbox")}
                    className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <Cloud className="w-4 h-4 text-gray-500" />
                    <span>Dropbox</span>
                  </button>
                  <button
                    onClick={() => handleUploadOption("Google Drive")}
                    className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <Cloud className="w-4 h-4 text-gray-500" />
                    <span>Google Drive</span>
                  </button>
                  <button
                    onClick={() => handleUploadOption("Box")}
                    className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <FolderPlus className="w-4 h-4 text-gray-500" />
                    <span>Box</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t p-4 flex justify-end">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}