import {
  Search,
  ChevronDown,
  Plus,
  Settings,
  Filter,
  ArrowUpDown,
  Copy,
  MoreVertical,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const integrations = [
  {
    name: "Zoom",
    installs: "98K installs",
    desc: "Use Zoom with HubSpot meetings, workflows, contact records and more.",
  },
  {
    name: "Eventbrite",
    installs: "17K installs",
    desc: "Use Eventbrite data for email lists, workflows, and more in HubSpot.",
  },
  {
    name: "GoToWebinar",
    installs: "6K installs",
    desc: "Seamlessly sync webinar data between HubSpot and GoToWebinar.",
  },
];

export function MktEvents() {
  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] overflow-hidden">
      {/* Top Section */}
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">

          {/* Left Header */}
          <div className="flex items-center gap-3 min-w-0 flex-wrap">
            <Button variant="outline" className="bg-white">
              <CalendarDays className="w-4 h-4 mr-2" />
              Marketing events
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>

            <div className="bg-white border rounded-md px-5 py-3 flex items-center gap-3 min-w-0">
              <span className="font-semibold whitespace-nowrap">
                All marketing events
              </span>

              <span className="bg-black text-white text-xs rounded-full px-2 py-0.5">
                0
              </span>

              <MoreVertical className="w-4 h-4" />
            </div>

            <Button variant="outline" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Button */}
          <Button className="bg-black text-white hover:bg-black w-fit">
            Create marketing event
          </Button>
        </div>
      </div>

      {/* Main Card */}
      <div className="mx-4 md:mx-6 lg:mx-8 bg-white rounded-xl border p-4 md:p-6">

        {/* Toolbar */}
        <div className="flex flex-col gap-4">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">

            {/* Search */}
            <div className="relative w-full xl:max-w-md">
              <Input placeholder="Search" className="pl-10 rounded-full" />
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">Table view</Button>
              <Button variant="outline" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="outline">Edit columns</Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                Sort
              </Button>
              <Button variant="outline">Export</Button>
              <Button variant="outline" size="icon">
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="outline" disabled>
                Save
              </Button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              More
            </button>

            <button>Advanced filters</button>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="mt-8 border rounded-xl p-4 md:p-6 overflow-hidden">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-semibold leading-tight">
              Sync your marketing events with
            </h2>

            <button className="text-teal-700 font-medium">
              See more
            </button>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-6 min-w-max">

              {integrations.map((item, i) => (
                <div
                  key={i}
                  className="w-[320px] min-w-[320px] border rounded-xl p-6 bg-white"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-md mb-6"></div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 mb-4">
                    By HubSpot &nbsp; {item.installs}
                  </p>

                  <p className="text-gray-700 leading-7">
                    {item.desc}
                  </p>

                  <div className="mt-6">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      App
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-500">
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>

            <button className="flex items-center gap-2 text-gray-500">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button className="font-medium">
            25 per page
          </button>
        </div>
      </div>
    </div>
  );
}