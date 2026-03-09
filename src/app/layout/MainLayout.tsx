import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { GlobalSearch } from '../components/GlobalSearch';

export function MainLayout() {
  return (
    <>
      {/* Command Palette */}
      <GlobalSearch />

      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-20 flex-1 ">
          {/* Top Navbar */}
          <TopNavbar />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}