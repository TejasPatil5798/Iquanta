import { Search, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

type AgentCard = {
  name: string;
  installs: string;
  description: string;
  icon: string;
};

const attentionCards: AgentCard[] = [
  {
    name: "Company Research Agent",
    installs: "9K installs",
    description: "Researches companies for great background info before reaching out.",
    icon: "research",
  },
  {
    name: "Domains Assistant",
    installs: "<10 installs",
    description: "Assists with domain-related queries, setup processes, and admin tasks.",
    icon: "domains",
  },
  {
    name: "Customer Health Agent",
    installs: "2K installs",
    description: "Assesses customer health and suggests next best actions.",
    icon: "health",
  },
  {
    name: "Call Recap Agent",
    installs: "3K installs",
    description: "Transforms call transcripts into notes and follow up emails.",
    icon: "calls",
  },
];

const activityCards: AgentCard[] = [
  {
    name: "Company Research Agent",
    installs: "9K installs",
    description: "Researches companies for great background info before reaching out.",
    icon: "research",
  },
  {
    name: "Customer Health Agent",
    installs: "2K installs",
    description: "Assesses customer health and suggests next best actions.",
    icon: "health",
  },
  {
    name: "RFP Agent",
    installs: "1K installs",
    description: "Auto-fills requests for proposals (RFPs) based on past responses.",
    icon: "proposal",
  },
  {
    name: "Customer Handoff Agent",
    installs: "2K installs",
    description: "Transfers accounts between owners using CRM and interaction data.",
    icon: "handoff",
  },
];

const suggestionCards: AgentCard[] = [
  {
    name: "Call Recap Agent",
    installs: "3K installs",
    description: "Transforms call transcripts into notes and follow up emails.",
    icon: "calls",
  },
  {
    name: "Sales to Marketing Feedback",
    installs: "2K installs",
    description: "Turns sales team insights into actionable marketing feedback.",
    icon: "feedback",
  },
  {
    name: "Customer Handoff Agent",
    installs: "2K installs",
    description: "Transfers accounts between owners using CRM and interaction data.",
    icon: "handoff",
  },
  {
    name: "Customer Health Agent",
    installs: "2K installs",
    description: "Assesses customer health and suggests next best actions.",
    icon: "health",
  },
];

const appList = [
  { name: "Zoom", source: "App by IQuanta", mark: "Z" },
  { name: "Shopify", source: "App by IQuanta", mark: "S" },
  { name: "Jira", source: "App by IQuanta", mark: "J" },
  { name: "Create Google Docs/PDF + eSign", source: "App by Portant", mark: "G" },
  { name: "Clone Attack", source: "App by hapily", mark: "C" },
  { name: "Send oso (Legacy)", source: "App by Sendoso", mark: "S" },
];

function IconTile({ icon }: { icon: string }) {
  const glyph =
    icon === "research"
      ? "R"
      : icon === "domains"
        ? "D"
        : icon === "health"
          ? "H"
          : icon === "proposal"
            ? "P"
            : icon === "handoff"
              ? "C"
              : icon === "feedback"
                ? "F"
                : "A";

  return (
    <div className="h-36 rounded-md bg-[#ececec] p-4">
      <div className="mx-auto flex h-full max-w-[124px] items-center justify-center rounded-2xl border-2 border-orange-500 bg-gradient-to-br from-pink-200 via-white to-[#ffd9c4] text-3xl font-semibold text-pink-500">
        {glyph}
      </div>
    </div>
  );
}

function AgentRow({ title, cards }: { title: string; cards: AgentCard[] }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#1f2937] md:text-4xl">{title}</h2>
      <div className="relative">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.name}
              className="relative rounded-xl border border-[#d4d9df] bg-white p-5 shadow-[0_1px_0_0_rgba(16,24,40,0.04)]"
            >
              <div className="absolute left-5 top-4 inline-flex rounded-full bg-[#6d3fe0] px-3 py-0.5 text-xs font-semibold text-white">
                BETA
              </div>
              <IconTile icon={card.icon} />
              <h3 className="mt-5 text-2xl font-semibold text-[#2b2f36]">{card.name}</h3>
              <p className="mt-1 text-sm text-[#676f7d]">By IQuanta &nbsp;&nbsp; {card.installs}</p>
              <p className="mt-4 text-lg leading-snug text-[#3d4451]">{card.description}</p>
              <div className="mt-5 flex gap-2">
                <span className="rounded-full bg-[#ececec] px-3 py-1 text-xs font-medium text-[#2d3238]">Agent</span>
                <span className="rounded-full bg-[#ff2f7b] px-3 py-1 text-xs font-medium text-white">+ Breeze</span>
              </div>
            </article>
          ))}
        </div>
        <button className="absolute -right-6 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#c7ccd2] bg-white text-[#6b7280]">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

export function BrzMarketplace() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] px-7 py-8 text-[#1f2937]">
      <div className="mx-auto w-full max-w-[1600px] rounded-xl bg-[#f7f7f8] p-8 md:p-10">
        <div className="flex items-center justify-between text-sm text-[#616c7c] md:text-base">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#111827]">Marketplace</span>
            <ChevronRight className="h-5 w-5" />
            <span>Breeze Agents</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <button className="hover:text-[#111827]">Manage</button>
            <button className="hover:text-[#111827]">Build</button>
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-between gap-6 border-b border-[#d8dbe0] pb-8 lg:flex-row lg:items-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">Breeze Agents</h1>
          <label className="relative w-full max-w-[780px]">
            <input
              type="text"
              placeholder="Search"
              className="h-12 w-full rounded-full border border-[#b8bec8] bg-[#f7f7f8] px-6 pr-14 text-base outline-none placeholder:text-[#7b8392] focus:border-[#8f98a5]"
            />
            <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7b8392]" />
          </label>
        </div>

        <section className="mt-14 grid gap-10 rounded-2xl bg-[#f7f7f8] lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[#111827] md:text-5xl">Meet your AI sidekick</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#2e3642] md:text-xl">
              Remembers your preferences, knows your business, works where you do. Chat, create, and stay productive anywhere.
            </p>
            <button className="mt-8 rounded-lg border border-[#9ea4ae] bg-white px-6 py-2.5 text-base font-semibold text-[#1f2937] hover:bg-[#f8f9fb]">
              Explore more
            </button>
          </div>

          <div className="rounded-3xl bg-[#ece8e2] p-7">
            <div className="mx-auto grid max-w-[560px] grid-cols-[1fr_220px] items-center gap-4">
              <div className="rounded-xl border border-[#d9d9d9] bg-white p-3 shadow-sm">
                <div className="mb-2 grid grid-cols-2 gap-2 text-xs font-semibold text-[#808080]">
                  <span>CONTACT</span>
                </div>
                <div className="space-y-2 text-sm text-[#4b5563]">
                  <div className="grid grid-cols-2 rounded bg-[#f7f8fa] px-2 py-1">
                    <span>Zain Westervelt</span>
                  </div>
                  <div className="grid grid-cols-2 rounded bg-[#f7f8fa] px-2 py-1">
                    <span>Kadin Dorwart</span>
                  </div>
                  <div className="grid grid-cols-2 rounded bg-[#f7f8fa] px-2 py-1">
                    <span>Ash Dokidis</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-pink-300 bg-[#ffeaf4] p-4 shadow-[0_10px_24px_rgba(190,24,93,0.15)]">
                <div className="text-center">
                  <Sparkles className="mx-auto h-6 w-6 text-[#ff5a3d]" />
                  <p className="mt-1 text-sm font-semibold text-[#ff5a3d]">Breeze Assistant</p>
                </div>
                <div className="mt-3 space-y-2">
                  {["Summarize contact", "Research company", "Prepare for a meeting"].map((item) => (
                    <div key={item} className="rounded-full border border-pink-300 px-3 py-1 text-center text-xs font-medium text-[#d63384]">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center rounded-full border border-pink-300 bg-white px-3 py-1.5 text-xs text-[#798089]">
                  <span className="truncate">Type a message</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-[#d63384]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <AgentRow title="Getting attention today" cards={attentionCards} />

        <section className="mt-10 rounded-xl border border-[#d6dae0] bg-white p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">Discover apps that work with Breeze Studio</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#374151] md:text-xl">
                Extend Breeze Studio to your third-party apps that now include agent tools, so you can customize Breeze Agents to include your most important app actions.
              </p>
              <button className="mt-8 rounded-lg border border-[#a2a8b0] px-6 py-2.5 text-base font-semibold text-[#111827] hover:bg-[#f8f9fb]">
                View collection
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {appList.map((app) => (
                <div key={app.name} className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[#f2f4f7] text-2xl font-bold text-[#334155]">
                    {app.mark}
                  </div>
                  <div>
                    <p className="text-2xl leading-tight font-semibold text-[#111827]">{app.name}</p>
                    <p className="text-sm text-[#6b7280]">{app.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AgentRow title="Activity on the rise" cards={activityCards} />
        <AgentRow title="Suggestions from how you're using IQuanta" cards={suggestionCards} />
      </div>
    </div>
  );
}
