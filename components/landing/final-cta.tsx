import Link from "next/link";

export function FinalCta() {
  return (
    <section className="section-shell py-16">
      <div className="relative overflow-hidden rounded-3xl bg-cb-gradient p-8 shadow-soft md:p-12">
        <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-white/20 blur-2xl" aria-hidden />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white/15 blur-2xl" aria-hidden />

        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Ready to scale</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Start managing your business the smarter way.
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/85">
            Activate your CentrBiz workspace and connect the modules that keep your operations moving in sync.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-cb-primary transition hover:bg-slate-50"
            >
              Start Free Trial
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
