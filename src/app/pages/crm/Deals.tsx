import React, { useEffect, useMemo, useState } from "react";
import {
  Building2,
  Calendar,
  Download,
  GripVertical,
  LayoutGrid,
  MoreHorizontal,
  Plus,
  Search,
  Table2,
  Trash2,
  User,
  X,
} from "lucide-react";
import { Modal } from "antd";

type DealStage =
  | "appointmentscheduled"
  | "qualifiedtobuy"
  | "presentationscheduled"
  | "decisionmakerboughtin"
  | "contractsent"
  | "closedwon"
  | "closedlost";

interface Deal {
  id: string;
  name: string;
  amount: number;
  closeDate: string;
  stage: DealStage;
  pipeline: string;
  owner: string;
  company: string;
  probability: number;
  createDate: string;
  lastActivity: string;
}

const STORAGE_KEY = "iquanta.crm.deals";
const OWNERS = ["John Smith", "Sarah Johnson", "Mike Davis", "Emily Brown"];
const COMPANIES = [
  "Acme Corp",
  "Tech Solutions",
  "Global Inc",
  "StartUp Labs",
  "DataFlow Inc",
  "Retail Max",
];
const PIPELINES = ["Sales Pipeline", "Renewals"];

const STAGES: Array<{ id: DealStage; label: string; color: string }> = [
  { id: "appointmentscheduled", label: "Appointment Scheduled", color: "#e0e7ff" },
  { id: "qualifiedtobuy", label: "Qualified to Buy", color: "#fef3c7" },
  { id: "presentationscheduled", label: "Presentation Scheduled", color: "#dbeafe" },
  { id: "decisionmakerboughtin", label: "Decision Maker Bought-In", color: "#d1fae5" },
  { id: "contractsent", label: "Contract Sent", color: "#fce7f3" },
  { id: "closedwon", label: "Closed Won", color: "#dcfce7" },
  { id: "closedlost", label: "Closed Lost", color: "#f3f4f6" },
];

const DEFAULT_DEALS: Deal[] = [
  {
    id: "1",
    name: "Enterprise Software License",
    amount: 150000,
    closeDate: "2026-05-20",
    stage: "presentationscheduled",
    pipeline: "Sales Pipeline",
    owner: "John Smith",
    company: "Acme Corp",
    probability: 60,
    createDate: "2026-03-15",
    lastActivity: "2026-04-05",
  },
  {
    id: "2",
    name: "Cloud Migration Project",
    amount: 250000,
    closeDate: "2026-06-15",
    stage: "qualifiedtobuy",
    pipeline: "Sales Pipeline",
    owner: "Sarah Johnson",
    company: "Tech Solutions",
    probability: 40,
    createDate: "2026-02-20",
    lastActivity: "2026-04-03",
  },
  {
    id: "3",
    name: "Consulting Services",
    amount: 75000,
    closeDate: "2026-04-30",
    stage: "contractsent",
    pipeline: "Sales Pipeline",
    owner: "Mike Davis",
    company: "Global Inc",
    probability: 80,
    createDate: "2026-03-10",
    lastActivity: "2026-04-08",
  },
  {
    id: "4",
    name: "Support Package Renewal",
    amount: 45000,
    closeDate: "2026-05-10",
    stage: "appointmentscheduled",
    pipeline: "Renewals",
    owner: "Emily Brown",
    company: "StartUp Labs",
    probability: 30,
    createDate: "2026-01-05",
    lastActivity: "2026-04-02",
  },
];

interface DealFormState {
  name: string;
  amount: string;
  closeDate: string;
  stage: DealStage;
  pipeline: string;
  owner: string;
  company: string;
  probability: string;
}

const emptyDealForm = (): DealFormState => ({
  name: "",
  amount: "",
  closeDate: "",
  stage: "appointmentscheduled",
  pipeline: PIPELINES[0],
  owner: OWNERS[0],
  company: COMPANIES[0],
  probability: "50",
});

const today = () => new Date().toISOString().split("T")[0];

export function Deals() {
  const [deals, setDeals] = useState<Deal[]>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_DEALS;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return DEFAULT_DEALS;
    }

    try {
      return JSON.parse(saved) as Deal[];
    } catch {
      return DEFAULT_DEALS;
    }
  });
  const [viewMode, setViewMode] = useState<"board" | "table">("board");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPipeline, setSelectedPipeline] = useState("All Pipelines");
  const [sortBy, setSortBy] = useState<"lastActivity" | "amount" | "closeDate">("lastActivity");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDealId, setEditingDealId] = useState<string | null>(null);
  const [form, setForm] = useState<DealFormState>(emptyDealForm);
  const [draggedDealId, setDraggedDealId] = useState<string | null>(null);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(deals));
  }, [deals]);

  const filteredDeals = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const nextDeals = deals.filter((deal) => {
      const matchesPipeline =
        selectedPipeline === "All Pipelines" || deal.pipeline === selectedPipeline;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        deal.name.toLowerCase().includes(normalizedSearch) ||
        deal.company.toLowerCase().includes(normalizedSearch) ||
        deal.owner.toLowerCase().includes(normalizedSearch);

      return matchesPipeline && matchesSearch;
    });

    return [...nextDeals].sort((a, b) => {
      if (sortBy === "amount") {
        return b.amount - a.amount;
      }

      if (sortBy === "closeDate") {
        return new Date(a.closeDate).getTime() - new Date(b.closeDate).getTime();
      }

      return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
    });
  }, [deals, searchTerm, selectedPipeline, sortBy]);

  const stageDeals = (stageId: DealStage) =>
    filteredDeals.filter((deal) => deal.stage === stageId);

  const stageTotal = (stageId: DealStage) =>
    stageDeals(stageId).reduce((sum, deal) => sum + deal.amount, 0);

  const openCreateModal = (stage?: DealStage) => {
    setEditingDealId(null);
    setForm({
      ...emptyDealForm(),
      stage: stage ?? "appointmentscheduled",
      pipeline:
        selectedPipeline !== "All Pipelines" ? selectedPipeline : PIPELINES[0],
    });
    setIsModalOpen(true);
  };

  const openEditModal = (deal: Deal) => {
    setEditingDealId(deal.id);
    setForm({
      name: deal.name,
      amount: String(deal.amount),
      closeDate: deal.closeDate,
      stage: deal.stage,
      pipeline: deal.pipeline,
      owner: deal.owner,
      company: deal.company,
      probability: String(deal.probability),
    });
    setIsModalOpen(true);
  };

  const saveDeal = () => {
    if (!form.name.trim() || !form.closeDate) {
      return;
    }

    const baseDeal: Deal = {
      id: editingDealId ?? String(Date.now()),
      name: form.name.trim(),
      amount: Number(form.amount) || 0,
      closeDate: form.closeDate,
      stage: form.stage,
      pipeline: form.pipeline,
      owner: form.owner,
      company: form.company,
      probability: Math.max(0, Math.min(100, Number(form.probability) || 0)),
      createDate:
        deals.find((deal) => deal.id === editingDealId)?.createDate ?? today(),
      lastActivity: today(),
    };

    setDeals((currentDeals) => {
      if (editingDealId) {
        return currentDeals.map((deal) =>
          deal.id === editingDealId ? baseDeal : deal
        );
      }

      return [baseDeal, ...currentDeals];
    });
    setIsModalOpen(false);
  };

  const deleteDeal = (dealId: string) => {
    setDeals((currentDeals) => currentDeals.filter((deal) => deal.id !== dealId));
    if (editingDealId === dealId) {
      setIsModalOpen(false);
      setEditingDealId(null);
    }
  };

  const handleDrop = (stageId: DealStage) => {
    if (!draggedDealId) {
      return;
    }

    setDeals((currentDeals) =>
      currentDeals.map((deal) =>
        deal.id === draggedDealId
          ? { ...deal, stage: stageId, lastActivity: today() }
          : deal
      )
    );
    setDraggedDealId(null);
  };

  const exportDeals = () => {
    const headers = [
      "Name",
      "Amount",
      "Stage",
      "Pipeline",
      "Owner",
      "Company",
      "Probability",
      "Close Date",
    ];
    const lines = filteredDeals.map((deal) =>
      [
        deal.name,
        deal.amount,
        STAGES.find((stage) => stage.id === deal.stage)?.label ?? deal.stage,
        deal.pipeline,
        deal.owner,
        deal.company,
        `${deal.probability}%`,
        deal.closeDate,
      ]
        .map((value) => `"${String(value).replaceAll('"', '""')}"`)
        .join(",")
    );

    const blob = new Blob([[headers.join(","), ...lines].join("\n")], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "deals.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const probabilityColor = (probability: number) => {
    if (probability >= 75) {
      return "bg-green-100 text-green-800";
    }
    if (probability >= 50) {
      return "bg-amber-100 text-amber-800";
    }
    return "bg-rose-100 text-rose-700";
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Deals</h1>
            <p className="text-sm text-gray-500">
              Track opportunities by stage, owner, pipeline, and expected close date.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setViewMode("board")}
              className={`rounded-md border px-3 py-2 text-sm ${
                viewMode === "board"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <LayoutGrid size={14} />
                Board
              </span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`rounded-md border px-3 py-2 text-sm ${
                viewMode === "table"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Table2 size={14} />
                Table
              </span>
            </button>
            <button
              onClick={exportDeals}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <Download size={14} />
              Export
            </button>
            <button
              onClick={() => openCreateModal()}
              className="inline-flex items-center gap-2 rounded-md bg-[#ff7a59] px-4 py-2 text-sm font-medium text-white"
            >
              <Plus size={16} />
              Add deal
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, company, or owner"
              className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-10 text-sm outline-none focus:border-[#ff7a59]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedPipeline}
              onChange={(event) => setSelectedPipeline(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
            >
              <option>All Pipelines</option>
              {PIPELINES.map((pipeline) => (
                <option key={pipeline}>{pipeline}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as "lastActivity" | "amount" | "closeDate")
              }
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
            >
              <option value="lastActivity">Last activity</option>
              <option value="amount">Deal amount</option>
              <option value="closeDate">Close date</option>
            </select>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">
              {filteredDeals.length} deals
            </div>
          </div>
        </div>
      </div>

      {viewMode === "board" ? (
        <div className="overflow-x-auto p-6">
          <div className="flex min-w-max gap-4">
            {STAGES.map((stage) => (
              <div
                key={stage.id}
                className="w-80 rounded-xl border border-gray-200 bg-white"
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => handleDrop(stage.id)}
              >
                <div
                  className="flex items-center justify-between rounded-t-xl px-4 py-3"
                  style={{ backgroundColor: stage.color }}
                >
                  <div className="flex items-center gap-2">
                    <GripVertical size={14} className="text-gray-500" />
                    <span className="text-sm font-semibold text-gray-800">{stage.label}</span>
                    <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs text-gray-600">
                      {stageDeals(stage.id).length}
                    </span>
                  </div>
                  <button
                    onClick={() => openCreateModal(stage.id)}
                    className="rounded-md p-1 text-gray-600 hover:bg-white/70"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="border-b border-gray-100 px-4 py-2 text-xs font-medium text-gray-500">
                  {formatCurrency(stageTotal(stage.id))}
                </div>

                <div className="space-y-3 p-3">
                  {stageDeals(stage.id).map((deal) => (
                    <div
                      key={deal.id}
                      draggable
                      onDragStart={() => setDraggedDealId(deal.id)}
                      onDragEnd={() => setDraggedDealId(null)}
                      className="cursor-pointer rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md"
                      onClick={() => openEditModal(deal)}
                    >
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-gray-900">{deal.name}</h3>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            deleteDeal(deal.id);
                          }}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="mb-3 text-lg font-bold text-gray-900">
                        {formatCurrency(deal.amount)}
                      </p>
                      <div className="space-y-1.5 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          <span>{formatDate(deal.closeDate)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Building2 size={12} />
                          <span>{deal.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User size={12} />
                          <span>{deal.owner}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${probabilityColor(
                            deal.probability
                          )}`}
                        >
                          {deal.probability}% probability
                        </span>
                        <span className="text-xs text-gray-400">{deal.pipeline}</span>
                      </div>
                    </div>
                  ))}

                  {stageDeals(stage.id).length === 0 && (
                    <div className="rounded-lg border border-dashed border-gray-200 px-4 py-8 text-center text-sm text-gray-400">
                      No deals in this stage
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-3">Deal</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">Close Date</th>
                  <th className="px-4 py-3">Owner</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Probability</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {filteredDeals.map((deal) => (
                  <tr key={deal.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-[#ff7a59]">{deal.name}</td>
                    <td className="px-4 py-3">{formatCurrency(deal.amount)}</td>
                    <td className="px-4 py-3">
                      <span
                        className="rounded-full px-2 py-1 text-xs font-medium text-gray-700"
                        style={{
                          backgroundColor:
                            STAGES.find((stage) => stage.id === deal.stage)?.color ?? "#f3f4f6",
                        }}
                      >
                        {STAGES.find((stage) => stage.id === deal.stage)?.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">{formatDate(deal.closeDate)}</td>
                    <td className="px-4 py-3">{deal.owner}</td>
                    <td className="px-4 py-3">{deal.company}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${probabilityColor(
                          deal.probability
                        )}`}
                      >
                        {deal.probability}%
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(deal)}
                          className="text-gray-500 hover:text-gray-800"
                        >
                          <MoreHorizontal size={16} />
                        </button>
                        <button
                          onClick={() => deleteDeal(deal.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredDeals.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-10 text-center text-sm text-gray-500">
                      No deals match the current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal
        title={editingDealId ? "Edit deal" : "Create deal"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={saveDeal}
        okText={editingDealId ? "Save changes" : "Create deal"}
        destroyOnHidden
      >
        <div className="space-y-4 pt-2">
          <label className="block text-sm text-gray-700">
            Deal name
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Enterprise renewal"
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-gray-700">
              Amount
              <input
                type="number"
                min="0"
                value={form.amount}
                onChange={(event) => setForm({ ...form, amount: event.target.value })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm text-gray-700">
              Close date
              <input
                type="date"
                value={form.closeDate}
                onChange={(event) => setForm({ ...form, closeDate: event.target.value })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-gray-700">
              Pipeline
              <select
                value={form.pipeline}
                onChange={(event) => setForm({ ...form, pipeline: event.target.value })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              >
                {PIPELINES.map((pipeline) => (
                  <option key={pipeline}>{pipeline}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-gray-700">
              Stage
              <select
                value={form.stage}
                onChange={(event) =>
                  setForm({ ...form, stage: event.target.value as DealStage })
                }
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              >
                {STAGES.map((stage) => (
                  <option key={stage.id} value={stage.id}>
                    {stage.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-gray-700">
              Deal owner
              <select
                value={form.owner}
                onChange={(event) => setForm({ ...form, owner: event.target.value })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              >
                {OWNERS.map((owner) => (
                  <option key={owner}>{owner}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-gray-700">
              Company
              <select
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              >
                {COMPANIES.map((company) => (
                  <option key={company}>{company}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-sm text-gray-700">
            Probability
            <div className="mt-1 flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="100"
                value={form.probability}
                onChange={(event) => setForm({ ...form, probability: event.target.value })}
                className="w-full"
              />
              <span className="w-12 text-right text-sm text-gray-500">{form.probability}%</span>
            </div>
          </label>

          {editingDealId && (
            <button
              onClick={() => deleteDeal(editingDealId)}
              className="inline-flex items-center gap-2 text-sm text-red-600"
            >
              <Trash2 size={14} />
              Delete this deal
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Deals;
