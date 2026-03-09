import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Package, Plug, Download, Bot } from "lucide-react";
import {
  UserPlus,
  Building2,
  Handshake,
  Ticket,
  CheckSquare,
} from "lucide-react";
import {
  Search,
  Bell,
  Plus,
  Phone,
  Store,
  HelpCircle,
  Settings,
  User,
  Star,
  ChevronDown,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export function TopNavbar() {
  const [openBreeze, setOpenBreeze] = useState(false);
  const [notifications] = useState([
    { id: 1, message: "New lead assigned: Rahul Sharma", time: "5 min ago" },
    {
      id: 2,
      message: "Application submitted by Pooja Menon",
      time: "1 hour ago",
    },
    {
      id: 3,
      message: "Document verified for Vikram Reddy",
      time: "2 hours ago",
    },
  ]);

  return (
    <div className="h-16 bg-[#33475B] border-b border-[#2B3E50] flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
          <input
            type="text"
            placeholder="Search leads, students... (Ctrl + K)"
            className="w-full pl-10 pr-4 py-2 bg-[#2B3E50] border border-[#3E566E] rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 ml-6">
        {/* Create Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 bg-[#2B3E50] hover:bg-[#243545] rounded-lg text-white">
              <Plus className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>Create</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Contacts
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Company
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <Handshake className="w-4 h-4" />
              Deal
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <Ticket className="w-4 h-4" />
              Ticket
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Bookmarks */}
        <div className="relative group">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-gray-300 hover:text-white hover:bg-[#2B3E50] rounded-lg">
                <Star className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Bookmarks</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Contacts</DropdownMenuItem>
              <DropdownMenuItem>Deals</DropdownMenuItem>
              <DropdownMenuItem>Tasks</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50 pointer-events-none">
            Bookmarks
          </span>
        </div>

        {/* Calls */}
        <div className="relative group">
          <button className="p-2 text-gray-300 hover:text-white hover:bg-[#2B3E50] rounded-lg">
            <Phone className="w-5 h-5" />
          </button>

          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
            Calls
          </span>
        </div>

        {/* Marketplace */}
        {/* Marketplace */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 text-gray-300 hover:text-white hover:bg-[#2B3E50] rounded-lg">
              <Store className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Marketplace</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              HubSpot Marketplace
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <Plug className="w-4 h-4" />
              Connected Apps
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Marketplace Downloads
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Added Agents
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Help */}
        <div className="relative group">
          <button className="p-2 text-gray-300 hover:text-white hover:bg-[#2B3E50] rounded-lg">
            <HelpCircle className="w-5 h-5" />
          </button>

          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
            Help
          </span>
        </div>

        {/* Settings */}
        <div className="relative group">
          <button className="p-2 text-gray-300 hover:text-white hover:bg-[#2B3E50] rounded-lg">
            <Settings className="w-5 h-5" />
          </button>

          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
            Settings
          </span>
        </div>

        <div className="relative group">
          <button
            onClick={() => setOpenBreeze(true)}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition"
          >
            <Sparkles className="w-4 h-4" />
            Breeze
          </button>

          {/* Tooltip */}
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50 pointer-events-none">
            Breeze Assistant
          </span>
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 text-gray-300 hover:text-white hover:bg-[#2B3E50] rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start py-3"
              >
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-blue-600">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 p-2 hover:bg-[#2B3E50] rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>

              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-300">admin@iquanta.com</p>
              </div>

              <ChevronDown className="w-4 h-4 text-gray-300" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {openBreeze && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpenBreeze(false)}
          />

          {/* AI Panel */}
          <div className="relative w-[400px] h-full bg-white shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex items-center gap-2 font-semibold">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Breeze Assistant
              </div>

              <button
                onClick={() => setOpenBreeze(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg text-sm">
                👋 Hi! I'm Breeze. How can I help you today?
              </div>

              <div className="bg-blue-600 text-white p-3 rounded-lg text-sm self-end max-w-[80%]">
                Show today's leads
              </div>

              <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-[80%]">
                You have 12 new leads today.
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                placeholder="Ask Breeze..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
