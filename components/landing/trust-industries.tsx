import {
  Building2,
  Factory,
  HeartPulse,
  PackageOpen,
  Scissors,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import type { ComponentType } from "react";

type Industry = {
  name: string;
  description: string;
  metric: string;
  icon: ComponentType<{ className?: string }>;
};

const industries: Industry[] = [
  {
    name: "Retail",
    description: "Unified checkout, inventory, and branch visibility.",
    metric: "Real-time sales sync",
    icon: Store,
  },
  {
    name: "Clinics",
    description: "Appointments, queue, and patient operations in one flow.",
    metric: "Patient-ready workflows",
    icon: HeartPulse,
  },
  {
    name: "Pharmacies",
    description: "Track stock, expiry, and transaction controls precisely.",
    metric: "Expiry-aware inventory",
    icon: ShoppingBag,
  },
  {
    name: "Salons",
    description: "Manage schedules, walk-ins, and customer records efficiently.",
    metric: "Optimized booking cadence",
    icon: Scissors,
  },
  {
    name: "Warehouses",
    description: "Monitor movements, levels, and replenishment in real time.",
    metric: "Faster stock turnover",
    icon: PackageOpen,
  },
  {
    name: "Service Businesses",
    description: "Coordinate teams, requests, and day-to-day service execution.",
    metric: "Operational consistency",
    icon: Truck,
  },
  {
    name: "Multi-branch Companies",
    description: "Standardize controls while preserving branch-level flexibility.",
    metric: "Centralized branch command",
    icon: Building2,
  },
];

const trustSignals = ["Modular rollout", "Role-based control", "Audit-ready", "API-friendly"];

export function TrustIndustries() {
  return (
    <section className="section-shell scroll-mt-28 py-20" id="industries">
      <div className="relative overflow-hidden rounded-[32px] border border-cb-border/80 bg-white p-6 shadow-[0_18px_46px_rgba(15,23,42,0.08)] md:p-10">
        <div
          className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-cb-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-14 bottom-8 h-48 w-48 rounded-full bg-cb-green/10 blur-3xl"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />

        <div className="relative">
          <div className="mb-8 flex flex-col gap-5 border-b border-cb-border/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cb-border/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cb-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-cb-green" aria-hidden />
                Industries
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-cb-text md:text-4xl">
                Built for Complex Operations Across Modern Businesses
              </h2>
              <p className="mt-4 text-base leading-7 text-cb-muted md:text-lg">
                CentrBiz adapts to high-volume, multi-team workflows that require reliable execution and centralized control.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:max-w-md">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center justify-center rounded-full border border-cb-border bg-cb-light/80 px-3 py-2 text-xs font-semibold tracking-wide text-cb-muted"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map(({ name, description, metric, icon: Icon }, index) => {
              const longCard = index === 6;

              return (
                <article
                  key={name}
                  className={`group relative flex min-h-[200px] flex-col overflow-hidden rounded-3xl border border-cb-border/80 bg-white/95 p-5 shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cb-tech/40 ${
                    longCard ? "sm:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cb-primary via-cb-tech to-cb-green"
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute -right-10 -top-8 h-24 w-24 rounded-full bg-cb-tech/10 blur-2xl transition group-hover:bg-cb-tech/15"
                    aria-hidden
                  />

                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cb-primary/15 bg-gradient-to-br from-cb-primary/15 via-cb-tech/10 to-cb-teal/20 text-cb-primary">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full border border-cb-border bg-cb-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cb-muted">
                      Industry
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-cb-text">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-cb-muted">{description}</p>
                  <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-cb-primary">
                    {metric}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-6 grid gap-4 rounded-2xl border border-cb-border/80 bg-cb-light/70 p-4 md:grid-cols-3 md:p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cb-muted">Coverage</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-cb-text">7+ Industry Tracks</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cb-muted">Use Case Model</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-cb-text">Modular by Workflow</p>
            </div>
            <div className="flex items-center md:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-cb-border bg-white px-3 py-2 text-sm font-medium text-cb-muted">
                <Factory className="h-4 w-4 text-cb-teal" />
                Enterprise-ready operational patterns
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
