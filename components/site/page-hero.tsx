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
      <div className="cb-section">
        <div className="pointer-events-none absolute -left-12 top-8 h-40 w-40 rounded-full bg-cb-primary/[0.18] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute right-10 top-12 h-28 w-28 rounded-full bg-cb-sky/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-12 bottom-8 h-44 w-44 rounded-full bg-cb-green/[0.18] blur-3xl" aria-hidden />
        <div className="cb-tint-line pointer-events-none absolute inset-x-12 top-0 h-px" aria-hidden />

        <div className="relative max-w-3xl">
          <p className="cb-badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cb-green" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-cb-text md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cb-muted md:text-lg">{description}</p>

          {actions.length > 0 ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "cb-button-secondary"
                      : "cb-button-primary"
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
