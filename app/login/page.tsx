import Link from "next/link";
import { CheckCircle2, ShieldCheck, Workflow } from "lucide-react";

import { BrandLogo } from "@/components/site/brand-logo";
import { SitePageShell } from "@/components/site/site-page-shell";

const benefits = [
  "Secure multi-tenant authentication",
  "Role-aware access and workspace routing",
  "Audit-ready session and activity history",
];

export default function LoginPage() {
  return (
    <SitePageShell>
      <section className="section-shell py-14 md:py-20">
        <div className="grid overflow-hidden rounded-[30px] border border-cb-border/80 bg-white shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
          <aside className="relative overflow-hidden bg-gradient-to-br from-cb-primary via-cb-tech to-cb-teal p-8 text-white md:p-10">
            <div className="pointer-events-none absolute -left-14 top-6 h-40 w-40 rounded-full bg-white/15 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -right-14 bottom-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />

            <div className="relative">
              <BrandLogo variant="icon" size="lg" className="mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Welcome Back</p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Sign in to your CentrBiz workspace
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/85 md:text-base">
                Access your operations command center and manage modules, branches, and teams from one secure platform.
              </p>

              <div className="mt-8 space-y-3">
                {benefits.map((item) => (
                  <p key={item} className="inline-flex w-full items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/30 bg-white/10 p-3">
                  <ShieldCheck className="h-4 w-4" />
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/70">Security-first</p>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/10 p-3">
                  <Workflow className="h-4 w-4" />
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/70">Unified access</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-cb-text">Log in</h2>
            <p className="mt-2 text-sm text-cb-muted">Use your work email and password.</p>

            <form className="mt-8 space-y-5" action="#" method="post">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-cb-text">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-cb-border bg-white px-4 py-3 text-sm text-cb-text outline-none transition focus:border-cb-tech/50 focus:ring-2 focus:ring-cb-tech/15"
                  required
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-cb-text">
                    Password
                  </label>
                  <Link href="/support" className="text-xs font-medium text-cb-primary hover:text-cb-tech">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-cb-border bg-white px-4 py-3 text-sm text-cb-text outline-none transition focus:border-cb-tech/50 focus:ring-2 focus:ring-cb-tech/15"
                  required
                />
              </div>

              <label className="inline-flex items-center gap-2 text-sm text-cb-muted">
                <input type="checkbox" className="h-4 w-4 rounded border-cb-border text-cb-primary" />
                Keep me signed in
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-cb-gradient px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-95"
              >
                Log in to CentrBiz
              </button>
            </form>

            <p className="mt-6 text-sm text-cb-muted">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-cb-primary hover:text-cb-tech">
                Create your workspace
              </Link>
            </p>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
