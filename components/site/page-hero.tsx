import Link from "next/link";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: HeroAction[];
};

export function PageHero({ eyebrow, title, description, actions = [] }: PageHeroProps) {
  return (
    <section className="section-shell pt-14 md:pt-20">
      <div className="relative overflow-hidden rounded-[28px] border border-cb-border/80 bg-white p-8 shadow-soft md:p-12">
        <div className="pointer-events-none absolute -left-12 top-8 h-40 w-40 rounded-full bg-cb-primary/12 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-12 bottom-8 h-40 w-40 rounded-full bg-cb-green/12 blur-3xl" aria-hidden />

        <div className="relative max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cb-border/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cb-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-cb-green" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-cb-text md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-cb-muted md:text-lg">{description}</p>

          {actions.length > 0 ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "inline-flex items-center justify-center rounded-xl border border-cb-border bg-white px-5 py-3 text-sm font-semibold text-cb-text transition hover:border-cb-tech/40"
                      : "inline-flex items-center justify-center rounded-xl bg-cb-gradient px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-95"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
