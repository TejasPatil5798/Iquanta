import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { ChevronDown, Plus } from "lucide-react";
import { managedEvents, type ManagedEvent } from "../data-management-data";

export function EventManagement() {
  const [events, setEvents] = useState<ManagedEvent[]>(managedEvents);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("All");
  const [draft, setDraft] = useState({ name: "", source: "", owner: "" });

  const filteredEvents = useMemo(() => events.filter((event) => status === "All" || event.status === status), [events, status]);

  const createEvent = () => {
    if (!draft.name.trim() || !draft.source.trim() || !draft.owner.trim()) {
      toast.error("Name, source, and owner are required");
      return;
    }

    setEvents((current) => [
      {
        id: `evt-${Date.now()}`,
        name: draft.name.trim(),
        source: draft.source.trim(),
        owner: draft.owner.trim(),
        status: "Draft",
        volume: "Not collecting",
        lastSeen: "-",
      },
      ...current,
    ]);
    setDraft({ name: "", source: "", owner: "" });
    setIsOpen(false);
    toast.success("Event created");
  };

  const toggleStatus = (eventId: string) => {
    setEvents((current) =>
      current.map((event) =>
        event.id === eventId
          ? {
              ...event,
              status: event.status === "Live" ? "Paused" : "Live",
              lastSeen: event.status === "Live" ? "Paused now" : "Just now",
            }
          : event,
      ),
    );
    toast.success("Event status updated");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900">Event management</h1>
            <p className="text-sm text-slate-600">Define custom events, monitor collection health, and activate live tracking from one admin surface.</p>
          </div>
          <Button onClick={() => setIsOpen(true)}>
            Create an event
            <ChevronDown className="size-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Total events", value: events.length },
            { label: "Live", value: events.filter((item) => item.status === "Live").length },
            { label: "Draft", value: events.filter((item) => item.status === "Draft").length },
          ].map((item) => (
            <Card key={item.label}>
              <CardContent className="p-5">
                <div className="text-3xl font-semibold text-slate-900">{item.value}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Event catalog</CardTitle>
            <CardDescription>Track event definitions and toggle live collection without leaving the page.</CardDescription>
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-9 max-w-48 rounded-md border border-slate-200 bg-white px-3 text-sm">
              <option value="All">All statuses</option>
              <option value="Live">Live</option>
              <option value="Draft">Draft</option>
              <option value="Paused">Paused</option>
            </select>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>Last seen</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium text-slate-900">{event.name}</TableCell>
                    <TableCell>{event.source}</TableCell>
                    <TableCell>
                      <Badge variant={event.status === "Live" ? "secondary" : event.status === "Draft" ? "outline" : "destructive"}>
                        {event.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{event.volume}</TableCell>
                    <TableCell>{event.lastSeen}</TableCell>
                    <TableCell>{event.owner}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={() => toggleStatus(event.id)}>
                        {event.status === "Live" ? "Pause" : "Go live"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create an event</DialogTitle>
            <DialogDescription>Add a tracked event definition before routing it to analytics or automation.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input value={draft.name} onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))} placeholder="Event name" />
            <Input value={draft.source} onChange={(event) => setDraft((current) => ({ ...current, source: event.target.value }))} placeholder="Source application" />
            <Input value={draft.owner} onChange={(event) => setDraft((current) => ({ ...current, owner: event.target.value }))} placeholder="Owner team" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={createEvent}>
              <Plus className="size-4" />
              Create event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
