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
  Building2,
  X,
  Ellipsis,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
 
  const companies = [
    {
      id: 1,
      name: "HubSpot",
      owner: "No owner",
      createDate: "Yesterday at 12:05 PM GMT+5:30",
      phone: "--",
      lastActivity: "Yesterday at 12:05 PM GMT+5:30",
      city: "--",
      country: "--",
      industry: "--",
    },
  ];
 
  return (
    <div className="w-full h-full bg-white overflow-x-hidden">
      {/* Top bar: Companies selector, all companies badge, add button */}
      <div className="border-b px-4 sm:px-6 py-2 flex flex-wrap items-center gap-2">
        <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8">
          <Building2 className="w-3 h-3" />
          <span className="text-xs font-medium">Companies</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
 
        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-900 text-xs">All companies</span>
          <span className="inline-flex items-center justify-center bg-gray-900 text-white rounded-full px-1 h-4 w-4 text-xs font-bold">
            {companies.length}
          </span>
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <Ellipsis className="w-3 h-3" />
          </Button>
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <X className="w-3 h-3" />
          </Button>
        </div>
 
        <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 text-xs">
          My companies
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
            <span className="text-xs font-semibold">Add companies</span>
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
            Company owner <ChevronDown className="w-3 h-3" />
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
 
      {/* Table container with horizontal scroll */}
      <div className="mx-4 sm:mx-6 my-4 border border-gray-300 rounded-lg overflow-x-auto bg-white">
        <div className="min-w-[800px]">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>Company name</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>Company owner</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>Create Date (GMT+5:30)</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>Phone Number</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>Last Activity Date (GMT+5:30)</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>City</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>Country/Region</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3 h-3 cursor-pointer" />
                      <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-left text-xs font-medium text-gray-500">
                  <div className="flex items-center justify-between gap-2">
                    <span>Industry</span>
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
              {companies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-50 border-t border-gray-100">
                  <td className="p-3">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="p-3 text-sm text-gray-900">{company.name}</td>
                  <td className="p-3 text-sm text-gray-900">{company.owner}</td>
                  <td className="p-3 text-sm text-gray-900">{company.createDate}</td>
                  <td className="p-3 text-sm text-gray-900">{company.phone}</td>
                  <td className="p-3 text-sm text-gray-900">{company.lastActivity}</td>
                  <td className="p-3 text-sm text-gray-900">{company.city}</td>
                  <td className="p-3 text-sm text-gray-900">{company.country}</td>
                  <td className="p-3 text-sm text-gray-900">{company.industry}</td>
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