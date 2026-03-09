import { Link, useLocation, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  MessageSquare,
  CheckSquare,
  BarChart3,
  Megaphone,
  Database,
  Bot,
  Settings,
  UserCog,
} from "lucide-react";

interface SubMenuItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  submenu?: SubMenuItem[];
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },

  {
    name: "CRM",
    path: "/crm",
    icon: <Database className="w-5 h-5" />,
    submenu: [
      { name: "Contacts", path: "/crm/contacts" },
      { name: "Companies", path: "/crm/companies" },
      { name: "Deals", path: "/crm/deals" },
      { name: "Tickets", path: "/crm/tickets" },
      { name: "Orders", path: "/crm/orders" },
      { name: "Segments", path: "/crm/segments" },
      { name: "Inbox", path: "/crm/inbox" },
      { name: "Calls", path: "/crm/calls" },
      { name: "Tasks", path: "/crm/tasks" },
      { name: "Playbooks", path: "/crm/playbooks" },
      { name: "Message Templates", path: "/crm/message-templates" },
      { name: "Snippets", path: "/crm/snippets" },
    ],
  },

  {
    name: "Leads",
    path: "/leads",
    icon: <Users className="w-5 h-5" />,
  },

  /* STUDENT MODULE */
  {
    name: "Students",
    path: "/students",
    icon: <GraduationCap className="w-5 h-5" />,
    submenu: [
      { name: "Students", path: "/students" },
      { name: "Applications", path: "/students/applications" },
      { name: "Documents", path: "/students/documents" },
    ],
  },

  {
    name: "Communication",
    path: "/communication",
    icon: <MessageSquare className="w-5 h-5" />,
  },

  {
    name: "Tasks",
    path: "/tasks",
    icon: <CheckSquare className="w-5 h-5" />,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: <BarChart3 className="w-5 h-5" />,
  },

  {
    name: "Marketing",
    path: "/marketing",
    icon: <Megaphone className="w-5 h-5" />,
  },

  {
    name: "AI Assistant",
    path: "/ai-assistant",
    icon: <Bot className="w-5 h-5" />,
  },

  {
    name: "User Management",
    path: "/user-management",
    icon: <UserCog className="w-5 h-5" />,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [activeMenu, setActiveMenu] = useState<NavItem | null>(null);
  const [menuPosition, setMenuPosition] = useState(0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div className="fixed overflow-y-auto no-scrollbar left-0 top-0 w-20 h-screen bg-[#33475B] flex flex-col items-center">
        {/* Logo */}
        <div className="p-5 border-b border-[#2b3e50]">
          <a href="/">
            <img
              src="/ChatGPT Image Mar 7, 2026, 02_05_05 PM.png"
              alt="logo"
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 no-scrollbar">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);

              return (
                <li
                  key={item.path}
                  className="relative group flex justify-center"
                >
                  <button
                    onClick={(e) => {
                      if (!item.submenu) {
                        navigate(item.path);
                        setActiveMenu(null);
                        return;
                      }

                      const rect = e.currentTarget.getBoundingClientRect();
                      const menuHeight = 400;
                      const viewportHeight = window.innerHeight;

                      let top = rect.top;

                      if (top + menuHeight > viewportHeight) {
                        top = viewportHeight - menuHeight - 20;
                      }

                      setMenuPosition(top);

                      setActiveMenu(
                        activeMenu?.name === item.name ? null : item,
                      );
                    }}
                    className={`flex justify-center items-center w-full p-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#2b3e50] text-white"
                        : "text-gray-300 hover:bg-[#2b3e50]"
                    }`}
                  >
                    {item.icon}
                  </button>

                  {/* Tooltip */}
                  <span className="absolute left-14 ml-3 top-1/2 -translate-y-1/2 translate-x-2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap z-51">
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Floating Panel */}
      {activeMenu && (
        <div
          ref={dropdownRef}
          style={{ top: menuPosition }}
          className="fixed left-21 w-72 bg-[#33475B] text-white shadow-xl p-6 rounded-lg z-50 max-h-[80vh] overflow-y-auto no-scrollbar transition-all duration-200 ease-out animate-dropdown"
        >
          <h3 className="text-lg font-semibold mb-4">{activeMenu.name}</h3>

          <ul className="space-y-3">
            {activeMenu.submenu?.map((menu) => (
              <li key={menu.name}>
                <Link
                  to={menu.path}
                  onClick={() => setActiveMenu(null)}
                  className="block px-3 py-2 rounded hover:bg-slate-600"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
