import { Sparkles, Play, ChevronLeft, ChevronRight, Settings, ExternalLink } from "lucide-react";

type AgentCard = {
  title: string;
  installs: string;
  description: string;
  badge?: "BETA";
  kind: "Agent" | "Assistant";
};

type LearnCard = {
  title: string;
  description: string;
  action: string;
  icon: string;
};

const featuredAgents: AgentCard[] = [
  {
    title: "Company Research Agent",
    installs: "9K installs",
    description: "Researches companies for great background info before reaching out.",
    kind: "Agent",
  },
  {
    title: "Customer Agent",
    installs: "34K installs",
    description: "Resolve 65% of conversations 24/7 across Marketing, Sales and Service.",
    kind: "Agent",
  },
  {
    title: "Domains Assistant",
    installs: "<10 installs",
    description: "Assists with domain-related queries, domain setup processes, and domain admin tasks.",
    kind: "Assistant",
  },
  {
    title: "Customer Health Agent",
    installs: "2K installs",
    description: "Assesses customer health and suggests next best actions.",
    kind: "Agent",
    badge: "BETA",
  },
];

const learnCards: LearnCard[] = [
  {
    title: "Academy",
    description: "Access comprehensive training courses, tutorials, and best practices to build expertise with Breeze AI agents.",
    action: "Explore Academy courses",
    icon: "A",
  },
  {
    title: "Knowledge Base",
    description: "Find detailed documentation, troubleshooting guides, and technical resources to help you implement Breeze.",
    action: "Browse Knowledge Base",
    icon: "K",
  },
  {
    title: "Community",
    description: "Connect with other Breeze users, share experiences, and get answers from the community.",
    action: "Join the Community",
    icon: "C",
  },
  {
    title: "ROI Calculator",
    description: "Estimate potential return on investment for your Breeze implementation and calculate time savings.",
    action: "Try the Calculator",
    icon: "R",
  },
];

function VideoCard({ title }: { title: string }) {
  return (
    <article className="rounded-xl border border-[#d2d5db] bg-white p-5 shadow-sm">
      <h3 className="min-h-[88px] text-2xl font-semibold leading-tight text-[#1f2937]">{title}</h3>
      <div className="relative mt-4 h-44 overflow-hidden rounded-md bg-gradient-to-r from-[#c6d0d8] to-[#9ba9b4]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white/90 bg-white/20">
          <Play className="ml-1 h-10 w-10 fill-white text-white" />
        </div>
      </div>
    </article>
  );
}

function FeatureCard({
  title,
  description,
  buttonLabel,
  buttonStyle,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonStyle: "pink" | "dark";
}) {
  return (
    <article className="rounded-xl border border-[#d2d5db] bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#111827]">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-[#374151]">{description}</p>
      <button
        className={
          buttonStyle === "pink"
            ? "mt-8 inline-flex items-center gap-2 rounded-full bg-[#e10098] px-6 py-2.5 text-base font-semibold text-white hover:bg-[#ca0087]"
            : "mt-8 inline-flex items-center rounded-md bg-[#101215] px-6 py-2.5 text-base font-semibold text-white hover:bg-black"
        }
      >
        {buttonStyle === "pink" ? <Sparkles className="h-5 w-5" /> : null}
        {buttonLabel}
      </button>
    </article>
  );
}

function AgentTile({ card }: { card: AgentCard }) {
  return (
    <article className="relative rounded-xl border border-[#d2d5db] bg-white p-5 shadow-sm">
      {card.badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-[#6d3fe0] px-3 py-1 text-xs font-semibold text-white">{card.badge}</span>
      ) : null}
      <div className="h-16 w-16 rounded-xl border border-orange-500 bg-gradient-to-br from-pink-100 via-white to-[#ffd6c2]" />
      <h4 className="mt-4 text-xl font-semibold leading-tight text-[#1f2937]">{card.title}</h4>
      <p className="mt-1 text-sm text-[#6b7280]">By IQuanta &nbsp;&nbsp; {card.installs}</p>
      <p className="mt-3 line-clamp-3 text-base leading-snug text-[#374151]">{card.description}</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="rounded-full bg-[#eceff2] px-3 py-1 text-xs font-semibold text-[#3b414b]">{card.kind}</span>
        <span className="rounded-full bg-[#ff2f7b] px-3 py-1 text-xs font-semibold text-white">+ Breeze</span>
      </div>
    </article>
  );
}

function LearnTile({ card }: { card: LearnCard }) {
  return (
    <article className="rounded-xl border border-[#d2d5db] bg-white p-7 shadow-sm">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-pink-100 text-xl font-semibold text-[#d61f8c]">{card.icon}</div>
      <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#1f2937]">{card.title}</h3>
      <p className="mt-4 min-h-[180px] text-base leading-relaxed text-[#374151]">{card.description}</p>
      <button className="inline-flex items-center gap-1 rounded-md border border-[#b6bcc5] px-4 py-2 text-base font-medium text-[#374151] hover:bg-[#f7f8fa]">
        {card.action}
        <ExternalLink className="h-4 w-4" />
      </button>
    </article>
  );
}

export function BrzStudio() {
  return (
    <div className="min-h-screen bg-[#ececec] text-[#1f2937]">
      <header className="border-b border-[#d1d5db] bg-white px-8 pb-0 pt-7">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center gap-3">
            <Sparkles className="h-9 w-9 text-[#ff5a3d]" />
            <h1 className="text-4xl font-semibold tracking-tight text-[#111827]">Breeze</h1>
          </div>
          <div className="mt-8 flex items-end gap-8 text-lg">
            <button className="border-b-[5px] border-black pb-4 font-semibold text-[#111827]">Get started</button>
            <button className="pb-4 text-[#374151]">Dashboard</button>
            <span className="mb-4 rounded-full bg-[#6d3fe0] px-3 py-1 text-xs font-semibold text-white">Beta</span>
          </div>
        </div>
      </header>

      <main className="px-8 py-8">
        <div className="mx-auto max-w-[1280px]">
          <section className="rounded-3xl bg-gradient-to-r from-[#f2d6cc] to-[#f5d6e8] p-10 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-2xl font-semibold text-[#111827]">
                <Sparkles className="h-7 w-7" />
                <span>Breeze</span>
              </div>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[#111827] md:text-5xl">
                The complete AI solution that&apos;s easy to use.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-[#1f2937] md:text-2xl">
                Unify your marketing, sales, and service teams to accelerate growth.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <VideoCard title="Create content, grow your audience, and drive leads." />
              <VideoCard title="Scale revenue without scaling complexity." />
              <VideoCard title="Ramp up customer service without slowing down." />
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">Tap into the power of IQuanta&apos;s AI right at your fingertips</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <FeatureCard
                title="Breeze Assistant"
                description="Get more done with a virtual assistant that works with you everywhere you go in IQuanta."
                buttonLabel="Open Breeze Assistant"
                buttonStyle="pink"
              />
              <FeatureCard
                title="Breeze Agents"
                description="Automate manual tasks and work for you, so you can focus on more strategic work."
                buttonLabel="Visit Breeze Marketplace"
                buttonStyle="dark"
              />
            </div>
            <p className="mt-7 text-center text-base font-medium text-[#1f2937]">
              Customize your AI features to enhance your control, transparency, and experience in{" "}
              <a href="#" className="font-semibold text-[#0f766e] underline">
                AI Settings
              </a>{" "}
              <Settings className="mb-1 inline h-4 w-4" />
            </p>
          </section>

          <section className="mt-12">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-semibold text-[#111827] md:text-4xl">Featured Agents</h3>
              <a href="#" className="text-lg font-semibold text-[#0f766e] hover:underline">
                See more
              </a>
            </div>
            <div className="relative mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {featuredAgents.map((card) => (
                  <AgentTile key={card.title} card={card} />
                ))}
              </div>
              <button className="absolute -left-7 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-[#c1c7d0] bg-white text-[#6b7280] shadow-sm">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="absolute -right-7 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-[#c1c7d0] bg-white text-[#6b7280] shadow-sm">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </section>

          <section className="mt-12 pb-10">
            <h3 className="text-3xl font-semibold text-[#111827] md:text-4xl">Learn</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {learnCards.map((card) => (
                <LearnTile key={card.title} card={card} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}