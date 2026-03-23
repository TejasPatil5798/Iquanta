import { useState } from "react";
import {
  Plus,
  Settings,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Search,
  ChevronLeft,
  ChevronRight,
  Save,
  Grid3x3,
  ChevronDown,
  Users,
  X,
  Ellipsis,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
 
export function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
 
  const contacts = [
    {
      id: 1,
      name: "Brian Halligan",
      firstName: "Brian",
      lastName: "Halligan",
      email: "bh@hubspot.com",
      phone: "--",
      jobTitle: "Executive Chairperson",
      sessions: 0,
      firstSite: "--",
      lastPage: "--",
      avgPageviews: 0,
    },
    {
      id: 2,
      name: "Maria Johnson",
      firstName: "Maria",
      lastName: "Johnson",
      email: "emailmaria@hubspot.com",
      phone: "--",
      jobTitle: "Salesperson",
      sessions: 0,
      firstSite: "--",
      lastPage: "--",
      avgPageviews: 0,
    },
  ];
 
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Top bar: Contacts selector, all contacts badge, add button */}
      <div className="border-b px-4 sm:px-6 py-2 flex flex-wrap items-center gap-2">
        <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8">
          <Users className="w-3 h-3" />
          <span className="text-xs font-medium">Contacts</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
 
        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-900 text-xs">All contacts</span>
          <span className="inline-flex items-center justify-center bg-gray-900 text-white rounded-full px-1 h-4 w-4 text-xs font-bold">
            {contacts.length}
          </span>
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <Ellipsis className="w-3 h-3" />
          </Button>
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <X className="w-3 h-3" />
          </Button>
        </div>
 
        <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 text-xs">
          My contacts
        </Button>
 
        <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
          <Plus className="w-3 h-3" />
        </Button>
 
        <div className="flex-1"></div>
 
        <div className="flex items-center gap-1">
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <Ellipsis className="w-3 h-3" />
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white gap-1 h-8 px-3">
            <span className="text-xs font-semibold">Add contacts</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>
 
      {/* Search and toolbar row */}
      <div className="border-b px-4 sm:px-6 py-2">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300 h-8 rounded-full text-xs"
            />
          </div>
 
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
 
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 text-xs">
            Edit columns
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
            <Save className="w-3 h-3" />
          </Button>
 
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 px-2 text-xs">
            Save
          </Button>
        </div>
 
        {/* Filter chips row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-700">
          <button className="flex items-center gap-1 hover:text-gray-900">
            Contact owner <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-gray-900">
            Create date <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-gray-900">
            Last activity date <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-gray-900">
            Lead status <ChevronDown className="w-3 h-3" />
          </button>
          <button className="hover:text-gray-900">+ More</button>
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
            <Settings className="w-3 h-3" /> Advanced filters
          </button>
        </div>
      </div>
 
      {/* Table container - reduced margins and padding for better horizontal space */}
      <div className="my-4 border border-gray-300 rounded-lg overflow-x-auto bg-white">
        <div className="min-w-[1000px]">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Name</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>First name</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Last name</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Email</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Phone number</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Job title</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Number of sessions</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>First referring site</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Last page seen</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-1">
                    <span>Average pageviews</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 border-t border-gray-100">
                  <td className="px-2 py-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.name}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.firstName}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.lastName}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.email}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.phone}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.jobTitle}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.sessions}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.firstSite}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.lastPage}</td>
                  <td className="px-2 py-2 text-sm text-gray-900">{contact.avgPageviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
 
      {/* Pagination */}
      <div className="border-t px-4 sm:px-6 py-4 flex items-center justify-center gap-4">
        <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Prev
        </Button>
        <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700">
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