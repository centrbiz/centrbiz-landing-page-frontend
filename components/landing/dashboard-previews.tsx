import { BarChart3, CalendarCheck2, LayoutGrid, Package2, Users2 } from "lucide-react";

import { SectionHeading } from "./section-heading";

const panels = [
  {
    title: "POS",
    metric: "247 Transactions",
    detail: "Today",
    icon: LayoutGrid,
    bars: [68, 84, 72, 92],
  },
  {
    title: "Inventory",
    metric: "1,284 SKUs",
    detail: "94% healthy stock",
    icon: Package2,
    bars: [76, 66, 88, 71],
  },
  {
    title: "Booking",
    metric: "128 Appointments",
    detail: "86% attendance",
    icon: CalendarCheck2,
    bars: [54, 78, 83, 64],
  },
  {
    title: "Queue",
    metric: "34 Active",
    detail: "Avg wait 9m",
    icon: Users2,
    bars: [44, 56, 63, 58],
  },
  {
    title: "Analytics",
    metric: "+18.4%",
    detail: "MoM operational gain",
    icon: BarChart3,
    bars: [39, 52, 70, 95],
  },
];

export function DashboardPreviews() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="Dashboard Preview"
        title="A Unified View Across Every Operational Layer"
        description="CentrBiz surfaces real-time metrics from each enabled module so leadership and frontline teams work from aligned data."
      />

      <div className="cb-section p-5 md:p-7">
        <div
          className="pointer-events-none absolute -left-8 top-6 h-32 w-32 rounded-full bg-cb-tech/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-4 top-8 h-36 w-36 rounded-full bg-cb-green/[0.1] blur-3xl"
          aria-hidden
        />
        <div className="mb-5 flex flex-col gap-3 rounded-[24px] border border-white/70 bg-white/[0.52] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cb-muted">
              Live command view
            </p>
            <p className="mt-1 text-base font-semibold text-cb-text">
              Coordinated metrics across transaction, service, and inventory workflows
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-cb-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-cb-green shadow-[0_0_0_6px_rgba(67,176,92,0.12)]" />
            Updated every 15 seconds
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {panels.map(({ title, metric, detail, icon: Icon, bars }, panelIndex) => {
            const panelClasses = [
              "from-cb-azure/95 via-white to-cb-azure/72",
              "from-[#ecfbf8] via-white to-cb-mint/78",
              "from-white via-cb-azure/70 to-cb-sky/25",
              "from-cb-sand/95 via-white to-cb-mint/[0.7]",
              "from-cb-azure/82 via-white to-cb-mint/82",
            ];

            const barClasses = [
              "from-cb-navy via-cb-primary to-cb-tech",
              "from-cb-tech via-cb-teal to-cb-green",
              "from-cb-primary via-cb-tech to-cb-sky",
              "from-cb-teal via-cb-green to-cb-lime",
              "from-cb-primary via-cb-teal to-cb-green",
            ];

            return (
              <article
                key={title}
                className={`cb-rich-card flex h-full flex-col bg-gradient-to-br p-4 ${panelClasses[panelIndex]}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex rounded-lg border border-white/70 bg-white/[0.9] p-2 text-cb-primary shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cb-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-cb-green" />
                    Live
                  </span>
                </div>
                <p className="text-sm font-semibold text-cb-text">{title}</p>
                <p className="mt-1 text-lg font-semibold text-cb-text">{metric}</p>
                <p className="mt-1 text-xs text-cb-muted">{detail}</p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-medium text-cb-muted">
                  <span>Signal strength</span>
                  <span>{74 + panelIndex * 5}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/75">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${barClasses[panelIndex]}`}
                    style={{ width: `${74 + panelIndex * 5}%` }}
                  />
                </div>
                <div className="mt-auto flex items-end gap-1 pt-5">
                  {bars.map((height, index) => (
                    <span
                      key={`${title}-${index}`}
                      className={`w-full rounded-sm bg-gradient-to-t transition-opacity hover:opacity-80 ${barClasses[panelIndex]}`}
                      style={{ height: `${height / 2}px` }}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
