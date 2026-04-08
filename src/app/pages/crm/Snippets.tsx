import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { FolderPlus, Plus, ChevronDown, FileText, Copy, Zap } from "lucide-react";

export function Snippets() {
  // Dropdown states
  const [showCreateMenu, setShowCreateMenu] = useState(false);

  // Refs for closing dropdowns on outside click
  const createMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (createMenuRef.current && !createMenuRef.current.contains(event.target as Node)) {
        setShowCreateMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNewFolder = () => {
    alert("Create a new folder – this would open a modal.");
  };

  const handleCreateSnippet = (option: string) => {
    alert(`Create snippet: ${option}`);
    setShowCreateMenu(false);
  };

  const handleUpgrade = () => {
    alert("Upgrade to Starter Customer Platform – this would open a pricing modal.");
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3 border-b border-gray-200 mb-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Snippets
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">0 of 3 created</span>

          <Button
            variant="outline"
            className="h-9 border-gray-300 bg-white text-gray-700 text-sm"
            onClick={handleNewFolder}
          >
            <FolderPlus className="w-4 h-4 mr-1" />
            New folder
          </Button>

          {/* Create Snippet Dropdown */}
          <div className="relative" ref={createMenuRef}>
            <Button
              className="h-9 bg-[#df5113] hover:bg-[#c44a10] text-white text-sm"
              onClick={() => setShowCreateMenu(!showCreateMenu)}
            >
              <Plus className="w-4 h-4 mr-1" />
              Create snippet
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            {showCreateMenu && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border rounded-md shadow-lg z-20">
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleCreateSnippet("From scratch")}
                >
                  <FileText className="w-4 h-4" />
                  Create from scratch
                </button>
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleCreateSnippet("Copy existing")}
                >
                  <Copy className="w-4 h-4" />
                  Copy existing snippet
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-white border border-gray-200 rounded-md p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5 mb-10">
        <span className="text-sm text-gray-800">
          <strong>Your team has created 0 out of 3 snippets.</strong> Unlock more snippets
          with Starter Customer Platform.
        </span>
        <Button
          variant="outline"
          className="border-gray-300 bg-gray-100 text-gray-700 h-8 px-3 text-sm self-start sm:self-center"
          onClick={handleUpgrade}
        >
          <Zap className="w-4 h-4 mr-1 text-yellow-600" />
          Upgrade
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 md:gap-16 lg:gap-24">
        {/* Text Section */}
        <div className="max-w-full md:max-w-md lg:max-w-lg text-center md:text-left">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
            Save time writing emails and taking notes
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Create shortcuts to your most common responses in emails sent to
            prospects and notes logged in your CRM. Quickly send emails and log
            notes without having to type the same thing over and over.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://www.recipemarketing.co.nz/hubfs/Success.svg"
            alt="Snippet illustration"
            className="w-40 sm:w-48 md:w-52 lg:w-56"
          />
        </div>
      </div>
    </div>
  );
}