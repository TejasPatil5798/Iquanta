import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Cable, FileUp, RefreshCw, Search } from "lucide-react";
import { integrationRecords, type IntegrationRecord } from "../data-management-data";

export function DataIntegration() {
  const [records, setRecords] = useState<IntegrationRecord[]>(integrationRecords);
  const [query, setQuery] = useState("");

  const filterRecords = (type: IntegrationRecord["type"] | "All") =>
    records.filter((record) => {
      const matchesTab = type === "All" || record.type === type;
      const matchesQuery = `${record.name} ${record.object} ${record.status}`.toLowerCase().includes(query.toLowerCase());
      return matchesTab && matchesQuery;
    });

  const markHealthy = (recordId: string) => {
    setRecords((current) =>
      current.map((record) =>
        record.id === recordId ? { ...record, status: "Healthy", updatedAt: "Just now" } : record,
      ),
    );
    toast.success("Integration marked healthy");
  };

  const summary = useMemo(
    () => ({
      healthy: records.filter((item) => item.status === "Healthy").length,
      attention: records.filter((item) => item.status === "Needs attention").length,
      paused: records.filter((item) => item.status === "Paused").length,
    }),
    [records],
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900">Data integration</h1>
            <p className="text-sm text-slate-600">Monitor file imports, app syncs, and warehouse pipelines from one place.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => toast.message("Connected apps opened")}>
              <Cable className="size-4" />
              Connected apps
            </Button>
            <Button onClick={() => toast.success("New file import started")}>
              <FileUp className="size-4" />
              Import data
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Healthy", value: summary.healthy, tone: "text-emerald-600" },
            { label: "Needs attention", value: summary.attention, tone: "text-amber-600" },
            { label: "Paused", value: summary.paused, tone: "text-slate-600" },
          ].map((item) => (
            <Card key={item.label}>
              <CardContent className="p-5">
                <div className={`text-3xl font-semibold ${item.tone}`}>{item.value}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Integration monitor</CardTitle>
            <CardDescription>Search the integration log and resolve failing pipelines.</CardDescription>
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search imports and syncs" className="pl-9" />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="All" className="gap-4">
              <TabsList className="w-fit">
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="File import">File imports</TabsTrigger>
                <TabsTrigger value="App sync">App syncs</TabsTrigger>
                <TabsTrigger value="Data studio sync">Data studio syncs</TabsTrigger>
              </TabsList>
              {(["All", "File import", "App sync", "Data studio sync"] as const).map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Object</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>Updated</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filterRecords(tab).map((record) => (
                        <TableRow key={record.id}>
                          <TableCell className="font-medium text-slate-900">{record.name}</TableCell>
                          <TableCell>{record.type}</TableCell>
                          <TableCell>{record.object}</TableCell>
                          <TableCell>
                            <Badge
                              variant={record.status === "Healthy" ? "secondary" : record.status === "Paused" ? "outline" : "destructive"}
                              className={record.status === "Needs attention" ? "bg-amber-500" : ""}
                            >
                              {record.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{record.volume}</TableCell>
                          <TableCell>{record.updatedAt}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={record.status === "Healthy"}
                              onClick={() => markHealthy(record.id)}
                            >
                              <RefreshCw className="size-4" />
                              Resolve
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}