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
  Building2,
  X,
  Ellipsis,
  Trash2,
  Edit,
  Download,
  Calendar,
  User,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

type Company = {
  id: number;
  name: string;
  owner: string;
  createDate: string;
  phone: string;
  lastActivity: string;
  city: string;
  country: string;
  industry: string; // Industry column added back
};

type SortConfig = {
  key: keyof Company;
  direction: "asc" | "desc";
} | null;

// All columns including Industry as last column
const allColumns = [
  { key: "name", label: "Company name" },
  { key: "owner", label: "Company owner" },
  { key: "createDate", label: "Create Date (GMT+5:30)" },
  { key: "phone", label: "Phone number" },
  { key: "lastActivity", label: "Last Activity date (GMT+5:30)" },
  { key: "city", label: "City" },
  { key: "country", label: "Country/Region" },
  { key: "industry", label: "Industry" }, // Industry as last column
];

export function Companies() {
  // ---------- Data (with Industry field) ----------
  const [companies, setCompanies] = useState<Company[]>([
    {
      id: 1,
      name: "HubSpot",
      owner: "No owner",
      createDate: "Yesterday at 12:05 PM GMT+5:30",
      phone: "--",
      lastActivity: "Yesterday at 12:05 PM GMT+5:30",
      city: "--",
      country: "--",
      industry: "Software",
    },
    {
      id: 2,
      name: "Acme Corp",
      owner: "John Doe",
      createDate: "2024-03-10",
      phone: "+1 234 567 890",
      lastActivity: "2024-03-15",
      city: "New York",
      country: "USA",
      industry: "Technology",
    },
    {
      id: 3,
      name: "Globex",
      owner: "me",
      createDate: "2024-03-01",
      phone: "--",
      lastActivity: "2024-03-12",
      city: "London",
      country: "UK",
      industry: "Finance",
    },
  ]);

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
  const [showCompaniesMenu, setShowCompaniesMenu] = useState(false);
  const [showAllCompaniesMenu, setShowAllCompaniesMenu] = useState(false);
  const [showTableViewMenu, setShowTableViewMenu] = useState(false);
  const [showColumnMenu, setShowColumnMenu] = useState(false);
  const [showRowMenu, setShowRowMenu] = useState<number | null>(null); // For row "..." menu

  // Filter states
  const [filterOwner, setFilterOwner] = useState<"all" | "me">("all");
  const [createDateFilter, setCreateDateFilter] = useState<string>("");
  const [lastActivityFilter, setLastActivityFilter] = useState<string>("");

  // Modal states
  const [showCreateDateModal, setShowCreateDateModal] = useState(false);
  const [showLastActivityModal, setShowLastActivityModal] = useState(false);
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCompany, setNewCompany] = useState({
    name: "",
    owner: "",
    phone: "",
    city: "",
    country: "",
    industry: "",
  });

  // Temp values for modals
  const [tempDate, setTempDate] = useState("");
  const [tempOwner, setTempOwner] = useState("");

  // Refs for closing dropdowns
  const companiesMenuRef = useRef<HTMLDivElement>(null);
  const allCompaniesMenuRef = useRef<HTMLDivElement>(null);
  const tableViewMenuRef = useRef<HTMLDivElement>(null);
  const columnMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (companiesMenuRef.current && !companiesMenuRef.current.contains(event.target as Node))
        setShowCompaniesMenu(false);
      if (allCompaniesMenuRef.current && !allCompaniesMenuRef.current.contains(event.target as Node))
        setShowAllCompaniesMenu(false);
      if (tableViewMenuRef.current && !tableViewMenuRef.current.contains(event.target as Node))
        setShowTableViewMenu(false);
      if (columnMenuRef.current && !columnMenuRef.current.contains(event.target as Node))
        setShowColumnMenu(false);
      // Also close row menu when clicking outside
      if (showRowMenu !== null) {
        setShowRowMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showRowMenu]);

  // ---------- Filter & Sort ----------
  const filteredByOwner = companies.filter((c) =>
    filterOwner === "me" ? c.owner === "me" : true
  );
  const filteredBySearch = filteredByOwner.filter((company) => {
    const term = searchTerm.toLowerCase();
    return (
      company.name.toLowerCase().includes(term) ||
      company.owner.toLowerCase().includes(term) ||
      company.city.toLowerCase().includes(term) ||
      company.industry.toLowerCase().includes(term)
    );
  });
  const filteredCompanies = filteredBySearch.filter((company) => {
    if (createDateFilter && !company.createDate.includes(createDateFilter)) return false;
    if (lastActivityFilter && !company.lastActivity.includes(lastActivityFilter)) return false;
    return true;
  });

  // Sorting
  const sortedCompanies = [...filteredCompanies];
  if (sortConfig) {
    const { key, direction } = sortConfig;
    sortedCompanies.sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];
      if (aVal === undefined || aVal === null) aVal = "";
      if (bVal === undefined || bVal === null) bVal = "";
      if (typeof aVal === "string" && typeof bVal === "string") {
        return direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(sortedCompanies.length / itemsPerPage);
  const paginatedCompanies = sortedCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterOwner, createDateFilter, lastActivityFilter, itemsPerPage]);

  // ---------- Handlers ----------
  const handleSort = (key: keyof Company) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        if (prev.direction === "asc") return { key, direction: "desc" };
        return null;
      }
      return { key, direction: "asc" };
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedCompanies.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(paginatedCompanies.map((c) => c.id)));
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
    setCompanies(companies.filter((c) => !selectedIds.has(c.id)));
    setSelectedIds(new Set());
  };

  const deleteCompany = (id: number) => {
    setCompanies(companies.filter((c) => c.id !== id));
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
    setShowRowMenu(null);
  };

  const addCompany = () => {
    if (!newCompany.name) {
      alert("Please fill in company name");
      return;
    }
    const newId = Math.max(...companies.map((c) => c.id), 0) + 1;
    const company: Company = {
      id: newId,
      name: newCompany.name,
      owner: newCompany.owner || "No owner",
      createDate: new Date().toLocaleString(),
      phone: newCompany.phone || "--",
      lastActivity: new Date().toLocaleString(),
      city: newCompany.city || "--",
      country: newCompany.country || "--",
      industry: newCompany.industry || "--",
    };
    setCompanies([company, ...companies]);
    setNewCompany({ name: "", owner: "", phone: "", city: "", country: "", industry: "" });
    setShowAddModal(false);
  };

  const updateCompany = (updated: Company) => {
    setCompanies(companies.map((c) => (c.id === updated.id ? updated : c)));
    setEditingCompany(null);
    setShowRowMenu(null);
  };

  const exportToCSV = () => {
    const headers = visibleColumns.map((col) => allColumns.find((c) => c.key === col)?.label || col);
    const rows = sortedCompanies.map((company) =>
      visibleColumns.map((col) => company[col as keyof Company] ?? "").join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "companies.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveCurrentView = () => {
    const view = { visibleColumns, filterOwner, itemsPerPage, sortConfig, createDateFilter, lastActivityFilter };
    localStorage.setItem("companiesView", JSON.stringify(view));
    alert("View saved!");
  };

  const loadSavedView = () => {
    const saved = localStorage.getItem("companiesView");
    if (saved) {
      const view = JSON.parse(saved);
      setVisibleColumns(view.visibleColumns);
      setFilterOwner(view.filterOwner);
      setItemsPerPage(view.itemsPerPage);
      setSortConfig(view.sortConfig);
      setCreateDateFilter(view.createDateFilter || "");
      setLastActivityFilter(view.lastActivityFilter || "");
      alert("View loaded");
    } else {
      alert("No saved view found");
    }
  };

  const resetFilters = () => {
    setCreateDateFilter("");
    setLastActivityFilter("");
    setFilterOwner("all");
    setSearchTerm("");
  };

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
  const applyOwner = () => {
    setFilterOwner(tempOwner === "me" ? "me" : "all");
    setShowOwnerModal(false);
    setTempOwner("");
  };

  const openCompanyDetail = (company: Company, e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('input[type="checkbox"]') || target.closest('button')) {
      return;
    }
    alert(`Company details: ${company.name}\nThis would open a detail modal.`);
  };

  // ---------- Render ----------
  return (
    <div className="h-full w-full max-w-full bg-white overflow-x-hidden">
      {/* TOP BAR */}
      <div className="flex flex-wrap items-center gap-2 border-b px-4 py-2 sm:px-6">
        <div className="relative" ref={companiesMenuRef}>
          <Button variant="outline" className="bg-white border-gray-300 text-gray-900 gap-1 h-8" onClick={() => setShowCompaniesMenu(!showCompaniesMenu)}>
            <Building2 className="w-3 h-3" />
            <span className="text-xs font-medium">Companies</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
          {showCompaniesMenu && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-white border rounded shadow-lg z-20">
              <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Companies</button>
              <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Contacts</button>
              <button className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Deals</button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-900 text-xs">All companies</span>
          <span className="inline-flex items-center justify-center bg-gray-900 text-white rounded-full px-1 h-4 w-4 text-xs font-bold">
            {companies.length}
          </span>
          <div className="relative" ref={allCompaniesMenuRef}>
            <Button size="icon" variant="outline" className="bg-white border-gray-300 h-8 w-8" onClick={() => setShowAllCompaniesMenu(!showAllCompaniesMenu)}>
              <Ellipsis className="w-3 h-3" />
            </Button>
            {showAllCompaniesMenu && (
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
          My companies
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
            <span className="text-xs font-semibold">Add companies</span>
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
            onClick={() => { setTempOwner(filterOwner === "me" ? "me" : ""); setShowOwnerModal(true); }}
          >
            Company owner {filterOwner === "me" && <User className="w-3 h-3 text-green-600" />}
            <ChevronDown className="w-3 h-3" />
          </button>
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
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            onClick={() => setShowAdvancedFilters(true)}
          >
            <Plus className="w-3 h-3" /> More
          </button>
          <button className="hover:text-gray-900" onClick={resetFilters}>
            Reset all
          </button>
          <button
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            onClick={() => setShowAdvancedFilters(true)}
          >
            <Settings className="w-3 h-3" /> Advanced filters
          </button>
        </div>
      </div>

      {/* TABLE CONTAINER with scroll bars */}
      <div
        className="mx-4 my-4 rounded-lg border border-gray-300 bg-white sm:mx-6 overflow-auto shadow-sm"
        style={{
          height: "calc(100vh - 280px)",
          maxHeight: "calc(100vh - 280px)",
          scrollbarWidth: "thin",
        }}
      >
        <div className="min-w-[1000px]">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={paginatedCompanies.length > 0 && selectedIds.size === paginatedCompanies.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                {visibleColumns.map((colKey) => {
                  const col = allColumns.find((c) => c.key === colKey);
                  if (!col) return null;
                  return (
                    <th key={colKey} className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                      <div className="flex items-center justify-between gap-2">
                        <span>{col.label}</span>
                        <div className="flex items-center gap-1">
                          <ArrowUpDown
                            className="w-3 h-3 cursor-pointer hover:text-gray-700"
                            onClick={() => handleSort(colKey as keyof Company)}
                          />
                          <Button size="icon" variant="outline" className="h-6 w-6 border-gray-200">
                            <MoreVertical className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </th>
                  );
                })}
                {/* Actions column header removed, but row menu is inside last data column? No – we add a dedicated actions column with "..." button */}
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCompanies.map((company) => (
                <tr
                  key={company.id}
                  className="hover:bg-gray-50 border-t border-gray-100 cursor-pointer"
                  onClick={(e) => openCompanyDetail(company, e)}
                >
                  <td className="px-4 py-2" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedIds.has(company.id)}
                      onChange={() => toggleSelect(company.id)}
                    />
                  </td>
                  {visibleColumns.map((colKey) => (
                    <td key={colKey} className="px-4 py-2 text-sm text-gray-900">
                      {company[colKey as keyof Company] as React.ReactNode}
                    </td>
                  ))}
                  {/* Actions cell with "..." menu button */}
                  <td className="px-4 py-2 relative" onClick={(e) => e.stopPropagation()}>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7"
                      onClick={() => setShowRowMenu(showRowMenu === company.id ? null : company.id)}
                    >
                      <MoreVertical className="w-3 h-3" />
                    </Button>
                    {showRowMenu === company.id && (
                      <div className="absolute right-0 top-full mt-1 w-32 bg-white border rounded shadow-lg z-10">
                        <button
                          className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100"
                          onClick={() => { setEditingCompany(company); setShowRowMenu(null); }}
                        >
                          <Edit className="w-3 h-3" /> Edit
                        </button>
                        <button
                          className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-gray-100"
                          onClick={() => deleteCompany(company.id)}
                        >
                          <Trash2 className="w-3 h-3" /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {paginatedCompanies.length === 0 && (
                <tr>
                  <td colSpan={visibleColumns.length + 2} className="px-4 py-8 text-center text-sm text-gray-500">
                    No companies found
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
      {/* Owner Filter Modal */}
      {showOwnerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Filter by Company Owner</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowOwnerModal(false)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium mb-2">Select owner</label>
              <select value={tempOwner} onChange={(e) => setTempOwner(e.target.value)} className="w-full border rounded p-2">
                <option value="">All owners</option>
                <option value="me">My companies</option>
              </select>
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => { setFilterOwner("all"); setShowOwnerModal(false); }}>Clear</Button>
              <Button onClick={applyOwner}>Apply</Button>
            </div>
          </div>
        </div>
      )}

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

      {/* Add Company Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Add New Company</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4 space-y-3">
              <Input placeholder="Company name *" value={newCompany.name} onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })} />
              <Input placeholder="Owner" value={newCompany.owner} onChange={(e) => setNewCompany({ ...newCompany, owner: e.target.value })} />
              <Input placeholder="Phone" value={newCompany.phone} onChange={(e) => setNewCompany({ ...newCompany, phone: e.target.value })} />
              <Input placeholder="City" value={newCompany.city} onChange={(e) => setNewCompany({ ...newCompany, city: e.target.value })} />
              <Input placeholder="Country/Region" value={newCompany.country} onChange={(e) => setNewCompany({ ...newCompany, country: e.target.value })} />
              <Input placeholder="Industry" value={newCompany.industry} onChange={(e) => setNewCompany({ ...newCompany, industry: e.target.value })} />
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAddModal(false)}>Cancel</Button>
              <Button onClick={addCompany}>Add Company</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Company Modal */}
      {editingCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-lg font-semibold">Edit Company</h2>
              <Button variant="ghost" size="icon" onClick={() => setEditingCompany(null)}><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4 space-y-3">
              <Input value={editingCompany.name} onChange={(e) => setEditingCompany({ ...editingCompany, name: e.target.value })} placeholder="Company name" />
              <Input value={editingCompany.owner} onChange={(e) => setEditingCompany({ ...editingCompany, owner: e.target.value })} placeholder="Owner" />
              <Input value={editingCompany.phone} onChange={(e) => setEditingCompany({ ...editingCompany, phone: e.target.value })} placeholder="Phone" />
              <Input value={editingCompany.city} onChange={(e) => setEditingCompany({ ...editingCompany, city: e.target.value })} placeholder="City" />
              <Input value={editingCompany.country} onChange={(e) => setEditingCompany({ ...editingCompany, country: e.target.value })} placeholder="Country" />
              <Input value={editingCompany.industry} onChange={(e) => setEditingCompany({ ...editingCompany, industry: e.target.value })} placeholder="Industry" />
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditingCompany(null)}>Cancel</Button>
              <Button onClick={() => updateCompany(editingCompany)}>Save Changes</Button>
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
                <label className="text-xs font-medium">Created after</label>
                <Input type="date" value={createDateFilter} onChange={(e) => setCreateDateFilter(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-medium">Last activity after</label>
                <Input type="date" value={lastActivityFilter} onChange={(e) => setLastActivityFilter(e.target.value)} />
              </div>
            </div>
            <div className="border-t p-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => { setCreateDateFilter(""); setLastActivityFilter(""); setShowAdvancedFilters(false); }}>Reset</Button>
              <Button onClick={() => setShowAdvancedFilters(false)}>Apply</Button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
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
