import { Link, useLocation, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useBookmarks } from "../context/BookmarkContext";
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
  ChevronRight,
  ChevronLeft,
  DollarSign,
  LifeBuoy,
  Workflow,
  PieChart,
  Server,
  Sparkles,
  Code,
  Bookmark,
  FileText,
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
    name: "Marketing",
    path: "/marketing",
    icon: <Megaphone className="w-5 h-5" />,
    submenu: [
      { name: "Campaigns", path: "/marketing/campaigns" },
      { name: "Email", path: "/marketing/email" },
      { name: "Social", path: "/marketing/social" },
      { name: "Ads", path: "/marketing/ads" },
      { name: "Events", path: "/marketing/events" },
      { name: "Forms", path: "/marketing/forms" },
      { name: "Buyer Intent", path: "/marketing/buyer-intent" },
      { name: "Lead Scoring", path: "/marketing/lead-scoring" },
    ],
  },

  {
    name: "Content",
    path: "/content",
    icon: <FileText className="w-5 h-5" />,
    submenu: [
      { name: "Website Pages", path: "/content/website-pages" },
      { name: "Landing Pages", path: "/content/landing-pages" },
      { name: "Blogs", path: "/content/blogs" },
      { name: "Videos", path: "/content/videos" },
      { name: "Podcast", path: "/content/podcast" },
      { name: "Case Studies", path: "/content/case-studies" },
      { name: "Embeds", path: "/content/embeds" },
      { name: "Remix", path: "/content/remix" },
      { name: "SEO", path: "/content/seo" },
      { name: "Memberships", path: "/content/memberships" },
      { name: "Design Manager", path: "/content/design-manager" },
      { name: "Brand", path: "/content/brand" },
    ],
  },
 
  {
    name: "Sales",
    path: "/sales",
    icon: <BarChart3 className="w-5 h-5" />,
    submenu: [
      { name: "Sales Workspace", path: "/sales/workspace" },
      { name: "Target Accounts", path: "/sales/target-accounts" },
      { name: "Prospecting Agent", path: "/sales/prospecting-agent" },
      { name: "Documents", path: "/sales/documents" },
      { name: "Meetings Scheduler", path: "/sales/meetings-scheduler" },
      { name: "Sequences", path: "/sales/sequences" },
      { name: "Activity Feed", path: "/sales/activity-feed" },
      { name: "Forecast", path: "/sales/forecast" },
      { name: "Coaching Playlists", path: "/sales/coaching-playlists" },
      { name: "Sales Analytics", path: "/sales/analytics" },
    ],
  },

  {
    name: "Commerce",
    path: "/commerce",
    icon: <DollarSign className="w-5 h-5" />,
    submenu: [
      { name: "Overview", path: "/commerce/overview" },
      { name: "Quotes", path: "/commerce/quotes" },
      { name: "Products", path: "/commerce/products" },
      { name: "Invoices", path: "/commerce/invoices" },
      { name: "Payments", path: "/commerce/payments" },
      { name: "Payment Links", path: "/commerce/payment-links" },
      { name: "Subscriptions", path: "/commerce/subscriptions" },
      { name: "Commerce Analytics", path: "/commerce/analytics" },
    ],
  },

  {
    name: "Service",
    path: "/service",
    icon: <LifeBuoy className="w-5 h-5" />,
    submenu: [
      { name: "Help desk", path: "/service/help-desk" },
      { name: "Customer Success", path: "/service/customer-success" },
      { name: "Customer Agent", path: "/service/customer-agent" },
      { name: "Chat Flows", path: "/service/chat-flows" },
      { name: "Knowledge Base", path: "/service/knowledge-base" },
      { name: "Customer Portal", path: "/service/customer-portal" },
      { name: "Feedback Surveys", path: "/service/feedback-surveys" },
      { name: "Service Analytics", path: "/service/analytics" },
    ],
  },

  {
    name: "Data Management",
    path: "/data-management",
    icon: <Server className="w-5 h-5" />,
    submenu: [
      { name: "Data Agent", path: "/data-management/data-agent" },
      { name: "Data Integration", path: "/data-management/data-integration" },
      { name: "Event Management", path: "/data-management/event-management" },
      { name: "Data Quality", path: "/data-management/data-quality" },
      { name: "Data Studio", path: "/data-management/data-studio" },
      { name: "Data Model", path: "/data-management/data-model" },
      { name: "Data Enrichment", path: "/data-management/data-enrichment" },
    ],
  },

  {
    name: "Automation",
    path: "/automation",
    icon: <Workflow className="w-5 h-5" />,
    submenu: [
      { name: "Overview", path: "/automation/overview" },
      { name: "Workflows", path: "/automation/workflows" },
    ],
  },

  {
    name: "Reporting",
    path: "/reporting",
    icon: <PieChart className="w-5 h-5" />,
    submenu: [
      { name: "Dashboards", path: "/reporting/dashboards" },
      { name: "Reports", path: "/reporting/reports" },
      { name: "Goals", path: "/reporting/goals" },
    ],
  },

  {
    name: "Breeze",
    path: "/breeze",
    icon: <Sparkles className="w-5 h-5" />,
    submenu: [
      { name: "Breeze Studio", path: "/breeze/studio" },
      { name: "Knowledge Vaults", path: "/breeze/knowledge-vaults" },
      { name: "Breeze Marketplace", path: "/breeze/marketplace" },
    ],
  },

  {
    name: "Development",
    path: "/development",
    icon: <Code className="w-5 h-5" />,
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
interface SidebarProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

export function Sidebar({ expanded, setExpanded }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

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
      <div
        className={`fixed overflow-x-visible no-scrollbar left-0 top-0 h-screen bg-[#33475B] flex flex-col transition-all duration-300 ease-in-out z-50 ${
          expanded ? "w-64 px-3" : "w-20"
        }`}
      >
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
        <nav className="flex-1 p-2 overflow-y-auto no-scrollbar">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <li
                  key={item.path}
                  className="relative group flex w-full items-center"
                >
                  <button
                    onClick={(e) => {
                      if (!item.submenu) {
                        navigate(item.path);
                        setActiveMenu(null);
                        return;
                      }

                      if (!expanded) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const menuHeight = 400;
                        const viewportHeight = window.innerHeight;

                        let top = rect.top;

                        if (top + menuHeight > viewportHeight) {
                          top = viewportHeight - menuHeight - 20;
                        }

                        setMenuPosition(top);
                      }

                      setActiveMenu(
                        activeMenu?.name === item.name ? null : item,
                      );
                    }}
                    className={`flex items-center ${
                      expanded ? "justify-start" : "justify-center"
                    } gap-3 w-full p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-[#2b3e50] text-white"
                        : "text-gray-300 hover:bg-[#2b3e50]"
                    }`}
                  >
                    {item.icon}

                    {expanded && (
                      <span
                        className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out ${
                          expanded
                            ? "opacity-100 translate-x-0 ml-1"
                            : "opacity-0 -translate-x-2 w-0 overflow-hidden"
                        }`}
                      >
                        {item.name}
                      </span>
                    )}
                  </button>

                  {/* Tooltip */}
                  {!expanded && (
                    <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 translate-x-2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap z-[100]">
                      {item.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Expand Button */}
        <div className="p-4 border-t border-[#2b3e50] w-full flex">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-3 rounded-lg text-gray-300 hover:bg-[#2b3e50] transition-all duration-300"
          >
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>

      {/* Floating Panel */}
      {activeMenu && (
        <div
          ref={dropdownRef}
          style={{ top: menuPosition }}
          className={`fixed ${expanded ? "left-[calc(16rem+8px)]" : "left-[calc(5rem+8px)]"} w-72 bg-[#33475B] text-white shadow-xl p-6 rounded-lg z-50 max-h-[80vh] overflow-y-auto no-scrollbar transition-all duration-200 ease-out animate-dropdown`}
        >
          <h3 className="text-lg font-semibold mb-4">{activeMenu.name}</h3>

          <ul className="space-y-3">
            {activeMenu.submenu?.map((menu) => {
              const isBookmarked = bookmarks.some((b) => b.path === menu.path);

              return (
                <li
                  key={menu.name}
                  className="flex items-center justify-between group"
                >
                  <Link
                    to={menu.path}
                    onClick={() => setActiveMenu(null)}
                    className="block px-3 py-2 rounded hover:bg-slate-600 flex-1"
                  >
                    {menu.name}
                  </Link>

                  <button
                    type="button"
                    className="ml-2 p-1 rounded hover:bg-slate-600 transition"
                    onClick={(e) => {
                      e.stopPropagation();

                      if (isBookmarked) {
                        removeBookmark(menu.path);
                      } else {
                        addBookmark({
                          name: menu.name,
                          path: menu.path,
                        });
                      }
                    }}
                  >
                    <Bookmark
                      size={16}
                      fill={isBookmarked ? "currentColor" : "none"}
                      className={`${
                        isBookmarked
                          ? "text-yellow-400"
                          : "text-gray-300 opacity-0 group-hover:opacity-100 hover:text-yellow-400"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
