import React, { useState } from "react";
import { X, Plus, Trash2, Pencil } from "lucide-react";

export function CntLandingPages() {
  return <LandingPagesUI />;
}

type Page = {
  id: number;
  name: string;
  status: "Draft" | "Published";
  createdAt: string;
};

function LandingPagesUI() {
  const [showBanner, setShowBanner] = useState(true);
  const [pages, setPages] = useState<Page[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Page | null>(null);

  const [form, setForm] = useState({ name: "" });

  const resetForm = () => {
    setForm({ name: "" });
    setEditing(null);
  };

  const openCreate = () => {
    resetForm();
    setShowModal(true);
  };

  const openEdit = (p: Page) => {
    setEditing(p);
    setForm({ name: p.name });
    setShowModal(true);
  };

  const savePage = () => {
    if (!form.name.trim()) return;

    const today = new Date().toISOString().split("T")[0];

    if (editing) {
      setPages((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...p, name: form.name } : p)),
      );
    } else {
      const newPage: Page = {
        id: Date.now(),
        name: form.name,
        status: "Draft",
        createdAt: today,
      };
      setPages((prev) => [newPage, ...prev]);
    }

    setShowModal(false);
    resetForm();
  };

  const deletePage = (id: number) => {
    setPages((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleStatus = (id: number) => {
    setPages((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Draft" ? "Published" : "Draft" }
          : p,
      ),
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      {/* Banner */}
      {showBanner && (
        <div className="bg-white border rounded-lg p-4 flex justify-between items-center mb-6">
          <div>
            <p className="font-medium">
              Align your landing page design with your brand
            </p>
            <p className="text-xs text-gray-500">
              Brand kit helps align your landing pages.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="border px-3 py-1 rounded text-sm">
              Set up Brand Kit
            </button>
            <button onClick={() => setShowBanner(false)}>
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-semibold">Landing pages</h1>
        <button
          onClick={openCreate}
          className="bg-black text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} /> Create
        </button>
      </div>

      {/* Empty State */}
      {pages.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-lg font-semibold mb-2">No landing pages yet</h2>
          <p className="text-gray-500 mb-4">
            Create your first landing page to get started.
          </p>
          <button
            onClick={openCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create landing page
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Status</th>
                <th className="p-3">Created</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleStatus(p.id)}
                      className={`px-2 py-1 rounded text-xs ${
                        p.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200"
                      }`}
                    >
                      {p.status}
                    </button>
                  </td>
                  <td className="p-3">{p.createdAt}</td>
                  <td className="p-3 flex gap-3">
                    <button onClick={() => openEdit(p)}>
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => deletePage(p.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {editing ? "Edit Landing Page" : "Create Landing Page"}
            </h2>

            <input
              placeholder="Page Name"
              value={form.name}
              onChange={(e) => setForm({ name: e.target.value })}
              className="border p-2 rounded w-full mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={savePage}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
