import React, { useEffect, useMemo, useState } from "react";
import { BookOpen, Copy, Download, LayoutGrid, List, Plus, Search, Star, Trash2, X } from "lucide-react";
import { Modal } from "antd";

type PlaybookStatus = "Active" | "Draft";

interface Playbook {
  id: string;
  name: string;
  description: string;
  type: string;
  status: PlaybookStatus;
  owner: string;
  sections: number;
  lastUsed: string;
  usageCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "iquanta.crm.playbooks";
const OWNERS = ["John Smith", "Sarah Johnson", "Mike Davis", "Emily Brown"];
const TYPES = ["Sales", "Support", "Onboarding", "Marketing"];
const DEFAULT_PLAYBOOKS: Playbook[] = [
  { id: "1", name: "Sales Discovery Call", description: "Guide for effective discovery calls.", type: "Sales", status: "Active", owner: "John Smith", sections: 8, lastUsed: "2026-04-08T10:30:00.000Z", usageCount: 156, rating: 4.8, createdAt: "2026-01-15", updatedAt: "2026-03-20" },
  { id: "2", name: "Product Demo Script", description: "Step-by-step guide for product demonstrations.", type: "Sales", status: "Active", owner: "Sarah Johnson", sections: 12, lastUsed: "2026-04-07T14:20:00.000Z", usageCount: 234, rating: 4.9, createdAt: "2025-11-20", updatedAt: "2026-04-01" },
  { id: "3", name: "Support Response Pack", description: "Templates and escalation guidance for support agents.", type: "Support", status: "Draft", owner: "Emily Brown", sections: 10, lastUsed: "", usageCount: 0, rating: 0, createdAt: "2026-03-01", updatedAt: "2026-04-05" },
];

interface PlaybookForm {
  name: string;
  description: string;
  type: string;
  status: PlaybookStatus;
  owner: string;
  sections: string;
  rating: string;
}

const emptyForm = (): PlaybookForm => ({
  name: "",
  description: "",
  type: TYPES[0],
  status: "Draft",
  owner: OWNERS[0],
  sections: "6",
  rating: "4.5",
});

const formatDate = (value: string) => (value ? new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Never");

export function Playbooks() {
  const [playbooks, setPlaybooks] = useState<Playbook[]>(() => {
    if (typeof window === "undefined") return DEFAULT_PLAYBOOKS;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_PLAYBOOKS;
    try {
      return JSON.parse(saved) as Playbook[];
    } catch {
      return DEFAULT_PLAYBOOKS;
    }
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"All" | PlaybookStatus>("All");
  const [selectedPlaybookId, setSelectedPlaybookId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlaybookId, setEditingPlaybookId] = useState<string | null>(null);
  const [form, setForm] = useState<PlaybookForm>(emptyForm);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(playbooks));
  }, [playbooks]);

  const filteredPlaybooks = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return playbooks.filter((playbook) => {
      const matchesSearch = !term || playbook.name.toLowerCase().includes(term) || playbook.description.toLowerCase().includes(term);
      const matchesType = typeFilter === "All" || playbook.type === typeFilter;
      const matchesStatus = statusFilter === "All" || playbook.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [playbooks, searchTerm, typeFilter, statusFilter]);

  const selectedPlaybook = playbooks.find((playbook) => playbook.id === selectedPlaybookId) ?? null;

  const openCreate = () => {
    setEditingPlaybookId(null);
    setForm(emptyForm());
    setIsModalOpen(true);
  };

  const openEdit = (playbook: Playbook) => {
    setEditingPlaybookId(playbook.id);
    setForm({
      name: playbook.name,
      description: playbook.description,
      type: playbook.type,
      status: playbook.status,
      owner: playbook.owner,
      sections: String(playbook.sections),
      rating: String(playbook.rating || 4.5),
    });
    setIsModalOpen(true);
  };

  const savePlaybook = () => {
    if (!form.name.trim()) return;
    const today = new Date().toISOString();
    const nextPlaybook: Playbook = {
      id: editingPlaybookId ?? String(Date.now()),
      name: form.name.trim(),
      description: form.description.trim(),
      type: form.type,
      status: form.status,
      owner: form.owner,
      sections: Number(form.sections) || 0,
      lastUsed: playbooks.find((playbook) => playbook.id === editingPlaybookId)?.lastUsed ?? "",
      usageCount: playbooks.find((playbook) => playbook.id === editingPlaybookId)?.usageCount ?? 0,
      rating: Number(form.rating) || 0,
      createdAt: playbooks.find((playbook) => playbook.id === editingPlaybookId)?.createdAt ?? today,
      updatedAt: today,
    };

    setPlaybooks((current) =>
      editingPlaybookId
        ? current.map((playbook) => (playbook.id === editingPlaybookId ? nextPlaybook : playbook))
        : [nextPlaybook, ...current]
    );
    setSelectedPlaybookId(nextPlaybook.id);
    setIsModalOpen(false);
  };

  const deletePlaybook = (playbookId: string) => {
    setPlaybooks((current) => current.filter((playbook) => playbook.id !== playbookId));
    if (selectedPlaybookId === playbookId) setSelectedPlaybookId(null);
  };

  const duplicatePlaybook = (playbook: Playbook) => {
    const now = new Date().toISOString();
    const copy: Playbook = {
      ...playbook,
      id: String(Date.now()),
      name: `${playbook.name} Copy`,
      status: "Draft",
      usageCount: 0,
      lastUsed: "",
      createdAt: now,
      updatedAt: now,
    };
    setPlaybooks((current) => [copy, ...current]);
  };

  const usePlaybook = (playbookId: string) => {
    const now = new Date().toISOString();
    setPlaybooks((current) =>
      current.map((playbook) =>
        playbook.id === playbookId
          ? { ...playbook, usageCount: playbook.usageCount + 1, lastUsed: now, status: "Active" }
          : playbook
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Playbooks</h1>
            <p className="text-sm text-gray-500">Create, reuse, and refine repeatable team workflows.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setViewMode("grid")} className={`rounded-md border px-3 py-2 text-sm ${viewMode === "grid" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700"}`}><span className="inline-flex items-center gap-2"><LayoutGrid size={14} />Grid</span></button>
            <button onClick={() => setViewMode("list")} className={`rounded-md border px-3 py-2 text-sm ${viewMode === "list" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700"}`}><span className="inline-flex items-center gap-2"><List size={14} />List</span></button>
            <button onClick={openCreate} className="inline-flex items-center gap-2 rounded-md bg-[#ff7a59] px-4 py-2 text-sm font-medium text-white"><Plus size={16} />Create playbook</button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search playbooks" className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-10 text-sm outline-none focus:border-[#ff7a59]" />
            {searchTerm && <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><X size={14} /></button>}
          </div>
          <div className="flex flex-wrap gap-2">
            <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">
              <option value="All">All types</option>
              {TYPES.map((type) => <option key={type}>{type}</option>)}
            </select>
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "All" | PlaybookStatus)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">
              <option value="All">All statuses</option>
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">{filteredPlaybooks.length} playbooks</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredPlaybooks.map((playbook) => (
              <div key={playbook.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff7a59] to-[#ff9a7b] text-white"><BookOpen size={20} /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{playbook.name}</h3>
                      <p className="text-xs text-gray-500">{playbook.owner}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${playbook.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-700"}`}>{playbook.status}</span>
                </div>
                <p className="mb-4 text-sm text-gray-600">{playbook.description}</p>
                <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{playbook.type}</span>
                  <span>{playbook.sections} sections</span>
                  <span>{playbook.usageCount} uses</span>
                </div>
                <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1"><Star size={12} className="fill-current text-yellow-400" />{playbook.rating || "-"}</span>
                  <span>Last used: {formatDate(playbook.lastUsed)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => { setSelectedPlaybookId(playbook.id); }} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">View</button>
                  <button onClick={() => usePlaybook(playbook.id)} className="rounded-md bg-gray-900 px-3 py-2 text-sm text-white">Use</button>
                  <button onClick={() => openEdit(playbook)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">Edit</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full">
              <thead><tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500"><th className="px-4 py-3">Name</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Owner</th><th className="px-4 py-3">Usage</th><th className="px-4 py-3">Rating</th><th className="px-4 py-3">Updated</th><th className="px-4 py-3">Actions</th></tr></thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {filteredPlaybooks.map((playbook) => (
                  <tr key={playbook.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-[#ff7a59]">{playbook.name}</td>
                    <td className="px-4 py-3">{playbook.type}</td>
                    <td className="px-4 py-3">{playbook.status}</td>
                    <td className="px-4 py-3">{playbook.owner}</td>
                    <td className="px-4 py-3">{playbook.usageCount}</td>
                    <td className="px-4 py-3">{playbook.rating || "-"}</td>
                    <td className="px-4 py-3">{formatDate(playbook.updatedAt)}</td>
                    <td className="px-4 py-3"><div className="flex gap-2"><button onClick={() => setSelectedPlaybookId(playbook.id)} className="text-sm text-gray-600">View</button><button onClick={() => openEdit(playbook)} className="text-sm text-gray-600">Edit</button><button onClick={() => deletePlaybook(playbook.id)} className="text-sm text-red-500">Delete</button></div></td>
                  </tr>
                ))}
                {filteredPlaybooks.length === 0 && <tr><td colSpan={8} className="px-4 py-10 text-center text-sm text-gray-500">No playbooks match the current filters.</td></tr>}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal title={selectedPlaybook?.name} open={!!selectedPlaybook} onCancel={() => setSelectedPlaybookId(null)} footer={null} width={720} destroyOnHidden>
        {selectedPlaybook && (
          <div className="space-y-5 pt-2">
            <p className="text-sm text-gray-600">{selectedPlaybook.description}</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-gray-50 p-4 text-center"><p className="text-2xl font-semibold text-gray-900">{selectedPlaybook.sections}</p><p className="text-xs text-gray-500">Sections</p></div>
              <div className="rounded-lg bg-gray-50 p-4 text-center"><p className="text-2xl font-semibold text-gray-900">{selectedPlaybook.usageCount}</p><p className="text-xs text-gray-500">Uses</p></div>
              <div className="rounded-lg bg-gray-50 p-4 text-center"><p className="text-2xl font-semibold text-gray-900">{selectedPlaybook.rating || "-"}</p><p className="text-xs text-gray-500">Rating</p></div>
              <div className="rounded-lg bg-gray-50 p-4 text-center"><p className="text-sm font-semibold text-gray-900">{formatDate(selectedPlaybook.lastUsed)}</p><p className="text-xs text-gray-500">Last used</p></div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><p className="text-xs text-gray-500">Owner</p><p className="font-medium text-gray-900">{selectedPlaybook.owner}</p></div>
              <div><p className="text-xs text-gray-500">Type</p><p className="font-medium text-gray-900">{selectedPlaybook.type}</p></div>
              <div><p className="text-xs text-gray-500">Created</p><p className="font-medium text-gray-900">{formatDate(selectedPlaybook.createdAt)}</p></div>
              <div><p className="text-xs text-gray-500">Updated</p><p className="font-medium text-gray-900">{formatDate(selectedPlaybook.updatedAt)}</p></div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => usePlaybook(selectedPlaybook.id)} className="rounded-md bg-[#ff7a59] px-4 py-2 text-sm font-medium text-white">Use playbook</button>
              <button onClick={() => duplicatePlaybook(selectedPlaybook)} className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700"><Copy size={14} />Duplicate</button>
              <button onClick={() => openEdit(selectedPlaybook)} className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700">Edit</button>
              <button onClick={() => deletePlaybook(selectedPlaybook.id)} className="inline-flex items-center gap-2 rounded-md border border-red-200 px-4 py-2 text-sm text-red-600"><Trash2 size={14} />Delete</button>
            </div>
          </div>
        )}
      </Modal>

      <Modal title={editingPlaybookId ? "Edit playbook" : "Create playbook"} open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={savePlaybook} okText={editingPlaybookId ? "Save changes" : "Create playbook"} destroyOnHidden>
        <div className="space-y-4 pt-2">
          <label className="block text-sm text-gray-700">Playbook name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
          <label className="block text-sm text-gray-700">Description<textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-gray-700">Type<select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">{TYPES.map((type) => <option key={type}>{type}</option>)}</select></label>
            <label className="block text-sm text-gray-700">Status<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as PlaybookStatus })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"><option value="Draft">Draft</option><option value="Active">Active</option></select></label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label className="block text-sm text-gray-700">Owner<select value={form.owner} onChange={(event) => setForm({ ...form, owner: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">{OWNERS.map((owner) => <option key={owner}>{owner}</option>)}</select></label>
            <label className="block text-sm text-gray-700">Sections<input type="number" min="0" value={form.sections} onChange={(event) => setForm({ ...form, sections: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
            <label className="block text-sm text-gray-700">Rating<input type="number" min="0" max="5" step="0.1" value={form.rating} onChange={(event) => setForm({ ...form, rating: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
          </div>
          {editingPlaybookId && <button onClick={() => deletePlaybook(editingPlaybookId)} className="inline-flex items-center gap-2 text-sm text-red-600"><Trash2 size={14} />Delete this playbook</button>}
        </div>
      </Modal>
    </div>
  );
}

export default Playbooks;
