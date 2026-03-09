import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/site/page-hero";
import { SitePageShell } from "@/components/site/site-page-shell";

type ContentSection = {
  title: string;
  description: string;
  id?: string;
};

type ContentPage = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  sections: ContentSection[];
};

const pages: Record<string, ContentPage> = {
  pricing: {
    eyebrow: "Pricing",
    title: "Flexible Plans for Growing Operations",
    description:
      "Choose a plan based on branch count, modules, and governance requirements. Scale as your organization expands.",
    actions: [
      { label: "Start Free Trial", href: "/signup" },
      { label: "Request Demo", href: "/request-demo", variant: "secondary" },
    ],
    sections: [
      {
        title: "Starter",
        description: "Ideal for single-branch teams starting with core operations and foundational reporting.",
      },
      {
        title: "Growth",
        description: "For multi-branch companies needing advanced controls, permissions, and module expansion.",
      },
      {
        title: "Scale",
        description: "Enterprise support, tailored onboarding, API enablement, and advanced governance workflows.",
      },
      {
        title: "Usage-based Add-ons",
        description: "Enable additional modules, branch seats, and premium support without changing your core plan.",
      },
    ],
  },
  docs: {
    eyebrow: "Documentation",
    title: "Developer and Product Documentation",
    description:
      "Explore implementation guides, module references, and architecture notes for running CentrBiz efficiently.",
    actions: [
      { label: "API Reference", href: "/api-reference" },
      { label: "Developer Hub", href: "/developer-hub", variant: "secondary" },
    ],
    sections: [
      { title: "Getting Started", description: "Set up organizations, branches, users, and module access quickly." },
      { title: "Module Guides", description: "Learn best-practice workflows for POS, inventory, booking, and queue operations." },
      { title: "Access Control", description: "Implement role-based permissions and branch-specific policy enforcement." },
      { title: "Operational Playbooks", description: "Templates and runbooks for daily operations, incident handling, and audits." },
    ],
  },
  integrations: {
    eyebrow: "Integrations",
    title: "Connect CentrBiz with Your Existing Stack",
    description:
      "Bridge your ecosystem with accounting, payments, messaging, and custom internal tools using API-first integrations.",
    sections: [
      { title: "Payments", description: "Connect payment providers for seamless checkout and reconciliation workflows." },
      { title: "Messaging", description: "Send notifications and operational updates through email and SMS integrations." },
      { title: "Accounting", description: "Sync transactions and reporting outputs with your finance systems." },
      { title: "Custom Connectors", description: "Build tailored workflows with webhooks and external services." },
    ],
  },
  modules: {
    eyebrow: "Modules",
    title: "Choose the Modules Your Operations Need",
    description:
      "Enable specific operational capabilities while maintaining one connected data layer across your organization.",
    sections: [
      { title: "POS and Checkout", description: "Fast sales flow with branch-aware control and synchronized transaction data." },
      { title: "Inventory and Expiration", description: "Track stock health, transfers, and shelf-life management in real time." },
      { title: "Booking and Queue", description: "Handle appointments and walk-ins with live status visibility." },
      { title: "CRM and Analytics", description: "Unify customer interactions with actionable operational insights." },
    ],
  },
  company: {
    eyebrow: "Company",
    title: "Building the Operating System for Modern Businesses",
    description:
      "CentrBiz helps organizations replace fragmented tools with one scalable, connected business platform.",
    sections: [
      { title: "Mission", description: "Deliver practical, secure, and scalable digital operations for growing companies." },
      { title: "Approach", description: "Design modular systems that align frontline speed with leadership visibility." },
      { title: "Platform Mindset", description: "Prioritize reliability, auditability, and API-driven interoperability." },
      { title: "Partnership", description: "Work closely with clients to optimize deployment and long-term value." },
    ],
  },
  careers: {
    eyebrow: "Careers",
    title: "Join the Team Building CentrBiz",
    description:
      "Help shape a platform that powers business operations across industries and teams.",
    sections: [
      { title: "Engineering", description: "Build reliable SaaS architecture, integrations, and product foundations." },
      { title: "Product and Design", description: "Craft practical workflows that solve real operational challenges." },
      { title: "Customer Success", description: "Partner with clients to drive measurable business outcomes." },
      { title: "Operations", description: "Scale internal systems, processes, and cross-functional execution." },
    ],
  },
  partners: {
    eyebrow: "Partners",
    title: "Partner with CentrBiz",
    description:
      "Collaborate with us on implementation, integration, and distribution programs for business transformation.",
    sections: [
      { title: "Implementation Partners", description: "Guide clients through migration, setup, and operational rollout." },
      { title: "Technology Partners", description: "Build integrations that extend value across shared customers." },
      { title: "Referral Network", description: "Introduce CentrBiz to businesses seeking connected operations." },
      { title: "Enablement", description: "Access onboarding playbooks, technical resources, and co-marketing support." },
    ],
  },
  news: {
    eyebrow: "News",
    title: "CentrBiz Product and Company Updates",
    description:
      "Stay updated on feature launches, architecture improvements, and industry insights.",
    sections: [
      { title: "Product Releases", description: "New modules, enhancements, and workflow optimizations." },
      { title: "Platform Updates", description: "Security, reliability, and scalability improvements." },
      { title: "Customer Stories", description: "How organizations improve control and visibility with CentrBiz." },
      { title: "Events and Webinars", description: "Live sessions covering implementation and product strategy." },
    ],
  },
  support: {
    eyebrow: "Support",
    title: "Support Resources for Every Team",
    description:
      "Find quick answers, troubleshooting steps, and best practices for operating CentrBiz smoothly.",
    sections: [
      { title: "Help Center", description: "Search guides and answers for setup, modules, and account operations." },
      { title: "Technical Support", description: "Escalate system issues with priority routing and diagnostics." },
      { title: "Admin Assistance", description: "Get help with users, permissions, branches, and policy configuration." },
      { title: "Training Resources", description: "Onboarding assets for managers and frontline teams." },
    ],
  },
  status: {
    eyebrow: "Status",
    title: "Platform Status and Uptime",
    description:
      "Track service health and maintenance events across CentrBiz platform components.",
    sections: [
      { title: "Core Platform", description: "Workspace access, authentication, and organization services." },
      { title: "Module Services", description: "POS, booking, queueing, and inventory service status." },
      { title: "Notification Layer", description: "Email, webhook, and in-app notification delivery health." },
      { title: "Incident History", description: "Review resolved incidents and follow-up actions." },
    ],
  },
  guides: {
    eyebrow: "Guides",
    title: "Operational Guides and Best Practices",
    description:
      "Step-by-step playbooks for configuration, daily operations, and scaling with CentrBiz.",
    sections: [
      { title: "Workspace Setup", description: "Configure organizations, branches, and permission models." },
      { title: "Module Rollout", description: "Deploy modules in phases with minimal process disruption." },
      { title: "Monitoring and Alerts", description: "Set visibility and escalation workflows for operational health." },
      { title: "Growth Planning", description: "Expand modules and controls as your organization scales." },
    ],
  },
  "developer-hub": {
    eyebrow: "Developer Hub",
    title: "Build on Top of CentrBiz",
    description:
      "Access developer resources, integration examples, and implementation patterns.",
    sections: [
      { title: "SDK and Tooling", description: "Accelerate integration with helper libraries and reference utilities." },
      { title: "Architecture Patterns", description: "Design reliable sync and event workflows for business-critical data." },
      { title: "Testing and Validation", description: "Validate integrations before production deployment." },
      { title: "Release Readiness", description: "Checklist for secure and stable third-party integration rollout." },
    ],
  },
  changelog: {
    eyebrow: "Changelog",
    title: "Track What’s New in CentrBiz",
    description:
      "Review product updates, improvements, and fixes shipped across platform services.",
    sections: [
      { title: "New Features", description: "New modules and enhancements introduced this cycle." },
      { title: "Improvements", description: "Performance, UX, and operational workflow refinements." },
      { title: "Fixes", description: "Resolved issues with reliability and module behavior." },
      { title: "Deprecations", description: "Upcoming changes and migration guidance for teams." },
    ],
  },
  "api-reference": {
    eyebrow: "API",
    title: "CentrBiz API Reference",
    description:
      "Integrate with CentrBiz using secure, predictable endpoints designed for enterprise workflows.",
    sections: [
      {
        id: "authentication",
        title: "Authentication",
        description: "Use scoped API credentials and secure token exchange for tenant-safe access control.",
      },
      {
        id: "endpoints",
        title: "Endpoints",
        description: "Access modules for sales, inventory, booking, queueing, CRM, and analytics operations.",
      },
      {
        id: "webhooks",
        title: "Webhooks",
        description: "Subscribe to key events and automate external workflows in near real time.",
      },
      {
        title: "Rate Limits",
        description: "Built-in protections and best-practice retry guidance for resilient integrations.",
      },
    ],
  },
  security: {
    eyebrow: "Security",
    title: "Security and Compliance by Design",
    description:
      "CentrBiz applies secure defaults across authentication, authorization, data handling, and auditability.",
    sections: [
      { title: "Access Controls", description: "Role-based permissions with workspace and branch boundaries." },
      { title: "Auditability", description: "Track critical actions with detailed logs for compliance readiness." },
      { title: "Data Protection", description: "Safeguard operational and customer data with robust security measures." },
      { title: "Operational Security", description: "Process and infrastructure controls designed for reliability." },
    ],
  },
  legal: {
    eyebrow: "Legal",
    title: "Legal Terms and Policies",
    description:
      "Review CentrBiz terms, platform usage conditions, and policy information.",
    sections: [
      { title: "Terms of Service", description: "Platform usage rules and customer responsibilities." },
      { title: "Privacy", description: "How CentrBiz handles and protects personal and operational data." },
      { title: "Acceptable Use", description: "Guidelines for secure and compliant platform operation." },
      { title: "Service Commitments", description: "Availability, support, and policy update communication standards." },
    ],
  },
  terms: {
    eyebrow: "Terms",
    title: "Terms of Service",
    description:
      "Standard terms governing platform usage, account responsibilities, and service boundaries.",
    sections: [
      { title: "Account Usage", description: "Responsibilities for user access, credentials, and authorized operations." },
      { title: "Service Scope", description: "Coverage and boundaries for modules, support, and platform updates." },
      { title: "Billing and Subscriptions", description: "Plan terms, renewals, and payment obligations." },
      { title: "Limitations", description: "Liability, acceptable use, and dispute handling guidelines." },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    description:
      "How CentrBiz collects, uses, and protects personal and operational information.",
    sections: [
      { title: "Data Collected", description: "Information needed for account setup, module operation, and support." },
      { title: "Processing Purpose", description: "Use of data for service delivery, security, analytics, and product improvement." },
      { title: "Security Practices", description: "Controls for safeguarding data across platform operations." },
      { title: "Data Requests", description: "Procedures for access, correction, and deletion requests." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return (
    <SitePageShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        actions={page.actions}
      />

      <section className="section-shell py-10 md:py-14">
        <div className="grid gap-4 sm:grid-cols-2">
          {page.sections.map((section) => (
            <article
              key={section.title}
              id={section.id}
              className="cb-card-soft scroll-mt-28 p-6"
            >
              <h2 className="text-lg font-semibold tracking-tight text-cb-text">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-cb-muted">{section.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/70 bg-gradient-to-r from-cb-azure/75 via-white/[0.85] to-cb-mint/75 p-4 text-center text-sm text-cb-muted">
          Need a tailored walkthrough for your business context?{" "}
          <Link href="/request-demo" className="font-semibold text-cb-primary hover:text-cb-tech">
            Book a demo
          </Link>
          .
        </div>
      </section>
    </SitePageShell>
  );
}
