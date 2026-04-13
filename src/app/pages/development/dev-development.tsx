import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

type SectionId =
  | "overview"
  | "projects"
  | "legacy-apps"
  | "mcp-auth-apps"
  | "design-manager"
  | "keys"
  | "test-accounts"
  | "domain"
  | "technology-partner"
  | "documentation";

interface NavigationItem {
  id: SectionId;
  label: string;
  badge?: string;
}

interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

interface ActionCard {
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
}

const openExternal = (url: string, label: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
  toast.success(`Opening ${label}`);
};

const navigationGroups: NavigationGroup[] = [
  {
    title: "Workspace",
    items: [
      { id: "overview", label: "Overview" },
      { id: "projects", label: "Projects" },
      { id: "legacy-apps", label: "Legacy Apps" },
      { id: "mcp-auth-apps", label: "MCP Auth Apps", badge: "Beta" },
      { id: "design-manager", label: "Design Manager" },
    ],
  },
  {
    title: "Monitoring",
    items: [{ id: "keys", label: "Keys" }],
  },
  {
    title: "Testing",
    items: [
      { id: "test-accounts", label: "Test Accounts" },
      { id: "domain", label: "Domain" },
    ],
  },
  {
    title: "App Listings",
    items: [
      { id: "technology-partner", label: "Technology Partner" },
      { id: "documentation", label: "Documentation" },
    ],
  },
];

const overviewCards = [
  {
    label: "Active projects",
    value: "12",
    note: "4 updated this week",
  },
  {
    label: "Connected apps",
    value: "8",
    note: "2 pending review",
  },
  {
    label: "API keys in rotation",
    value: "5",
    note: "1 expires soon",
  },
  {
    label: "Marketplace-ready apps",
    value: "3",
    note: "Awaiting submission",
  },
];

const quickStartCards: ActionCard[] = [
  {
    title: "Developer docs",
    description:
      "Read setup, platform, and build guidance from the HubSpot developer docs.",
    cta: "Open docs",
    onClick: () => openExternal("https://developers.hubspot.com/docs", "developer docs"),
  },
  {
    title: "Sample apps",
    description:
      "Review example apps and starter patterns before creating your own project.",
    cta: "View sample apps",
    onClick: () =>
      openExternal(
        "https://developers.hubspot.com/docs/platform/sample-projects",
        "sample apps",
      ),
  },
  {
    title: "HubSpot CLI",
    description:
      "Install the CLI and bootstrap a local project for cards, extensions, and app assets.",
    cta: "Copy install command",
    onClick: () => {
      navigator.clipboard
        .writeText("npm install -g @hubspot/cli && hs init")
        .then(() => toast.success("CLI install command copied"))
        .catch(() => toast.error("Unable to copy command"));
    },
  },
];

const advancedFeatureCards: ActionCard[] = [
  {
    title: "App cards",
    description: "Build CRM-facing React cards and UI extensions for supported records.",
    cta: "Learn more",
    onClick: () =>
      openExternal(
        "https://developers.hubspot.com/docs/platform/ui-extensibility/ui-extensions-sdk",
        "app cards docs",
      ),
  },
  {
    title: "Custom objects",
    description: "Define custom CRM data models and property schemas for your app.",
    cta: "Learn more",
    onClick: () =>
      openExternal(
        "https://developers.hubspot.com/docs/api-reference/crm-custom-objects-v3/guide",
        "custom objects docs",
      ),
  },
  {
    title: "App events",
    description: "Use event-driven flows to react to app lifecycle and CRM activity.",
    cta: "Learn more",
    onClick: () =>
      openExternal(
        "https://developers.hubspot.com/docs/platform/automation",
        "automation docs",
      ),
  },
  {
    title: "MCP Auth apps",
    description: "Manage secure auth-ready apps and prepare for beta workflows.",
    cta: "Join beta",
    onClick: () => toast.success("Beta request submitted"),
  },
];

const projectRows = [
  { name: "CRM Card Extensions", environment: "Production", updated: "2 hours ago" },
  { name: "Lead Enrichment Sync", environment: "Sandbox", updated: "Yesterday" },
  { name: "Marketplace Billing App", environment: "Development", updated: "3 days ago" },
];

const keyRows = [
  { name: "Public app key", status: "Healthy", rotation: "In 12 days" },
  { name: "Webhook signing secret", status: "Healthy", rotation: "In 30 days" },
  { name: "Legacy private key", status: "Needs review", rotation: "Expired" },
];

const testAccounts = [
  { name: "Admissions sandbox", purpose: "Regression testing", owner: "Platform Team" },
  { name: "Marketplace QA", purpose: "Submission checks", owner: "Partner Ops" },
];

const sectionMeta: Record<
  SectionId,
  { title: string; description: string; badge?: string }
> = {
  overview: {
    title: "Development overview",
    description:
      "Track project health, open tooling, and developer setup from one place.",
  },
  projects: {
    title: "Projects",
    description:
      "Manage modern HubSpot developer projects, recent deploy activity, and environments.",
  },
  "legacy-apps": {
    title: "Legacy apps",
    description:
      "Review older app configurations and identify work that should move into projects.",
  },
  "mcp-auth-apps": {
    title: "MCP Auth Apps",
    description:
      "Prepare authentication-aware apps and beta experiences tied to managed platform access.",
    badge: "Beta",
  },
  "design-manager": {
    title: "Design Manager",
    description:
      "Access website assets, templates, modules, and CMS-oriented developer workflows.",
  },
  keys: {
    title: "Keys",
    description: "Monitor secrets, rotation windows, and access hygiene for developer assets.",
  },
  "test-accounts": {
    title: "Test accounts",
    description: "Keep sandboxes and QA accounts organized for validation and demos.",
  },
  domain: {
    title: "Domain",
    description: "Manage domain-level testing and verify app behavior across connected properties.",
  },
  "technology-partner": {
    title: "Technology Partner",
    description: "Prepare marketplace listings and partner-facing submission requirements.",
  },
  documentation: {
    title: "Documentation",
    description: "Jump into the official docs, reference material, and implementation guides.",
  },
};

function renderOverviewSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => (
          <Card key={card.label} className="border-slate-200">
            <CardContent className="space-y-2 p-5">
              <p className="text-sm text-slate-500">{card.label}</p>
              <p className="text-3xl font-semibold text-slate-900">{card.value}</p>
              <p className="text-sm text-slate-600">{card.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-slate-200">
        <CardHeader>
          <Badge className="w-fit bg-slate-100 text-slate-700 hover:bg-slate-100">
            HubSpot Development
          </Badge>
          <CardTitle className="text-2xl text-slate-900">
            Customize experiences with HubSpot Development
          </CardTitle>
          <CardDescription className="max-w-3xl">
            Create app cards and extensions, define custom CRM objects, request advanced
            features, and publish marketplace-ready integrations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {[
              "Create App Cards and other extensions using React",
              "Define custom CRM objects and properties",
              "Request access to advanced platform features",
              "Publish apps on the App Marketplace",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="border-slate-200 bg-slate-950 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Install the HubSpot CLI</CardTitle>
                <CardDescription className="text-slate-300">
                  Node.js is required for local development.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-slate-800 bg-black px-4 py-3 font-mono text-sm">
                  npm install -g @hubspot/cli && hs init
                </div>
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigator.clipboard
                      .writeText("npm install -g @hubspot/cli && hs init")
                      .then(() => toast.success("CLI command copied"))
                      .catch(() => toast.error("Unable to copy command"));
                  }}
                >
                  Copy command
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">
                  Create your first HubSpot app
                </CardTitle>
                <CardDescription>
                  Use the starter flow to bootstrap a local app project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-900 px-4 py-3 font-mono text-sm text-white">
                  hs project create
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard
                      .writeText("hs project create")
                      .then(() => toast.success("Project command copied"))
                      .catch(() => toast.error("Unable to copy command"));
                  }}
                >
                  Copy project command
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {quickStartCards.map((card) => (
          <Card key={card.title} className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-base text-slate-900">{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" onClick={card.onClick}>
                {card.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Advanced features</h3>
          <p className="mt-1 text-sm text-slate-600">
            Explore deeper platform capabilities as your integrations mature.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {advancedFeatureCards.map((card) => (
            <Card key={card.title} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base text-slate-900">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" onClick={card.onClick}>
                  {card.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function renderProjectsSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Project workspace</CardTitle>
        <CardDescription>
          Review current environments and jump into the next development task.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {projectRows.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-medium text-slate-900">{project.name}</p>
              <p className="text-sm text-slate-600">
                {project.environment} environment
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">{project.updated}</span>
              <Button size="sm" variant="outline" onClick={() => toast.success(`Opening ${project.name}`)}>
                Open project
              </Button>
            </div>
          </div>
        ))}
        <Button onClick={() => toast.success("Create project flow started")}>
          Create project
        </Button>
      </CardContent>
    </Card>
  );
}

function renderLegacyAppsSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Legacy app inventory</CardTitle>
        <CardDescription>
          Audit older apps and plan migrations into the newer project model.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Two legacy apps still rely on older authentication flows and should be reviewed
          before the next release cycle.
        </div>
        <Button variant="outline" onClick={() => toast.success("Legacy app migration plan opened")}>
          Review migration plan
        </Button>
      </CardContent>
    </Card>
  );
}

function renderMcpAuthAppsSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-xl text-slate-900">MCP Auth Apps</CardTitle>
          <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">Beta</Badge>
        </div>
        <CardDescription>
          Manage authentication-aware apps and prepare secure access patterns.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-2 p-5">
              <p className="text-sm text-slate-500">Beta seats</p>
              <p className="text-3xl font-semibold text-slate-900">4</p>
              <p className="text-sm text-slate-600">2 currently in use</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-2 p-5">
              <p className="text-sm text-slate-500">Pending approvals</p>
              <p className="text-3xl font-semibold text-slate-900">1</p>
              <p className="text-sm text-slate-600">Awaiting security review</p>
            </CardContent>
          </Card>
        </div>
        <Button onClick={() => toast.success("Beta enrollment request submitted")}>
          Request access
        </Button>
      </CardContent>
    </Card>
  );
}

function renderDesignManagerSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Design Manager</CardTitle>
        <CardDescription>
          Open CMS assets, modules, templates, and website developer workflows.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-600">
          Use Design Manager to work on themes, coded files, drag-and-drop modules, and
          reusable front-end assets.
        </p>
        <Button
          variant="outline"
          onClick={() =>
            openExternal(
              "https://developers.hubspot.com/docs/cms/building-blocks/design-manager",
              "Design Manager docs",
            )
          }
        >
          Open Design Manager docs
        </Button>
      </CardContent>
    </Card>
  );
}

function renderKeysSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Key health</CardTitle>
        <CardDescription>Track rotation status and highlight secrets that need attention.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {keyRows.map((key) => (
          <div
            key={key.name}
            className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-medium text-slate-900">{key.name}</p>
              <p className="text-sm text-slate-600">Rotation: {key.rotation}</p>
            </div>
            <Badge
              className={
                key.status === "Healthy"
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-100"
              }
            >
              {key.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function renderTestAccountsSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Test accounts</CardTitle>
        <CardDescription>
          Organize sandboxes for QA, demos, and regression validation.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {testAccounts.map((account) => (
          <div
            key={account.name}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <p className="font-medium text-slate-900">{account.name}</p>
            <p className="mt-1 text-sm text-slate-600">{account.purpose}</p>
            <p className="mt-1 text-sm text-slate-500">Owner: {account.owner}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function renderDomainSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Domain setup</CardTitle>
        <CardDescription>
          Validate connected domains and make sure testing environments stay aligned.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          `dev.iquanta.example` is configured for staging preview and awaiting SSL
          verification.
        </div>
        <Button variant="outline" onClick={() => toast.success("Domain verification started")}>
          Verify domain
        </Button>
      </CardContent>
    </Card>
  );
}

function renderTechnologyPartnerSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Technology Partner</CardTitle>
        <CardDescription>
          Prepare listing assets, app documentation, and partner submission readiness.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          Listing completeness is 82%. Screenshots and support policy still need review.
        </div>
        <Button variant="outline" onClick={() => toast.success("Marketplace checklist opened")}>
          Open submission checklist
        </Button>
      </CardContent>
    </Card>
  );
}

function renderDocumentationSection() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">Documentation</CardTitle>
        <CardDescription>
          Jump directly to the official HubSpot developer documentation.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() => openExternal("https://developers.hubspot.com/docs", "developer docs")}
        >
          Developer docs
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            openExternal(
              "https://developers.hubspot.com/docs/platform/ui-extensibility/ui-extensions-sdk",
              "UI extensions docs",
            )
          }
        >
          UI extensions
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            openExternal(
              "https://developers.hubspot.com/docs/api-reference/overview",
              "API reference",
            )
          }
        >
          API reference
        </Button>
      </CardContent>
    </Card>
  );
}

export function DevDevelopment() {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");

  const activeSectionContent = useMemo(() => {
    switch (activeSection) {
      case "projects":
        return renderProjectsSection();
      case "legacy-apps":
        return renderLegacyAppsSection();
      case "mcp-auth-apps":
        return renderMcpAuthAppsSection();
      case "design-manager":
        return renderDesignManagerSection();
      case "keys":
        return renderKeysSection();
      case "test-accounts":
        return renderTestAccountsSection();
      case "domain":
        return renderDomainSection();
      case "technology-partner":
        return renderTechnologyPartnerSection();
      case "documentation":
        return renderDocumentationSection();
      default:
        return renderOverviewSection();
    }
  }, [activeSection]);

  const meta = sectionMeta[activeSection];

  return (
    <div className="space-y-6 text-gray-800">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 xl:flex-row">
          <aside className="xl:w-72 xl:border-r xl:border-slate-200 xl:pr-6">
            <h1 className="text-lg font-semibold text-slate-900">Development</h1>

            <nav className="mt-5 space-y-5 text-sm">
              {navigationGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {group.title}
                  </p>
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = activeSection === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveSection(item.id)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                            isActive
                              ? "bg-slate-100 font-medium text-slate-900"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.badge ? (
                            <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                              {item.badge}
                            </Badge>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 flex-1 space-y-6 xl:pl-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-slate-900">{meta.title}</h2>
                  {meta.badge ? (
                    <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                      {meta.badge}
                    </Badge>
                  ) : null}
                </div>
                <p className="mt-2 max-w-3xl text-sm text-slate-600">{meta.description}</p>
              </div>

              <Button
                variant="outline"
                onClick={() => setActiveSection("overview")}
              >
                Back to overview
              </Button>
            </div>

            {activeSectionContent}
          </div>
        </div>
      </section>
    </div>
  );
}
