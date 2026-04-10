import React, { useEffect, useMemo, useState } from "react";
import { Eye, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { Modal } from "antd";

interface LandingPage {
  id: string;
  name: string;
  headline: string;
  status: "Draft" | "Published";
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "iquanta.content.landing-pages";
const DEFAULT_PAGES: LandingPage[] = [
  {
    id: "1",
    name: "Scholarship Campaign",
    headline: "Turn more visitors into qualified admissions leads",
    status: "Published",
    createdAt: "2026-04-01T08:00:00.000Z",
    updatedAt: "2026-04-09T09:30:00.000Z",
  },
];

const formatDate = (value: string) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export function CntLandingPages() {
  const [pages, setPages] = useState<LandingPage[]>(() => {
    if (typeof window === "undefined") return DEFAULT_PAGES;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_PAGES;
    try {
      return JSON.parse(saved) as LandingPage[];
    } catch {
      return DEFAULT_PAGES;
    }
  });
  const [search, setSearch] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  const [selectedPageId, setSelectedPageId] = useState<string | null>(DEFAULT_PAGES[0]?.id ?? null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState({ name: "", headline: "", status: "Draft" as "Draft" | "Published" });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  }, [pages]);

  const filteredPages = useMemo(() => {
    const term = search.trim().toLowerCase();
    return pages.filter((page) => !term || page.name.toLowerCase().includes(term) || page.headline.toLowerCase().includes(term));
  }, [pages, search]);

  const selectedPage = pages.find((page) => page.id === selectedPageId) ?? null;

  const openCreate = () => {
    setEditingId(null);
    setDraft({ name: "", headline: "", status: "Draft" });
    setIsModalOpen(true);
  };

  const openEdit = (page: LandingPage) => {
    setEditingId(page.id);
    setSelectedPageId(page.id);
    setDraft({ name: page.name, headline: page.headline, status: page.status });
    setIsModalOpen(true);
  };

  const savePage = () => {
    if (!draft.name.trim() || !draft.headline.trim()) return;
    const now = new Date().toISOString();
    const nextPage: LandingPage = {
      id: editingId ?? String(Date.now()),
      name: draft.name.trim(),
      headline: draft.headline.trim(),
      status: draft.status,
      createdAt: pages.find((page) => page.id === editingId)?.createdAt ?? now,
      updatedAt: now,
    };
    setPages((current) => (editingId ? current.map((page) => (page.id === editingId ? nextPage : page)) : [nextPage, ...current]));
    setSelectedPageId(nextPage.id);
    setIsModalOpen(false);
  };

  const deletePage = (pageId: string) => {
    setPages((current) => current.filter((page) => page.id !== pageId));
    if (selectedPageId === pageId) setSelectedPageId(null);
  };

  const toggleStatus = (pageId: string) => {
    const now = new Date().toISOString();
    setPages((current) =>
      current.map((page) =>
        page.id === pageId
          ? { ...page, status: page.status === "Draft" ? "Published" : "Draft", updatedAt: now }
          : page
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {showBanner && (
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-medium text-gray-900">Align your landing page design with your brand</p>
              <p className="text-sm text-gray-500">Create and manage campaign pages with reusable copy, clear status, and a live preview panel.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">Set up Brand Kit</button>
              <button onClick={() => setShowBanner(false)} className="text-gray-400"><X size={16} /></button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Landing pages</p>
          <h1 className="text-3xl font-semibold text-gray-900">Drive customers to your website with landing pages</h1>
        </div>
        <button onClick={openCreate} className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white"><Plus size={16} />Create landing page</button>
      </div>

      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search landing pages" className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-10 text-sm outline-none" />
          {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><X size={14} /></button>}
        </div>
        <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">{filteredPages.length} pages</div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full">
            <thead><tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500"><th className="px-4 py-3">Name</th><th className="px-4 py-3">Headline</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Updated</th><th className="px-4 py-3">Actions</th></tr></thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filteredPages.map((page) => (
                <tr key={page.id} className={`hover:bg-gray-50 ${selectedPageId === page.id ? "bg-orange-50/60" : ""}`}>
                  <td className="px-4 py-3 font-medium text-[#ff7a59]">{page.name}</td>
                  <td className="px-4 py-3 text-gray-600">{page.headline}</td>
                  <td className="px-4 py-3"><button onClick={() => toggleStatus(page.id)} className={`rounded-full px-2 py-1 text-xs font-medium ${page.status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-700"}`}>{page.status}</button></td>
                  <td className="px-4 py-3">{formatDate(page.updatedAt)}</td>
                  <td className="px-4 py-3"><div className="flex gap-2"><button onClick={() => setSelectedPageId(page.id)} className="inline-flex items-center gap-1 text-sm text-gray-600"><Eye size={14} />Preview</button><button onClick={() => openEdit(page)} className="inline-flex items-center gap-1 text-sm text-gray-600"><Pencil size={14} />Edit</button><button onClick={() => deletePage(page.id)} className="inline-flex items-center gap-1 text-sm text-red-500"><Trash2 size={14} />Delete</button></div></td>
                </tr>
              ))}
              {filteredPages.length === 0 && <tr><td colSpan={5} className="px-4 py-10 text-center text-sm text-gray-500">No landing pages match the current filters.</td></tr>}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#0f172a] p-5 text-white">
          {selectedPage ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{selectedPage.status}</p>
                  <h2 className="mt-2 text-2xl font-semibold">{selectedPage.name}</h2>
                </div>
                <button onClick={() => openEdit(selectedPage)} className="rounded-md border border-slate-600 px-3 py-2 text-sm text-slate-200">Edit</button>
              </div>
              <div className="rounded-2xl bg-white p-6 text-slate-900">
                <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">Conversion page</div>
                <h3 className="text-3xl font-semibold">{selectedPage.headline}</h3>
                <p className="mt-4 text-sm text-slate-600">Use this preview card to sense-check the main message and page status before publishing changes.</p>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-lg bg-slate-100 px-4 py-3 text-sm">Full name</div>
                  <div className="rounded-lg bg-slate-100 px-4 py-3 text-sm">Email address</div>
                  <button className="rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white">Get started</button>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-400">Created {formatDate(selectedPage.createdAt)} • Updated {formatDate(selectedPage.updatedAt)}</p>
            </>
          ) : (
            <div className="flex h-full min-h-[300px] items-center justify-center text-sm text-slate-400">Select a landing page to preview it here.</div>
          )}
        </div>
      </div>

      <Modal title={editingId ? "Edit landing page" : "Create landing page"} open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={savePage} okText={editingId ? "Save changes" : "Create page"} destroyOnHidden>
        <div className="space-y-4 pt-2">
          <label className="block text-sm text-gray-700">Page name<input value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
          <label className="block text-sm text-gray-700">Headline<textarea value={draft.headline} onChange={(event) => setDraft({ ...draft, headline: event.target.value })} rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
          <label className="block text-sm text-gray-700">Status<select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value as "Draft" | "Published" })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"><option value="Draft">Draft</option><option value="Published">Published</option></select></label>
          {editingId && <button onClick={() => deletePage(editingId)} className="inline-flex items-center gap-2 text-sm text-red-600"><Trash2 size={14} />Delete this landing page</button>}
        </div>
      </Modal>
    </div>
  );
}

export default CntLandingPages;
