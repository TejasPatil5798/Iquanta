import { Fragment } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  Clock3,
  Lock,
  Mail,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";

const unlockedFeatures = [
  "Automate personalized email follow-up at scale",
  "Enroll contacts when they match your ideal workflow",
  "Create tasks automatically as each sequence step progresses",
  "Track replies, meetings booked, and engagement in one place",
];

const valueCards = [
  {
    icon: Mail,
    title: "Personalized outreach",
    description:
      "Build repeatable follow-up paths with automated emails and timed task steps.",
  },
  {
    icon: Users,
    title: "Sales productivity",
    description:
      "Keep reps focused on high-value conversations instead of repetitive manual follow-up.",
  },
  {
    icon: BarChart3,
    title: "Performance visibility",
    description:
      "Measure opens, clicks, replies, and meetings booked across every sequence.",
  },
];

const includedFeatures = [
  "Sequences",
  "Calling hours",
  "Sales automation",
  "Forecasting and goals",
  "Custom reporting",
  "1:1 video",
];

export function SalesSequences() {
  return (
    <div className="min-h-full bg-[#f5f8fa] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-[#516f90]">
          <span>Sales</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-[#213343]">Sequences</span>
        </div>

        <section className="overflow-hidden rounded-2xl border border-[#dfe3eb] bg-white shadow-[0_8px_24px_rgba(33,51,67,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-[#dfe3eb] px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffd7cf] bg-[#fff3f0] px-3 py-1 text-sm font-semibold text-[#d44325]">
                <Lock className="h-4 w-4" />
                Locked feature
              </div>

              <h1 className="max-w-xl text-3xl font-semibold tracking-[-0.02em] text-[#213343] sm:text-4xl">
                Automate follow-up with Sequences
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#516f90] sm:text-lg">
                Sequences is available on Sales Hub Professional and Enterprise.
                Upgrade to enroll contacts, automate sales touchpoints, and help
                your team close faster with less manual work.
              </p>

              <div className="mt-8 grid gap-3">
                {unlockedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-[#eaf0f6] bg-[#f8fbfd] px-4 py-3"
                  >
                    <div className="mt-0.5 rounded-full bg-[#e5f5f8] p-1 text-[#00a4bd]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm leading-6 text-[#213343]">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="inline-flex h-11 items-center justify-center rounded-md bg-[#ff5c35] px-5 text-sm font-semibold text-white transition hover:bg-[#e04826]">
                  Upgrade now
                </button>
                <button className="inline-flex h-11 items-center justify-center rounded-md border border-[#cbd6e2] bg-white px-5 text-sm font-semibold text-[#213343] transition hover:bg-[#f8fbfd]">
                  View pricing
                </button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[#516f90]">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#00a4bd]" />
                  Included in Sales Hub Professional
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#7c98b6]" />
                  Setup in minutes
                </span>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f8_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="mx-auto max-w-lg rounded-2xl border border-[#dfe3eb] bg-white shadow-[0_16px_30px_rgba(33,51,67,0.1)]">
                <div className="flex items-center justify-between border-b border-[#eaf0f6] px-5 py-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c98b6]">
                      Sequence preview
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-[#213343]">
                      New outbound follow-up
                    </h2>
                  </div>
                  <div className="rounded-full bg-[#e5f5f8] p-2 text-[#00a4bd]">
                    <PlayCircle className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="rounded-xl border border-[#eaf0f6] bg-[#f8fbfd] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[#213343]">
                          Enrollment
                        </p>
                        <p className="text-xs text-[#516f90]">
                          Contacts added automatically from saved filters
                        </p>
                      </div>
                      <div className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-[#00a4bd] shadow-sm">
                        Active
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                        <div className="rounded-full bg-[#fff3f0] p-2 text-[#ff5c35]">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[#213343]">
                            Step 1: Intro email
                          </p>
                          <p className="truncate text-xs text-[#516f90]">
                            Personalized using contact and company tokens
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                        <div className="rounded-full bg-[#edf2ff] p-2 text-[#5c62d6]">
                          <Clock3 className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[#213343]">
                            Step 2: Wait 2 business days
                          </p>
                          <p className="truncate text-xs text-[#516f90]">
                            Skip weekends and respect calling hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                        <div className="rounded-full bg-[#e5f5f8] p-2 text-[#00a4bd]">
                          <Users className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[#213343]">
                            Step 3: Create call task
                          </p>
                          <p className="truncate text-xs text-[#516f90]">
                            Notify rep if contact has not replied yet
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-[#eaf0f6] bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c98b6]">
                        Enrolled
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-[#213343]">
                        148
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#eaf0f6] bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c98b6]">
                        Reply rate
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-[#213343]">
                        27%
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#eaf0f6] bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c98b6]">
                        Meetings
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-[#213343]">
                        19
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-dashed border-[#cbd6e2] bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-[#fff8e6] p-2 text-[#f5a623]">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#213343]">
                          Unlock guided sequence creation
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#516f90]">
                          Build outreach journeys faster with reusable templates,
                          automation, and reporting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {valueCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#dfe3eb] bg-white p-6 shadow-[0_4px_16px_rgba(33,51,67,0.06)]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#eaf0f6] p-3 text-[#33475b]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#213343]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#516f90]">
                {description}
              </p>
            </div>
          ))}
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#dfe3eb] bg-white shadow-[0_8px_24px_rgba(33,51,67,0.06)]">
          <div className="border-b border-[#eaf0f6] px-6 py-5 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7c98b6]">
              Plan comparison
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#213343]">
              Upgrade to unlock Sequences and more
            </h2>
          </div>

          <div className="grid gap-px bg-[#dfe3eb] lg:grid-cols-[0.9fr_1fr_1fr] p-5">
            <div className="bg-white px-6 py-6 sm:px-8">
              <p className="text-sm font-semibold text-[#213343]">
                Included features
              </p>
              <p className="mt-2 text-sm leading-6 text-[#516f90]">
                Compare what you have today with what becomes available on Sales
                Hub Professional.
              </p>
            </div>

            <div className="bg-white px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c98b6]">
                Your current plan
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#213343]">
                Sales Hub Starter
              </h3>
              <p className="mt-1 text-sm text-[#516f90]">
                Good for lightweight sales tools and contact management.
              </p>
            </div>

            <div className="bg-[#fff8f5] px-6 py-6 sm:px-8">
              <div className="inline-flex rounded-full bg-[#ff5c35] px-2.5 py-1 text-xs font-semibold text-white">
                Recommended
              </div>
              <h3 className="mt-2 text-xl font-semibold text-[#213343]">
                Sales Hub Professional
              </h3>
              <p className="mt-1 text-sm text-[#516f90]">
                Built for growing teams that need automation, reporting, and
                scalable outreach.
              </p>
            </div>

            {includedFeatures.map((feature) => (
              <Fragment key={feature}>
                <div
                  className="bg-white px-6 py-4 text-sm font-medium text-[#213343] sm:px-8"
                >
                  {feature}
                </div>
                <div
                  className="flex items-center bg-white px-6 py-4 sm:px-8"
                >
                  {feature === "Sequences" ||
                  feature === "Forecasting and goals" ||
                  feature === "Custom reporting" ? (
                    <span className="text-sm text-[#9fb3c8]">Not included</span>
                  ) : (
                    <span className="inline-flex rounded-full bg-[#eaf0f6] px-2.5 py-1 text-xs font-semibold text-[#516f90]">
                      Limited
                    </span>
                  )}
                </div>
                <div
                  className="flex items-center bg-[#fff8f5] px-6 py-4 sm:px-8"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#213343]">
                    <span className="rounded-full bg-[#ffebe6] p-1 text-[#ff5c35]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    Included
                  </span>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-[#eaf0f6] bg-[#f8fbfd] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h3 className="text-lg font-semibold text-[#213343]">
                Ready to start using Sequences?
              </h3>
              <p className="mt-1 text-sm text-[#516f90]">
                Upgrade your plan to unlock automation, performance insights, and
                guided outreach for your sales team.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-11 items-center justify-center rounded-md border border-[#cbd6e2] bg-white px-5 text-sm font-semibold text-[#213343] transition hover:bg-white">
                Talk to sales
              </button>
              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#ff5c35] px-5 text-sm font-semibold text-white transition hover:bg-[#e04826]">
                Upgrade now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}