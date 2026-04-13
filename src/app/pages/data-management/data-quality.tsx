import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { qualityAutomations, qualityIssues, type QualityIssue } from "../data-management-data";

type IssueTab = "all" | "formatting" | "duplicate" | "sync" | "unused" | "autofixable";
const DATA_QUALITY_STORAGE_KEY = "iquanta-data-quality-issues";

export function DataQuality() {
  const [issues, setIssues] = useState<QualityIssue[]>(() => {
    if (typeof window === "undefined") {
      return qualityIssues;
    }

    const storedIssues = window.localStorage.getItem(DATA_QUALITY_STORAGE_KEY);
    if (!storedIssues) {
      return qualityIssues;
    }

    try {
      return JSON.parse(storedIssues) as QualityIssue[];
    } catch {
      window.localStorage.removeItem(DATA_QUALITY_STORAGE_KEY);
      return qualityIssues;
    }
  });
  const [activeTab, setActiveTab] = useState<IssueTab>("all");

  useEffect(() => {
    window.localStorage.setItem(DATA_QUALITY_STORAGE_KEY, JSON.stringify(issues));
  }, [issues]);

  const groupedCounts = useMemo(
    () => ({
      all: issues.length,
      formatting: issues.filter((item) => item.category === "Formatting").length,
      duplicate: issues.filter((item) => item.category === "Duplicate").length,
      sync: issues.filter((item) => item.category === "Sync").length,
      unused: issues.filter((item) => item.category === "Unused").length,
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

  const filteredIssues = useMemo(() => {
    switch (activeTab) {
      case "formatting":
        return issues.filter((item) => item.category === "Formatting");
      case "duplicate":
        return issues.filter((item) => item.category === "Duplicate");
      case "sync":
        return issues.filter((item) => item.category === "Sync");
      case "unused":
        return issues.filter((item) => item.category === "Unused");
      case "autofixable":
        return issues.filter((item) => item.autoFixable);
      default:
        return issues;
    }
  }, [activeTab, issues]);

  const renderTable = (rows: QualityIssue[]) => (
    <>
      <div className="hidden md:block">
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
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="py-10 text-center text-sm text-slate-500">
                  No issues in this queue right now.
                </TableCell>
              </TableRow>
            ) : null}
            {rows.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell className="font-medium text-slate-900">{issue.title}</TableCell>
                <TableCell>{issue.category}</TableCell>
                <TableCell>{issue.owner}</TableCell>
                <TableCell>{issue.affected}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      issue.severity === "High"
                        ? "destructive"
                        : issue.severity === "Medium"
                          ? "secondary"
                          : "outline"
                    }
                    className={issue.severity === "Medium" ? "bg-amber-500 text-white" : ""}
                  >
                    {issue.severity}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant={issue.autoFixable ? "default" : "outline"}
                    size="sm"
                    onClick={() => resolveIssue(issue.id)}
                  >
                    {issue.autoFixable ? "Auto-fix" : "Mark reviewed"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-3 md:hidden">
        {rows.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
            No issues in this queue right now.
          </div>
        ) : null}

        {rows.map((issue) => (
          <div key={issue.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-slate-900">{issue.title}</p>
                <p className="mt-1 text-sm text-slate-500">{issue.owner}</p>
              </div>
              <Badge
                variant={
                  issue.severity === "High"
                    ? "destructive"
                    : issue.severity === "Medium"
                      ? "secondary"
                      : "outline"
                }
                className={issue.severity === "Medium" ? "bg-amber-500 text-white" : ""}
              >
                {issue.severity}
              </Badge>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline">{issue.category}</Badge>
              <Badge variant="outline">{issue.affected} affected</Badge>
            </div>

            <Button
              className="mt-4 w-full"
              variant={issue.autoFixable ? "default" : "outline"}
              size="sm"
              onClick={() => resolveIssue(issue.id)}
            >
              {issue.autoFixable ? "Auto-fix" : "Mark reviewed"}
            </Button>
          </div>
        ))}
      </div>
    </>
  );

  const recommendationCount = qualityAutomations.length;
  const summaryCards = [
    { label: "Open issues", value: groupedCounts.all },
    { label: "Formatting", value: groupedCounts.formatting },
    { label: "Duplicates", value: groupedCounts.duplicate },
    { label: "Sync", value: groupedCounts.sync },
    { label: "Unused", value: groupedCounts.unused },
    { label: "Auto-fixable", value: groupedCounts.autofixable },
  ];

  return (
    <div className="bg-slate-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-5 shadow-sm sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Data quality command center</h1>
            <p className="text-sm text-slate-600">
              Track health issues, auto-fix cleanups, and keep sync gaps from spreading downstream.
            </p>
          </div>
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              setActiveTab("all");
              toast.success("Showing the full issue queue");
            }}
          >
            View all issues
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {summaryCards.map((card) => (
            <Card key={card.label}>
              <CardContent className="p-5">
                <div className="text-3xl font-semibold text-slate-900">{card.value}</div>
                <div className="text-sm text-slate-600">{card.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
          <Card>
            <CardHeader>
              <CardTitle>Issue tracker</CardTitle>
              <CardDescription>Filter by issue type and work the highest-impact queue first.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as IssueTab)}>
                <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="formatting">Formatting</TabsTrigger>
                  <TabsTrigger value="duplicate">Duplicates</TabsTrigger>
                  <TabsTrigger value="sync">Sync</TabsTrigger>
                  <TabsTrigger value="unused">Unused</TabsTrigger>
                  <TabsTrigger value="autofixable">Auto-fixable</TabsTrigger>
                </TabsList>
                <TabsContent value={activeTab} className="mt-6">
                  {renderTable(filteredIssues)}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="self-start overflow-hidden xl:sticky xl:top-6">
            <CardHeader>
              <CardTitle>AI recommendations</CardTitle>
              <CardDescription>
                {recommendationCount} suggested automations to reduce recurring cleanup work.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {qualityAutomations.map((automation) => (
                <div
                  key={automation.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="font-medium text-slate-900">{automation.label}</p>
                  <p className="mt-2 text-sm text-slate-600">{automation.savings}</p>
                  <Button
                    className="mt-4 w-full"
                    variant="outline"
                    onClick={() => toast.success(`${automation.label} added to automation queue`)}
                  >
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
