import type { LucideIcon } from "lucide-react";
import { Activity, CalendarClock, ClipboardList, LayoutGrid, Package, Stethoscope, UsersRound } from "lucide-react";

import { BrandLogo } from "@/components/site/brand-logo";
import { SectionHeading } from "./section-heading";

type OrbitModule = {
  name: string;
  icon: LucideIcon;
};

const modules: OrbitModule[] = [
  { name: "POS", icon: LayoutGrid },
  { name: "Inventory", icon: Package },
  { name: "Booking", icon: CalendarClock },
  { name: "Queue", icon: UsersRound },
  { name: "Reports", icon: Activity },
  { name: "CRM", icon: ClipboardList },
  { name: "Clinic", icon: Stethoscope },
];

const canvasWidth = 960;
const canvasHeight = 560;
const centerX = canvasWidth / 2;
const centerY = 280;
const orbitRadius = 214;
const startAngle = -90;

const orbitModules = modules.map((module, index) => {
  const angle = ((startAngle + (index * 360) / modules.length) * Math.PI) / 180;
  const x = Math.round(Math.cos(angle) * orbitRadius);
  const y = Math.round(Math.sin(angle) * orbitRadius);

  return { ...module, x, y };
});

export function Ecosystem() {
  return (
    <section className="section-shell scroll-mt-28 py-16" id="platform">
      <SectionHeading
        eyebrow="Platform Ecosystem"
        title="CentrBiz Connects Every Core Module in One Unified Flow"
        description="Operate from one source of truth where data moves seamlessly between sales, stock, bookings, and customer operations."
        align="center"
      />

      <div className="relative mx-auto hidden justify-center xl:flex">
        <div className="relative h-[560px] w-[960px] overflow-hidden rounded-[32px] border border-cb-border bg-white/75 shadow-soft backdrop-blur">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cb-tech/30"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cb-primary/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cb-green/25"
            aria-hidden
          />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
            aria-hidden
          >
            {orbitModules.map((item) => (
              <g key={`line-${item.name}`}>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={centerX + item.x}
                  y2={centerY + item.y}
                  stroke="rgba(27, 132, 214, 0.28)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <circle
                  cx={centerX + item.x}
                  cy={centerY + item.y}
                  r="3"
                  fill="rgba(27, 132, 214, 0.42)"
                />
              </g>
            ))}
          </svg>

          <article className="glass-panel absolute left-1/2 top-1/2 z-20 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border-cb-primary/30 text-center shadow-soft">
            <div>
              <BrandLogo variant="icon" size="lg" className="mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-cb-text">CentrBiz Core</h3>
              <p className="mt-2 px-4 text-sm text-cb-muted">Unified workspace orchestration</p>
            </div>
          </article>

          {orbitModules.map(({ name, icon: Icon, x, y }) => (
            <article
              key={name}
              className="glass-panel absolute z-20 flex h-24 w-36 flex-col items-center justify-center gap-2 rounded-2xl px-3 text-center shadow-card transition hover:-translate-y-0.5"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <span className="inline-flex rounded-xl bg-cb-primary/10 p-2 text-cb-primary">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-xs font-semibold tracking-wide text-cb-text">{name}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:hidden">
        <article className="rounded-2xl border border-cb-primary/25 bg-white p-4 text-center shadow-card sm:col-span-2">
          <BrandLogo variant="icon" size="md" className="mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-cb-text">CentrBiz Core</h3>
          <p className="mt-1 text-sm text-cb-muted">All modules connected in one workspace.</p>
        </article>

        {modules.map(({ name, icon: Icon }) => (
          <article key={name} className="flex min-h-[104px] items-center gap-3 rounded-2xl border border-cb-border bg-white p-4 shadow-card">
            <span className="inline-flex rounded-lg bg-cb-primary/10 p-2 text-cb-primary">
              <Icon className="h-4 w-4" />
            </span>
            <p className="text-sm font-medium text-cb-text">{name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
