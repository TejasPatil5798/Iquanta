import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { Search, Plus, X, Settings, Info, ChevronLeft, ChevronRight, MoreHorizontal, Filter, Save, Play, Edit2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
 
export function TasksCRM() {
  const [activeTab, setActiveTab] = useState('all');
  const [openTabs, setOpenTabs] = useState([
    { id: 'all', label: 'All' },
    { id: 'due_today', label: 'Due today' },
    { id: 'overdue', label: 'Overdue' },
    { id: 'upcoming', label: 'Upcoming' },
  ]);
  const [isAddViewOpen, setIsAddViewOpen] = useState(false);
  const [showCalendarAlert, setShowCalendarAlert] = useState(true);
  const addViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (addViewRef.current && !addViewRef.current.contains(event.target as Node)) {
        setIsAddViewOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRemoveTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab.id !== id);
    setOpenTabs(newTabs);
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  const AddViewPopup = () => (
    <div className="absolute top-full mt-2 right-0 w-[700px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={addViewRef}>
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10 h-10 border-blue-500 ring-1 ring-blue-500 focus-visible:ring-blue-500" />
        </div>
      </div>
      
      <div className="flex bg-white h-[350px]">
        {/* Iquanta Provided */}
        <div className="flex-1 border-r border-gray-100 flex flex-col">
          <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-sm" />
              </div>
              <span className="font-semibold text-sm text-gray-700">Iquanta Provided (6)</span>
            </div>
            <button className="p-1 hover:bg-gray-200 rounded"><ChevronLeft className="w-3 h-3 text-gray-500" /></button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {["All", "Completed", "Due today", "Most engaged", "Overdue", "Upcoming"].map(item => (
              <div key={item} className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${item === 'Most engaged' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Admin Promoted */}
        <div className="flex-1 border-r border-gray-100 flex flex-col">
          <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <span className="font-semibold text-sm text-gray-700">Admin Promoted (4)</span>
            <button className="p-1 hover:bg-gray-200 rounded"><ChevronLeft className="w-3 h-3 text-gray-500" /></button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {["All", "Due today", "Overdue", "Upcoming"].map(item => (
              <div key={item} className="px-4 py-2.5 text-sm hover:bg-gray-50 cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Created by me */}
        <div className="w-12 border-r border-gray-100 flex flex-col items-center py-4 bg-gray-50/30">
          <div className="[writing-mode:vertical-lr] font-semibold text-sm text-gray-700 mb-4 whitespace-nowrap">
            Created by me (0)
          </div>
          <button className="p-1 hover:bg-gray-200 rounded mt-auto mb-2"><ChevronRight className="w-3 h-3 text-gray-400 rotate-90" /></button>
        </div>

        {/* Created by others */}
        <div className="w-12 flex flex-col items-center py-4 bg-gray-50/30">
          <div className="[writing-mode:vertical-lr] font-semibold text-sm text-gray-700 mb-4 whitespace-nowrap">
            Created by others (0)
          </div>
          <button className="p-1 hover:bg-gray-200 rounded mt-auto mb-2"><ChevronRight className="w-3 h-3 text-gray-400 rotate-90" /></button>
        </div>
      </div>

      <div className="p-3 border-t bg-white">
        <button className="text-teal-600 font-semibold text-sm hover:underline">
          Create new view
        </button>
      </div>
    </div>
  );
 
  const PaginationFooter = () => (
    <div className="flex items-center justify-center gap-6 py-4 border-t mt-auto text-sm text-gray-600">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 hover:text-gray-900 disabled:opacity-50" disabled>
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>
        <button className="flex items-center gap-1 hover:text-gray-900">
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Select defaultValue="25">
          <SelectTrigger className="w-[120px] h-8 border-none focus:ring-0">
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
        <Button variant="outline" size="sm" className="h-8 rounded-md border-gray-300 bg-white">
          Assigned to (1) <X className="w-3 h-3 ml-2 text-gray-400" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 text-gray-600">
          More <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 text-blue-600 font-medium">
          Clear all
        </Button>
        <div className="w-px h-4 bg-gray-300 mx-1" />
        <Button variant="outline" size="sm" className="h-8 rounded-md border-gray-300 bg-white">
          <Filter className="w-3 h-3 mr-2" />
          Advanced filters
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 border-gray-300 bg-white">
          <Save className="w-3 h-3 mr-2" />
          Save view
        </Button>
        <Button variant="outline" size="sm" className="h-8 border-gray-300 bg-white">
          Start 0 tasks <Settings className="w-3 h-3 ml-2" />
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
      <h3 className="text-xl font-semibold text-gray-900 mb-1">You're all caught up on tasks.</h3>
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
            placeholder="Search task title and not..."
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
          <a><Button variant="outline" className="h-9 border-gray-300">Manage queues</Button></a>
          <a><Button variant="outline" className="h-9 border-gray-300">Import</Button></a>
          <Button className="h-9 bg-black hover:bg-gray-800 text-white">Create task</Button>
        </div>
      </div>
 
      {/* Tabs and Views */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1">
          <div className="flex items-center justify-between border-b border-gray-300 bg-[#f5f8fa] overflow-visible shrink-0">
            <TabsList className="bg-[#f5f8fa] border-none p-0 h-12 gap-0 flex w-full justify-start overflow-visible">
              {openTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-none border-r border-gray-300 bg-[#f5f8fa] data-[state=active]:bg-white data-[state=active]:border-b-white px-6 py-0 h-full font-medium text-sm text-gray-600 data-[state=active]:text-gray-900 group relative transition-all flex items-center"
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <button
                      type="button"
                      onClick={(e) => handleRemoveTab(tab.id, e)}
                      className="ml-2 p-0.5 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                    </button>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex items-center gap-4 text-sm whitespace-nowrap pl-4 pr-6 bg-[#f5f8fa] h-12 border-b border-gray-300">
              <div className="relative">
                <button 
                  onClick={() => setIsAddViewOpen(!isAddViewOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                >
                  <Plus className="w-4 h-4" />
                  Add view ({openTabs.length}/5)
                </button>
                {isAddViewOpen && <AddViewPopup />}
              </div>
              <button className="text-teal-600 font-semibold hover:underline">
                All Views
              </button>
            </div>
          </div>
 
          <div className="flex-1 overflow-y-auto flex flex-col">
            {/* Calendar Sync Alert */}
            {showCalendarAlert && (
              <div className="mx-4 my-4 p-4 bg-blue-50 border border-blue-200 rounded-md flex items-start justify-between shrink-0">
                <div className="flex gap-3">
                  <div className="mt-0.5">
                    <Info className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Want to see your tasks on your Google or Outlook calendar?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Connect a new calendar to sync tasks created in IQuanta. <button className="text-teal-600 font-semibold hover:underline">Go to settings</button>
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowCalendarAlert(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
 
            <TaskFilters />
 
            {openTabs.map(tab => (
              <TabsContent key={tab.id} value={tab.id} className="m-0 border-none outline-none flex-1 flex flex-col">
                <TabContent />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}