import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { BrandLogo } from "@/components/site/brand-logo";
import { SitePageShell } from "@/components/site/site-page-shell";

const checklist = [
  "Create your organization workspace",
  "Enable modules based on business needs",
  "Invite teams with role-based access",
];

export default function SignupPage() {
  return (
    <SitePageShell>
      <section className="section-shell py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="cb-card p-8 md:p-10">
            <BrandLogo size="md" className="mb-6" />
            <p className="cb-badge">Start Free Trial</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-cb-text md:text-4xl">
              Launch your CentrBiz workspace
            </h1>
            <p className="mt-4 text-sm leading-7 text-cb-muted md:text-base">
              Set up your organization, enable modules, and centralize operations in minutes.
            </p>

            <div className="mt-8 space-y-3">
              {checklist.map((item) => (
                <p key={item} className="inline-flex w-full items-center gap-2 rounded-xl border border-white/70 bg-gradient-to-r from-cb-azure/70 to-cb-mint/70 px-3 py-2 text-sm text-cb-muted">
                  <CheckCircle2 className="h-4 w-4 text-cb-green" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="cb-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-cb-text">Create account</h2>
            <p className="mt-2 text-sm text-cb-muted">No credit card required for trial setup.</p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2" action="#" method="post">
              <div className="sm:col-span-1">
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-cb-text">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="cb-input"
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-cb-text">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="cb-input"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-cb-text">
                  Company / Organization
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="cb-input"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-cb-text">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="cb-input"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-cb-text">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="cb-input"
                  required
                />
              </div>

              <label className="sm:col-span-2 inline-flex items-center gap-2 text-sm text-cb-muted">
                <input type="checkbox" className="h-4 w-4 rounded border-cb-border text-cb-primary" required />
                I agree to the terms and privacy policy.
              </label>

              <button
                type="submit"
                className="cb-button-primary sm:col-span-2 w-full"
              >
                Create free trial workspace
              </button>
            </form>

            <p className="mt-6 text-sm text-cb-muted">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-cb-primary hover:text-cb-tech">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
