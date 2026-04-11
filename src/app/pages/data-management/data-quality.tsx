import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { qualityAutomations, qualityIssues, type QualityIssue } from "../data-management-data";

export function DataQuality() {
  const [issues, setIssues] = useState<QualityIssue[]>(qualityIssues);

  const groupedCounts = useMemo(
    () => ({
      all: issues.length,
      formatting: issues.filter((item) => item.category === "Formatting").length,
      duplicate: issues.filter((item) => item.category === "Duplicate").length,
      autofixable: issues.filter((item) => item.autoFixable).length,
    }),
    [issues],
  );

  const resolveIssue = (issueId: string) => {
    const issue = issues.find((item) => item.id === issueId);
    if (!issue) return;
    setIssues((current) => current.filter((item) => item.id !== issueId));
    toast.success(`${issue.title} resolved`);
  };

  const renderTable = (rows: QualityIssue[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Issue</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Affected</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((issue) => (
          <TableRow key={issue.id}>
            <TableCell className="font-medium text-slate-900">{issue.title}</TableCell>
            <TableCell>{issue.category}</TableCell>
            <TableCell>{issue.owner}</TableCell>
            <TableCell>{issue.affected}</TableCell>
            <TableCell>
              <Badge variant={issue.severity === "High" ? "destructive" : issue.severity === "Medium" ? "secondary" : "outline"} className={issue.severity === "Medium" ? "bg-amber-500 text-white" : ""}>
                {issue.severity}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant={issue.autoFixable ? "default" : "outline"} size="sm" onClick={() => resolveIssue(issue.id)}>
                {issue.autoFixable ? "Auto-fix" : "Mark reviewed"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900">Data quality command center</h1>
            <p className="text-sm text-slate-600">Track health issues, auto-fix cleanups, and keep sync gaps from spreading downstream.</p>
          </div>
          <Button onClick={() => toast.success("Bulk AI review started")}>View all issues</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Open issues", value: groupedCounts.all },
            { label: "Formatting", value: groupedCounts.formatting },
            { label: "Duplicates", value: groupedCounts.duplicate },
            { label: "Auto-fixable", value: groupedCounts.autofixable },
          ].map((card) => (
            <Card key={card.label}>
              <CardContent className="p-5">
                <div className="text-3xl font-semibold text-slate-900">{card.value}</div>
                <div className="text-sm text-slate-600">{card.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Issue tracker</CardTitle>
              <CardDescription>Filter by issue type and work the highest-impact queue first.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="w-fit">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="formatting">Formatting</TabsTrigger>
                  <TabsTrigger value="duplicate">Duplicates</TabsTrigger>
                  <TabsTrigger value="autofixable">Auto-fixable</TabsTrigger>
                </TabsList>
                <TabsContent value="all">{renderTable(issues)}</TabsContent>
                <TabsContent value="formatting">{renderTable(issues.filter((item) => item.category === "Formatting"))}</TabsContent>
                <TabsContent value="duplicate">{renderTable(issues.filter((item) => item.category === "Duplicate"))}</TabsContent>
                <TabsContent value="autofixable">{renderTable(issues.filter((item) => item.autoFixable))}</TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI recommendations</CardTitle>
              <CardDescription>Small automations that reduce recurring cleanup work.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {qualityAutomations.map((automation) => (
                <div key={automation.id} className="rounded-2xl border p-4">
                  <p className="font-medium text-slate-900">{automation.label}</p>
                  <p className="mt-2 text-sm text-slate-600">{automation.savings}</p>
                  <Button className="mt-4 w-full" variant="outline" onClick={() => toast.success(`${automation.label} added to automation queue`)}>
                    Apply recommendation
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
