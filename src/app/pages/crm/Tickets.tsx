import React, { useState } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  Filter,
  Trash2,
} from "lucide-react";

// ✅ Required export
export function Tickets() {
  return <TicketsPage />;
}

interface Ticket {
  id: number;
  title: string;
  owner: string;
  priority: string;
  status: string;
  createdAt: string;
  lastActivity: string;
}

function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [search, setSearch] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [newTicket, setNewTicket] = useState({
    title: "",
    owner: "",
    priority: "Low",
  });

  // ✅ Create Ticket
  const handleCreate = () => {
    if (!newTicket.title || !newTicket.owner) return;

    const today = new Date().toISOString().split("T")[0];

    const ticket: Ticket = {
      id: Date.now(),
      title: newTicket.title,
      owner: newTicket.owner,
      priority: newTicket.priority,
      status: "Open",
      createdAt: today,
      lastActivity: today,
    };

    setTickets([ticket, ...tickets]);
    setNewTicket({ title: "", owner: "", priority: "Low" });
  };

  // ✅ Delete Ticket
  const handleDelete = (id: number) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  // ✅ Toggle Status
  const toggleStatus = (id: number) => {
    setTickets(
      tickets.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === "Open" ? "Closed" : "Open",
              lastActivity: new Date().toISOString().split("T")[0],
            }
          : t
      )
    );
  };

  // ✅ Filter Logic
  const filtered = tickets.filter((t) => {
    return (
      t.title.toLowerCase().includes(search.toLowerCase()) &&
      (ownerFilter === "All" || t.owner === ownerFilter) &&
      (priorityFilter === "All" || t.priority === priorityFilter)
    );
  });

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* 🔝 Top Bar */}
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-xl md:text-2xl font-semibold">Tickets</h1>
          <span className="bg-gray-200 px-2 py-1 rounded text-sm">
            {filtered.length}
          </span>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={16} /> Add tickets
        </button>
      </div>

      {/* 🔍 Search + Filters */}
      <div className="bg-white p-3 rounded-xl shadow mb-4 flex flex-col md:flex-row gap-3 md:items-center">
        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-2 top-2.5 text-gray-400"
            size={16}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="border pl-8 pr-3 py-2 rounded-lg w-full"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <select
            onChange={(e) => setOwnerFilter(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          >
            <option>All</option>
            {[...new Set(tickets.map((t) => t.owner))].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>

          <select
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <button className="border px-3 py-2 rounded-lg flex items-center gap-1">
            <Filter size={14} /> Filters
          </button>
        </div>
      </div>

      {/* ➕ Create Ticket */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-medium mb-3">Create Ticket</h2>

        <div className="grid md:grid-cols-3 gap-3">
          <input
            placeholder="Title"
            value={newTicket.title}
            onChange={(e) =>
              setNewTicket({ ...newTicket, title: e.target.value })
            }
            className="border p-2 rounded"
          />

          <input
            placeholder="Owner"
            value={newTicket.owner}
            onChange={(e) =>
              setNewTicket({ ...newTicket, owner: e.target.value })
            }
            className="border p-2 rounded"
          />

          <select
            value={newTicket.priority}
            onChange={(e) =>
              setNewTicket({ ...newTicket, priority: e.target.value })
            }
            className="border p-2 rounded"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button
          onClick={handleCreate}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </div>

      {/* 📋 Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Owner</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
              <th className="p-3">Last Activity</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((t) => (
                <tr key={t.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{t.title}</td>
                  <td className="p-3">{t.owner}</td>
                  <td className="p-3">{t.priority}</td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleStatus(t.id)}
                      className={`px-2 py-1 rounded text-xs ${
                        t.status === "Open"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200"
                      }`}
                    >
                      {t.status}
                    </button>
                  </td>
                  <td className="p-3">{t.createdAt}</td>
                  <td className="p-3">{t.lastActivity}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center p-10 text-gray-500">
                  No tickets match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
