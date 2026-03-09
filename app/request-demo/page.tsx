import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { SitePageShell } from "@/components/site/site-page-shell";

type RequestDemoSearchParams = {
  sent?: string;
  error?: string;
  config?: string;
};

export default async function RequestDemoPage({
  searchParams,
}: {
  searchParams: Promise<RequestDemoSearchParams>;
}) {
  const params = await searchParams;
  const isSent = params.sent === "1";
  const hasError = params.error === "1";
  const hasConfigError = params.config === "1";

  return (
    <SitePageShell>
      <PageHero
        eyebrow="Request Demo"
        title="See how CentrBiz fits your operations"
        description="Book a guided walkthrough of modules, workflows, and platform architecture tailored to your business model."
      />

      <section className="section-shell py-10 md:py-14">
        {isSent ? (
          <div className="mb-5 rounded-2xl border border-cb-green/30 bg-cb-mint px-4 py-3 text-sm font-medium text-cb-text">
            Demo request sent successfully. Please check your inbox for next steps.
          </div>
        ) : null}
        {hasError ? (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-cb-text">
            We couldn&apos;t send your request. Please try again.
          </div>
        ) : null}
        {hasConfigError ? (
          <div className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-cb-text">
            Email delivery is not configured yet. Set `RESEND_API_KEY` and `DEMO_TO_EMAIL` on the server.
          </div>
        ) : null}

        <div className="cb-card grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-cb-text">Tell us about your business</h2>
            <p className="mt-3 text-sm leading-7 text-cb-muted">
              We&apos;ll match your demo with the right module set and implementation flow.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-cb-muted">
              {[
                "Personalized product walkthrough",
                "Module and pricing recommendations",
                "Architecture and integration discussion",
                "Q&A with product specialists",
              ].map((item) => (
                <li key={item} className="rounded-xl border border-white/70 bg-gradient-to-r from-cb-azure/70 to-cb-mint/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form className="grid gap-4 sm:grid-cols-2" action="/api/request-demo" method="post">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <div>
              <label htmlFor="demoName" className="mb-2 block text-sm font-medium text-cb-text">
                Full name
              </label>
              <input
                id="demoName"
                name="demoName"
                type="text"
                className="cb-input"
                required
              />
            </div>
            <div>
              <label htmlFor="demoEmail" className="mb-2 block text-sm font-medium text-cb-text">
                Work email
              </label>
              <input
                id="demoEmail"
                name="demoEmail"
                type="email"
                className="cb-input"
                required
              />
            </div>
            <div>
              <label htmlFor="demoCompany" className="mb-2 block text-sm font-medium text-cb-text">
                Company
              </label>
              <input
                id="demoCompany"
                name="demoCompany"
                type="text"
                className="cb-input"
                required
              />
            </div>
            <div>
              <label htmlFor="demoIndustry" className="mb-2 block text-sm font-medium text-cb-text">
                Industry
              </label>
              <input
                id="demoIndustry"
                name="demoIndustry"
                type="text"
                placeholder="Retail, Clinic, Pharmacy..."
                className="cb-input"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="demoNotes" className="mb-2 block text-sm font-medium text-cb-text">
                Notes
              </label>
              <textarea
                id="demoNotes"
                name="demoNotes"
                rows={5}
                placeholder="Tell us your modules of interest and pain points"
                className="cb-input"
              />
            </div>

            <button
              type="submit"
              className="cb-button-primary sm:col-span-2 w-full"
            >
              Submit demo request
            </button>
          </form>
        </div>

        <p className="mt-5 text-center text-sm text-cb-muted">
          Need immediate assistance?{" "}
          <Link href="/contact" className="font-semibold text-cb-primary hover:text-cb-tech">
            Contact our team
          </Link>
          .
        </p>
      </section>
    </SitePageShell>
  );
}
