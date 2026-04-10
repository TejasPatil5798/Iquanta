import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Bot, Plus, Search, Sparkles, Wand2 } from "lucide-react";
import { agentActivityFeed, agentTemplates, type AgentActivity, type AgentTemplate } from "../data-management-data";

export function DataAgent() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [templates, setTemplates] = useState<AgentTemplate[]>(agentTemplates);
  const [activities, setActivities] = useState<AgentActivity[]>(agentActivityFeed);
  const [draft, setDraft] = useState({ name: "", category: "Research", prompt: "" });

  const filteredTemplates = useMemo(() => {
    const term = query.trim().toLowerCase();
    return templates.filter((template) =>
      [template.name, template.category, template.prompt].some((value) =>
        value.toLowerCase().includes(term),
      ),
    );
  }, [query, templates]);

  const launchTemplate = (template: AgentTemplate) => {
    setActivities((current) => [
      {
        id: `run-${Date.now()}`,
        title: template.name,
        status: "Running",
        owner: "You",
        updatedAt: "Just now",
      },
      ...current,
    ]);
    toast.success(`${template.name} started`);
  };

  const createTemplate = () => {
    if (!draft.name.trim() || !draft.prompt.trim()) {
      toast.error("Add a name and prompt before creating a smart property");
      return;
    }

    const newTemplate: AgentTemplate = {
      id: `agent-${Date.now()}`,
      name: draft.name.trim(),
      category: draft.category as AgentTemplate["category"],
      prompt: draft.prompt.trim(),
      impact: "New template",
    };

    setTemplates((current) => [newTemplate, ...current]);
    setDraft({ name: "", category: "Research", prompt: "" });
    setIsOpen(false);
    toast.success("Smart property created");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold text-slate-900">Data Agent</h1>
              <Badge variant="secondary">Beta</Badge>
            </div>
            <p className="max-w-2xl text-sm text-slate-600">
              Search reusable AI jobs, launch data tasks, and create smart properties for repeatable CRM operations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search prompts, actions, or categories" className="pl-9" />
            </div>
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="size-4" />
              Create smart property
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Sparkles className="size-5 text-cyan-600" />
                Suggested workflows
              </CardTitle>
              <CardDescription>Launch or reuse AI-powered actions against your CRM data.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {filteredTemplates.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => launchTemplate(template)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-slate-300 hover:bg-white"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge variant="outline">{template.category}</Badge>
                    <Wand2 className="size-4 text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-slate-900">{template.name}</h3>
                    <p className="text-sm text-slate-600">{template.prompt}</p>
                    <p className="text-xs font-medium text-emerald-600">{template.impact}</p>
                  </div>
                </button>
              ))}
              {filteredTemplates.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 md:col-span-2">
                  No templates match your search yet.
                </div>
              ) : null}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Bot className="size-5 text-violet-600" />
                Live queue
              </CardTitle>
              <CardDescription>Recent jobs and task status updates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {activities.map((activity) => (
                <div key={activity.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="font-medium text-slate-900">{activity.title}</p>
                    <Badge
                      variant={activity.status === "Completed" ? "secondary" : activity.status === "Running" ? "default" : "outline"}
                      className={activity.status === "Running" ? "bg-amber-500 text-white" : ""}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{activity.owner}</span>
                    <span>{activity.updatedAt}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-slate-200 lg:col-span-2">
            <CardHeader>
              <CardTitle>Quick actions</CardTitle>
              <CardDescription>One-click actions to keep your data clean and ready.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {[
                "Research account fit",
                "Backfill missing owner notes",
                "Prepare handoff summary",
              ].map((label) => (
                <Button key={label} variant="outline" className="h-auto justify-start rounded-2xl p-4 text-left" onClick={() => toast.success(`${label} added to queue`)}>
                  {label}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Coverage</CardTitle>
              <CardDescription>What your team automated this week.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-semibold text-slate-900">128</div>
                <div className="text-slate-600">AI runs completed</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-semibold text-slate-900">92%</div>
                <div className="text-slate-600">Prompt success rate</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create smart property</DialogTitle>
            <DialogDescription>Save a reusable AI prompt for your operations team.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input value={draft.name} onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))} placeholder="Property name" />
            <select
              value={draft.category}
              onChange={(event) => setDraft((current) => ({ ...current, category: event.target.value }))}
              className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-sm"
            >
              <option value="Research">Research</option>
              <option value="Clean">Clean</option>
              <option value="Summarize">Summarize</option>
              <option value="Enrich">Enrich</option>
            </select>
            <Textarea value={draft.prompt} onChange={(event) => setDraft((current) => ({ ...current, prompt: event.target.value }))} placeholder="Describe what the agent should do with the data" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={createTemplate}>Create property</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
