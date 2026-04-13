import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Copy, Eye, FileText, Pencil, Plus, Search, Star, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  reportLibrary,
  reportsKpis,
  type ReportCategory,
  type ReportFrequency,
  type ReportLibraryItem,
  type ReportStatus,
} from "./reportsData";

type ReportTab = "all" | "custom" | "favorites";
type SortOption = "updated" | "views" | "title";

const REPORTS_STORAGE_KEY = "iquanta-reports-library";
const DELETED_REPORTS_STORAGE_KEY = "iquanta-reports-library-deleted";

const frequencyOptions: Array<"all" | ReportFrequency> = ["all", "Daily", "Weekly", "Monthly", "Quarterly"];
const categoryOptions: Array<"all" | ReportCategory> = ["all", "Operations", "Leadership", "Marketing", "Compliance"];
const frequencyOptionsForCreate: ReportFrequency[] = ["Daily", "Weekly", "Monthly", "Quarterly"];
const sortOptions: SortOption[] = ["updated", "views", "title"];

const defaultCreateForm = {
  title: "",
  description: "",
  owner: "Admissions Operations",
  frequency: "Weekly" as ReportFrequency,
  category: "Operations" as ReportCategory,
  assignedTo: "Operations Team",
};

function createDefaultForm() {
  return { ...defaultCreateForm };
}

function readStoredReports(key: string, fallback: ReportLibraryItem[]) {
  if (typeof window === "undefined") return fallback;

  const storedValue = window.localStorage.getItem(key);
  if (!storedValue) return fallback;

  try {
    return JSON.parse(storedValue) as ReportLibraryItem[];
  } catch {
    window.localStorage.removeItem(key);
    return fallback;
  }
}

function statusBadgeClass(status: ReportStatus) {
  if (status === "Ready") return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
  if (status === "Scheduled") return "bg-blue-100 text-blue-700 hover:bg-blue-100";
  return "bg-amber-100 text-amber-700 hover:bg-amber-100";
}

export function RepReports() {
  const [reports, setReports] = useState<ReportLibraryItem[]>(() =>
    readStoredReports(REPORTS_STORAGE_KEY, reportLibrary),
  );
  const [deletedReports, setDeletedReports] = useState<ReportLibraryItem[]>(() =>
    readStoredReports(DELETED_REPORTS_STORAGE_KEY, []),
  );
  const [activeTab, setActiveTab] = useState<ReportTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [ownerFilter, setOwnerFilter] = useState<string>("all");
  const [frequencyFilter, setFrequencyFilter] = useState<"all" | ReportFrequency>("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | ReportCategory>("all");
  const [sortBy, setSortBy] = useState<SortOption>("updated");
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [createForm, setCreateForm] = useState(createDefaultForm);
  const [editingReportId, setEditingReportId] = useState<string | null>(null);
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    localStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(reports));
  }, [reports]);

  useEffect(() => {
    localStorage.setItem(DELETED_REPORTS_STORAGE_KEY, JSON.stringify(deletedReports));
  }, [deletedReports]);

  const metrics = useMemo(
    () => ({
      favorites: reports.filter((report) => report.favorite).length,
      ready: reports.filter((report) => report.status === "Ready").length,
      scheduled: reports.filter((report) => report.status === "Scheduled").length,
    }),
    [reports],
  );

  const ownerOptions = useMemo(
    () => ["all", ...Array.from(new Set(reports.map((report) => report.owner)))],
    [reports],
  );

  const filteredReports = useMemo(() => {
    const normalizedQuery = deferredSearchQuery.trim().toLowerCase();

    const visibleReports = reports.filter((report) => {
      const matchesTab =
        activeTab === "favorites" ? report.favorite : activeTab === "custom" ? report.status !== "Scheduled" : true;

      const matchesQuery =
        normalizedQuery.length === 0 ||
        [report.title, report.description, report.owner, report.assignedTo, report.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesOwner = ownerFilter === "all" || report.owner === ownerFilter;
      const matchesFrequency = frequencyFilter === "all" || report.frequency === frequencyFilter;
      const matchesCategory = categoryFilter === "all" || report.category === categoryFilter;

      return matchesTab && matchesQuery && matchesOwner && matchesFrequency && matchesCategory;
    });

    return [...visibleReports].sort((left, right) => {
      if (sortBy === "views") return right.totalViews - left.totalViews;
      if (sortBy === "title") return left.title.localeCompare(right.title);
      const leftValue = left.lastUpdated === "Just now" ? 0 : 1;
      const rightValue = right.lastUpdated === "Just now" ? 0 : 1;
      return leftValue - rightValue || left.title.localeCompare(right.title);
    });
  }, [activeTab, categoryFilter, deferredSearchQuery, frequencyFilter, ownerFilter, reports, sortBy]);

  const resetFilters = () => {
    setActiveTab("all");
    setSearchQuery("");
    setOwnerFilter("all");
    setFrequencyFilter("all");
    setCategoryFilter("all");
    setSortBy("updated");
  };

  const toggleFavorite = (reportId: string) => {
    setReports((current) =>
      current.map((report) => (report.id === reportId ? { ...report, favorite: !report.favorite } : report)),
    );

    const selected = reports.find((report) => report.id === reportId);
    if (selected) {
      toast.success(selected.favorite ? `${selected.title} removed from favorites` : `${selected.title} added to favorites`);
    }
  };

  const duplicateReport = (reportId: string) => {
    const report = reports.find((item) => item.id === reportId);
    if (!report) return;

    const duplicate: ReportLibraryItem = {
      ...report,
      id: `${report.id}-copy-${Date.now()}`,
      title: `${report.title} Copy`,
      favorite: false,
      status: "Draft",
      totalViews: 0,
      lastViewed: "Never",
      lastUpdated: "Just now",
    };

    setReports((current) => [duplicate, ...current]);
    toast.success(`${report.title} duplicated`);
  };

  const deleteReport = (reportId: string) => {
    const report = reports.find((item) => item.id === reportId);
    if (!report) return;

    setDeletedReports((current) => [report, ...current]);
    setReports((current) => current.filter((item) => item.id !== reportId));
    toast.success(`${report.title} deleted`);
  };

  const openEditDialog = (report: ReportLibraryItem) => {
    setEditingReportId(report.id);
    setCreateForm({
      title: report.title,
      description: report.description,
      owner: report.owner,
      frequency: report.frequency,
      category: report.category,
      assignedTo: report.assignedTo,
    });
    setEditOpen(true);
  };

  const saveEditedReport = () => {
    if (!editingReportId) return;
    if (!createForm.title.trim() || !createForm.description.trim()) {
      toast.error("Please fill in the report title and description");
      return;
    }

    setReports((current) =>
      current.map((report) =>
        report.id === editingReportId
          ? {
              ...report,
              title: createForm.title.trim(),
              description: createForm.description.trim(),
              owner: createForm.owner.trim(),
              frequency: createForm.frequency,
              category: createForm.category,
              assignedTo: createForm.assignedTo.trim(),
              lastUpdated: "Just now",
            }
          : report,
      ),
    );

    setEditOpen(false);
    setEditingReportId(null);
    setCreateForm(createDefaultForm());
    toast.success("Report updated");
  };

  const createReport = () => {
    if (!createForm.title.trim() || !createForm.description.trim()) {
      toast.error("Please fill in the report title and description");
      return;
    }

    const newReport: ReportLibraryItem = {
      id: `report-${Date.now()}`,
      title: createForm.title.trim(),
      description: createForm.description.trim(),
      owner: createForm.owner.trim(),
      frequency: createForm.frequency,
      category: createForm.category,
      dashboards: 1,
      totalViews: 0,
      assignedTo: createForm.assignedTo.trim(),
      lastViewed: "Never",
      lastUpdated: "Just now",
      status: "Draft",
      favorite: false,
    };

    setReports((current) => [newReport, ...current]);
    setCreateOpen(false);
    setCreateForm(createDefaultForm());
    toast.success(`${newReport.title} created`);
  };

  const restoreDeletedReports = () => {
    if (deletedReports.length === 0) {
      toast.error("There are no deleted reports to restore");
      return;
    }

    setReports((current) => [...deletedReports, ...current]);
    setDeletedReports([]);
    toast.success("Deleted reports restored");
  };

  const viewReport = (report: ReportLibraryItem) => {
    setReports((current) =>
      current.map((item) =>
        item.id === report.id ? { ...item, totalViews: item.totalViews + 1, lastViewed: "Just now" } : item,
      ),
    );
    toast.success(`Opened ${report.title}`);
  };

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admissions Reports</h1>
          <p className="mt-1 text-gray-500">
            Generate recurring and ad hoc reports for leadership and operations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reportsKpis.map((kpi) => (
            <Card key={kpi.label} className="border-slate-200">
              <CardContent className="space-y-2 p-5">
                <p className="text-sm text-slate-500">{kpi.label}</p>
                <p className="text-3xl font-semibold text-slate-900">{kpi.value}</p>
                <p className={`text-sm font-medium ${kpi.tone}`}>{kpi.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-slate-200">
          <CardHeader className="gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <CardTitle className="text-xl text-gray-900">Report Library</CardTitle>
                <CardDescription className="mt-1">
                  Search, create, favorite, and manage reusable admissions reports across devices.
                </CardDescription>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="outline" onClick={restoreDeletedReports}>
                  Restore deleted
                </Button>
                <Button variant="outline" onClick={resetFilters}>
                  Reset filters
                </Button>
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setCreateOpen(true)}
                >
                  <Plus />
                  Create report
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Total reports</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{reports.length}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Favorites</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{metrics.favorites}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Ready reports</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{metrics.ready}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Scheduled reports</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{metrics.scheduled}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ReportTab)}>
              <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
                <TabsTrigger value="all">All reports</TabsTrigger>
                <TabsTrigger value="custom">Custom reports</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid gap-3 lg:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search reports, owners, or categories"
                  className="pl-9"
                />
              </div>

              <Select value={ownerFilter} onValueChange={setOwnerFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Owner" />
                </SelectTrigger>
                <SelectContent>
                  {ownerOptions.map((owner) => (
                    <SelectItem key={owner} value={owner}>
                      {owner === "all" ? "All owners" : owner}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={frequencyFilter}
                onValueChange={(value) => setFrequencyFilter(value as "all" | ReportFrequency)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Frequency" />
                </SelectTrigger>
                <SelectContent>
                  {frequencyOptions.map((frequency) => (
                    <SelectItem key={frequency} value={frequency}>
                      {frequency === "all" ? "All frequencies" : frequency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={categoryFilter}
                onValueChange={(value) => setCategoryFilter(value as "all" | ReportCategory)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option === "updated"
                        ? "Sort: last updated"
                        : option === "views"
                          ? "Sort: total views"
                          : "Sort: title"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-2xl border border-slate-200">
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[280px]">Report</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Dashboards</TableHead>
                      <TableHead>Total views</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReports.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={9} className="py-12 text-center text-sm text-slate-500">
                          No reports match your current filters.
                        </TableCell>
                      </TableRow>
                    ) : null}

                    {filteredReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="align-top">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-slate-900">{report.title}</p>
                              {report.favorite ? (
                                <Star className="size-4 fill-amber-400 text-amber-400" />
                              ) : null}
                            </div>
                            <p className="max-w-md whitespace-normal text-sm text-slate-500">
                              {report.description}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>{report.category}</TableCell>
                        <TableCell>{report.owner}</TableCell>
                        <TableCell>{report.frequency}</TableCell>
                        <TableCell>{report.dashboards}</TableCell>
                        <TableCell>{report.totalViews}</TableCell>
                        <TableCell>
                          <Badge className={statusBadgeClass(report.status)}>{report.status}</Badge>
                        </TableCell>
                        <TableCell>{report.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="ghost" onClick={() => viewReport(report)}>
                              <Eye />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => openEditDialog(report)}>
                              <Pencil />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => toggleFavorite(report.id)}>
                              <Star className={report.favorite ? "fill-amber-400 text-amber-400" : ""} />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => duplicateReport(report.id)}>
                              <Copy />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => deleteReport(report.id)}>
                              <Trash2 />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="space-y-3 p-4 md:hidden">
                {filteredReports.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
                    No reports match your current filters.
                  </div>
                ) : null}

                {filteredReports.map((report) => (
                  <div key={report.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-900">{report.title}</p>
                          {report.favorite ? (
                            <Star className="size-4 fill-amber-400 text-amber-400" />
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm text-slate-500">{report.description}</p>
                      </div>
                      <Badge className={statusBadgeClass(report.status)}>{report.status}</Badge>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">{report.category}</Badge>
                      <Badge variant="outline">{report.frequency}</Badge>
                      <Badge variant="outline">{report.owner}</Badge>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-slate-500">Dashboards</p>
                        <p className="mt-1 font-semibold text-slate-900">{report.dashboards}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-slate-500">Views</p>
                        <p className="mt-1 font-semibold text-slate-900">{report.totalViews}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-slate-500">Assigned</p>
                        <p className="mt-1 font-semibold text-slate-900">{report.assignedTo}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-slate-500">Updated</p>
                        <p className="mt-1 font-semibold text-slate-900">{report.lastUpdated}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" onClick={() => viewReport(report)}>
                        <Eye />
                        Open
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(report)}>
                        <Pencil />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => toggleFavorite(report.id)}>
                        <Star className={report.favorite ? "fill-amber-400 text-amber-400" : ""} />
                        Favorite
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => duplicateReport(report.id)}>
                        <Copy />
                        Duplicate
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => deleteReport(report.id)}>
                        <Trash2 />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create report</DialogTitle>
            <DialogDescription>
              Add a reusable report to the admissions reporting library.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="report-title">
                Report title
              </label>
              <Input
                id="report-title"
                value={createForm.title}
                onChange={(event) =>
                  setCreateForm((current) => ({ ...current, title: event.target.value }))
                }
                placeholder="Ex: Enrollment yield by program"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="report-description">
                Description
              </label>
              <Input
                id="report-description"
                value={createForm.description}
                onChange={(event) =>
                  setCreateForm((current) => ({ ...current, description: event.target.value }))
                }
                placeholder="What should this report help the team track?"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Owner</label>
                <Input
                  value={createForm.owner}
                  onChange={(event) =>
                    setCreateForm((current) => ({ ...current, owner: event.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Assigned team</label>
                <Input
                  value={createForm.assignedTo}
                  onChange={(event) =>
                    setCreateForm((current) => ({ ...current, assignedTo: event.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Frequency</label>
                <Select
                  value={createForm.frequency}
                  onValueChange={(value) =>
                    setCreateForm((current) => ({ ...current, frequency: value as ReportFrequency }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {frequencyOptionsForCreate.map((frequency) => (
                      <SelectItem key={frequency} value={frequency}>
                        {frequency}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Category</label>
                <Select
                  value={createForm.category}
                  onValueChange={(value) =>
                    setCreateForm((current) => ({ ...current, category: value as ReportCategory }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions
                      .filter((option) => option !== "all")
                      .map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>
              Cancel
            </Button>
            <Button onClick={createReport}>
              <FileText />
              Save report
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={editOpen}
        onOpenChange={(open) => {
          setEditOpen(open);
          if (!open) {
            setEditingReportId(null);
            setCreateForm(createDefaultForm());
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit report</DialogTitle>
            <DialogDescription>
              Update the report details and save the changes to your library.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="edit-report-title">
                Report title
              </label>
              <Input
                id="edit-report-title"
                value={createForm.title}
                onChange={(event) =>
                  setCreateForm((current) => ({ ...current, title: event.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="edit-report-description"
              >
                Description
              </label>
              <Input
                id="edit-report-description"
                value={createForm.description}
                onChange={(event) =>
                  setCreateForm((current) => ({ ...current, description: event.target.value }))
                }
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                value={createForm.owner}
                onChange={(event) =>
                  setCreateForm((current) => ({ ...current, owner: event.target.value }))
                }
                placeholder="Owner"
              />
              <Input
                value={createForm.assignedTo}
                onChange={(event) =>
                  setCreateForm((current) => ({ ...current, assignedTo: event.target.value }))
                }
                placeholder="Assigned team"
              />
              <Select
                value={createForm.frequency}
                onValueChange={(value) =>
                  setCreateForm((current) => ({ ...current, frequency: value as ReportFrequency }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {frequencyOptionsForCreate.map((frequency) => (
                    <SelectItem key={frequency} value={frequency}>
                      {frequency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={createForm.category}
                onValueChange={(value) =>
                  setCreateForm((current) => ({ ...current, category: value as ReportCategory }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions
                    .filter((option) => option !== "all")
                    .map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditedReport}>
              <Pencil />
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
