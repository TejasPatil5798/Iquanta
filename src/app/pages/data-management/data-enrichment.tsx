import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { CheckCircle2, Search, Sparkles, Zap } from "lucide-react";
import { enrichmentExclusions, enrichmentMappings, enrichmentTasks } from "../data-management-data";

export function DataEnrichment() {
  const [credits, setCredits] = useState(1250);
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState(enrichmentTasks);

  const filteredTasks = useMemo(() => {
    const term = search.trim().toLowerCase();
    return tasks.filter((task) => `${task.title} ${task.type}`.toLowerCase().includes(term));
  }, [search, tasks]);

  const runTask = (taskId: string) => {
    const task = tasks.find((item) => item.id === taskId);
    if (!task) return;
    if (credits < task.credits) {
      toast.error("Not enough enrichment credits remaining");
      return;
    }

    setCredits((current) => current - task.credits);
    setTasks((current) => current.filter((item) => item.id !== taskId));
    toast.success(`${task.title} started`);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold text-slate-900">Data enrichment</h1>
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="size-3" />
                Breeze Intelligence
              </Badge>
            </div>
            <p className="text-sm text-slate-600">Map enrichment fields, exclude records, and spend credits on the highest-value updates first.</p>
          </div>
          <Card className="w-full max-w-sm border-slate-200 shadow-none">
            <CardContent className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-600">
                  <Zap className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">{credits} credits remaining</div>
                  <div className="text-xs text-slate-500">Refreshes monthly</div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => toast.message("Credit management opened")}>Manage</Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="gap-6">
          <TabsList className="w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mapping">Mapping</TabsTrigger>
            <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Popular enrichment tasks</CardTitle>
                  <CardDescription>Search tasks and trigger runs directly from the command center.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                    <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search company or contact enrichment" className="pl-9" />
                  </div>
                  <div className="space-y-3">
                    {filteredTasks.map((task) => (
                      <div key={task.id} className="flex flex-col gap-3 rounded-2xl border p-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <p className="font-medium text-slate-900">{task.title}</p>
                            <Badge variant="outline">{task.type}</Badge>
                          </div>
                          <p className="text-sm text-slate-600">{task.coverage}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-medium text-slate-700">{task.credits} credits</p>
                          <Button onClick={() => runTask(task.id)}>Run task</Button>
                        </div>
                      </div>
                    ))}
                    {filteredTasks.length === 0 ? (
                      <div className="rounded-2xl border border-dashed p-8 text-center text-sm text-slate-500">No enrichment tasks match the current search.</div>
                    ) : null}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Coverage snapshot</CardTitle>
                  <CardDescription>Current enrichment performance across objects.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Company records refreshed", value: "12,482", tone: "text-emerald-600" },
                    { label: "Contact records refreshed", value: "8,931", tone: "text-cyan-600" },
                    { label: "Fields mapped", value: "41", tone: "text-slate-900" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                      <div className={`text-2xl font-semibold ${item.tone}`}>{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mapping">
            <Card>
              <CardHeader>
                <CardTitle>Field mapping</CardTitle>
                <CardDescription>Review source fields before updates are written back to your CRM.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {enrichmentMappings.map((mapping) => (
                  <div key={mapping.source} className="flex flex-col gap-3 rounded-2xl border p-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-slate-900">{mapping.source}</p>
                      <p className="text-sm text-slate-600">Mapped to `{mapping.target}`</p>
                    </div>
                    <Badge variant={mapping.status === "Mapped" ? "secondary" : "outline"}>{mapping.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exclusions">
            <Card>
              <CardHeader>
                <CardTitle>Exclusion lists</CardTitle>
                <CardDescription>Keep sensitive or low-value records out of automated enrichment runs.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                {enrichmentExclusions.map((exclusion) => (
                  <div key={exclusion.id} className="rounded-2xl border p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600" />
                      <p className="font-medium text-slate-900">{exclusion.label}</p>
                    </div>
                    <p className="text-sm text-slate-600">{exclusion.count} rules configured</p>
                    <Button variant="outline" size="sm" className="mt-4" onClick={() => toast.message(`${exclusion.label} opened`)}>
                      Review list
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
