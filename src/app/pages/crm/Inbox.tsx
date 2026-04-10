import { useState, useRef, useEffect } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  Settings,
  MoreVertical,
  Mail,
  MessageCircle,
  FileText,
  MessageSquare,
  Lock,
} from "lucide-react";

export function Inbox() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All open");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActionMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sidebarItems = [
    { name: "Assigned to me", count: 0 },

    { name: "All open", count: 0 },
  ];

  const moreItems = [
    { name: "Email", count: 0 },

    { name: "Calls", count: 0 },

    { name: "All closed" },

    { name: "Sent" },

    { name: "Spam", count: 0 },

    { name: "Trash" },
  ];

  const cards = [
    {
      icon: <Mail className="w-12 h-12 text-blue-500 mb-4" />,

      title: "Team email",

      description: "Manage and respond to team emails from your inbox",
    },

    {
      icon: <MessageCircle className="w-12 h-12 text-amber-500 mb-4" />,

      title: "Chat",

      description:
        "Connect live chat and create chatbots to engage with your visitors on your website or mobile applications.",
    },

    {
      icon: <FileText className="w-12 h-12 text-blue-600 mb-4" />,

      title: "Forms",

      description: "Connect and respond to forms from your inbox",
    },

    {
      icon: <MessageSquare className="w-12 h-12 text-blue-500 mb-4" />,

      title: "Facebook Messenger",

      description:
        "Start receiving Messenger conversations and create chatbots in your inbox",
    },
  ];

  return (
    <div className="flex h-full bg-white -m-6 rounded-tl-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Collapsible Sidebar */}

      <div
        className={`flex flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out relative ${
          isSidebarOpen ? "w-64" : "w-12"
        }`}
      >

        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          {isSidebarOpen ? (
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                Inbox
              </h2>
              <button className="text-gray-500 hover:text-gray-700">
                <Search className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-700"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Search className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto py-2">
          {isSidebarOpen ? (
            <>
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setSelectedItem(item.name)}
                      className={`w-full flex justify-between items-center px-4 py-2 text-sm transition-colors ${
                        selectedItem === item.name
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.count !== undefined && (
                        <span className="text-gray-400">{item.count}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="w-full flex items-center gap-2 px-4 py-3 mt-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                {isMoreOpen ? (
                  <>
                    <ChevronDown className="w-4 h-4" /> Less
                  </>
                ) : (
                  <>
                    <ChevronRight className="w-4 h-4" /> More
                  </>
                )}
              </button>

              {isMoreOpen && (
                <ul className="space-y-1 pb-2">
                  {moreItems.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => setSelectedItem(item.name)}
                        className={`w-full flex justify-between items-center px-4 py-2 text-sm transition-colors ${
                          selectedItem === item.name
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.count !== undefined && (
                          <span className="text-gray-400">{item.count}</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center space-y-4 pt-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium text-xs cursor-pointer hover:bg-blue-100 transition-colors">
                U
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 font-medium text-xs cursor-pointer hover:bg-gray-100 transition-colors">
                M
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 font-medium text-xs cursor-pointer hover:bg-gray-100 transition-colors">
                A
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="relative" ref={dropdownRef}>
            {isSidebarOpen ? (
              <button
                onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm flex justify-between items-center transition-colors hover:bg-gray-50"
              >
                Actions
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            ) : (
              <button
                onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
                className="w-full flex justify-center text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-md transition-colors"
                title="Actions"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            )}

            {/* Actions Dropdown Menu */}
            {isActionMenuOpen && (
              <div
                className={`absolute bottom-full mb-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 py-1 ${
                  isSidebarOpen ? "w-full left-0" : "w-48 left-0"
                }`}
              >
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsActionMenuOpen(false)}
                >
                  Manage team availability
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => setIsActionMenuOpen(false)}
                >
                  Create a view <Lock className="w-3 h-3 text-gray-400" />
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsActionMenuOpen(false)}
                >
                  Connect a channel
                </button>
              </div>
            )}
          </div>

          <button
            className={`mt-4 flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors ${
              !isSidebarOpen && "justify-center w-full"
            }`}
            title="Inbox Settings"
          >
            <Settings className="w-4 h-4" />
            {isSidebarOpen && "Inbox Settings"}
          </button>
        </div>
      </div>

      {/* Main Content Area */}

      <div className="flex-1 bg-white flex flex-col items-center pt-20 px-8 overflow-y-auto">
        <div className="max-w-4xl w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Say hello.</h1>

          <p className="text-gray-600 mb-12 text-center max-w-lg">
            Connect your first channel and start bringing conversations to your
            inbox.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-200">
                  {card.icon}
                </div>

                <h3 className="text-gray-900 font-medium mb-3">{card.title}</h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
