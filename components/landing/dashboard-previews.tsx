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

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {panels.map(({ title, metric, detail, icon: Icon, bars }) => (
          <article
            key={title}
            className="flex h-full flex-col rounded-2xl border border-cb-border bg-white p-4 shadow-card transition hover:-translate-y-0.5"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="inline-flex rounded-lg bg-cb-primary/10 p-2 text-cb-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-cb-muted">Live</span>
            </div>
            <p className="text-sm font-semibold text-cb-text">{title}</p>
            <p className="mt-1 text-lg font-semibold text-cb-text">{metric}</p>
            <p className="mt-1 text-xs text-cb-muted">{detail}</p>
            <div className="mt-auto flex items-end gap-1 pt-4">
              {bars.map((height, index) => (
                <span
                  key={`${title}-${index}`}
                  className="w-full rounded-sm bg-cb-gradient"
                  style={{ height: `${height / 2}px` }}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
