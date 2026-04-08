import { useState, useEffect, useRef } from "react";
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
  Trash2,
  Edit,
  Download,
  Calendar,
  ListChecks,
  Send,
  MessageSquare,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

type Contact = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  sessions: number;
  firstSite: string;
  lastPage: string;
  avgPageviews: number;
  owner?: string;
  createdAt?: string;
  lastActivity?: string;
  leadStatus?: string;
};

type SortConfig = {
  key: keyof Contact;
  direction: "asc" | "desc";
} | null;

type Response = {
  id: string;
  text: string;
  createdAt: string;
};

const allColumns = [
  { key: "name", label: "Name" },
  { key: "firstName", label: "First name" },
  { key: "lastName", label: "Last name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone number" },
  { key: "jobTitle", label: "Job title" },
  { key: "sessions", label: "Number of sessions" },
  { key: "firstSite", label: "First referring site" },
  { key: "lastPage", label: "Last page seen" },
  { key: "avgPageviews", label: "Average pageviews" },
];

export function Contacts() {
  // ---------- Data ----------
  const [contacts, setContacts] = useState<Contact[]>([
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
      owner: "me",
      createdAt: "2024-01-15",
      lastActivity: "2024-02-20",
      leadStatus: "Customer",
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
      owner: "other",
      createdAt: "2024-02-10",
      lastActivity: "2024-03-01",
      leadStatus: "Lead",
    },
    {
      id: 3,
      name: "Dharmesh Shah",
      firstName: "Dharmesh",
      lastName: "Shah",
      email: "dharmesh@hubspot.com",
      phone: "--",
      jobTitle: "CTO",
      sessions: 0,
      firstSite: "--",
      lastPage: "--",
      avgPageviews: 0,
      owner: "me",
      createdAt: "2024-03-05",
      lastActivity: "2024-03-10",
      leadStatus: "Customer",
    },
  ]);

  // Store responses per contact
  const [contactResponses, setContactResponses] = useState<Record<number, Response[]>>({});

  // ---------- UI State ----------
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    allColumns.map((c) => c.key)
  );

  // Dropdown menus
  const [showContactsMenu, setShowContactsMenu] = useState(false);
  const [showAllContactsMenu, setShowAllContactsMenu] = useState(false);
  const [showTableViewMenu, setShowTableViewMenu] = useState(false);
  const [showColumnMenu, setShowColumnMenu] = useState(false);
  const [showRowMenu, setShowRowMenu] = useState<number | null>(null);

  // Filter states
  const [filterOwner, setFilterOwner] = useState<"all" | "me">("all");
  const [createDateFilter, setCreateDateFilter] = useState<string>("");
  const [lastActivityFilter, setLastActivityFilter] = useState<string>("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>("");

  // Modal states for filter chips
  const [showCreateDateModal, setShowCreateDateModal] = useState(false);
  const [showLastActivityModal, setShowLastActivityModal] = useState(false);
  const [showLeadStatusModal, setShowLeadStatusModal] = useState(false);

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
  });

  // Contact detail modal for viewing and adding responses
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showContactDetailModal, setShowContactDetailModal] = useState(false);
  const [newResponseText, setNewResponseText] = useState("");

  // Temp values for modals
  const [tempDate, setTempDate] = useState("");
  const [tempLeadStatus, setTempLeadStatus] = useState("");

  // Refs for closing dropdowns
  const contactsMenuRef = useRef<HTMLDivElement>(null);
  const allContactsMenuRef = useRef<HTMLDivElement>(null);
  const tableViewMenuRef = useRef<HTMLDivElement>(null);
  const columnMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactsMenuRef.current && !contactsMenuRef.current.contains(event.target as Node)) setShowContactsMenu(false);
      if (allContactsMenuRef.current && !allContactsMenuRef.current.contains(event.target as Node)) setShowAllContactsMenu(false);
      if (tableViewMenuRef.current && !tableViewMenuRef.current.contains(event.target as Node)) setShowTableViewMenu(false);
      if (columnMenuRef.current && !columnMenuRef.current.contains(event.target as Node)) setShowColumnMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ---------- Filter & Sort ----------
  const filteredByOwner = contacts.filter((c) => filterOwner === "me" ? c.owner === "me" : true);
  const filteredBySearch = filteredByOwner.filter((contact) => {
    const term = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(term) ||
      contact.firstName.toLowerCase().includes(term) ||
      contact.lastName.toLowerCase().includes(term) ||
      contact.email.toLowerCase().includes(term)
    );
  });
  const filteredContacts = filteredBySearch.filter((contact) => {
    if (createDateFilter && contact.createdAt !== createDateFilter) return false;
    if (lastActivityFilter && contact.lastActivity !== lastActivityFilter) return false;
    if (leadStatusFilter && contact.leadStatus !== leadStatusFilter) return false;
    return true;
  });

  // Sorting
  const sortedContacts = [...filteredContacts];
  if (sortConfig) {
    const { key, direction } = sortConfig;
    sortedContacts.sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];
      if (aVal === undefined || aVal === null) aVal = typeof bVal === "number" ? 0 : "";
      if (bVal === undefined || bVal === null) bVal = typeof aVal === "number" ? 0 : "";
      if (typeof aVal === "string" && typeof bVal === "string") {
        return direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(sortedContacts.length / itemsPerPage);
  const paginatedContacts = sortedContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterOwner, createDateFilter, lastActivityFilter, leadStatusFilter, itemsPerPage]);

  // ---------- Handlers ----------
  const handleSort = (key: keyof Contact) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        if (prev.direction === "asc") return { key, direction: "desc" };
        return null;
      }
      return { key, direction: "asc" };
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedContacts.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(paginatedContacts.map((c) => c.id)));
    }
  };

  const toggleSelect = (id: number) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedIds(newSet);
  };

  const deleteSelected = () => {
    if (selectedIds.size === 0) return;
    setContacts(contacts.filter((c) => !selectedIds.has(c.id)));
    setSelectedIds(new Set());
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((c) => c.id !== id));
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
    setShowRowMenu(null);
  };

  const addContact = () => {
    if (!newContact.firstName || !newContact.lastName || !newContact.email) {
      alert("Please fill in first name, last name, and email");
      return;
    }
    const newId = Math.max(...contacts.map((c) => c.id), 0) + 1;
    const contact: Contact = {
      id: newId,
      name: `${newContact.firstName} ${newContact.lastName}`,
      firstName: newContact.firstName,
      lastName: newContact.lastName,
      email: newContact.email,
      phone: newContact.phone || "--",
      jobTitle: newContact.jobTitle || "--",
      sessions: 0,
      firstSite: "--",
      lastPage: "--",
      avgPageviews: 0,
      owner: "me",
      createdAt: new Date().toISOString().slice(0, 10),
      lastActivity: new Date().toISOString().slice(0, 10),
      leadStatus: "New",
    };
    setContacts([contact, ...contacts]);
    setNewContact({ firstName: "", lastName: "", email: "", phone: "", jobTitle: "" });
    setShowAddModal(false);
  };

  const updateContact = (updated: Contact) => {
    setContacts(contacts.map((c) => (c.id === updated.id ? updated : c)));
    setEditingContact(null);
    setShowRowMenu(null);
  };

  const exportToCSV = () => {
    const headers = visibleColumns.map((col) => allColumns.find((c) => c.key === col)?.label || col);
    const rows = sortedContacts.map((contact) =>
      visibleColumns.map((col) => contact[col as keyof Contact] ?? "").join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveCurrentView = () => {
    const view = { visibleColumns, filterOwner, itemsPerPage, sortConfig, createDateFilter, lastActivityFilter, leadStatusFilter };
    localStorage.setItem("contactsView", JSON.stringify(view));
    alert("View saved!");
  };

  const loadSavedView = () => {
    const saved = localStorage.getItem("contactsView");
    if (saved) {
      const view = JSON.parse(saved);
      setVisibleColumns(view.visibleColumns);
      setFilterOwner(view.filterOwner);
      setItemsPerPage(view.itemsPerPage);
      setSortConfig(view.sortConfig);
      setCreateDateFilter(view.createDateFilter || "");
      setLastActivityFilter(view.lastActivityFilter || "");
      setLeadStatusFilter(view.leadStatusFilter || "");
      alert("View loaded");
    } else {
      alert("No saved view found");
    }
  };

  const resetFilters = () => {
    setCreateDateFilter("");
    setLastActivityFilter("");
    setLeadStatusFilter("");
    setFilterOwner("all");
    setSearchTerm("");
  };

  // Apply date filter
  const applyCreateDate = () => {
    setCreateDateFilter(tempDate);
    setShowCreateDateModal(false);
    setTempDate("");
  };

  const applyLastActivity = () => {
    setLastActivityFilter(tempDate);
    setShowLastActivityModal(false);
    setTempDate("");
  };

  const applyLeadStatus = () => {
    setLeadStatusFilter(tempLeadStatus);
    setShowLeadStatusModal(false);
    setTempLeadStatus("");
  };

  // Response handling
  const addResponseToContact = (contactId: number, responseText: string) => {
    if (!responseText.trim()) return;
    const newResponse: Response = {
      id: Date.now().toString(),
      text: responseText.trim(),
      createdAt: new Date().toLocaleString(),
    };
    setContactResponses((prev) => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), newResponse],
    }));
    setNewResponseText("");
  };

  const openContactDetail = (contact: Contact, e: React.MouseEvent) => {
    // Prevent opening when clicking on checkbox or action buttons
    const target = e.target as HTMLElement;
    if (target.closest('input[type="checkbox"]') || target.closest('button')) {
      return;
    }
    setSelectedContact(contact);
    setShowContactDetailModal(true);
    setNewResponseText("");
  };

  // ---------- Render ----------
  return (
    <div className="h-full w-full max-w-full bg-white overflow-x-hidden">
      {/* TOP BAR */}
      <div className="flex flex-wrap items-center gap-2 border-b px-4 py-2 sm:px-6">
        <div className="relative" ref={contactsMenuRef}>
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8" onClick={() => setShowContactsMenu(!showContactsMenu)}>
            <Users className="w-3 h-3" />
            <span className="text-xs font-medium">Contacts</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
          {showContactsMenu && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-white border rounded shadow-lg z-20">
              <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Contacts</button>
              <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Companies</button>
              <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Deals</button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-900 text-xs">All contacts</span>
          <span className="inline-flex items-center justify-center bg-gray-900 text-white rounded-full px-1 h-4 w-4 text-xs font-bold">
            {contacts.length}
          </span>
          <div className="relative" ref={allContactsMenuRef}>
            <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8" onClick={() => setShowAllContactsMenu(!showAllContactsMenu)}>
              <Ellipsis className="w-3 h-3" />
            </Button>
            {showAllContactsMenu && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white border rounded shadow-lg z-20">
                <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Rename list</button>
                <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Duplicate</button>
                <button className="block w-full text-left px-3 py-2 text-xs text-red-600 hover:bg-gray-100">Delete list</button>
              </div>
            )}
          </div>
          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8">
            <X className="w-3 h-3" />
          </Button>
        </div>

        <Button
          variant={filterOwner === "me" ? "default" : "outline"}
          className={`h-8 text-xs ${filterOwner === "me" ? "bg-gray-900 text-white" : "bg-white"}`}
          onClick={() => setFilterOwner(filterOwner === "me" ? "all" : "me")}
        >
          My contacts
        </Button>

        <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8" onClick={() => setShowAddModal(true)}>
          <Plus className="w-3 h-3" />
        </Button>

        <div className="min-w-0 flex-1"></div>

        <div className="flex flex-wrap items-center gap-1">
          {selectedIds.size > 0 && (
            <Button variant="destructive" size="sm" onClick={deleteSelected} className="gap-1 h-8 text-xs bg-red-600 hover:bg-red-700">
              <Trash2 className="w-3 h-3" />
              Delete ({selectedIds.size})
            </Button>
          )}
          <Button className="bg-gray-900 hover:bg-gray-800 text-white gap-1 h-8 px-3" onClick={() => setShowAddModal(true)}>
            <span className="text-xs font-semibold">Add contacts</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* SEARCH & TOOLBAR */}
      <div className="border-b px-4 sm:px-6 py-2">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <div className="relative min-w-0 flex-1 basis-56 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300 h-8 rounded-full text-xs"
            />
          </div>

          <div className="relative" ref={tableViewMenuRef}>
            <div className="flex items-center border border-gray-300 rounded-md bg-white h-8">
              <Button variant="ghost" size="sm" className="text-gray-900 gap-1 px-2 h-8 text-xs" onClick={() => setShowTableViewMenu(!showTableViewMenu)}>
                <Grid3x3 className="w-3 h-3" />
                <span>Table view</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
              <div className="w-px h-5 bg-gray-200"></div>
              <Button variant="ghost" size="icon" className="text-gray-900 h-8 w-8" onClick={() => setShowColumnMenu(!showColumnMenu)}>
                <Settings className="w-3 h-3" />
              </Button>
            </div>
            {showTableViewMenu && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white border rounded shadow-lg z-20">
                <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Table view</button>
                <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Kanban view</button>
                <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">List view</button>
              </div>
            )}
          </div>

          <div className="relative" ref={columnMenuRef}>
            <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 text-xs" onClick={() => setShowColumnMenu(!showColumnMenu)}>
              Edit columns
            </Button>
            {showColumnMenu && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded shadow-lg z-20 p-2">
                <div className="text-xs font-semibold mb-2">Toggle columns</div>
                {allColumns.map((col) => (
                  <label key={col.key} className="flex items-center gap-2 text-xs py-1">
                    <input
                      type="checkbox"
                      checked={visibleColumns.includes(col.key)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setVisibleColumns([...visibleColumns, col.key]);
                        } else {
                          setVisibleColumns(visibleColumns.filter((k) => k !== col.key));
                        }
                      }}
                    />
                    {col.label}
                  </label>
                ))}
              </div>
            )}
          </div>

          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8 text-xs" onClick={() => alert("Filter modal would open here")}>
            <Filter className="w-3 h-3" />
            <span>Filters</span>
          </Button>

          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8 text-xs" onClick={() => alert("Sort options modal")}>
            <ArrowUpDown className="w-3 h-3" />
            <span>Sort</span>
          </Button>

          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 text-xs" onClick={exportToCSV}>
            <Download className="w-3 h-3 mr-1" />
            Export
          </Button>

          <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8" onClick={saveCurrentView}>
            <Save className="w-3 h-3" />
          </Button>

          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 h-8 px-2 text-xs" onClick={loadSavedView}>
            Load view
          </Button>
        </div>

        {/* FILTER CHIPS */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-700">
          <button
            className="flex items-center gap-1 hover:text-gray-900"
            onClick={() => { setTempDate(createDateFilter); setShowCreateDateModal(true); }}
          >
            Create date {createDateFilter && <Calendar className="w-3 h-3 text-green-600" />}
            <ChevronDown className="w-3 h-3" />
          </button>
          <button
            className="flex items-center gap-1 hover:text-gray-900"
            onClick={() => { setTempDate(lastActivityFilter); setShowLastActivityModal(true); }}
          >
            Last activity date {lastActivityFilter && <Calendar className="w-3 h-3 text-green-600" />}
            <ChevronDown className="w-3 h-3" />
          </button>
          <button
            className="flex items-center gap-1 hover:text-gray-900"
            onClick={() => { setTempLeadStatus(leadStatusFilter); setShowLeadStatusModal(true); }}
          >
            Lead status {leadStatusFilter && <ListChecks className="w-3 h-3 text-green-600" />}
            <ChevronDown className="w-3 h-3" />
          </button>
          {/* + More button opens advanced filters */}
          <button
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            onClick={() => setShowAdvancedFilters(true)}
          >
            <Plus className="w-3 h-3" /> More
          </button>
          
          <button
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            onClick={() => setShowAdvancedFilters(true)}
          >
            <Settings className="w-3 h-3" /> Advanced filters
          </button>
        </div>
      </div>

      {/* TABLE CONTAINER - with both horizontal and vertical scroll bars */}
      <div
        className="mx-4 my-4 rounded-lg border border-gray-300 bg-white sm:mx-6 overflow-auto shadow-sm"
        style={{
          height: "calc(100vh - 280px)",
          maxHeight: "calc(100vh - 280px)",
          scrollbarWidth: "thin", // Firefox
        }}
      >
        {/* Inner div ensures horizontal scroll when columns exceed container width */}
        <div className="min-w-[1200px]">
          <table className="w-full border-collapse table-auto">
            <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={paginatedContacts.length > 0 && selectedIds.size === paginatedContacts.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                {visibleColumns.map((colKey) => {
                  const col = allColumns.find((c) => c.key === colKey);
                  if (!col) return null;
                  return (
                    <th key={colKey} className="px-2 py-2 text-left text-xs font-medium text-gray-500">
                      <div className="flex items-center justify-between gap-1">
                        <span>{col.label}</span>
                        <div className="flex items-center gap-1">
                          <ArrowUpDown
                            className="w-3 h-3 cursor-pointer hover:text-gray-700"
                            onClick={() => handleSort(colKey as keyof Contact)}
                          />
                          <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200" onClick={() => setShowColumnMenu(!showColumnMenu)}>
                            <MoreVertical className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </th>
                  );
                })}
                {/* Actions column removed */}
              </tr>
            </thead>
            <tbody>
              {paginatedContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="hover:bg-gray-50 border-t border-gray-100 cursor-pointer"
                  onClick={(e) => openContactDetail(contact, e)}
                >
                  <td className="px-2 py-2" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedIds.has(contact.id)}
                      onChange={() => toggleSelect(contact.id)}
                    />
                  </td>
                  {visibleColumns.map((colKey) => (
                    <td key={colKey} className="px-2 py-2 text-sm text-gray-900">
                      {contact[colKey as keyof Contact] as React.ReactNode}
                    </td>
                  ))}
                  {/* Actions cell removed */}
                </tr>
              ))}
              {paginatedContacts.length === 0 && (
                <tr>
                  <td colSpan={visibleColumns.length + 1} className="px-2 py-8 text-center text-sm text-gray-500">
                    No contacts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex flex-wrap items-center justify-center gap-4 border-t px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>
            <ChevronLeft className="w-4 h-4 mr-1" /> Prev
          </Button>
          <span className="text-xs text-gray-600">Page {currentPage} of {totalPages || 1}</span>
          <Button variant="outline" size="sm" disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage((p) => p + 1)}>
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Show</span>
          <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }} className="bg-white border border-gray-300 rounded-md text-xs h-8 px-2">
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-xs text-gray-600">per page</span>
        </div>
      </div>

      {/* ========== MODALS ========== */}

      {/* Create Date Modal */}
      {showCreateDateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Filter by Create Date</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowCreateDateModal(false)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium mb-2">Select date</label>
              <Input type="date" value={tempDate} onChange={(e) => setTempDate(e.target.value)} className="w-full" />
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => { setCreateDateFilter(""); setShowCreateDateModal(false); }}>Clear</Button>
              <Button onClick={applyCreateDate}>Apply</Button>
            </div>
          </div>
        </div>
      )}

      {/* Last Activity Modal */}
      {showLastActivityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Filter by Last Activity Date</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowLastActivityModal(false)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium mb-2">Select date</label>
              <Input type="date" value={tempDate} onChange={(e) => setTempDate(e.target.value)} className="w-full" />
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => { setLastActivityFilter(""); setShowLastActivityModal(false); }}>Clear</Button>
              <Button onClick={applyLastActivity}>Apply</Button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Status Modal */}
      {showLeadStatusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Filter by Lead Status</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowLeadStatusModal(false)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium mb-2">Select status</label>
              <select value={tempLeadStatus} onChange={(e) => setTempLeadStatus(e.target.value)} className="w-full border rounded p-2">
                <option value="">All</option>
                <option value="Customer">Customer</option>
                <option value="Lead">Lead</option>
                <option value="New">New</option>
              </select>
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => { setLeadStatusFilter(""); setShowLeadStatusModal(false); }}>Clear</Button>
              <Button onClick={applyLeadStatus}>Apply</Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Contact Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Add New Contact</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4 space-y-3">
              <Input placeholder="First name *" value={newContact.firstName} onChange={(e) => setNewContact({ ...newContact, firstName: e.target.value })} />
              <Input placeholder="Last name *" value={newContact.lastName} onChange={(e) => setNewContact({ ...newContact, lastName: e.target.value })} />
              <Input placeholder="Email *" value={newContact.email} onChange={(e) => setNewContact({ ...newContact, email: e.target.value })} />
              <Input placeholder="Phone" value={newContact.phone} onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} />
              <Input placeholder="Job title" value={newContact.jobTitle} onChange={(e) => setNewContact({ ...newContact, jobTitle: e.target.value })} />
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAddModal(false)}>Cancel</Button>
              <Button onClick={addContact}>Add Contact</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Contact Modal */}
      {editingContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Edit Contact</h2>
              <Button variant="ghost" size="icon" onClick={() => setEditingContact(null)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4 space-y-3">
              <Input value={editingContact.firstName} onChange={(e) => setEditingContact({ ...editingContact, firstName: e.target.value, name: `${e.target.value} ${editingContact.lastName}` })} placeholder="First name" />
              <Input value={editingContact.lastName} onChange={(e) => setEditingContact({ ...editingContact, lastName: e.target.value, name: `${editingContact.firstName} ${e.target.value}` })} placeholder="Last name" />
              <Input value={editingContact.email} onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })} placeholder="Email" />
              <Input value={editingContact.phone} onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })} placeholder="Phone" />
              <Input value={editingContact.jobTitle} onChange={(e) => setEditingContact({ ...editingContact, jobTitle: e.target.value })} placeholder="Job title" />
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditingContact(null)}>Cancel</Button>
              <Button onClick={() => updateContact(editingContact)}>Save Changes</Button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Detail Modal with Response Section */}
      {showContactDetailModal && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white">
              <h2 className="text-lg font-semibold">Contact Details</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowContactDetailModal(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 space-y-4">
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div><span className="font-medium">Name:</span> {selectedContact.name}</div>
                <div><span className="font-medium">Email:</span> {selectedContact.email}</div>
                <div><span className="font-medium">Phone:</span> {selectedContact.phone}</div>
                <div><span className="font-medium">Job Title:</span> {selectedContact.jobTitle}</div>
                <div><span className="font-medium">Lead Status:</span> {selectedContact.leadStatus || "--"}</div>
                <div><span className="font-medium">Created:</span> {selectedContact.createdAt || "--"}</div>
                <div><span className="font-medium">Last Activity:</span> {selectedContact.lastActivity || "--"}</div>
                <div><span className="font-medium">Owner:</span> {selectedContact.owner || "--"}</div>
              </div>

              {/* Responses Section */}
              <div className="border-t pt-4">
                <h3 className="text-md font-semibold flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4" /> Responses
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto mb-3">
                  {(contactResponses[selectedContact.id] || []).length === 0 ? (
                    <p className="text-sm text-gray-500">No responses yet. Add one below.</p>
                  ) : (
                    (contactResponses[selectedContact.id] || []).map((resp) => (
                      <div key={resp.id} className="bg-gray-50 p-2 rounded text-sm">
                        <p className="text-gray-800">{resp.text}</p>
                        <p className="text-xs text-gray-400 mt-1">{resp.createdAt}</p>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your response..."
                    value={newResponseText}
                    onChange={(e) => setNewResponseText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        addResponseToContact(selectedContact.id, newResponseText);
                      }
                    }}
                    className="flex-1"
                  />
                  <Button onClick={() => addResponseToContact(selectedContact.id, newResponseText)} className="gap-1">
                    <Send className="w-4 h-4" /> Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Filters Modal */}
      {showAdvancedFilters && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Advanced Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowAdvancedFilters(false)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <label className="text-xs font-medium">Lead Status</label>
                <select value={leadStatusFilter} onChange={(e) => setLeadStatusFilter(e.target.value)} className="w-full border rounded p-1 text-sm">
                  <option value="">All</option>
                  <option value="Customer">Customer</option>
                  <option value="Lead">Lead</option>
                  <option value="New">New</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium">Created after</label>
                <Input type="date" value={createDateFilter} onChange={(e) => setCreateDateFilter(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-medium">Last activity after</label>
                <Input type="date" value={lastActivityFilter} onChange={(e) => setLastActivityFilter(e.target.value)} />
              </div>
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => { setCreateDateFilter(""); setLastActivityFilter(""); setLeadStatusFilter(""); setShowAdvancedFilters(false); }}>Reset</Button>
              <Button onClick={() => setShowAdvancedFilters(false)}>Apply</Button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles (add to your global CSS or within a <style> tag) */}
      <style>{`
        .overflow-auto::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .overflow-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .overflow-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        .overflow-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
}
