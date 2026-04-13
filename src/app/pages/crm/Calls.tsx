import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  ChevronDown,
  Search,
  Settings,
  MoreHorizontal,
  Download,
  Upload,
  Filter,
  ArrowDownUp,
  Save,
  Lock,
  Plus,
  List,
  SearchX,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Zap,
  Edit2,
  Hash,
  Type,
  Code,
  ExternalLink,
  GripVertical,
  Trash2,
  X,
} from "lucide-react";
import { Input } from "../../components/ui/input";

const AVAILABLE_COLUMNS = [
  "Call \u2192 Calls",
  "Call \u2192 Carts",
  "Call \u2192 Companies",
  "Call \u2192 Contacts",
  "Call \u2192 Conversation",
  "Call \u2192 Deals",
  "Call \u2192 Marketing events",
  "Call \u2192 Meetings",
  "Call \u2192 Orders",
];

const DEFAULT_COLUMNS = [
  "Call Title",
  "Activity date",
  "Activity assigned to",
  "Call notes",
  "Call \u2192 Contacts",
  "Call \u2192 Companies",
  "Call \u2192 Deals",
];

export function Calls() {
  const [activeTab, setActiveTab] = useState<"recorded" | "all">("recorded");
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [showEditQuickFilters, setShowEditQuickFilters] = useState(false);
  const [showEditColumnsModal, setShowEditColumnsModal] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(DEFAULT_COLUMNS);
  const [showFiltersBar, setShowFiltersBar] = useState(true);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showTableSettingsPanel, setShowTableSettingsPanel] = useState(false);
  const [rowHeight, setRowHeight] = useState<"compact" | "default" | "comfortable">("default");
  const [pageSize, setPageSize] = useState("25");
  const [zebraStriping, setZebraStriping] = useState(false);
  const assignedToRef = useRef<HTMLDivElement>(null);
  const activityDateRef = useRef<HTMLDivElement>(null);
  const callDurationRef = useRef<HTMLDivElement>(null);
  const moreFiltersRef = useRef<HTMLDivElement>(null);
  const entitySelectorRef = useRef<HTMLDivElement>(null);
  const sortPopupRef = useRef<HTMLDivElement>(null);
  const topMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activePopup === null) {
      setShowEditQuickFilters(false);
    }

    function handleClickOutside(event: MouseEvent) {
      if (assignedToRef.current && !assignedToRef.current.contains(event.target as Node)) {
        if (activePopup === 'assignedTo') setActivePopup(null);
      }
      if (activityDateRef.current && !activityDateRef.current.contains(event.target as Node)) {
        if (activePopup === 'activityDate') setActivePopup(null);
      }
      if (callDurationRef.current && !callDurationRef.current.contains(event.target as Node)) {
        if (activePopup === 'callDuration') setActivePopup(null);
      }
      if (moreFiltersRef.current && !moreFiltersRef.current.contains(event.target as Node)) {
        if (activePopup === 'moreFilters') setActivePopup(null);
      }
      if (entitySelectorRef.current && !entitySelectorRef.current.contains(event.target as Node)) {
        if (activePopup === 'entitySelector') setActivePopup(null);
      }
      if (sortPopupRef.current && !sortPopupRef.current.contains(event.target as Node)) {
        if (activePopup === 'sort') setActivePopup(null);
      }
      if (topMoreRef.current && !topMoreRef.current.contains(event.target as Node)) {
        if (activePopup === 'topMore') setActivePopup(null);
      }
      if (assignedToRef.current && !assignedToRef.current.contains(event.target as Node)) {
        if (activePopup === 'tableSettingsMenu') setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopup]);

  const mockData = [
    {
      title: "Call with Maria Johnson (S...",

      date: "Mar 10, 2026 6:15 PM GMT+5:...",

      direction: "--",

      outcome: "--",
    },

    {
      title: "Call with Brian Halligan (S...",

      date: "Mar 10, 2026 6:15 PM GMT+5:...",

      direction: "--",

      outcome: "--",
    },
  ];

  const AssignedToPopup = () => (
    <div className="absolute top-full mt-2 left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={assignedToRef}>
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10 h-10 border-blue-500 ring-1 ring-blue-500 focus-visible:ring-blue-500" />
        </div>
      </div>
      <div className="p-2 max-h-[400px] overflow-y-auto">
        <label className="flex items-start px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md group">
          <input type="checkbox" className="w-4 h-4 mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500 mr-3" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-gray-400 fill-gray-400" />
              <span className="text-sm font-medium text-gray-700">Me</span>
            </div>
            <span className="text-xs text-gray-400">This value is dynamically applied to the current user</span>
          </div>
        </label>
        
        <label className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 mr-3" />
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-gray-400 fill-gray-400" />
            <span className="text-sm text-gray-700">All deactivated and removed owners</span>
          </div>
        </label>

        <label className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 mr-3" />
          <span className="text-sm text-gray-700">User Name</span>
        </label>

        <label className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 mr-3" />
          <span className="text-sm text-gray-700">Unassigned</span>
        </label>
      </div>
    </div>
  );

  const ActivityDatePopup = () => (
    <div className="absolute top-full mt-2 left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={activityDateRef}>
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10 h-9 border-blue-500 ring-1 ring-blue-500 focus-visible:ring-blue-500" />
        </div>
      </div>
      <div className="max-h-[350px] overflow-y-auto p-1">
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

  const CallDurationPopup = () => (
    <div className="absolute top-full mt-2 left-0 w-[240px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-4 text-left font-normal" ref={callDurationRef}>
      <div className="space-y-3">
        <Select defaultValue="between">
          <SelectTrigger className="h-9 border-gray-300">
            <SelectValue placeholder="is between" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="between">is between</SelectItem>
            <SelectItem value="greater">is greater than</SelectItem>
            <SelectItem value="less">is less than</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Input defaultValue="0" className="h-9 border-gray-300" />
          <span className="text-sm text-gray-500">and</span>
          <Input defaultValue="0" className="h-9 border-gray-300" />
        </div>

        <Select defaultValue="years">
          <SelectTrigger className="h-9 border-gray-300">
            <SelectValue placeholder="years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="seconds">seconds</SelectItem>
            <SelectItem value="minutes">minutes</SelectItem>
            <SelectItem value="hours">hours</SelectItem>
            <SelectItem value="days">days</SelectItem>
            <SelectItem value="weeks">weeks</SelectItem>
            <SelectItem value="months">months</SelectItem>
            <SelectItem value="years">years</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="h-8 border-gray-300 text-teal-600 font-semibold" onClick={() => setActivePopup(null)}>Apply</Button>
          <Button variant="outline" size="sm" className="h-8 border-gray-300 text-gray-600 font-semibold" onClick={() => setActivePopup(null)}>Clear</Button>
        </div>
      </div>
    </div>
  );

  const EntitySelectorPopup = () => (
    <div className="absolute top-full mt-2 left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal" ref={entitySelectorRef}>
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10 h-10 border-blue-500 ring-1 ring-blue-500 focus-visible:ring-blue-500 focus-visible:ring-offset-0" />
        </div>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {[
          "Calls", "Carts", "Communications", "Companies", "Contacts", "Credit memos",
          "Custom object 1", "Deals", "Emails", "Invoices", "Marketing events", 
          "Notes", "Orders", "Payments", "Products", "Quotes"
        ].map((item) => (
          <div 
            key={item} 
            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${item === "Calls" ? "bg-gray-50 font-semibold text-gray-900" : "text-gray-700"}`}
            onClick={() => setActivePopup(null)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  const SortPopup = () => (
    <div className="absolute top-full mt-2 right-0 w-[420px] bg-white border border-gray-200 rounded-lg shadow-xl z-[100] p-5 text-left font-normal" ref={sortPopupRef}>
      <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-tight">Sort by</h4>
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Select defaultValue="createDate">
            <SelectTrigger className="h-10 border-gray-300 text-sm">
              <SelectValue placeholder="Create date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createDate">Create date</SelectItem>
              <SelectItem value="activityDate">Activity date</SelectItem>
              <SelectItem value="callTitle">Call title</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex border border-gray-300 rounded-md overflow-hidden h-10 w-[180px]">
          <button className="flex-1 text-[11px] font-bold bg-gray-100 text-gray-900 border-r border-gray-300 hover:bg-gray-200 transition-colors uppercase tracking-tight">Most recent</button>
          <button className="flex-1 text-[11px] font-bold bg-white text-gray-600 hover:bg-gray-50 transition-colors uppercase tracking-tight">Oldest</button>
        </div>
      </div>
      <button className="text-teal-600 text-xs font-bold hover:underline mt-4">
        + Add another sort
      </button>
    </div>
  );

  const TopMorePopup = () => (
    <div className="absolute top-full mt-2 right-0 w-52 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1 text-left font-normal" ref={topMoreRef}>
      <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setActivePopup(null)}>
        Restore records
        <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
      </button>
      <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left" onClick={() => setActivePopup(null)}>
        Restore CRM changes
      </button>
    </div>
  );

  const ExportModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[110] p-4 font-normal text-left">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[650px] flex flex-col max-h-[90vh]">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Export view</h2>
          <button onClick={() => setShowExportModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-bold text-gray-900">Send to</label>
              <button className="text-xs text-teal-600 font-bold hover:underline">Not getting our emails?</button>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              The exported file will be posted in your <span className="text-teal-600 hover:underline cursor-pointer">Notifications Center</span>. View this and past exports in <span className="text-teal-600 hover:underline cursor-pointer inline-flex items-center gap-1">Export Audit <ExternalLink className="w-3 h-3" /></span>.
            </p>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-900 mb-1 block">Prepare your export file</label>
            <p className="text-xs text-gray-500 mb-4">Exporting: <strong>Recorded calls</strong> 0 rows in 1 file</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block tracking-wider">Export name</label>
                <Input defaultValue="Recorded calls" className="h-10 border-gray-300" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1 block tracking-wider">File format</label>
                  <Select defaultValue="csv">
                    <SelectTrigger className="h-10 border-gray-300">
                      <SelectValue placeholder="CSV" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="xlsx">XLSX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label className="text-xs font-bold text-gray-500 uppercase block tracking-wider">Language of column headers</label>
                    <div className="w-3.5 h-3.5 border border-gray-400 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-bold">i</div>
                  </div>
                  <Select defaultValue="english">
                    <SelectTrigger className="h-10 border-gray-300">
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900 block">Data included in export</label>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Properties in your view</li>
              <li>Associations in your view</li>
              <ul className="pl-5 space-y-1 list-disc text-gray-500">
                <li>Up to 1,000 associated records in each association column of each row</li>
                <li><strong>Associated record name</strong> and <strong>associated record ID</strong></li>
              </ul>
            </ul>
          </div>

          <button className="flex items-center gap-2 text-sm font-bold text-gray-900">
            <ChevronRight className="w-4 h-4" /> Customize
          </button>
        </div>
        
        <div className="p-4 border-t flex items-center gap-3 bg-white rounded-b-xl">
          <Button className="bg-gray-950 text-white hover:bg-gray-800 h-10 px-6 font-bold" onClick={() => setShowExportModal(false)}>Export</Button>
          <Button variant="outline" className="h-10 px-6 font-bold border-gray-300" onClick={() => setShowExportModal(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );

  const EditQuickFiltersView = () => (
    <div className="w-[450px] bg-white text-left font-normal flex flex-col">
      <div className="p-3 border-b flex items-center justify-between text-gray-500">
        <button className="text-xs flex items-center gap-1 hover:text-gray-700 font-medium" onClick={() => setShowEditQuickFilters(false)}>
          <ChevronLeft className="w-3.5 h-3.5" /> Back
        </button>
        <button className="text-xs flex items-center gap-1 hover:text-gray-700 font-medium">
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>
      
      <div className="p-6">
        <h4 className="text-sm font-bold text-gray-900 mb-4">Edit quick filters</h4>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            "Transcript A...",
            "Activity ass...",
            "Activity date",
            "Call duration"
          ].map((label, idx) => (
            <div key={idx} className="flex items-center justify-between px-3 py-2 border border-gray-200 rounded-md bg-white hover:border-gray-300 group cursor-default">
              <div className="flex items-center gap-2">
                <GripVertical className="w-3.5 h-3.5 text-gray-400 cursor-grab" />
                <span className="text-sm text-gray-700">{label}</span>
              </div>
              <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-3.5 h-3.5 border border-gray-400 rounded-sm flex items-center justify-center text-[10px] text-gray-400 font-bold">i</div>
                <Trash2 className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          ))}
          <button className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-500 text-sm">
            <Plus className="w-3.5 h-3.5" /> Add quick filter
          </button>
        </div>

        <div className="flex flex-col gap-4 border-t pt-4">
          <span className="text-xs text-gray-400 italic">4 of 10 filters added</span>
          <button className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium text-sm">
            <Trash2 className="w-3.5 h-3.5 text-gray-400" /> Delete all quick filters
          </button>
        </div>
      </div>
    </div>
  );

  const MoreFiltersPopup = () => (
    <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden text-left font-normal flex flex-col" ref={moreFiltersRef}>
      {showEditQuickFilters ? (
        <EditQuickFiltersView />
      ) : (
        <div className="w-[300px] flex flex-col">
          <div className="p-3 border-b flex items-center justify-center">
            <button className="text-teal-600 font-semibold text-xs flex items-center gap-1.5 hover:underline" onClick={() => setShowEditQuickFilters(true)}>
              <Edit2 className="w-3.5 h-3.5" /> Edit quick filters
            </button>
          </div>
          <div className="p-4 bg-gray-50/50 border-b">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Add a quick filter</h4>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search" className="pl-10 h-10 border-blue-500 ring-1 ring-blue-500 focus-visible:ring-blue-500 bg-white" />
            </div>
          </div>
          <div className="max-h-[350px] overflow-y-auto">
            <div className="p-2">
              <h5 className="px-3 py-1 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Call</h5>
              {[
                { label: "Call direction", icon: <div className="w-4 h-4 border border-gray-300 rounded-sm" /> },
                { label: "Call notes", icon: <Code className="w-4 h-4 text-gray-400" />, info: true },
                { label: "Call outcome", icon: <div className="w-4 h-4 border border-gray-300 rounded-sm" /> },
                { label: "Call source", icon: <div className="w-4 h-4 border border-gray-300 rounded-sm" /> },
                { label: "Call status", icon: <div className="w-4 h-4 border border-gray-300 rounded-sm" /> },
                { label: "Call summary", icon: <Type className="w-4 h-4 text-gray-400" /> },
                { label: "Connected count", icon: <Hash className="w-4 h-4 text-gray-400" /> },
                { label: "From number", icon: <Type className="w-4 h-4 text-gray-400" /> },
                { label: "From Number Name", icon: <Type className="w-4 h-4 text-gray-400" />, info: true },
                { label: "Recording URL", icon: <Type className="w-4 h-4 text-gray-400" /> },
                { label: "To Number", icon: <Type className="w-4 h-4 text-gray-400" /> },
                { label: "To Number Name", icon: <Type className="w-4 h-4 text-gray-400" /> },
                { label: "Tracked terms", icon: <div className="w-4 h-4 border border-gray-300 rounded-sm" /> },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${item.label === 'Call notes' || item.label === 'From Number Name' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </div>
                  {item.info && <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-400">i</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const TableSettingsMenu = () => (
    <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1 text-left font-normal" ref={assignedToRef}>
      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setShowTableSettingsPanel(true); setActivePopup(null); }}>
        <Settings className="w-4 h-4 text-gray-400" /> Table settings
      </button>
      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setShowEditColumnsModal(true); setActivePopup(null); }}>
        Edit columns
      </button>
      <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setActivePopup(null)}>
        Filter (1)
      </button>
      <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setActivePopup(null)}>
        Filter actions <ChevronDown className="w-3.5 h-3.5" />
      </button>
      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActivePopup('sort'); }}>
        <ArrowDownUp className="w-4 h-4 text-gray-400" /> Sort
      </button>
      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setShowExportModal(true); setActivePopup(null); }}>
        <Download className="w-4 h-4 text-gray-400" /> Export
      </button>
    </div>
  );

  const TableSettingsPanel = () => (
    <div className="fixed inset-y-0 right-0 w-[400px] bg-white shadow-2xl z-[120] flex flex-col border-l border-gray-200 animate-in slide-in-from-right duration-300 font-normal">
      <div className="p-6 border-b flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Table settings</h2>
        <button onClick={() => setShowTableSettingsPanel(false)} className="p-2 hover:bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-10">
        <section>
          <div className="flex items-center gap-1.5 mb-4">
            <h3 className="text-sm font-bold text-gray-900">Pagination</h3>
            <div className="w-3.5 h-3.5 border border-gray-400 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-bold">i</div>
          </div>
          <div className="space-y-4">
            {["25", "50", "100"].map(size => (
              <label key={size} className="flex items-center gap-3 cursor-pointer group">
                <div 
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${pageSize === size ? 'border-teal-600 bg-teal-600' : 'border-gray-300 group-hover:border-teal-600'}`}
                  onClick={() => setPageSize(size)}
                >
                  {pageSize === size && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="text-sm text-gray-700 font-medium">{size} per page</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-1.5 mb-4">
            <h3 className="text-sm font-bold text-gray-900">Row height</h3>
            <div className="w-3.5 h-3.5 border border-gray-400 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-bold">i</div>
          </div>
          <div className="space-y-4">
            {["compact", "default", "comfortable"].map(height => (
              <label key={height} className="flex items-center gap-3 cursor-pointer group">
                <div 
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${rowHeight === height ? 'border-teal-600 bg-teal-600' : 'border-gray-300 group-hover:border-teal-600'}`}
                  onClick={() => setRowHeight(height as any)}
                >
                  {rowHeight === height && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="text-sm text-gray-700 font-medium capitalize">{height}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-between border-t border-gray-100 pt-6">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-gray-900">Zebra striping</h3>
            <div className="w-3.5 h-3.5 border border-gray-400 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-bold">i</div>
          </div>
          <button 
            className={`w-11 h-6 rounded-full transition-colors relative ${zebraStriping ? 'bg-teal-600' : 'bg-gray-200'}`}
            onClick={() => setZebraStriping(!zebraStriping)}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${zebraStriping ? 'left-6' : 'left-1'}`} />
          </button>
        </section>
      </div>
    </div>
  );

  const EditColumnsModal = () => {
    const handleToggleColumn = (column: string) => {
      setSelectedColumns(prev => 
        prev.includes(column) ? prev.filter(c => c !== column) : [...prev, column]
      );
    };

    const handleRemoveColumn = (column: string) => {
      setSelectedColumns(prev => prev.filter(c => c !== column));
    };

    const handleRemoveAll = () => {
      setSelectedColumns([]);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 font-normal">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-[1000px] flex flex-col max-h-[90vh]">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Choose which columns you see</h2>
            <button onClick={() => setShowEditColumnsModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="flex-1 overflow-hidden flex">
            {/* Left Column - Search & Selection */}
            <div className="w-1/2 p-6 border-r border-gray-200 overflow-y-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search columns..." className="pl-10 h-10 border-blue-500 ring-1 ring-blue-500 focus-visible:ring-blue-500" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">ASSOCIATIONS</h3>
                <div className="space-y-3">
                  {AVAILABLE_COLUMNS.map((item, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                        checked={selectedColumns.includes(item)}
                        onChange={() => handleToggleColumn(item)}
                      />
                      <span className="text-sm text-gray-700 group-hover:text-blue-600 font-medium">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-600">
                  Don't see the property you're looking for? <button className="text-blue-600 hover:underline inline-flex items-center gap-1">Create a property <ExternalLink className="w-3 h-3" /></button>
                </p>
              </div>
            </div>
            
            {/* Right Column - Selected & Ordering */}
            <div className="w-1/2 p-6 bg-gray-50/30 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">SELECTED COLUMNS ({selectedColumns.length})</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Frozen columns</span>
                  <Select defaultValue="0">
                    <SelectTrigger className="w-16 h-8 bg-white border-gray-300">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                {selectedColumns.map((label, idx) => (
                  <div key={idx} className="flex items-center justify-between px-3 py-2 bg-white border border-gray-200 rounded-lg group shadow-sm">
                    <div className="flex items-center gap-3">
                      <GripVertical className="w-4 h-4 text-gray-300 cursor-grab" />
                      <span className="text-sm text-gray-700 font-medium">{label}</span>
                    </div>
                    {label !== "Call Title" && (
                      <button 
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveColumn(label)}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t flex items-center justify-between bg-white rounded-b-xl">
            <div className="flex gap-3">
              <Button className="bg-gray-950 text-white hover:bg-gray-800 h-10 px-6 font-bold" onClick={() => setShowEditColumnsModal(false)}>Apply</Button>
              <Button variant="outline" className="h-10 px-6 font-bold border-gray-300" onClick={() => setShowEditColumnsModal(false)}>Cancel</Button>
            </div>
            <button className="text-teal-600 hover:underline text-sm font-bold" onClick={handleRemoveAll}>Remove all columns</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-full bg-white -m-6 rounded-tl-lg shadow-sm border border-gray-200">
      {/* Top Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-4 border-b-2 border-transparent relative">
          <button 
            className={`flex items-center gap-2 px-3 py-1.5 border rounded-md transition-colors text-sm font-medium ${activePopup === 'entitySelector' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'}`}
            onClick={() => setActivePopup(activePopup === 'entitySelector' ? null : 'entitySelector')}
          >
            <List className="w-4 h-4 text-gray-500" />
            Calls
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${activePopup === 'entitySelector' ? 'rotate-180' : ''}`} />
          </button>
          {activePopup === 'entitySelector' && <EntitySelectorPopup />}
        </div>

        <div className="flex items-center gap-2 relative">
          <button 
            className={`px-3 py-1.5 border rounded-md transition-colors ${activePopup === 'topMore' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'}`}
            onClick={() => setActivePopup(activePopup === 'topMore' ? null : 'topMore')}
          >
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
          {activePopup === 'topMore' && <TopMorePopup />}

          <button className="px-4 py-1.5 text-white bg-gray-900 rounded-md hover:bg-gray-800 text-sm font-medium">
            Import
          </button>
        </div>
      </div>

      <div className="px-6 flex items-end gap-1 border-b border-gray-200 bg-gray-50/50 pt-2">
        {/* Tabs */}

        <button
          onClick={() => setActiveTab("recorded")}
          className={`px-4 py-3 text-sm font-medium border-x border-t rounded-t-lg transition-colors flex items-center gap-2 ${
            activeTab === "recorded"
              ? "bg-white border-gray-200 text-gray-900 border-b-white relative top-[1px]"
              : "border-transparent text-gray-600 hover:bg-gray-100"
          }`}
        >
          Recorded calls
          <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            0
          </span>
        </button>

        <div className="h-6 w-px bg-gray-300 mx-1 mb-2" />

        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-3 text-sm font-medium border-x border-t rounded-t-lg transition-colors flex items-center gap-2 ${
            activeTab === "all"
              ? "bg-white border-gray-200 text-gray-900 border-b-white relative top-[1px]"
              : "border-transparent text-gray-600 hover:bg-gray-100"
          }`}
        >
          All calls
          <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            2
          </span>
        </button>

        <button className="px-3 py-2 mb-1 ml-2 text-gray-500 hover:bg-gray-200 rounded-md transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Toolbar Line 1 */}

        <div className="flex flex-wrap items-center justify-between gap-4 relative z-[30]">
          <div className="relative max-w-sm w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 font-medium hover:bg-gray-50 border-r border-gray-300">
                <List className="w-3.5 h-3.5" />
                Table view
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <div className="relative border-r border-gray-300">
                <button 
                  className={`px-2 py-1.5 transition-colors ${activePopup === 'tableSettingsMenu' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                  onClick={() => setActivePopup(activePopup === 'tableSettingsMenu' ? null : 'tableSettingsMenu')}
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
                {activePopup === 'tableSettingsMenu' && <TableSettingsMenu />}
              </div>

              <button 
                className={`px-2 py-1.5 transition-colors ${showTableSettingsPanel ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                onClick={() => setShowTableSettingsPanel(!showTableSettingsPanel)}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            <button 
              className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap"
              onClick={() => setShowEditColumnsModal(true)}
            >
              Edit columns
            </button>

            <button 
              className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-md whitespace-nowrap transition-colors ${showFiltersBar ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setShowFiltersBar(!showFiltersBar)}
            >
              <Filter className="w-3.5 h-3.5" />
              Filters
            </button>

            <div className="relative">
              <button 
                className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-md whitespace-nowrap transition-colors ${activePopup === 'sort' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActivePopup(activePopup === 'sort' ? null : 'sort')}
              >
                <ArrowDownUp className="w-3.5 h-3.5" /> Sort
              </button>
              {activePopup === 'sort' && <SortPopup />}
            </div>

            {activeTab === "all" ? (
              <button 
                className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap"
                onClick={() => setShowExportModal(true)}
              >
                Export
              </button>
            ) : (
              <button 
                className="px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => setShowExportModal(true)}
              >
                <Upload className="w-4 h-4" />
              </button>
            )}

            <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap">
              <Save className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        </div>

        {/* Toolbar Line 2 (Filters) */}
        {showFiltersBar && (
          <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-900">
              <button className="flex items-center gap-1.5 hover:text-blue-600 group">
                <Lock className="w-3 h-3 text-gray-400 group-hover:text-blue-600" />
                Transcript avail...
                <ChevronDown className="w-3 h-3 text-gray-500 ml-1" />
              </button>

              <div className="relative">
                <button 
                  className={`flex items-center gap-1.5 hover:text-blue-600 ${activePopup === 'assignedTo' ? 'text-blue-600' : ''}`}
                  onClick={() => setActivePopup(activePopup === 'assignedTo' ? null : 'assignedTo')}
                >
                  Activity assigned to
                  <ChevronDown className={`w-3 h-3 text-gray-500 ml-1 transition-transform ${activePopup === 'assignedTo' ? 'rotate-180' : ''}`} />
                </button>
                {activePopup === 'assignedTo' && <AssignedToPopup />}
              </div>

              <div className="relative">
                <button 
                  className={`flex items-center gap-1.5 hover:text-blue-600 ${activePopup === 'activityDate' ? 'text-blue-600' : ''}`}
                  onClick={() => setActivePopup(activePopup === 'activityDate' ? null : 'activityDate')}
                >
                  Activity date
                  <ChevronDown className={`w-3 h-3 text-gray-500 ml-1 transition-transform ${activePopup === 'activityDate' ? 'rotate-180' : ''}`} />
                </button>
                {activePopup === 'activityDate' && <ActivityDatePopup />}
              </div>

              <div className="relative">
                <button 
                  className={`flex items-center gap-1.5 hover:text-blue-600 ${activePopup === 'callDuration' ? 'text-blue-600' : ''}`}
                  onClick={() => setActivePopup(activePopup === 'callDuration' ? null : 'callDuration')}
                >
                  Call duration
                  <ChevronDown className={`w-3 h-3 text-gray-500 ml-1 transition-transform ${activePopup === 'callDuration' ? 'rotate-180' : ''}`} />
                </button>
                {activePopup === 'callDuration' && <CallDurationPopup />}
              </div>

              <div className="relative">
                <button 
                  className={`flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold ${activePopup === 'moreFilters' ? 'text-blue-700' : ''}`}
                  onClick={() => setActivePopup(activePopup === 'moreFilters' ? null : 'moreFilters')}
                >
                  <Plus className="w-3.5 h-3.5" /> More
                </button>
                {activePopup === 'moreFilters' && <MoreFiltersPopup />}
              </div>
            </div>

            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md whitespace-nowrap">
              <Filter className="w-3.5 h-3.5" /> Advanced filters
              {activeTab === "recorded" && (
                <span className="ml-1 opacity-50">X</span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Main Extensible Content */}

      <div className="border-t border-gray-200 bg-white min-h-[400px]">
        {activeTab === "recorded" ? (
          <div className="flex flex-col items-center justify-center h-full py-20 px-4 text-center">
            <div className="max-w-md w-full flex flex-col items-center">
              <div className="w-48 h-48 mb-8 text-blue-100 relative">
                {/* Empty State Vector Graphic */}

                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z"
                    fill="#F8FAFC"
                  />

                  <path
                    d="M135 135L165 165"
                    stroke="#E2E8F0"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="90"
                    cy="90"
                    r="45"
                    fill="white"
                    stroke="#CBD5E1"
                    strokeWidth="8"
                  />

                  <path
                    d="M105 105L125 125"
                    stroke="#CBD5E1"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />

                  <circle cx="80" cy="80" r="20" fill="#E0F2FE" />

                  <path
                    d="M90 40L95 35M140 90L145 85M40 90L35 85"
                    stroke="#94A3B8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 text-left w-full">
                No matches for the current filters.
              </h3>

              <p className="text-gray-600 text-left w-full">
                Expecting to see a new item? Try again in a few seconds as the
                system catches up.
              </p>
            </div>
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <th className="px-4 py-3 w-12 text-center border-r border-gray-200">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </th>

                <th className="px-4 py-3 border-r border-gray-200">
                  Call Title
                </th>

                <th className="px-4 py-3 border-r border-gray-200">
                  Activity date (GMT+5:30)
                </th>

                <th className="px-4 py-3 border-r border-gray-200">
                  Call direction
                </th>

                <th className="px-4 py-3">Call outcome</th>
              </tr>
            </thead>

            <tbody>
              {mockData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors group"
                >
                  <td className="px-4 py-3 text-center border-r border-gray-100 group-hover:bg-white transition-colors">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </td>

                  <td className="px-4 py-3 border-r border-gray-100 font-medium text-blue-600 hover:underline cursor-pointer group-hover:bg-white transition-colors">
                    {row.title}
                  </td>

                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600 group-hover:bg-white transition-colors text-sm">
                    {row.date}
                  </td>

                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600 group-hover:bg-white transition-colors">
                    {row.direction}
                  </td>

                  <td className="px-4 py-3 text-gray-600 group-hover:bg-white transition-colors">
                    {row.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer Pagination */}

      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-white">
        <div className="flex-1" />

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-400 cursor-not-allowed">
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          {activeTab === "all" && (
            <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded">
              1
            </span>
          )}

          <button className="flex items-center gap-1 text-sm font-medium text-gray-400 cursor-not-allowed">
            Next <ChevronRight className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 ml-4 text-sm font-bold text-gray-900">
            25 per page <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1" />
      </div>

      {showEditColumnsModal && <EditColumnsModal />}
      {showExportModal && <ExportModal />}
      {showTableSettingsPanel && <TableSettingsPanel />}
    </div>
  );
}
