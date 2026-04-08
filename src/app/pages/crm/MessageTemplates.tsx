
import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { ChevronDown, FolderPlus, Plus, FileText, BarChart, Mail, Copy, Users } from "lucide-react";

export function MessageTemplates() {
  // Dropdown states
  const [showAnalyzeMenu, setShowAnalyzeMenu] = useState(false);
  const [showTemplateMenu, setShowTemplateMenu] = useState(false);

  // Refs for closing dropdowns on outside click
  const analyzeMenuRef = useRef<HTMLDivElement>(null);
  const templateMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (analyzeMenuRef.current && !analyzeMenuRef.current.contains(event.target as Node)) {
        setShowAnalyzeMenu(false);
      }
      if (templateMenuRef.current && !templateMenuRef.current.contains(event.target as Node)) {
        setShowTemplateMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNewFolder = () => {
    alert("Create a new folder – this would open a modal.");
  };

  const handleAnalyzeOption = (option: string) => {
    alert(`Analyze: ${option}`);
    setShowAnalyzeMenu(false);
  };

  const handleTemplateOption = (option: string) => {
    alert(`Template action: ${option}`);
    setShowTemplateMenu(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3 border-b border-gray-200">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Message templates
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

          {/* Analyze Dropdown */}
          <div className="relative" ref={analyzeMenuRef}>
            <Button
              variant="outline"
              className="h-9 border-gray-300 bg-white text-gray-700 text-sm"
              onClick={() => setShowAnalyzeMenu(!showAnalyzeMenu)}
            >
              Analyze
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            {showAnalyzeMenu && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white border rounded-md shadow-lg z-20">
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleAnalyzeOption("Templates performance")}
                >
                  <BarChart className="w-4 h-4" />
                  Templates performance
                </button>
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleAnalyzeOption("Team usage")}
                >
                  <Users className="w-4 h-4" />
                  Team usage
                </button>
              </div>
            )}
          </div>

          {/* New Template Dropdown */}
          <div className="relative" ref={templateMenuRef}>
            <Button
              className="h-9 bg-[#db5619] hover:bg-[#c24a14] text-white text-sm"
              onClick={() => setShowTemplateMenu(!showTemplateMenu)}
            >
              <Plus className="w-4 h-4 mr-1" />
              New template
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            {showTemplateMenu && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border rounded-md shadow-lg z-20">
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleTemplateOption("From scratch")}
                >
                  <FileText className="w-4 h-4" />
                  Create from scratch
                </button>
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleTemplateOption("Copy existing")}
                >
                  <Copy className="w-4 h-4" />
                  Copy existing template
                </button>
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleTemplateOption("Use library")}
                >
                  <Mail className="w-4 h-4" />
                  Choose from HubSpot library
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content - responsive column/row */}
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 md:gap-16 lg:gap-24 xl:gap-32 mt-12 md:mt-16 lg:mt-20">
        {/* Left Text Section */}
        <div className="max-w-full md:max-w-md lg:max-w-lg text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Turn your best emails into
            <br className="hidden sm:block" />
            templates for your team
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 min-w-[28px] bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ›
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Create your own templates</strong> or choose from a library written
                by HubSpot experts
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 min-w-[28px] bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ›
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Send more emails in less time</strong>, and build on your past
                successes
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 min-w-[28px] bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ›
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Engage your recipients</strong> with personalization, relevant
                documents, and meeting links
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://www.harvestroi.com/hubfs/HubSpot%20Iconography/traffic-analytics-1.svg"
            alt="Message template illustration"
            className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60"
          />
        </div>
      </div>
    </div>
  );
} 