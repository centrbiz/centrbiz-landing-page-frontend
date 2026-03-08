import Link from "next/link";

import { BrandLogo } from "@/components/site/brand-logo";
import { SitePageShell } from "@/components/site/site-page-shell";

export default function NotFound() {
  return (
    <SitePageShell>
      <section className="section-shell py-24 text-center md:py-28">
        <BrandLogo variant="stacked" size="lg" className="mb-6" />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cb-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cb-text">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-cb-muted">
          The page you requested is unavailable or may have moved.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-cb-gradient px-5 py-3 text-sm font-semibold text-white shadow-card"
          >
            Back to homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-cb-border bg-white px-5 py-3 text-sm font-semibold text-cb-text"
          >
            Contact support
          </Link>
        </div>
      </section>
    </SitePageShell>
  );
}
