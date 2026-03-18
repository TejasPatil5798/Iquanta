import { useState } from "react";
import {
  Search,
  ChevronDown,
  MoreVertical,
  Plus,
  Lightbulb,
  FolderOpen,
  HelpCircle,
  RotateCcw,
  Copy as CopyIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
 
export function Segments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("manage");
 
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Segments</h1>
            <p className="text-sm font-medium text-gray-700 mt-1">1 segment</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-white border border-gray-400 text-gray-900 gap-2 h-10 text-sm font-medium px-4 hover:bg-gray-50">
              <Lightbulb className="w-4 h-4" />
              What's new?
            </Button>
            <Button variant="outline" className="bg-white border border-gray-400 text-gray-900 gap-2 h-10 text-sm font-medium px-4 hover:bg-gray-50">
              <span>Admin settings</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="bg-white border border-gray-400 text-gray-900 h-10 text-sm font-medium px-6 hover:bg-gray-50">
              Import
            </Button>
            <Button variant="outline" className="bg-white border border-gray-400 text-gray-900 gap-2 h-10 text-sm font-medium px-4 hover:bg-gray-50">
              <span>Quick create</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white h-10 text-sm font-medium px-6">
              Create segment
            </Button>
          </div>
        </div>
 
        {/* Tabs */}
        <div className="flex items-center gap-16">
          <button
            onClick={() => setActiveTab("intro")}
            className={`pb-4 text-base font-bold border-b-4 ${
              activeTab === "intro"
                ? "text-gray-900 border-gray-900"
                : "text-gray-600 border-transparent hover:text-gray-900"
            }`}
          >
            Intro
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`pb-4 text-base font-medium border-b-2 ${
              activeTab === "manage"
                ? "text-gray-900 border-gray-900"
                : "text-gray-600 border-transparent hover:text-gray-900"
            }`}
          >
            Manage
          </button>
          <button
            onClick={() => setActiveTab("analyze")}
            className={`pb-4 text-base font-medium border-b-2 ${
              activeTab === "analyze"
                ? "text-gray-900 border-gray-900"
                : "text-gray-600 border-transparent hover:text-gray-900"
            }`}
          >
            Analyze
          </button>
        </div>
      </div>
 
      {/* Content Area */}
      {activeTab === "manage" && (
        <div className="px-6 py-5">
          {/* Segment Views Section */}
          <div className="mb-5 pb-4 border-b border-gray-300">
            <div className="flex items-center gap-0">
              <div className="flex items-center gap-2 px-4 py-2 border-r border-gray-300 bg-gray-50">
                <span className="text-sm font-medium text-gray-900">All segments</span>
                <button className="text-gray-500 hover:text-gray-700 text-lg leading-none">×</button>
              </div>
              <div className="flex items-center px-4 py-2 border-r border-gray-300 bg-white">
                <span className="text-sm text-gray-700">Unused segments</span>
              </div>
              <div className="flex items-center px-4 py-2 border-r border-gray-300 bg-white">
                <span className="text-sm text-gray-700">Recently deleted</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border-r border-gray-300 bg-white hover:bg-gray-50">
                <Plus className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-medium text-gray-900">Add view (3/5)</span>
              </button>
              <button className="flex items-center px-4 py-2 border-r border-gray-300 bg-white hover:bg-gray-50">
                <span className="text-sm text-gray-700">All views</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 ml-auto">
                <FolderOpen className="w-4 h-4 text-gray-900" />
                <span className="text-sm text-gray-900">Folders</span>
              </button>
            </div>
          </div>
 
          {/* Filters Section */}
          <div className="mb-5 flex items-center gap-3">
            <Button variant="ghost" className="text-gray-900 gap-2 h-9 text-sm font-bold px-3 hover:bg-gray-100">
              <span>All creators</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="text-gray-900 gap-2 h-9 text-sm font-bold px-3 hover:bg-gray-100">
              <span>All types</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="text-gray-900 gap-2 h-9 text-sm font-bold px-3 hover:bg-gray-100">
              <span>All objects</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="text-gray-900 gap-2 h-9 text-sm font-bold px-3 hover:bg-gray-100">
              <span>Used in</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="text-gray-900 gap-1 h-9 text-sm font-bold px-3 hover:bg-gray-100">
              <Plus className="w-4 h-4" />
              <span>More</span>
            </Button>
            <Button variant="ghost" className="text-gray-900 gap-2 h-9 text-sm font-bold px-3 hover:bg-gray-100">
              <MoreVertical className="w-4 h-4" />
              <span>Advanced filters</span>
            </Button>
            <div className="flex-1"></div>
            <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-600 hover:bg-gray-100">
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-600 hover:bg-gray-100">
              <CopyIcon className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-600 hover:bg-gray-100">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
 
          {/* Search and Actions */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search segments"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 bg-white border border-gray-400 rounded-full h-9 text-sm text-gray-700"
              />
            </div>
            <Button variant="outline" className="bg-white border border-gray-400 text-gray-900 gap-2 h-9 text-sm font-medium px-4 hover:bg-gray-50">
              <span>Actions</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
 
          {/* Table */}
          <div className="border border-gray-300 rounded-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-7 bg-gray-100 border-b border-gray-300">
              <div className="flex items-center gap-2 px-4 py-3">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-gray-900">Name</span>
                  <HelpCircle className="w-3 h-3 text-gray-500" />
                </div>
              </div>
              <div className="flex items-center gap-1 px-4 py-3 border-l border-gray-300">
                <span className="text-xs font-bold text-gray-900">Size</span>
                <HelpCircle className="w-3 h-3 text-gray-500" />
              </div>
              <div className="flex items-center gap-1 px-4 py-3 border-l border-gray-300">
                <span className="text-xs font-bold text-gray-900">Type</span>
                <HelpCircle className="w-3 h-3 text-gray-500" />
              </div>
              <div className="flex items-center gap-1 px-4 py-3 border-l border-gray-300">
                <span className="text-xs font-bold text-gray-900">Object</span>
                <HelpCircle className="w-3 h-3 text-gray-500" />
              </div>
              <div className="flex items-center gap-1 px-4 py-3 border-l border-gray-300 col-span-2">
                <span className="text-xs font-bold text-gray-900">Last updated (GMT+5:30)</span>
                <HelpCircle className="w-3 h-3 text-gray-500" />
              </div>
              <div className="flex items-center gap-1 px-4 py-3 border-l border-gray-300">
                <span className="text-xs font-bold text-gray-900">Creator</span>
                <HelpCircle className="w-3 h-3 text-gray-500" />
              </div>
            </div>
 
            {/* Table Content */}
            <div className="relative overflow-hidden">
              {/* Single Row */}
              <div className="grid grid-cols-7 border-b border-gray-300 hover:bg-gray-50 bg-white">
                <div className="flex items-center gap-2 px-4 py-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                  <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 underline">
                    High Engagement
                  </a>
                </div>
                <div className="px-4 py-3 border-l border-gray-300 text-sm text-gray-900 font-medium">0</div>
                <div className="flex items-center gap-2 px-4 py-3 border-l border-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-900 font-medium">Active</span>
                </div>
                <div className="px-4 py-3 border-l border-gray-300 text-sm text-gray-900 font-medium">Contact</div>
                <div className="px-4 py-3 border-l border-gray-300 col-span-2">
                  <div className="text-sm text-gray-900 font-medium">Mar 12, 2026 11:35 AM</div>
                  <div className="text-xs text-gray-600">by Mohan Kamble</div>
                </div>
                <div className="px-4 py-3 border-l border-gray-300 text-sm text-gray-900 font-medium">Mohan Kamble</div>
              </div>
            </div>
          </div>
 
          {/* Bottom Scrollbar */}
          <div className="flex items-center justify-between mt-3">
            <button className="text-gray-500 hover:text-gray-700 p-1">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex-1 mx-3 h-1.5 bg-gray-300 rounded-full relative">
              <div className="h-1.5 bg-gray-600 rounded-full" style={{ width: "45%", marginLeft: "0%" }}></div>
            </div>
            <button className="text-gray-500 hover:text-gray-700 p-1">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
 
      {/* Analyze Tab Content */}
      {activeTab === "analyze" && (
        <div className="px-8 py-6 bg-gray-50 min-h-screen">
          {/* Segment Type Section */}
          <div className="mb-8 flex items-center gap-3">
            <span className="text-base text-gray-900">Segment type:</span>
            <Button variant="outline" className="bg-white border border-gray-400 text-gray-900 gap-2 h-9 text-sm font-bold px-4 hover:bg-gray-100">
              <span>Contacts</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <HelpCircle className="w-4 h-4 text-gray-600" />
          </div>
 
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">0 contact segments in use</h2>
 
          {/* Cards Container - Grid Layout */}
          <div className="grid grid-cols-5 gap-6 mb-12">
            {/* Personalization Card */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-gray-900">Personalization</h3>
                <HelpCircle className="w-4 h-4 text-gray-600" />
              </div>
              <div className="mb-6">
                <p className="text-5xl font-bold text-gray-900">0</p>
              </div>
              <p className="text-sm text-gray-700 mb-6">Segments in use</p>
              <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                View Segments
              </Button>
            </div>
 
            {/* Communication Card */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-gray-900">Communication</h3>
                <HelpCircle className="w-4 h-4 text-gray-600" />
              </div>
              <div className="mb-6">
                <p className="text-5xl font-bold text-gray-900">0</p>
              </div>
              <p className="text-sm text-gray-700 mb-6">Segments in use</p>
              <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                View Segments
              </Button>
            </div>
 
            {/* Automation Card */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-gray-900">Automation</h3>
                <HelpCircle className="w-4 h-4 text-gray-600" />
              </div>
              <div className="mb-6">
                <p className="text-5xl font-bold text-gray-900">0</p>
              </div>
              <p className="text-sm text-gray-700 mb-6">Segments in use</p>
              <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                View Segments
              </Button>
            </div>
 
            {/* Analytics Card */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-gray-900">Analytics</h3>
                <HelpCircle className="w-4 h-4 text-gray-600" />
              </div>
              <div className="mb-6">
                <p className="text-5xl font-bold text-gray-900">0</p>
              </div>
              <p className="text-sm text-gray-700 mb-6">Segments in use</p>
              <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                View Segments
              </Button>
            </div>
 
            {/* Segments Card */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-gray-900">Segments</h3>
                <HelpCircle className="w-4 h-4 text-gray-600" />
              </div>
              <div className="mb-6">
                <p className="text-5xl font-bold text-gray-900">0</p>
              </div>
              <p className="text-sm text-gray-700 mb-6">Segments in use</p>
              <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                View Segments
              </Button>
            </div>
          </div>
 
          {/* Segment Overlap Section */}
          <div className="mt-12 bg-white border border-gray-300 rounded-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Segment overlap</h2>
              <Button variant="outline" className="bg-white border border-gray-400 text-gray-900 gap-2 h-10 text-sm font-bold px-4 hover:bg-gray-50">
                <span>Select segments (up to 5)</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
 
            {/* Empty State with Illustration */}
            <div className="flex flex-col items-center justify-center py-16">
              {/* Magnifying Glass Illustration */}
              <svg width="120" height="120" viewBox="0 0 120 120" className="mb-6">
                {/* Magnifying glass body */}
                <circle cx="50" cy="50" r="28" fill="none" stroke="#b3d4f5" strokeWidth="3" />
                {/* Magnifying glass handle */}
                <line x1="72" y1="72" x2="95" y2="95" stroke="#b3d4f5" strokeWidth="3" strokeLinecap="round" />
                {/* Light rays */}
                <line x1="30" y1="15" x2="30" y2="5" stroke="#b3d4f5" strokeWidth="2" strokeLinecap="round" />
                <line x1="70" y1="20" x2="77" y2="12" stroke="#b3d4f5" strokeWidth="2" strokeLinecap="round" />
                {/* Search beam cone */}
                <path d="M 50 78 Q 35 95 25 110" fill="none" stroke="#e0e8f5" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
              </svg>
 
              {/* Message Text */}
              <p className="text-base text-gray-700 font-medium">Select a segment to get started.</p>
            </div>
          </div>
 
          {/* Segments that require your attention Section */}
          <div className="mt-12 bg-white border border-gray-300 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-bold text-gray-900">Segments that require your attention</h2>
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </div>
 
            {/* Table */}
            <div className="border border-gray-300 rounded-md overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-5 bg-gray-100 border-b border-gray-300">
                <div className="px-6 py-3 border-r border-gray-300">
                  <span className="text-sm font-bold text-gray-900">Segment Name</span>
                </div>
                <div className="px-6 py-3 border-r border-gray-300 flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">7-Day Size Change</span>
                  <HelpCircle className="w-4 h-4 text-gray-600" />
                </div>
                <div className="px-6 py-3 border-r border-gray-300">
                  <span className="text-sm font-bold text-gray-900">Type</span>
                </div>
                <div className="px-6 py-3 border-r border-gray-300">
                  <span className="text-sm font-bold text-gray-900">Object</span>
                </div>
                <div className="px-6 py-3">
                  <span className="text-sm font-bold text-gray-900">Last Updated</span>
                </div>
              </div>
 
              {/* Table Row */}
              <div className="grid grid-cols-5 border-b border-gray-300 bg-white hover:bg-gray-50">
                <div className="px-6 py-3 border-r border-gray-300">
                  <span className="text-sm text-gray-700">-</span>
                </div>
                <div className="px-6 py-3 border-r border-gray-300">
                  <span className="text-sm text-gray-700">-</span>
                </div>
                <div className="px-6 py-3 border-r border-gray-300">
                  <span className="text-sm text-gray-700">-</span>
                </div>
                <div className="px-6 py-3 border-r border-gray-300">
                  <span className="text-sm text-gray-700">-</span>
                </div>
                <div className="px-6 py-3">
                  <span className="text-sm text-gray-700">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
 
      {/* Intro Tab Content */}
      {activeTab === "intro" && (
        <div className="relative w-full min-h-screen bg-white">
          {/* Close Button */}
          <button className="absolute top-6 right-8 text-gray-600 hover:text-gray-900 p-1">
            <MoreVertical className="w-6 h-6 transform rotate-90" />
          </button>
 
          <div className="px-8 py-8 flex items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Connect with the right audience with segments
              </h1>
             
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Understand your audience and tailor your marketing efforts more precisely, improving customer brand awareness, engagement and ROI.
              </p>
 
              <button className="border-2 border-gray-900 text-gray-900 font-bold px-8 py-3 rounded-md hover:bg-gray-50 transition">
                Watch intro video
              </button>
            </div>
 
            {/* Right Illustration */}
            <div className="flex-1 relative h-96">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-300 to-purple-200 rounded-3xl opacity-40"></div>
 
              {/* Card 1 - CRM contacts segment */}
              <div className="absolute top-16 left-8 bg-white rounded-lg shadow-lg p-4 w-56 transform -rotate-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-900">CRM contacts segment</span>
                </div>
                <div className="flex -space-x-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
                </div>
              </div>
 
              {/* Card 2 - Web visitors segment */}
              <div className="absolute bottom-16 right-8 bg-white rounded-lg shadow-lg p-4 w-56 transform rotate-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-900">Web visitors segment</span>
                </div>
                <div className="flex -space-x-2 items-end mb-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <span className="text-xs text-gray-600 font-semibold">+ 20,000</span>
              </div>
 
              {/* Right Panel - Target market */}
              <div className="absolute right-0 top-0 bg-white rounded-3xl shadow-xl p-6 w-64 h-80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-gray-900">Target market</h3>
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-50">
                      Explore segments
                    </button>
                    <button className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-50">
                      + Create segm
                    </button>
                  </div>
                </div>
               
                {/* Grid of icons */}
                <div className="grid grid-cols-4 gap-3">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-lg bg-purple-200 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
 
          {/* What would you like to segment Section */}
          <div className="px-8 py-8 bg-gray-50 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What would you like to segment?</h2>
 
            {/* Input Card */}
            <div className="bg-white rounded-lg p-6 mb-12">
              <div className="mb-4">
                <span className="text-base text-gray-900">Create a segment of </span>
                <button className="text-base font-bold text-pink-600 hover:text-pink-700">
                  contacts <ChevronDown className="w-4 h-4 inline ml-1" />
                </button>
              </div>
 
              {/* Input with Generate Button */}
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Describe in your own words what you'd like to segment, so we can build the segment for you."
                  className="flex-1 border-2 border-pink-500 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-pink-600"
                />
                <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold">
                  <Lightbulb className="w-4 h-4" />
                  Generate
                </button>
              </div>
            </div>
 
            {/* Your segment insights Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your segment insights</h2>
 
            {/* Cards Grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Contact Segments Card */}
              <div className="bg-white rounded-lg border border-gray-300 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact segments</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">1</span>
                  <span className="text-base text-gray-700">segment</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">100% of all segments</p>
                <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                  View Segments
                </Button>
              </div>
 
              {/* Company Segments Card */}
              <div className="bg-white rounded-lg border border-gray-300 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Company segments</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">0</span>
                  <span className="text-base text-gray-700">segments</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">0% of all segments</p>
                <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                  Create Segment
                </Button>
              </div>
 
              {/* Deal Segments Card */}
              <div className="bg-white rounded-lg border border-gray-300 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Deal segments</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">0</span>
                  <span className="text-base text-gray-700">segments</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">0% of all segments</p>
                <Button variant="outline" className="w-full bg-white border border-gray-400 text-gray-900 h-9 text-sm font-medium hover:bg-gray-50">
                  Create Segment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}