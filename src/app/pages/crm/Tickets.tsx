import React, { useEffect, useMemo, useState } from "react";
import { LayoutGrid, List, Mail, Phone, Plus, Search, Trash2, X } from "lucide-react";
import { Modal } from "antd";

type TicketStatus = "New" | "In progress" | "Waiting on contact" | "Closed";
type TicketPriority = "High" | "Medium" | "Low";

interface Reply {
  id: string;
  author: string;
  message: string;
  createdAt: string;
}

interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: string;
  owner: string;
  requester: string;
  company: string;
  createdAt: string;
  lastActivity: string;
  description: string;
  replies: Reply[];
}

const STORAGE_KEY = "iquanta.crm.tickets";
const STATUSES: TicketStatus[] = ["New", "In progress", "Waiting on contact", "Closed"];
const PRIORITIES: TicketPriority[] = ["High", "Medium", "Low"];
const OWNERS = ["John Smith", "Sarah Johnson", "Mike Davis", "Emily Brown"];
const CATEGORIES = ["Technical Issue", "Billing", "Feature Request", "General Inquiry"];
const COMPANIES = ["Acme Corp", "Tech Solutions", "Global Inc", "StartUp Labs", "DataFlow Inc"];

const DEFAULT_TICKETS: Ticket[] = [
  {
    id: "1",
    subject: "Unable to access dashboard after login",
    status: "New",
    priority: "High",
    category: "Technical Issue",
    owner: "John Smith",
    requester: "Alice Johnson",
    company: "Acme Corp",
    createdAt: "2026-04-08T10:30:00.000Z",
    lastActivity: "2026-04-08T14:20:00.000Z",
    description: "Customer reports that after logging in, they cannot access the main dashboard.",
    replies: [{ id: "r1", author: "John Smith", message: "Checking auth logs now.", createdAt: "2026-04-08T12:10:00.000Z" }],
  },
  {
    id: "2",
    subject: "Question about billing cycle",
    status: "In progress",
    priority: "Medium",
    category: "Billing",
    owner: "Sarah Johnson",
    requester: "Bob Williams",
    company: "Tech Solutions",
    createdAt: "2026-04-07T09:15:00.000Z",
    lastActivity: "2026-04-08T11:45:00.000Z",
    description: "Customer wants to understand how the billing cycle works.",
    replies: [],
  },
];

interface TicketForm {
  subject: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  category: string;
  owner: string;
  requester: string;
  company: string;
}

const emptyForm = (): TicketForm => ({
  subject: "",
  description: "",
  priority: "Medium",
  status: "New",
  category: CATEGORIES[0],
  owner: OWNERS[0],
  requester: "",
  company: COMPANIES[0],
});

const badgeByStatus: Record<TicketStatus, string> = {
  New: "bg-indigo-100 text-indigo-700",
  "In progress": "bg-blue-100 text-blue-700",
  "Waiting on contact": "bg-amber-100 text-amber-800",
  Closed: "bg-emerald-100 text-emerald-700",
};

const badgeByPriority: Record<TicketPriority, string> = {
  High: "bg-rose-100 text-rose-700",
  Medium: "bg-amber-100 text-amber-800",
  Low: "bg-emerald-100 text-emerald-700",
};

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

const timeAgo = (value: string) => {
  const mins = Math.floor((Date.now() - new Date(value).getTime()) / 60000);
  if (mins < 60) return `${Math.max(mins, 1)}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
};

export function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    if (typeof window === "undefined") return DEFAULT_TICKETS;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_TICKETS;
    try {
      return JSON.parse(saved) as Ticket[];
    } catch {
      return DEFAULT_TICKETS;
    }
  });
  const [viewMode, setViewMode] = useState<"table" | "split" | "board">("split");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | TicketStatus>("All");
  const [priorityFilter, setPriorityFilter] = useState<"All" | TicketPriority>("All");
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(DEFAULT_TICKETS[0]?.id ?? null);
  const [replyDraft, setReplyDraft] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicketId, setEditingTicketId] = useState<string | null>(null);
  const [form, setForm] = useState<TicketForm>(emptyForm);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  }, [tickets]);

  const filteredTickets = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return tickets.filter((ticket) => {
      const matchesSearch =
        !term ||
        ticket.subject.toLowerCase().includes(term) ||
        ticket.requester.toLowerCase().includes(term) ||
        ticket.company.toLowerCase().includes(term);
      const matchesStatus = statusFilter === "All" || ticket.status === statusFilter;
      const matchesPriority = priorityFilter === "All" || ticket.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tickets, searchTerm, statusFilter, priorityFilter]);

  const selectedTicket =
    filteredTickets.find((ticket) => ticket.id === selectedTicketId) ??
    tickets.find((ticket) => ticket.id === selectedTicketId) ??
    null;

  useEffect(() => {
    if (!selectedTicketId && filteredTickets.length > 0) setSelectedTicketId(filteredTickets[0].id);
  }, [filteredTickets, selectedTicketId]);

  const openCreate = () => {
    setEditingTicketId(null);
    setForm(emptyForm());
    setIsModalOpen(true);
  };

  const openEdit = (ticket: Ticket) => {
    setEditingTicketId(ticket.id);
    setForm({
      subject: ticket.subject,
      description: ticket.description,
      priority: ticket.priority,
      status: ticket.status,
      category: ticket.category,
      owner: ticket.owner,
      requester: ticket.requester,
      company: ticket.company,
    });
    setIsModalOpen(true);
  };

  const saveTicket = () => {
    if (!form.subject.trim() || !form.requester.trim()) return;
    const now = new Date().toISOString();
    const nextTicket: Ticket = {
      id: editingTicketId ?? String(Date.now()),
      subject: form.subject.trim(),
      description: form.description.trim(),
      priority: form.priority,
      status: form.status,
      category: form.category,
      owner: form.owner,
      requester: form.requester.trim(),
      company: form.company,
      createdAt: tickets.find((ticket) => ticket.id === editingTicketId)?.createdAt ?? now,
      lastActivity: now,
      replies: tickets.find((ticket) => ticket.id === editingTicketId)?.replies ?? [],
    };

    setTickets((current) =>
      editingTicketId
        ? current.map((ticket) => (ticket.id === editingTicketId ? nextTicket : ticket))
        : [nextTicket, ...current]
    );
    setSelectedTicketId(nextTicket.id);
    setIsModalOpen(false);
  };

  const deleteTicket = (ticketId: string) => {
    setTickets((current) => current.filter((ticket) => ticket.id !== ticketId));
    if (selectedTicketId === ticketId) {
      const nextId = tickets.find((ticket) => ticket.id !== ticketId)?.id ?? null;
      setSelectedTicketId(nextId);
    }
  };

  const updateStatus = (ticketId: string, status: TicketStatus) => {
    const now = new Date().toISOString();
    setTickets((current) =>
      current.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status, lastActivity: now } : ticket
      )
    );
  };

  const addReply = () => {
    if (!selectedTicket || !replyDraft.trim()) return;
    const now = new Date().toISOString();
    const reply: Reply = {
      id: `${selectedTicket.id}-${Date.now()}`,
      author: "Support Team",
      message: replyDraft.trim(),
      createdAt: now,
    };

    setTickets((current) =>
      current.map((ticket) =>
        ticket.id === selectedTicket.id
          ? {
              ...ticket,
              replies: [...ticket.replies, reply],
              status: ticket.status === "New" ? "In progress" : ticket.status,
              lastActivity: now,
            }
          : ticket
      )
    );
    setReplyDraft("");
  };

  const columns = STATUSES.map((status) => ({
    status,
    tickets: filteredTickets.filter((ticket) => ticket.status === status),
  }));

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Tickets</h1>
            <p className="text-sm text-gray-500">Manage support work and keep replies attached to each conversation.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setViewMode("table")} className={`rounded-md border px-3 py-2 text-sm ${viewMode === "table" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700"}`}>Table</button>
            <button onClick={() => setViewMode("split")} className={`rounded-md border px-3 py-2 text-sm ${viewMode === "split" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700"}`}><span className="inline-flex items-center gap-2"><List size={14} />Split</span></button>
            <button onClick={() => setViewMode("board")} className={`rounded-md border px-3 py-2 text-sm ${viewMode === "board" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700"}`}><span className="inline-flex items-center gap-2"><LayoutGrid size={14} />Board</span></button>
            <button onClick={openCreate} className="inline-flex items-center gap-2 rounded-md bg-[#ff7a59] px-4 py-2 text-sm font-medium text-white"><Plus size={16} />Add ticket</button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by subject, requester, or company" className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-10 text-sm outline-none focus:border-[#ff7a59]" />
            {searchTerm && <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><X size={14} /></button>}
          </div>
          <div className="flex flex-wrap gap-2">
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "All" | TicketStatus)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">
              <option value="All">All statuses</option>
              {STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
            </select>
            <select value={priorityFilter} onChange={(event) => setPriorityFilter(event.target.value as "All" | TicketPriority)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">
              <option value="All">All priorities</option>
              {PRIORITIES.map((priority) => <option key={priority} value={priority}>{priority}</option>)}
            </select>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">{filteredTickets.length} tickets</div>
          </div>
        </div>
      </div>

      {viewMode === "table" && (
        <div className="p-6">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Priority</th>
                  <th className="px-4 py-3">Owner</th>
                  <th className="px-4 py-3">Requester</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Last Activity</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-[#ff7a59]">{ticket.subject}</td>
                    <td className="px-4 py-3"><span className={`rounded-full px-2 py-1 text-xs font-medium ${badgeByStatus[ticket.status]}`}>{ticket.status}</span></td>
                    <td className="px-4 py-3"><span className={`rounded-full px-2 py-1 text-xs font-medium ${badgeByPriority[ticket.priority]}`}>{ticket.priority}</span></td>
                    <td className="px-4 py-3">{ticket.owner}</td>
                    <td className="px-4 py-3">{ticket.requester}</td>
                    <td className="px-4 py-3">{ticket.company}</td>
                    <td className="px-4 py-3 text-gray-500">{timeAgo(ticket.lastActivity)}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => { setSelectedTicketId(ticket.id); setViewMode("split"); }} className="text-sm text-gray-600 hover:text-gray-900">View</button>
                        <button onClick={() => openEdit(ticket)} className="text-sm text-gray-600 hover:text-gray-900">Edit</button>
                        <button onClick={() => deleteTicket(ticket.id)} className="text-sm text-red-500 hover:text-red-700">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredTickets.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-10 text-center text-sm text-gray-500">No tickets match the current filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {viewMode === "board" && (
        <div className="overflow-x-auto p-6">
          <div className="flex min-w-max gap-4">
            {columns.map((column) => (
              <div key={column.status} className="w-80 rounded-xl border border-gray-200 bg-white">
                <div className="flex items-center justify-between rounded-t-xl bg-gray-50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">{column.status}</span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs text-gray-500">{column.tickets.length}</span>
                  </div>
                </div>
                <div className="space-y-3 p-3">
                  {column.tickets.map((ticket) => (
                    <button key={ticket.id} onClick={() => { setSelectedTicketId(ticket.id); setViewMode("split"); }} className="w-full rounded-lg border border-gray-200 p-3 text-left shadow-sm transition hover:shadow-md">
                      <h3 className="mb-2 text-sm font-semibold text-gray-900">{ticket.subject}</h3>
                      <div className="mb-2 flex items-center gap-2">
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${badgeByPriority[ticket.priority]}`}>{ticket.priority}</span>
                        <span className="text-xs text-gray-500">{ticket.category}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{ticket.requester}</span>
                        <span>{timeAgo(ticket.lastActivity)}</span>
                      </div>
                    </button>
                  ))}
                  {column.tickets.length === 0 && <div className="rounded-lg border border-dashed border-gray-200 px-4 py-8 text-center text-sm text-gray-400">Nothing here yet</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === "split" && (
        <div className="grid min-h-[calc(100vh-165px)] grid-cols-1 lg:grid-cols-[420px_1fr]">
          <div className="border-r border-gray-200 bg-white">
            {filteredTickets.length === 0 ? (
              <div className="p-10 text-center text-sm text-gray-500">No tickets match the current filters.</div>
            ) : (
              filteredTickets.map((ticket) => (
                <button key={ticket.id} onClick={() => setSelectedTicketId(ticket.id)} className={`w-full border-b border-gray-100 px-5 py-4 text-left transition hover:bg-gray-50 ${selectedTicket?.id === ticket.id ? "bg-orange-50" : ""}`}>
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold text-gray-900">{ticket.subject}</h3>
                    <span className="text-xs text-gray-400">{timeAgo(ticket.lastActivity)}</span>
                  </div>
                  <div className="mb-2 flex gap-2">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${badgeByStatus[ticket.status]}`}>{ticket.status}</span>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${badgeByPriority[ticket.priority]}`}>{ticket.priority}</span>
                  </div>
                  <div className="text-xs text-gray-500">{ticket.requester} • {ticket.company}</div>
                </button>
              ))
            )}
          </div>

          <div className="bg-gray-50 p-6">
            {selectedTicket ? (
              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{selectedTicket.subject}</h2>
                      <p className="mt-1 text-sm text-gray-500">Opened by {selectedTicket.requester} from {selectedTicket.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => openEdit(selectedTicket)} className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">Edit</button>
                      <button onClick={() => deleteTicket(selectedTicket.id)} className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-600">Delete</button>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${badgeByStatus[selectedTicket.status]}`}>{selectedTicket.status}</span>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${badgeByPriority[selectedTicket.priority]}`}>{selectedTicket.priority}</span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">{selectedTicket.category}</span>
                  </div>
                  <p className="text-sm leading-6 text-gray-700">{selectedTicket.description}</p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-3 text-sm font-semibold text-gray-900">Conversation</h3>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <div className="mb-1 text-sm font-medium text-gray-900">{selectedTicket.requester}</div>
                      <div className="mb-2 text-xs text-gray-500">{formatDateTime(selectedTicket.createdAt)}</div>
                      <p className="text-sm text-gray-700">{selectedTicket.description}</p>
                    </div>
                    {selectedTicket.replies.map((reply) => (
                      <div key={reply.id} className="rounded-lg border border-gray-100 p-4">
                        <div className="mb-1 text-sm font-medium text-gray-900">{reply.author}</div>
                        <div className="mb-2 text-xs text-gray-500">{formatDateTime(reply.createdAt)}</div>
                        <p className="text-sm text-gray-700">{reply.message}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-3 text-sm font-semibold text-gray-900">Reply</h3>
                  <textarea value={replyDraft} onChange={(event) => setReplyDraft(event.target.value)} rows={4} placeholder="Type your response..." className="w-full rounded-md border border-gray-300 p-3 text-sm outline-none focus:border-[#ff7a59]" />
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Mail size={16} />
                      <Phone size={16} />
                    </div>
                    <button onClick={addReply} className="rounded-md bg-[#ff7a59] px-4 py-2 text-sm font-medium text-white">Send reply</button>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-4 text-sm font-semibold text-gray-900">Properties</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div><p className="text-xs text-gray-500">Owner</p><p className="text-sm font-medium text-gray-900">{selectedTicket.owner}</p></div>
                    <div><p className="text-xs text-gray-500">Created</p><p className="text-sm font-medium text-gray-900">{formatDateTime(selectedTicket.createdAt)}</p></div>
                    <div><p className="text-xs text-gray-500">Last activity</p><p className="text-sm font-medium text-gray-900">{formatDateTime(selectedTicket.lastActivity)}</p></div>
                    <div>
                      <p className="text-xs text-gray-500">Quick status change</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {STATUSES.map((status) => (
                          <button key={status} onClick={() => updateStatus(selectedTicket.id, status)} className={`rounded-full px-3 py-1 text-xs font-medium ${selectedTicket.status === status ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}>{status}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white text-sm text-gray-500">Select a ticket to view details</div>
            )}
          </div>
        </div>
      )}

      <Modal title={editingTicketId ? "Edit ticket" : "Create ticket"} open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={saveTicket} okText={editingTicketId ? "Save changes" : "Create ticket"} destroyOnHidden>
        <div className="space-y-4 pt-2">
          <label className="block text-sm text-gray-700">Subject<input value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
          <label className="block text-sm text-gray-700">Description<textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-gray-700">Priority<select value={form.priority} onChange={(event) => setForm({ ...form, priority: event.target.value as TicketPriority })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">{PRIORITIES.map((priority) => <option key={priority} value={priority}>{priority}</option>)}</select></label>
            <label className="block text-sm text-gray-700">Status<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as TicketStatus })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">{STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}</select></label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-gray-700">Category<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">{CATEGORIES.map((category) => <option key={category}>{category}</option>)}</select></label>
            <label className="block text-sm text-gray-700">Owner<select value={form.owner} onChange={(event) => setForm({ ...form, owner: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">{OWNERS.map((owner) => <option key={owner}>{owner}</option>)}</select></label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-gray-700">Requester<input value={form.requester} onChange={(event) => setForm({ ...form, requester: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" /></label>
            <label className="block text-sm text-gray-700">Company<select value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">{COMPANIES.map((company) => <option key={company}>{company}</option>)}</select></label>
          </div>
          {editingTicketId && <button onClick={() => deleteTicket(editingTicketId)} className="inline-flex items-center gap-2 text-sm text-red-600"><Trash2 size={14} />Delete this ticket</button>}
        </div>
      </Modal>
    </div>
  );
}

export default Tickets;
