import { Button } from "../../components/ui/button";

import { Input } from "../../components/ui/input";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";

import {
  Search,
  Plus,
  X,
  Settings,
  Info,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Filter,
  Save,
  Play,
  Edit2,
  Lock,
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export function TasksCRM() {
  const [activeTab, setActiveTab] = useState("all");

  const navigate = useNavigate();

  const PaginationFooter = () => (
    <div className="flex items-center justify-center gap-4 py-4 border-t mt-auto text-sm text-gray-600">
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-1 hover:text-gray-900 disabled:opacity-50"
          disabled
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>

        <button className="flex items-center gap-1 hover:text-gray-900">
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <Select defaultValue="25">
          <SelectTrigger className="w-auto h-8 border-none focus:ring-0 gap-1 p-0 font-semibold text-gray-900">
            <SelectValue placeholder="25 per page" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="25">25 per page</SelectItem>

            <SelectItem value="50">50 per page</SelectItem>

            <SelectItem value="100">100 per page</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const TaskFilters = () => (
    <div className="flex items-center justify-between py-3 px-4 bg-gray-50/50 border-b">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8 rounded-md border-gray-300 bg-white"
        >
          Assigned to (1) <X className="w-3 h-3 ml-2 text-gray-400" />
        </Button>

        <Button variant="ghost" size="sm" className="h-8 text-gray-600">
          Task type <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
        </Button>

        <Button variant="ghost" size="sm" className="h-8 text-gray-600">
          Due date <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
        </Button>

        <Button variant="ghost" size="sm" className="h-8 text-gray-600">
          Queue <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-teal-600 font-medium"
        >
          Clear all
        </Button>

        <div className="w-px h-4 bg-gray-300 mx-1" />

        <Button
          variant="outline"
          size="sm"
          className="h-8 rounded-md border-gray-300 bg-white"
        >
          <Filter className="w-3 h-3 mr-2" />
          Advanced filters
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-gray-300 bg-white"
        >
          <Save className="w-3 h-3 mr-2 text-gray-400" />
          Save view
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="h-8 border-gray-300 bg-white"
        >
          Start 0 tasks <Lock className="w-3 h-3 ml-2 text-gray-400" />
        </Button>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="relative mb-6">
        {/* Simple representation of the illustration in screenshot */}

        <div className="w-64 h-40 bg-gray-100 rounded-lg flex items-end justify-center overflow-hidden">
          <div className="w-32 h-32 bg-blue-50 rounded-full -mb-16 flex items-start justify-center pt-4">
            <div className="w-16 h-1 bg-blue-200 rounded-full" />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        You're all caught up on tasks.
      </h3>

      <p className="text-gray-600">Nice work.</p>
    </div>
  );

  const TabContent = () => (
    <div className="flex flex-col flex-1">
      {/* Search Bar */}

      <div className="flex items-center justify-between p-4 border-b">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

          <Input
            placeholder="Search task title and note"
            className="pl-10 h-10 border-gray-300 rounded-lg focus-visible:ring-blue-500"
          />
        </div>

        <Button variant="outline" size="sm" className="h-9 border-gray-300">
          Edit columns
        </Button>
      </div>

      <EmptyState />

      <PaginationFooter />
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Page Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>

          <p className="text-sm text-gray-500">0 records</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-9 border-gray-300"
            onClick={() => navigate("/crm/tasks/queues")}
          >
            Manage queues
          </Button>

          <Button
            variant="outline"
            className="h-9 border-gray-300"
            onClick={() => navigate("/crm/tasks/import")}
          >
            Import
          </Button>

          <Button className="h-9 bg-black hover:bg-gray-800 text-white">
            Create task
          </Button>
        </div>
      </div>

      {/* Tabs and Views */}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col flex-1"
        >
          <div className="flex items-center justify-between px-6 border-b overflow-x-auto shrink-0">
            <TabsList className="bg-transparent border border-gray-300 rounded-md p-0 h-auto gap-0 my-2 overflow-hidden">
              <TabsTrigger
                value="all"
                className="rounded-none border-r border-gray-300 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none px-8 py-2.5 h-full font-medium"
              >
                All
              </TabsTrigger>

              <TabsTrigger
                value="due_today"
                className="rounded-none border-r border-gray-300 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none px-8 py-2.5 h-full font-medium"
              >
                Due today
              </TabsTrigger>

              <TabsTrigger
                value="overdue"
                className="rounded-none border-r border-gray-300 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none px-8 py-2.5 h-full font-medium"
              >
                Overdue
              </TabsTrigger>

              <TabsTrigger
                value="upcoming"
                className="rounded-none data-[state=active]:bg-gray-100 data-[state=active]:shadow-none px-8 py-2.5 h-full font-medium"
              >
                Upcoming
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-4 text-sm whitespace-nowrap pl-4">
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <Plus className="w-4 h-4" />
                Add view (4/5)
              </button>

              <button className="text-teal-600 font-semibold hover:underline">
                All Views
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col">
            {/* Calendar Sync Alert */}

            <div className="mx-4 my-4 p-4 bg-white border border-blue-400 rounded-md flex items-start justify-between shrink-0 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />

              <div className="flex gap-3">
                <div className="mt-0.5">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <Info className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Want to see your tasks on your Google or Outlook calendar?{" "}
                    <button className="text-blue-600 font-semibold hover:underline ml-2">
                      Connect a new calendar to sync tasks created in IQuanta.
                      Go to settings
                    </button>
                  </h4>
                </div>
              </div>

              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <TaskFilters />

            <TabsContent
              value="all"
              className="m-0 border-none outline-none flex-1 flex flex-col"
            >
              <TabContent />
            </TabsContent>

            <TabsContent
              value="due_today"
              className="m-0 border-none outline-none flex-1 flex flex-col"
            >
              <TabContent />
            </TabsContent>

            <TabsContent
              value="overdue"
              className="m-0 border-none outline-none flex-1 flex flex-col"
            >
              <TabContent />
            </TabsContent>

            <TabsContent
              value="upcoming"
              className="m-0 border-none outline-none flex-1 flex flex-col"
            >
              <TabContent />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
