import { useEffect, useMemo, useState } from "react";
import { BarChart3, CheckCircle2, Filter, Plus, RefreshCcw, Sparkles, Target, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Slider } from "../../components/ui/slider";
import { Switch } from "../../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Textarea } from "../../components/ui/textarea";

type RuleType = "Fit" | "Engagement" | "Intent";
type LeadStatus = "Hot" | "Warm" | "Cold";
type ScoreTab = "workspace" | "builder" | "insights";

interface ScoringRule {
  id: string;
  name: string;
  type: RuleType;
  points: number;
  enabled: boolean;
  note: string;
}

interface LeadRecord {
  id: string;
  name: string;
  company: string;
  segment: string;
  fitScore: number;
  engagementScore: number;
  intentScore: number;
  lastActivity: string;
}

const LEAD_SCORING_STORAGE_KEY = "iquanta-marketing-lead-scoring";

const defaultRules: ScoringRule[] = [
  {
    id: "rule-1",
    name: "ICP company match",
    type: "Fit",
    points: 25,
    enabled: true,
    note: "Award when company size and region match the ideal customer profile.",
  },
  {
    id: "rule-2",
    name: "Pricing page visit",
    type: "Intent",
    points: 18,
    enabled: true,
    note: "Boost when a lead repeatedly visits pricing or conversion pages.",
  },
  {
    id: "rule-3",
    name: "Recent email engagement",
    type: "Engagement",
    points: 12,
    enabled: true,
    note: "Increase score for opens, clicks, and content downloads in the last 14 days.",
  },
];

const defaultLeads: LeadRecord[] = [
  {
    id: "lead-1",
    name: "Aanya Shah",
    company: "Northwind Labs",
    segment: "Enterprise",
    fitScore: 82,
    engagementScore: 74,
    intentScore: 69,
    lastActivity: "Viewed pricing 2h ago",
  },
  {
    id: "lead-2",
    name: "Rahul Verma",
    company: "BrightPath Health",
    segment: "Mid-market",
    fitScore: 71,
    engagementScore: 66,
    intentScore: 58,
    lastActivity: "Downloaded guide yesterday",
  },
  {
    id: "lead-3",
    name: "Sara Khan",
    company: "Orbit Commerce",
    segment: "SMB",
    fitScore: 55,
    engagementScore: 41,
    intentScore: 33,
    lastActivity: "Opened email 3 days ago",
  },
  {
    id: "lead-4",
    name: "Daniel Joseph",
    company: "Acme Fintech",
    segment: "Enterprise",
    fitScore: 88,
    engagementScore: 79,
    intentScore: 84,
    lastActivity: "Requested demo 30m ago",
  },
];

const defaultState = {
  threshold: 70,
  decayEnabled: true,
  autoRouting: true,
  selectedSegment: "all",
  rules: defaultRules,
  leads: defaultLeads,
};

function readStoredState() {
  if (typeof window === "undefined") {
    return defaultState;
  }

  const storedValue = window.localStorage.getItem(LEAD_SCORING_STORAGE_KEY);
  if (!storedValue) {
    return defaultState;
  }

  try {
    return JSON.parse(storedValue) as typeof defaultState;
  } catch {
    window.localStorage.removeItem(LEAD_SCORING_STORAGE_KEY);
    return defaultState;
  }
}

function clampScore(value: number) {
  return Math.max(0, Math.min(100, value));
}

function getLeadScore(lead: LeadRecord, activeRules: ScoringRule[]) {
  const fitBoost = activeRules
    .filter((rule) => rule.enabled && rule.type === "Fit")
    .reduce((sum, rule) => sum + rule.points, 0);
  const engagementBoost = activeRules
    .filter((rule) => rule.enabled && rule.type === "Engagement")
    .reduce((sum, rule) => sum + rule.points, 0);
  const intentBoost = activeRules
    .filter((rule) => rule.enabled && rule.type === "Intent")
    .reduce((sum, rule) => sum + rule.points, 0);

  return clampScore(
    Math.round(
      lead.fitScore * 0.4 +
        lead.engagementScore * 0.35 +
        lead.intentScore * 0.25 +
        fitBoost * 0.18 +
        engagementBoost * 0.15 +
        intentBoost * 0.2,
    ),
  );
}

function getLeadStatus(score: number, threshold: number): LeadStatus {
  if (score >= threshold + 10) return "Hot";
  if (score >= threshold - 10) return "Warm";
  return "Cold";
}

function getStatusClasses(status: LeadStatus) {
  if (status === "Hot") return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
  if (status === "Warm") return "bg-amber-100 text-amber-700 hover:bg-amber-100";
  return "bg-slate-100 text-slate-700 hover:bg-slate-100";
}

export function MktLeadScoring() {
  const [activeTab, setActiveTab] = useState<ScoreTab>("workspace");
  const [threshold, setThreshold] = useState<number>(() => readStoredState().threshold);
  const [decayEnabled, setDecayEnabled] = useState<boolean>(() => readStoredState().decayEnabled);
  const [autoRouting, setAutoRouting] = useState<boolean>(() => readStoredState().autoRouting);
  const [selectedSegment, setSelectedSegment] = useState<string>(() => readStoredState().selectedSegment);
  const [rules, setRules] = useState<ScoringRule[]>(() => readStoredState().rules);
  const [leads] = useState<LeadRecord[]>(() => readStoredState().leads);
  const [ruleName, setRuleName] = useState("");
  const [ruleType, setRuleType] = useState<RuleType>("Fit");
  const [rulePoints, setRulePoints] = useState(15);
  const [ruleNote, setRuleNote] = useState("");

  useEffect(() => {
    window.localStorage.setItem(
      LEAD_SCORING_STORAGE_KEY,
      JSON.stringify({
        threshold,
        decayEnabled,
        autoRouting,
        selectedSegment,
        rules,
        leads,
      }),
    );
  }, [autoRouting, decayEnabled, leads, rules, selectedSegment, threshold]);

  const filteredLeads = useMemo(() => {
    const scopedLeads =
      selectedSegment === "all"
        ? leads
        : leads.filter((lead) => lead.segment.toLowerCase() === selectedSegment.toLowerCase());

    return scopedLeads
      .map((lead) => {
        const score = getLeadScore(lead, rules);
        return {
          ...lead,
          finalScore: score,
          status: getLeadStatus(score, threshold),
        };
      })
      .sort((left, right) => right.finalScore - left.finalScore);
  }, [leads, rules, selectedSegment, threshold]);

  const metrics = useMemo(() => {
    const hotLeads = filteredLeads.filter((lead) => lead.status === "Hot").length;
    const avgScore =
      filteredLeads.length === 0
        ? 0
        : Math.round(
            filteredLeads.reduce((sum, lead) => sum + lead.finalScore, 0) / filteredLeads.length,
          );

    return {
      hotLeads,
      avgScore,
      activeRules: rules.filter((rule) => rule.enabled).length,
      routedLeads: autoRouting ? hotLeads : 0,
    };
  }, [autoRouting, filteredLeads, rules]);

  const addRule = () => {
    if (!ruleName.trim()) {
      toast.error("Please enter a rule name");
      return;
    }

    const newRule: ScoringRule = {
      id: `rule-${Date.now()}`,
      name: ruleName.trim(),
      type: ruleType,
      points: rulePoints,
      enabled: true,
      note: ruleNote.trim() || "Custom scoring rule",
    };

    setRules((current) => [newRule, ...current]);
    setRuleName("");
    setRuleType("Fit");
    setRulePoints(15);
    setRuleNote("");
    toast.success(`${newRule.name} added to the model`);
  };

  const resetModel = () => {
    setThreshold(defaultState.threshold);
    setDecayEnabled(defaultState.decayEnabled);
    setAutoRouting(defaultState.autoRouting);
    setSelectedSegment(defaultState.selectedSegment);
    setRules(defaultRules);
    window.localStorage.removeItem(LEAD_SCORING_STORAGE_KEY);
    toast.success("Lead scoring model reset to defaults");
  };

  return (
    <div className="space-y-8 bg-slate-50">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_minmax(320px,520px)] xl:items-center">
          <div className="space-y-6">
            <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
              Marketing Hub
            </Badge>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">
                Lead scoring workspace
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Build scoring rules, tune thresholds, and instantly see how your model changes
                lead priority across segments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Card className="border-slate-200">
                <CardContent className="p-5">
                  <p className="text-sm text-slate-500">Hot leads</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">{metrics.hotLeads}</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-5">
                  <p className="text-sm text-slate-500">Avg. score</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">{metrics.avgScore}</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-5">
                  <p className="text-sm text-slate-500">Active rules</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">{metrics.activeRules}</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-5">
                  <p className="text-sm text-slate-500">Auto-routed</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">{metrics.routedLeads}</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => toast.success("Sales handoff preview opened")}>
                Push top leads to sales
              </Button>
              <Button variant="outline" onClick={resetModel}>
                <RefreshCcw />
                Reset model
              </Button>
            </div>
          </div>

          <Card className="border-slate-200 bg-slate-950 text-white">
            <CardHeader>
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="size-4" />
                <span className="text-sm">Scoring health</span>
              </div>
              <CardTitle className="text-2xl text-white">Model confidence</CardTitle>
              <CardDescription className="text-slate-300">
                Review threshold quality, routing readiness, and segment focus.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Qualification threshold</span>
                  <span>{threshold}</span>
                </div>
                <Progress value={threshold} className="bg-slate-800" />
              </div>

              <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Decay scoring</p>
                    <p className="text-xs text-slate-400">
                      Reduce points for inactive leads over time
                    </p>
                  </div>
                  <Switch checked={decayEnabled} onCheckedChange={setDecayEnabled} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Auto-route to sales</p>
                    <p className="text-xs text-slate-400">
                      Assign hot leads automatically once threshold is crossed
                    </p>
                  </div>
                  <Switch checked={autoRouting} onCheckedChange={setAutoRouting} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ScoreTab)}>
        <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          <TabsTrigger value="workspace">Workspace</TabsTrigger>
          <TabsTrigger value="builder">Score Builder</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="workspace" className="mt-6 space-y-6">
          <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Target className="size-4" />
                  <span>Model controls</span>
                </div>
                <CardTitle className="text-2xl text-slate-900">Threshold tuning</CardTitle>
                <CardDescription>
                  Adjust the score required for qualification and compare how your lead list responds.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Qualification threshold</span>
                    <span className="font-medium text-slate-900">{threshold}</span>
                  </div>
                  <Slider
                    value={[threshold]}
                    min={30}
                    max={95}
                    step={1}
                    onValueChange={(value) => setThreshold(value[0] ?? threshold)}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Selected segment</p>
                    <Select value={selectedSegment} onValueChange={setSelectedSegment}>
                      <SelectTrigger className="mt-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All segments</SelectItem>
                        <SelectItem value="Enterprise">Enterprise</SelectItem>
                        <SelectItem value="Mid-market">Mid-market</SelectItem>
                        <SelectItem value="SMB">SMB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Routing mode</p>
                    <p className="mt-3 text-lg font-medium text-slate-900">
                      {autoRouting ? "Automatic handoff enabled" : "Manual review required"}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {decayEnabled
                        ? "Decay logic is active, keeping old engagement from inflating scores."
                        : "Decay logic is off, so scores stay stable until rules change."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Filter className="size-4" />
                  <span>Lead priority</span>
                </div>
                <CardTitle className="text-2xl text-slate-900">Ranked leads</CardTitle>
                <CardDescription>
                  Lead order updates instantly as you change the model.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-900">{lead.name}</p>
                          <Badge className={getStatusClasses(lead.status)}>{lead.status}</Badge>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">
                          {lead.company} - {lead.segment}
                        </p>
                        <p className="mt-2 text-sm text-slate-500">{lead.lastActivity}</p>
                      </div>
                      <div className="sm:text-right">
                        <p className="text-sm text-slate-500">Final score</p>
                        <p className="text-3xl font-semibold text-slate-900">{lead.finalScore}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div>
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                          <span>Fit</span>
                          <span>{lead.fitScore}</span>
                        </div>
                        <Progress value={lead.fitScore} />
                      </div>
                      <div>
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                          <span>Engagement</span>
                          <span>{lead.engagementScore}</span>
                        </div>
                        <Progress value={lead.engagementScore} />
                      </div>
                      <div>
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                          <span>Intent</span>
                          <span>{lead.intentScore}</span>
                        </div>
                        <Progress value={lead.intentScore} />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="builder" className="mt-6 space-y-6">
          <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Add scoring rule</CardTitle>
                <CardDescription>
                  Create custom rules for fit, engagement, or buying intent.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="rule-name">
                    Rule name
                  </label>
                  <Input
                    id="rule-name"
                    value={ruleName}
                    onChange={(event) => setRuleName(event.target.value)}
                    placeholder="Ex: Demo request submitted"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Rule type</label>
                    <Select value={ruleType} onValueChange={(value) => setRuleType(value as RuleType)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Fit">Fit</SelectItem>
                        <SelectItem value="Engagement">Engagement</SelectItem>
                        <SelectItem value="Intent">Intent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Points: {rulePoints}
                    </label>
                    <Slider
                      value={[rulePoints]}
                      min={5}
                      max={40}
                      step={1}
                      onValueChange={(value) => setRulePoints(value[0] ?? rulePoints)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="rule-note">
                    Rule note
                  </label>
                  <Textarea
                    id="rule-note"
                    value={ruleNote}
                    onChange={(event) => setRuleNote(event.target.value)}
                    placeholder="Explain when this rule should apply."
                  />
                </div>

                <Button onClick={addRule}>
                  <Plus />
                  Add rule
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Active rules</CardTitle>
                <CardDescription>
                  Enable, disable, and review the rules shaping your score.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {rules.map((rule) => (
                  <div key={rule.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-900">{rule.name}</p>
                          <Badge variant="outline">{rule.type}</Badge>
                          <Badge className="bg-slate-900 text-white hover:bg-slate-900">
                            +{rule.points}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">{rule.note}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-500">
                          {rule.enabled ? "Enabled" : "Paused"}
                        </span>
                        <Switch
                          checked={rule.enabled}
                          onCheckedChange={(checked) =>
                            setRules((current) =>
                              current.map((item) =>
                                item.id === rule.id ? { ...item, enabled: checked } : item,
                              ),
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="insights" className="mt-6 space-y-6">
          <section className="grid gap-6 lg:grid-cols-3">
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <BarChart3 className="size-4" />
                  <span>Conversion readiness</span>
                </div>
                <CardTitle className="text-xl text-slate-900">Top segment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-slate-900">Enterprise</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Enterprise leads are scoring highest because fit and intent signals align more
                  consistently with your active rules.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <TrendingUp className="size-4" />
                  <span>Best rule impact</span>
                </div>
                <CardTitle className="text-xl text-slate-900">Highest leverage rule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-slate-900">
                  {
                    rules
                      .filter((rule) => rule.enabled)
                      .sort((left, right) => right.points - left.points)[0]?.name ?? "No active rule"
                  }
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  This rule currently contributes the strongest weighting across qualified leads.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="size-4" />
                  <span>Routing outcome</span>
                </div>
                <CardTitle className="text-xl text-slate-900">Sales handoff health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-slate-900">
                  {autoRouting ? "Automatic" : "Manual"}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {autoRouting
                    ? `${metrics.routedLeads} leads are ready for immediate routing.`
                    : "Leads are waiting for manual review before handoff."}
                </p>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

