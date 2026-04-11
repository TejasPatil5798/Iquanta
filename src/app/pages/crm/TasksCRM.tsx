import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { Search, Plus, X, Settings, Info, ChevronLeft, ChevronRight, MoreHorizontal, Filter, Save, Play, Edit2, Clock, Link2, List, Image as LucideImage } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Label } from '../../components/ui/label';
 
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
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const addViewRef = useRef<HTMLDivElement>(null);
  const taskTypeRef = useRef<HTMLDivElement>(null);
  const dueDateRef = useRef<HTMLDivElement>(null);
  const queueRef = useRef<HTMLDivElement>(null);
  const saveViewRef = useRef<HTMLDivElement>(null);
  const advancedFiltersRef = useRef<HTMLDivElement>(null);
  const createTaskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (addViewRef.current && !addViewRef.current.contains(event.target as Node)) {
        setIsAddViewOpen(false);
      }
      if (taskTypeRef.current && !taskTypeRef.current.contains(event.target as Node)) {
        if (activePopup === 'taskType') setActivePopup(null);
      }
      if (dueDateRef.current && !dueDateRef.current.contains(event.target as Node)) {
        if (activePopup === 'dueDate') setActivePopup(null);
      }
      if (queueRef.current && !queueRef.current.contains(event.target as Node)) {
        if (activePopup === 'queue') setActivePopup(null);
      }
      if (saveViewRef.current && !saveViewRef.current.contains(event.target as Node)) {
        if (activePopup === 'saveView') setActivePopup(null);
      }
      if (advancedFiltersRef.current && !advancedFiltersRef.current.contains(event.target as Node)) {
        if (activePopup === 'advancedFilters') setActivePopup(null);
      }
      if (createTaskRef.current && !createTaskRef.current.contains(event.target as Node)) {
        if (activePopup === 'createTask') setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopup]);

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

  const TaskTypePopup = () => (
    <div className="absolute top-full mt-2 left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={taskTypeRef}>
      <div className="p-2 max-h-[400px] overflow-y-auto">
        <label className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 mr-3" />
          <span className="text-sm text-gray-700">Select all</span>
        </label>
        {["Call", "Email", "LinkedIn", "Meeting", "Sales Navigator - Connection Request", "Sales Navigator - InMail", "To Do", "Unassigned"].map(type => (
          <label key={type} className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 mr-3" />
            <span className="text-sm text-gray-700">{type}</span>
          </label>
        ))}
      </div>
      <div className="p-2 border-t bg-gray-50 flex justify-between">
        <Button variant="ghost" size="sm" className="text-teal-600 font-semibold h-8 px-2 hover:bg-white" onClick={() => setActivePopup(null)}>Apply</Button>
        <Button variant="ghost" size="sm" className="text-gray-500 h-8 px-2 hover:bg-white" onClick={() => setActivePopup(null)}>Cancel</Button>
      </div>
    </div>
  );

  const DueDatePopup = () => (
    <div className="absolute top-full mt-2 left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={dueDateRef}>
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10 h-9 border-gray-300 focus-visible:ring-teal-500" />
        </div>
      </div>
      <div className="max-h-[400px] overflow-y-auto p-1">
        {[
          { label: "Today", sub: "All of today" },
          { label: "Yesterday", sub: "The previous 24 hour day" },
          { label: "Tomorrow", sub: "The next 24 hour day" },
          { label: "This week", sub: "The current calendar week" },
          { label: "This week so far", sub: "The current calendar week up to now" },
          { label: "Last week", sub: "The previous calendar week" },
          { label: "Next week", sub: "The next calendar week" },
          { label: "This month", sub: "The current calendar month" },
          { label: "Last month", sub: "The previous calendar month" },
          { label: "Next month", sub: "The next calendar month" },
          { label: "This quarter", sub: "The current calendar quarter" },
          { label: "Last quarter", sub: "The previous calendar quarter" },
          { label: "Next quarter", sub: "The next calendar quarter" },
          { label: "This year", sub: "The current calendar year" },
          { label: "Last year", sub: "The previous calendar year" },
          { label: "Next year", sub: "The next calendar year" },
          { label: "Custom range", sub: "" }
        ].map(item => (
          <div key={item.label} className="px-3 py-2 hover:bg-teal-50 cursor-pointer rounded-md group">
            <div className="text-sm font-medium text-gray-700 group-hover:text-teal-700">{item.label}</div>
            {item.sub && <div className="text-xs text-gray-400">{item.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );

  const QueuePopup = () => (
    <div className="absolute top-full mt-2 left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={queueRef}>
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10 h-9 border-gray-300 focus-visible:ring-teal-500" />
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm text-gray-500">No queues found</p>
      </div>
      <div className="p-2 border-t bg-gray-50">
        <Button variant="ghost" size="sm" className="w-full text-teal-600 font-semibold h-8 justify-start hover:bg-white">
          <Plus className="w-4 h-4 mr-2" /> Create queue
        </Button>
      </div>
    </div>
  );

  const SaveViewPopup = () => (
    <div className="absolute top-full mt-2 right-0 w-[240px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={saveViewRef}>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-2">Read-only view</h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-4">
          This set of filters was created by IQuanta or someone else. Select 'Save as new' to save any filter, sort, or column changes you've made.
        </p>
        <div className="flex gap-2 mb-4">
          <Button disabled className="flex-1 h-8 bg-gray-100 text-gray-400 border-none hover:bg-gray-100 text-xs font-semibold">Save</Button>
          <Button variant="outline" className="flex-1 h-8 border-gray-300 text-gray-700 text-xs font-semibold px-2" onClick={() => setActivePopup(null)}>Reset</Button>
        </div>
        <button className="text-teal-600 text-xs font-bold hover:underline" onClick={() => setActivePopup(null)}>
          Save as new
        </button>
      </div>
    </div>
  );
 
  const AdvancedFiltersDrawer = () => (
    <div className="absolute top-0 right-0 w-[400px] h-full bg-white border-l border-gray-200 shadow-2xl z-50 flex flex-col font-normal animate-in slide-in-from-right duration-300" ref={advancedFiltersRef}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        <button onClick={() => setActivePopup(null)} className="p-1 hover:bg-gray-100 rounded-lg">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50/10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-700">Filters</span>
          <Button variant="outline" size="sm" className="h-7 text-xs border-gray-300 bg-white">Edit filters</Button>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Task status</span> is none of <span className="font-semibold">Completed</span>
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-400 uppercase">and</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Assigned to</span> is any of <span className="font-semibold">Me</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-400 uppercase">and</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">Due date</span> is greater than or equal to <span className="font-semibold whitespace-nowrap">04/11/2026 (EDT)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const CreateTaskDrawer = () => (
    <div className="absolute top-0 right-0 w-[550px] h-full bg-white border-l border-gray-200 shadow-2xl z-50 flex flex-col font-normal animate-in slide-in-from-right duration-300" ref={createTaskRef}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold text-gray-900">Create task</h2>
        <button onClick={() => setActivePopup(null)} className="p-1 hover:bg-gray-100 rounded-lg">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="space-y-1.5">
          <Label className="text-sm font-bold text-gray-700">Task Title *</Label>
          <Input placeholder="" className="h-10 border-gray-300 focus-visible:ring-teal-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-bold text-gray-700">Task Type *</Label>
            <Select defaultValue="todo">
              <SelectTrigger className="h-10 border-gray-300 bg-gray-50/50">
                <SelectValue placeholder="To-do" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">To-do</SelectItem>
                <SelectItem value="call">Call</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-bold text-gray-700">Priority *</Label>
            <Select defaultValue="none">
              <SelectTrigger className="h-10 border-gray-300 bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <SelectValue placeholder="None" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <Label className="text-sm font-bold text-gray-700">Associate with records</Label>
            <Info className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <Select defaultValue="0">
            <SelectTrigger className="h-10 border-gray-300 bg-gray-50/50">
              <SelectValue placeholder="Associated with 0 records" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Associated with 0 records</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-sm font-bold text-gray-700">Assigned to</Label>
          <Select defaultValue="ketan">
            <SelectTrigger className="h-10 border-gray-300 bg-gray-50/50">
              <SelectValue placeholder="Ketan Bhole" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ketan">Ketan Bhole</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-sm font-bold text-gray-700">Queue</Label>
          <Select defaultValue="none">
            <SelectTrigger className="h-10 border-gray-300 bg-gray-50/50">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-sm font-bold text-gray-700">Due date</Label>
          <div className="flex gap-2">
            <Select defaultValue="3days">
              <SelectTrigger className="h-10 border-gray-300 bg-gray-50/50 flex-1">
                <SelectValue placeholder="In 3 business days (Wednesday)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3days">In 3 business days (Wednesday)</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 bg-gray-50/50">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm">8:00</span>
              <ChevronRight className="w-3 h-3 rotate-90 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2 opacity-50 cursor-not-allowed">
            <div className="w-4 h-4 rounded border border-gray-300 bg-gray-100" />
            <span className="text-sm text-gray-500">Set to repeat</span>
            <Info className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-sm font-bold text-gray-700">Reminder</Label>
          <Select defaultValue="none">
            <SelectTrigger className="h-10 border-gray-300 bg-gray-50/50">
              <SelectValue placeholder="No reminder" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No reminder</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-blue-600">You can customize your default settings. <button className="underline font-semibold font-serif">Go to settings</button> <span className="hover:underline">↗</span></p>
        </div>

        <div className="space-y-1.5">
          <Label className="text-sm font-bold text-gray-700">Notes</Label>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-3 py-2 border-b bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-black font-serif italic">B</button>
                <button className="text-gray-600 hover:text-black font-serif italic">I</button>
                <button className="text-gray-600 hover:text-black underline">U</button>
                <button className="text-gray-600 hover:text-black font-mono">T</button>
                <button className="text-gray-600 hover:text-black flex items-center gap-0.5 text-xs font-semibold">More <ChevronRight className="w-3 h-3 rotate-90" /></button>
              </div>
              <div className="flex items-center gap-4">
                <Link2 className="w-4 h-4 text-gray-600 hover:text-black" />
                <LucideImage className="w-4 h-4 text-gray-600 hover:text-black" />
                <List className="w-4 h-4 text-gray-600 hover:text-black" />
              </div>
            </div>
            <textarea className="w-full h-32 p-3 text-sm focus:outline-none resize-none" placeholder="" />
          </div>
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50 flex items-center justify-between">
        <div className="flex gap-2">
          <Button disabled className="h-9 bg-gray-100 text-gray-400 border-none font-bold hover:bg-gray-100">Create</Button>
          <Button variant="outline" className="h-9 border-gray-300 text-gray-700 font-bold bg-white">Create and add another</Button>
        </div>
        <Button variant="ghost" className="h-9 text-gray-600 font-bold hover:bg-white border border-gray-300 px-4" onClick={() => setActivePopup(null)}>Cancel</Button>
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
        <div className="relative">
          <Button 
            variant="outline" 
            size="sm" 
            className={`h-8 rounded-md border-gray-300 bg-white ${activePopup === 'assigned' ? 'ring-2 ring-teal-500 border-teal-500' : ''}`}
          >
            Assigned to (1) <ChevronRight className="w-3 h-3 ml-2 rotate-90 text-gray-400" />
          </Button>
        </div>

        <div className="relative">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 text-gray-600 hover:bg-gray-100 ${activePopup === 'taskType' ? 'bg-gray-100' : ''}`}
            onClick={() => setActivePopup(activePopup === 'taskType' ? null : 'taskType')}
          >
            Task type <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
          </Button>
          {activePopup === 'taskType' && <TaskTypePopup />}
        </div>

        <div className="relative">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 text-gray-600 hover:bg-gray-100 ${activePopup === 'dueDate' ? 'bg-gray-100' : ''}`}
            onClick={() => setActivePopup(activePopup === 'dueDate' ? null : 'dueDate')}
          >
            Due date <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
          </Button>
          {activePopup === 'dueDate' && <DueDatePopup />}
        </div>

        <div className="relative">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 text-gray-600 hover:bg-gray-100 ${activePopup === 'queue' ? 'bg-gray-100' : ''}`}
            onClick={() => setActivePopup(activePopup === 'queue' ? null : 'queue')}
          >
            Queue <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
          </Button>
          {activePopup === 'queue' && <QueuePopup />}
        </div>
        <div className="w-px h-4 bg-gray-300 mx-1" />
        <Button 
          variant="outline" 
          size="sm" 
          className={`h-[34px] rounded-md border-gray-300 bg-[#f5f8fa] text-gray-700 font-medium hover:bg-gray-100 flex items-center gap-2 px-4 shadow-sm border ${activePopup === 'advancedFilters' ? 'ring-2 ring-teal-500 border-teal-500' : ''}`}
          onClick={() => setActivePopup(activePopup === 'advancedFilters' ? null : 'advancedFilters')}
        >
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-[2px]">
              <div className="w-3 h-[2px] bg-gray-600" />
              <div className="w-3 h-[2px] bg-gray-600" />
              <div className="w-3 h-[2px] bg-gray-600" />
            </div>
            Advanced filters
          </div>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Button 
            variant="outline" 
            size="sm" 
            className={`h-9 border-gray-300 bg-white text-gray-700 font-medium px-4 hover:bg-gray-50 flex items-center gap-2 ${activePopup === 'saveView' ? 'ring-2 ring-teal-500 border-teal-500' : ''}`}
            onClick={() => setActivePopup(activePopup === 'saveView' ? null : 'saveView')}
          >
            <Save className="w-4 h-4" />
            Save view
          </Button>
          {activePopup === 'saveView' && <SaveViewPopup />}
        </div>
        <Button variant="outline" size="sm" className="h-10 border-gray-300 bg-white text-gray-900 font-bold px-4 hover:bg-gray-50 flex items-center gap-2 rounded-lg">
          Start 0 tasks <div className="w-4 h-4 flex items-center justify-center border border-gray-900 rounded-sm ml-1"><div className="w-1.5 h-2 bg-gray-900 rounded-t-full" /></div>
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
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      {/* Page Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-sm text-gray-500">0 records</p>
        </div>
        <div className="flex items-center gap-2">
          <a><Button variant="outline" className="h-9 border-gray-300">Manage queues</Button></a>
          <a><Button variant="outline" className="h-9 border-gray-300">Import</Button></a>
          <Button 
            className="h-9 bg-black hover:bg-gray-800 text-white"
            onClick={() => setActivePopup(activePopup === 'createTask' ? null : 'createTask')}
          >
            Create task
          </Button>
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
      {activePopup === 'advancedFilters' && <AdvancedFiltersDrawer />}
      {activePopup === 'createTask' && <CreateTaskDrawer />}
    </div>
  );
}