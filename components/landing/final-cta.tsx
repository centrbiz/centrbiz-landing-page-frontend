import Link from "next/link";

export function FinalCta() {
  return (
    <section className="section-shell py-16">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12" style={{ backgroundImage: "linear-gradient(120deg, #0A3F8F 0%, #1E63B5 28%, #1B84D6 56%, #27B3A8 78%, #43B05C 100%)" }}>
        <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/[0.14] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#dfffea]/[0.24] blur-3xl" aria-hidden />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Ready to scale</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Start managing your business the smarter way.
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/[0.85]">
            Activate your CentrBiz workspace and connect the modules that keep your operations moving in sync.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-cb-navy transition hover:bg-slate-50"
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
