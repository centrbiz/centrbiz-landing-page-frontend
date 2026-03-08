import { Benefits } from "@/components/landing/benefits";
import { CoreFeatures } from "@/components/landing/core-features";
import { DashboardPreviews } from "@/components/landing/dashboard-previews";
import { Ecosystem } from "@/components/landing/ecosystem";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Infrastructure } from "@/components/landing/infrastructure";
import { Modules } from "@/components/landing/modules";
import { TrustIndustries } from "@/components/landing/trust-industries";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <TrustIndustries />

        <div className="relative overflow-hidden border-y border-cb-border/70 bg-white/80">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cb-primary/5 via-transparent to-cb-green/5"
            aria-hidden
          />
          <Ecosystem />
        </div>

        <CoreFeatures />

        <div className="relative overflow-hidden border-y border-cb-border/70 bg-white/70">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" aria-hidden />
          <Modules />
        </div>

        <DashboardPreviews />

        <div className="relative overflow-hidden border-y border-cb-border/70 bg-white/85">
          <Infrastructure />
        </div>

        <HowItWorks />
        <Benefits />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
