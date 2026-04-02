import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import { GlobalSearch } from "../components/GlobalSearch";
import { useState } from "react";

export function MainLayout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <GlobalSearch />

      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <Sidebar expanded={expanded} setExpanded={setExpanded} />

        {/* Main Content */}
        <div
          className={`min-w-0 flex-1 overflow-x-hidden transition-all duration-300 ${
            expanded ? "ml-64" : "ml-20"
          }`}
        >
          <TopNavbar />

          <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}