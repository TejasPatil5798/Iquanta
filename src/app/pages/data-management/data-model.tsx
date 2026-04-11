import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Database, Search, Share2 } from "lucide-react";
import { dataObjects, modelRecommendations } from "../data-management-data";

export function DataModel() {
  const [search, setSearch] = useState("");
  const [family, setFamily] = useState("All");
  const [selectedId, setSelectedId] = useState(dataObjects[0]?.id ?? "");

  const filteredObjects = useMemo(() => {
    return dataObjects.filter((item) => {
      const matchesFamily = family === "All" || item.family === family;
      const matchesSearch = `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase());
      return matchesFamily && matchesSearch;
    });
  }, [family, search]);

  const selectedObject = filteredObjects.find((item) => item.id === selectedId) ?? filteredObjects[0];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900">Data model overview</h1>
            <p className="text-sm text-slate-600">Inspect objects, compare health, and understand how your operational data is connected.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => toast.message("Data model share link copied")}>
              <Share2 className="size-4" />
              Share
            </Button>
            <Button onClick={() => toast.success("Recommendations panel refreshed")}>Explore recommendations</Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Object graph</CardTitle>
              <CardDescription>Select an object to inspect its structure and governance score.</CardDescription>
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                  <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search objects" className="pl-9" />
                </div>
                <select value={family} onChange={(event) => setFamily(event.target.value)} className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm">
                  <option value="All">All families</option>
                  <option value="CRM">CRM</option>
                  <option value="Sales">Sales</option>
                  <option value="Service">Service</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {filteredObjects.map((object) => (
                <button
                  key={object.id}
                  type="button"
                  onClick={() => setSelectedId(object.id)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    selectedObject?.id === object.id ? "border-cyan-500 bg-cyan-50" : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="size-4 text-cyan-600" />
                      <span className="font-medium text-slate-900">{object.name}</span>
                    </div>
                    <Badge variant="outline">{object.family}</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm text-slate-600">
                    <div>
                      <div className="font-semibold text-slate-900">{object.properties}</div>
                      <div>Properties</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{object.associations}</div>
                      <div>Links</div>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-600">{object.health}%</div>
                      <div>Health</div>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
              <CardDescription>Focused view for the selected object.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedObject ? (
                <>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-lg font-semibold text-slate-900">{selectedObject.name}</p>
                    <p className="mt-2 text-sm text-slate-600">{selectedObject.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border p-4">
                      <div className="text-2xl font-semibold text-slate-900">{selectedObject.properties}</div>
                      <div className="text-slate-600">Properties</div>
                    </div>
                    <div className="rounded-2xl border p-4">
                      <div className="text-2xl font-semibold text-slate-900">{selectedObject.associations}</div>
                      <div className="text-slate-600">Associations</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-2xl border border-dashed p-8 text-center text-sm text-slate-500">No objects match the current filter.</div>
              )}
              <div className="space-y-3 rounded-2xl border p-4">
                <p className="font-medium text-slate-900">Recommendations</p>
                {modelRecommendations.map((item) => (
                  <button key={item} type="button" className="block w-full rounded-xl bg-slate-50 p-3 text-left text-sm text-slate-600 hover:bg-slate-100" onClick={() => toast.message(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
