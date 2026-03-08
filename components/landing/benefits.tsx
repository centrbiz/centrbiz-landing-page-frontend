import { ChartColumnBig, CircleEllipsis, Layers3, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "All-in-one ecosystem",
    description: "Unify frontline execution and management oversight inside one platform.",
    icon: CircleEllipsis,
  },
  {
    title: "Modular and scalable",
    description: "Adopt modules progressively and scale by branch, team, and workload.",
    icon: Layers3,
  },
  {
    title: "Better operational visibility",
    description: "Track business performance with real-time, module-aware insights.",
    icon: ChartColumnBig,
  },
  {
    title: "Centralized business control",
    description: "Standardize policies and permissions while allowing local execution.",
    icon: ShieldCheck,
  },
  {
    title: "Built for growing businesses",
    description: "Designed for teams that need stability today and flexibility tomorrow.",
    icon: Sparkles,
  },
];

const leftColumnBenefits = benefits.filter((_, index) => index % 2 === 0);
const rightColumnBenefits = benefits.filter((_, index) => index % 2 === 1);

export function Benefits() {
  return (
    <section className="section-shell py-20">
      <div className="relative overflow-hidden rounded-[32px] border border-cb-border/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-8">
        <div
          className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-cb-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-cb-green/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mb-8 border-b border-cb-border/70 pb-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cb-border/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cb-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-cb-green" aria-hidden />
            Why CentrBiz
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-cb-text md:text-4xl">
            Operational Clarity Meets Growth-ready Architecture
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-cb-muted md:text-lg">
            CentrBiz helps teams run faster, stay aligned, and scale confidently without juggling disconnected systems.
          </p>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-2">
          <div className="grid gap-4">
            {leftColumnBenefits.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cb-border/80 bg-gradient-to-br from-white via-white to-cb-primary/5 p-5 shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cb-tech/35"
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cb-primary via-cb-tech to-cb-green"
                  aria-hidden
                />
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cb-primary/15 bg-gradient-to-br from-cb-primary/15 via-cb-tech/10 to-cb-teal/20 text-cb-primary transition group-hover:scale-105">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-cb-text">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cb-muted">{description}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4">
            {rightColumnBenefits.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cb-border/80 bg-gradient-to-br from-white via-white to-cb-green/5 p-5 shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cb-tech/35"
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cb-primary via-cb-tech to-cb-green"
                  aria-hidden
                />
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cb-primary/15 bg-gradient-to-br from-cb-primary/15 via-cb-tech/10 to-cb-teal/20 text-cb-primary transition group-hover:scale-105">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-cb-text">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cb-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
