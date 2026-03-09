import Link from "next/link";

import { BrandLogo } from "@/components/site/brand-logo";
import { SitePageShell } from "@/components/site/site-page-shell";

export default function NotFound() {
  return (
    <SitePageShell>
      <section className="section-shell py-24 text-center md:py-28">
        <div className="cb-section mx-auto max-w-3xl">
          <BrandLogo variant="stacked" size="lg" className="mb-6" />
          <p className="cb-badge">404</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cb-text">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-cb-muted">
            The page you requested is unavailable or may have moved.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="cb-button-primary">
              Back to homepage
            </Link>
            <Link href="/contact" className="cb-button-secondary">
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
