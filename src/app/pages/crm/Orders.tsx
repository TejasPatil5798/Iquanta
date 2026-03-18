import { useState } from "react";
import {
  Plus,
  Settings,
  Filter,
  ArrowUpDown,
  Copy,
  MoreVertical,
  Search,
  ChevronLeft,
  ChevronRight,
  Save,
  Grid3x3,
  Lock,
  ChevronDown,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
 
export function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
 
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Control Row - Orders, All orders, Add orders */}
      <div className="border-b px-6 py-2 flex items-center gap-2">
        {/* Left - Orders button */}
        <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8">
          <Lock className="w-3 h-3" />
          <span className="text-xs font-medium">Orders</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
 
        {/* Center - All orders with badge and 3-dot menu */}
        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-900 text-xs">All orders</span>
          <span className="inline-flex items-center justify-center bg-gray-900 text-white rounded-full px-1 h-4 w-4 text-xs font-bold">
            0
          </span>
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <MoreVertical className="w-3 h-3" />
          </Button>
        </div>
 
        {/* Plus button */}
        <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
          <Plus className="w-3 h-3" />
        </Button>
 
        {/* Spacer */}
        <div className="flex-1"></div>
 
        {/* Right - 3-dot menu and Add orders button */}
        <div className="flex items-center gap-1">
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <MoreVertical className="w-3 h-3" />
          </Button>
 
          <Button className="bg-gray-900 hover:bg-gray-800 text-white gap-1 h-8 px-3">
            <span className="text-xs font-semibold">Add orders</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>
 
      {/* Search and Toolbar Row */}
      <div className="border-b px-6 py-2">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {/* Search Box */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300 h-8 rounded-full text-xs"
            />
          </div>
 
          {/* Table View and Settings in same box with small margin */}
          <div className="flex items-center border border-gray-300 rounded-md bg-white h-8">
            <Button variant="ghost" size="sm" className="text-gray-900 gap-1 px-2 h-8 text-xs">
              <Grid3x3 className="w-3 h-3" />
              <span>Table view</span>
              <ChevronDown className="w-3 h-3" />
            </Button>
            <div className="w-px h-5 bg-gray-200"></div>
            <Button variant="ghost" size="icon" className="text-gray-900 h-8 w-8">
              <Settings className="w-3 h-3" />
            </Button>
          </div>
 
          {/* Edit Columns - NO dropdown icon */}
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 text-xs">
            Edit columns
          </Button>
 
          {/* All Pipelines with dropdown icon */}
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8 text-xs">
            <span>All Pipelines</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
 
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8 text-xs">
            <Filter className="w-3 h-3" />
            <span>Filters</span>
          </Button>
 
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8 text-xs">
            <ArrowUpDown className="w-3 h-3" />
            <span>Sort</span>
          </Button>
 
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 text-xs">
            Export
          </Button>
 
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <Copy className="w-3 h-3" />
          </Button>
 
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 px-2 text-xs">
            Save
          </Button>
        </div>
 
        {/* Column Sort Headers */}
        <div className="flex items-center gap-6 text-xs">
          <button className="flex items-center gap-1 text-gray-900 font-semibold hover:text-gray-900 cursor-pointer">
            Created Date <ArrowUpDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 text-gray-900 font-semibold hover:text-gray-900 cursor-pointer">
            Modified Date <ArrowUpDown className="w-4 h-4" />
          </button>
          <button className="text-gray-900 font-semibold hover:text-gray-900 cursor-pointer">
            + More
          </button>
          <span className="text-gray-500 ml-4">Advanced filters</span>
        </div>
      </div>
 
      {/* Empty State Section - No Scrollbar */}
      <div className="mx-6 my-4 border border-gray-300 rounded-lg bg-white" style={{ minHeight: "350px" }}>
        <div className="p-6">
          {/* First Section - See all of your orders */}
          <div className="flex items-center justify-between mb-8">
            {/* Left Content */}
            <div className="flex-1 max-w-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                See all of your orders in one place
              </h2>
 
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm mt-1 flex-shrink-0">
                    ➜
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      Track the status of your orders
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      through the default order pipeline
                    </p>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm mt-1 flex-shrink-0">
                    ➜
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      Get started
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      by syncing your orders from one of our supported apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Right - Laptop and Cart Image */}
            <div className="flex-1 flex justify-end pr-4">
              <div className="relative w-72 h-56">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Light blue background shape */}
                  <ellipse cx="280" cy="240" rx="120" ry="60" fill="#B3E5FC" opacity="0.6" />
 
                  {/* Laptop/Device */}
                  <g>
                    {/* Screen */}
                    <rect
                      x="140"
                      y="60"
                      width="160"
                      height="120"
                      rx="8"
                      fill="white"
                      stroke="#2C3E50"
                      strokeWidth="3"
                    />
                   
                    {/* Screen content - horizontal lines */}
                    <line x1="155" y1="80" x2="285" y2="80" stroke="#FF6B35" strokeWidth="2" />
                    <line x1="155" y1="95" x2="285" y2="95" stroke="#FF6B35" strokeWidth="2" />
                    <line x1="155" y1="110" x2="270" y2="110" stroke="#FF6B35" strokeWidth="2" />
                    <line x1="155" y1="125" x2="260" y2="125" stroke="#FF6B35" strokeWidth="2" />
                    <line x1="155" y1="140" x2="280" y2="140" stroke="#FFD700" strokeWidth="2" />
                    <line x1="155" y1="155" x2="275" y2="155" stroke="#FFD700" strokeWidth="2" />
                   
                    {/* Wavy line at top of screen */}
                    <path
                      d="M 150 75 Q 155 72 160 75 T 170 75 T 180 75 T 190 75 T 200 75 T 210 75 T 220 75 T 230 75 T 240 75 T 250 75 T 260 75 T 270 75 T 280 75 T 290 75"
                      stroke="#2C3E50"
                      strokeWidth="1.5"
                      fill="none"
                    />
                   
                    {/* Laptop base */}
                    <rect
                      x="135"
                      y="175"
                      width="170"
                      height="12"
                      rx="2"
                      fill="#2C3E50"
                    />
                  </g>
 
                  {/* Shopping Cart */}
                  <g>
                    {/* Cart body/basket */}
                    <path
                      d="M 280 140 L 290 160 Q 290 165 295 165 L 330 165 Q 335 165 335 160 L 328 140 Z"
                      fill="white"
                      stroke="#E8B4B8"
                      strokeWidth="2"
                    />
                   
                    {/* Cart mesh/grid pattern */}
                    <line x1="285" y1="142" x2="325" y2="162" stroke="#E8B4B8" strokeWidth="1" opacity="0.6" />
                    <line x1="295" y1="142" x2="335" y2="162" stroke="#E8B4B8" strokeWidth="1" opacity="0.6" />
                    <line x1="305" y1="142" x2="325" y2="162" stroke="#E8B4B8" strokeWidth="1" opacity="0.6" />
                   
                    {/* Front view lines */}
                    <line x1="290" y1="145" x2="325" y2="162" stroke="#E8B4B8" strokeWidth="1.5" />
                    <line x1="305" y1="145" x2="335" y2="162" stroke="#E8B4B8" strokeWidth="1.5" />
                   
                    {/* Cart handle */}
                    <path
                      d="M 290 140 Q 310 110 330 140"
                      fill="none"
                      stroke="#2C3E50"
                      strokeWidth="2.5"
                    />
                   
                    {/* Left wheel */}
                    <circle cx="288" cy="170" r="6" fill="none" stroke="#2C3E50" strokeWidth="2" />
                    <circle cx="288" cy="170" r="3" fill="#2C3E50" />
                   
                    {/* Right wheel */}
                    <circle cx="332" cy="170" r="6" fill="none" stroke="#2C3E50" strokeWidth="2" />
                    <circle cx="332" cy="170" r="3" fill="#2C3E50" />
                   
                    {/* Product box in cart */}
                    <rect
                      x="305"
                      y="135"
                      width="25"
                      height="20"
                      rx="2"
                      fill="#F5E6D3"
                      stroke="#D4A574"
                      strokeWidth="1.5"
                    />
                    <line x1="308" y1="140" x2="328" y2="140" stroke="#D4A574" strokeWidth="1" />
                    <line x1="308" y1="145" x2="328" y2="145" stroke="#D4A574" strokeWidth="1" />
                  </g>
 
                  {/* Decorative dots */}
                  <circle cx="100" cy="80" r="2" fill="#FF6B35" opacity="0.3" />
                  <circle cx="360" cy="200" r="2.5" fill="#2C3E50" opacity="0.2" />
                </svg>
              </div>
            </div>
          </div>
 
          {/* Divider Line */}
          <div className="border-t border-gray-300 my-4"></div>
 
          {/* Sync your orders with Section */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-gray-900">Sync your orders with</h3>
              <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">See more</button>
            </div>
 
            {/* Left Navigation Button */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 transition-colors">
              <ChevronLeft className="w-3 h-3" />
            </button>
 
            {/* Integration Cards Grid */}
            <div className="grid grid-cols-3 gap-2 px-8">
              {/* Shopify Card */}
              <div className="border border-gray-300 rounded-lg p-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mb-1">
                  <span className="text-sm">🛍️</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs mb-1">Shopify</h4>
                <p className="text-xs text-gray-600 mb-1">By HubSpot <span className="ml-1">15K installs</span></p>
                <p className="text-xs text-gray-700 mb-2">Sync Shopify and HubSpot data; Works with data studio in Data Hub</p>
                <button className="w-full px-2 py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50">
                  App
                </button>
              </div>
 
              {/* Microsoft Dynamics 365 Card */}
              <div className="border border-gray-300 rounded-lg p-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mb-1">
                  <span className="text-sm">📊</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs mb-1">Microsoft Dynamics 365</h4>
                <p className="text-xs text-gray-600 mb-1">By HubSpot <span className="ml-1">8K installs</span></p>
                <p className="text-xs text-gray-700 mb-2">Data Sync - Sync HubSpot and Dynamics contact, company &...</p>
                <button className="w-full px-2 py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50">
                  App
                </button>
              </div>
 
              {/* NetSuite Card */}
              <div className="border border-gray-300 rounded-lg p-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg mb-1">
                  <span className="text-sm">📋</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs mb-1">NetSuite</h4>
                <p className="text-xs text-gray-600 mb-1">By HubSpot <span className="ml-1">2K installs</span></p>
                <p className="text-xs text-gray-700 mb-2">Sync data between HubSpot and NetSuite</p>
                <button className="w-full px-2 py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50">
                  App
                </button>
              </div>
            </div>
 
            {/* Right Navigation Button */}
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 transition-colors">
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
 
      {/* Bottom Pagination - Centered */}
      <div className="border-t px-6 py-4 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="sm"
          disabled
          className="bg-white border-gray-300 text-gray-400"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Prev
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-white border-gray-300 text-gray-700"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
        <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700">
          25 per page
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}