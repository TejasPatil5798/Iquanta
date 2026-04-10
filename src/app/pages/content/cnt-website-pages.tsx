import React, { useEffect, useMemo, useState } from "react";
import { Eye, LayoutGrid, List, Plus, Search, Trash2, X } from "lucide-react";
import { Modal } from "antd";

interface WebsitePage {
  id: string;
  name: string;
  slug: string;
  content: string;
  status: "Draft" | "Published";
  updatedAt: string;
}

const STORAGE_KEY = "iquanta.content.website-pages";
const DEFAULT_PAGES: WebsitePage[] = [
  {
    id: "1",
    name: "Home",
    slug: "home",
    status: "Published",
    content: "<section><h1>Welcome to Iquanta</h1><p>Your team can replace this with real site copy.</p></section>",
    updatedAt: "2026-04-09T09:00:00.000Z",
  },
];

const emptyDraft = () => ({ name: "", slug: "", content: "<section><h1>New page</h1><p>Start editing here.</p></section>", status: "Draft" });
const formatDate = (value: string) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export function CntWebsitePages() {
  const [pages, setPages] = useState<WebsitePage[]>(() => {
    if (typeof window === "undefined") return DEFAULT_PAGES;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_PAGES;
    try {
      return JSON.parse(saved) as WebsitePage[];
    } catch {
      return DEFAULT_PAGES;
    }
  });
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [draft, setDraft] = useState(emptyDraft);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  }, [pages]);

  const filteredPages = useMemo(() => {
    const term = search.trim().toLowerCase();
    return pages.filter((page) => !term || page.name.toLowerCase().includes(term) || page.slug.toLowerCase().includes(term));
  }, [pages, search]);

  const selectedPage = pages.find((page) => page.id === selectedPageId) ?? null;

  const openCreate = () => {
    setEditingPageId(null);
    setDraft(emptyDraft());
    setPreviewMode(false);
    setIsModalOpen(true);
  };

  const openEdit = (page: WebsitePage, preview = false) => {
    setEditingPageId(page.id);
    setSelectedPageId(page.id);
    setDraft({ name: page.name, slug: page.slug, content: page.content, status: page.status });
    setPreviewMode(preview);
    setIsModalOpen(true);
  };

  const savePage = () => {
    if (!draft.name.trim()) return;
    const now = new Date().toISOString();
    const nextPage: WebsitePage = {
      id: editingPageId ?? String(Date.now()),
      name: draft.name.trim(),  
      slug: slugify(draft.slug || draft.name),
      content: draft.content,
      status: draft.status as "Draft" | "Published",
      updatedAt: now,
    };

    setPages((current) =>
      editingPageId
        ? current.map((page) => (page.id === editingPageId ? nextPage : page))
        : [nextPage, ...current]
    );
    setSelectedPageId(nextPage.id);
    setIsModalOpen(false);
  };

  const deletePage = (pageId: string) => {
    setPages((current) => current.filter((page) => page.id !== pageId));
    if (selectedPageId === pageId) setSelectedPageId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-gray-500">Website pages</p>
            <h1 className="text-3xl font-semibold text-gray-900">Build and manage your website pages</h1>
            <p className="mt-2 text-sm text-gray-500">Create pages, edit HTML content, preview it live, and keep everything saved locally in the app.</p>
          </div>
          <button onClick={openCreate} className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white"><Plus size={16} />Create page</button>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search pages" className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-10 text-sm outline-none" />
          {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><X size={14} /></button>}
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setView("grid")} className={`rounded-md border px-3 py-2 text-sm ${view === "grid" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700"}`}><span className="inline-flex items-center gap-2"><LayoutGrid size={14} />Grid</span></button>
          <button onClick={() => setView("list")} className={`rounded-md border px-3 py-2 text-sm ${view === "list" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700"}`}><span className="inline-flex items-center gap-2"><List size={14} />List</span></button>
          <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">{filteredPages.length} pages</div>
        </div>
      </div>

      {filteredPages.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900">No website pages yet</h2>
          <p className="mt-2 text-sm text-gray-500">Create your first page to start building your site.</p>
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPages.map((page) => (
            <div key={page.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-4 rounded-lg bg-gradient-to-br from-emerald-100 to-cyan-100 p-4 text-sm text-gray-700">
                <div className="mb-2 text-xs uppercase tracking-wide text-gray-500">{page.status}</div>
                <div className="font-semibold">{page.name}</div>
                <div className="text-xs text-gray-500">/{page.slug}</div>
              </div>
              <div className="mb-4 text-xs text-gray-500">Updated {formatDate(page.updatedAt)}</div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => openEdit(page)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">Edit</button>
                <button onClick={() => openEdit(page, true)} className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"><Eye size={14} />Preview</button>
                <button onClick={() => deletePage(page.id)} className="inline-flex items-center gap-2 rounded-md border border-red-200 px-3 py-2 text-sm text-red-600"><Trash2 size={14} />Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full">
            <thead><tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500"><th className="px-4 py-3">Name</th><th className="px-4 py-3">Slug</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Updated</th><th className="px-4 py-3">Actions</th></tr></thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filteredPages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-[#ff7a59]">{page.name}</td>
                  <td className="px-4 py-3">/{page.slug}</td>
                  <td className="px-4 py-3">{page.status}</td>
                  <td className="px-4 py-3">{formatDate(page.updatedAt)}</td>
                  <td className="px-4 py-3"><div className="flex gap-2"><button onClick={() => openEdit(page)} className="text-sm text-gray-600">Edit</button><button onClick={() => openEdit(page, true)} className="text-sm text-gray-600">Preview</button><button onClick={() => deletePage(page.id)} className="text-sm text-red-500">Delete</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal title={editingPageId ? "Edit website page" : "Create website page"} open={isModalOpen} onCancel={() => { if (previewMode) { setPreviewMode(false); return; } setIsModalOpen(false); }} onOk={savePage} okText={editingPageId ? "Save changes" : "Create page"} destroyOnHidden footer={previewMode ? null : undefined} afterClose={() => setPreviewMode(false)}>
        {!previewMode ? (
          <div className="space-y-4 pt-2">
            <label className="block text-sm text-gray-700">Page name<input value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value, slug: draft.slug || slugify(event.target.value) })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block text-sm text-gray-700">Slug<input value={draft.slug} onChange={(event) => setDraft({ ...draft, slug: slugify(event.target.value) })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
              <label className="block text-sm text-gray-700">Status<select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value as "Draft" | "Published" })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"><option value="Draft">Draft</option><option value="Published">Published</option></select></label>
            </div>
            <label className="block text-sm text-gray-700">HTML content<textarea value={draft.content} onChange={(event) => setDraft({ ...draft, content: event.target.value })} rows={12} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm" /></label>
            <div className="flex justify-between">
              <button onClick={() => setPreviewMode(true)} className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700">Preview</button>
              {editingPageId && <button onClick={() => deletePage(editingPageId)} className="inline-flex items-center gap-2 text-sm text-red-600"><Trash2 size={14} />Delete this page</button>}
            </div>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{draft.name || "Untitled page"}</p>
                <p className="text-xs text-gray-500">/{slugify(draft.slug || draft.name || "new-page")}</p>
              </div>
              <button onClick={() => setPreviewMode(false)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">Back to editor</button>
            </div>
            <div className="max-h-[420px] overflow-auto rounded-xl border border-gray-200 bg-white p-4">
              <div dangerouslySetInnerHTML={{ __html: draft.content }} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CntWebsitePages;
