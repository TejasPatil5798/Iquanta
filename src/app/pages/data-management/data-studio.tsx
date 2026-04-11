import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Textarea } from "../../components/ui/textarea";
import { Database, Plus, Search, Share2 } from "lucide-react";
import { studioDatasets, type StudioDataset } from "../data-management-data";

export function DataStudio() {
  const [datasets, setDatasets] = useState<StudioDataset[]>(studioDatasets);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState({ name: "", source: "", notes: "" });

  const filteredDatasets = useMemo(() => {
    return datasets.filter((dataset) => {
      const matchesQuery = `${dataset.name} ${dataset.source} ${dataset.owner}`.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "All" || dataset.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [datasets, query, status]);

  const createDataset = () => {
    if (!draft.name.trim() || !draft.source.trim()) {
      toast.error("Dataset name and source are required");
      return;
    }
    const newDataset: StudioDataset = {
      id: `ds-${Date.now()}`,
      name: draft.name.trim(),
      source: draft.source.trim(),
      status: "Draft",
      rows: "0",
      owner: "You",
      updatedAt: "Just now",
    };
    setDatasets((current) => [newDataset, ...current]);
    setDraft({ name: "", source: "", notes: "" });
    setIsOpen(false);
    toast.success("Dataset created");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900">Data studio</h1>
            <p className="text-sm text-slate-600">Create shared datasets, monitor publish status, and keep blended sources discoverable.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => toast.message("Workspace share panel opened")}>
              <Share2 className="size-4" />
              Share
            </Button>
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="size-4" />
              Create dataset
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Dataset library</CardTitle>
            <CardDescription>Search and filter datasets by owner, source, or publish state.</CardDescription>
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search datasets" className="pl-9" />
              </div>
              <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm">
                <option value="All">All statuses</option>
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Syncing">Syncing</option>
              </select>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Datasets", value: datasets.length },
                { label: "Published", value: datasets.filter((item) => item.status === "Published").length },
                { label: "Syncing", value: datasets.filter((item) => item.status === "Syncing").length },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-3xl font-semibold text-slate-900">{item.value}</div>
                  <div className="text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Rows</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDatasets.map((dataset) => (
                  <TableRow key={dataset.id}>
                    <TableCell className="font-medium text-slate-900">
                      <div className="flex items-center gap-2">
                        <Database className="size-4 text-cyan-600" />
                        {dataset.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={dataset.status === "Published" ? "secondary" : dataset.status === "Syncing" ? "default" : "outline"} className={dataset.status === "Syncing" ? "bg-cyan-600 text-white" : ""}>
                        {dataset.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{dataset.source}</TableCell>
                    <TableCell>{dataset.rows}</TableCell>
                    <TableCell>{dataset.owner}</TableCell>
                    <TableCell>{dataset.updatedAt}</TableCell>
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
            <DialogTitle>Create dataset</DialogTitle>
            <DialogDescription>Register a new blended dataset for your workspace.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input value={draft.name} onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))} placeholder="Dataset name" />
            <Input value={draft.source} onChange={(event) => setDraft((current) => ({ ...current, source: event.target.value }))} placeholder="Primary sources" />
            <Textarea value={draft.notes} onChange={(event) => setDraft((current) => ({ ...current, notes: event.target.value }))} placeholder="Optional notes or intended use" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={createDataset}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
