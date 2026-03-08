import Link from "next/link";
import {
  Activity,
  CalendarClock,
  CreditCard,
  Package,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const quickStats = [
  { label: "Daily Sales", value: "$18,420", icon: CreditCard },
  { label: "Open Bookings", value: "128", icon: CalendarClock },
  { label: "Inventory Health", value: "96%", icon: Package },
  { label: "Active Queue", value: "34", icon: UsersRound },
];

export function Hero() {
  return (
    <section className="section-shell relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-20" id="home">
      <div className="bg-grid absolute inset-x-8 bottom-0 top-10 -z-10 rounded-[32px] opacity-60" aria-hidden />
      <div className="absolute -left-12 top-20 -z-10 h-60 w-60 rounded-full bg-cb-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -right-10 top-32 -z-10 h-60 w-60 rounded-full bg-cb-green/20 blur-3xl" aria-hidden />

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cb-border/80 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cb-primary">
            Connected Business Ecosystem
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-cb-text md:text-5xl lg:text-6xl">
            Run Your Entire Business From One Platform
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cb-muted">
            CentrBiz connects POS, inventory, booking, queueing, and business operations into one powerful SaaS ecosystem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-cb-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95"
            >
              Start Free Trial
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-xl border border-cb-border bg-white px-6 py-3 text-sm font-semibold text-cb-text transition hover:border-cb-tech/30 hover:text-cb-primary"
            >
              Request Demo
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-cb-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cb-green" />
              Multi-tenant workspaces
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cb-tech" />
              API-first architecture
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cb-teal" />
              Branch-aware operations
            </span>
          </div>
        </div>

        <aside className="glass-panel relative rounded-3xl p-5 shadow-soft md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-cb-muted">Workspace: Atlas Retail Group</p>
              <p className="text-xl font-semibold text-cb-text">Operations Command Center</p>
            </div>
            <span className="rounded-full border border-cb-green/30 bg-cb-green/10 px-3 py-1 text-xs font-semibold text-cb-green">
              Live
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickStats.map(({ label, value, icon: Icon }) => (
              <article key={label} className="rounded-2xl border border-cb-border/80 bg-white/85 p-4 shadow-card">
                <div className="mb-3 inline-flex rounded-xl bg-cb-primary/10 p-2 text-cb-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-cb-muted">{label}</p>
                <p className="mt-1 text-2xl font-semibold text-cb-text">{value}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-cb-border/80 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-cb-text">Ecosystem Activity</p>
              <Activity className="h-4 w-4 text-cb-tech" />
            </div>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-xs text-cb-muted">
                  <span>POS Sync</span>
                  <span>97%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[97%] rounded-full bg-cb-gradient" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-xs text-cb-muted">
                  <span>Inventory Visibility</span>
                  <span>93%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[93%] rounded-full bg-cb-gradient" />
                </div>
              </div>
              <div className="rounded-xl border border-cb-border bg-cb-light p-3 text-sm text-cb-muted">
                <span className="font-medium text-cb-text">+18.4%</span> operational efficiency over the last 30 days.
                <TrendingUp className="ml-1 inline h-4 w-4 text-cb-green" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
