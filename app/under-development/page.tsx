import Link from "next/link";
import { Construction, Rocket, ShieldCheck } from "lucide-react";

import { BrandLogo } from "@/components/site/brand-logo";
import { SitePageShell } from "@/components/site/site-page-shell";

export default function UnderDevelopmentPage() {
  return (
    <SitePageShell>
      <section className="section-shell py-20 md:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-cb-border/80 bg-white p-8 shadow-soft md:p-12">
          <div className="pointer-events-none absolute -left-14 top-10 h-44 w-44 rounded-full bg-cb-primary/12 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-14 bottom-6 h-44 w-44 rounded-full bg-cb-green/12 blur-3xl" aria-hidden />

          <div className="relative text-center">
            <BrandLogo variant="stacked" size="lg" className="mb-6" />
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-cb-border/70 bg-cb-light/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cb-primary">
              <Construction className="h-3.5 w-3.5" />
              Still in Development
            </p>
            <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-cb-text md:text-5xl">
              This page is currently being built.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cb-muted md:text-lg">
              We are actively working on this section to deliver a complete CentrBiz experience.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-cb-gradient px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-95"
              >
                Back to homepage
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-cb-border bg-white px-5 py-3 text-sm font-semibold text-cb-text transition hover:border-cb-tech/40"
              >
                Contact team
              </Link>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-cb-border bg-cb-light/60 p-4 text-left">
                <Rocket className="h-4 w-4 text-cb-primary" />
                <p className="mt-2 text-sm font-semibold text-cb-text">Feature rollout in progress</p>
                <p className="mt-1 text-xs text-cb-muted">New pages and workflows are being finalized.</p>
              </article>
              <article className="rounded-2xl border border-cb-border bg-cb-light/60 p-4 text-left">
                <ShieldCheck className="h-4 w-4 text-cb-green" />
                <p className="mt-2 text-sm font-semibold text-cb-text">Production-ready standards</p>
                <p className="mt-1 text-xs text-cb-muted">Quality, responsiveness, and consistency remain prioritized.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
