import { Benefits } from "@/components/landing/benefits";
import { CoreFeatures } from "@/components/landing/core-features";
import { DashboardPreviews } from "@/components/landing/dashboard-previews";
import { Ecosystem } from "@/components/landing/ecosystem";
import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Infrastructure } from "@/components/landing/infrastructure";
import { Modules } from "@/components/landing/modules";
import { TrustIndustries } from "@/components/landing/trust-industries";
import { SitePageShell } from "@/components/site/site-page-shell";

export default function HomePage() {
  return (
    <SitePageShell mainClassName="pb-24">
      <div className="relative flex flex-col gap-24">
        <Hero />
        <TrustIndustries />
        <Ecosystem />
        <CoreFeatures />
        <Modules />
        <DashboardPreviews />
        <Infrastructure />
        <HowItWorks />
        <Benefits />
        <FinalCta />
      </div>
    </SitePageShell>
  );
}
