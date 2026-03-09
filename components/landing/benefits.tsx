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
      <div className="cb-section">
        <div className="pointer-events-none absolute right-6 top-10 h-32 w-32 rounded-full bg-cb-green/[0.14] blur-3xl" aria-hidden />
        <div className="relative mb-8 border-b border-white/60 pb-8">
          <p className="cb-badge mb-4">
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
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cb-azure via-white to-cb-mint text-cb-primary transition-colors group-hover:bg-cb-primary/10">
                  <Icon className="h-6 w-6" />
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
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/[0.88] via-cb-azure/[0.55] to-cb-mint/[0.55] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-cb-primary transition-colors group-hover:bg-cb-primary/10">
                  <Icon className="h-6 w-6" />
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
