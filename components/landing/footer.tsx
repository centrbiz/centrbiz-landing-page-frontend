import Link from "next/link";

import { BrandLogo } from "@/components/site/brand-logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Platform", href: "/#platform" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Modules",
    links: [
      { label: "POS", href: "/modules" },
      { label: "Inventory", href: "/modules" },
      { label: "Booking", href: "/modules" },
      { label: "Clinic", href: "/modules" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Status", href: "/status" },
      { label: "Contact Support", href: "/contact" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Guides", href: "/guides" },
      { label: "Developer Hub", href: "/developer-hub" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "API",
    links: [
      { label: "Overview", href: "/api-reference" },
      { label: "Authentication", href: "/api-reference#authentication" },
      { label: "Endpoints", href: "/api-reference#endpoints" },
      { label: "Webhooks", href: "/api-reference#webhooks" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Sales", href: "/contact" },
      { label: "Talk to Team", href: "/request-demo" },
      { label: "Security", href: "/security" },
      { label: "Legal", href: "/legal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="scroll-mt-28 border-t border-cb-border/80 bg-white/90 py-14" id="docs">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.3fr_2.7fr]">
          <div>
            <BrandLogo size="md" />
            <p className="mt-2 max-w-sm text-sm leading-6 text-cb-muted">
              Modular business solutions platform connecting operations, data, and teams in one reliable ecosystem.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-cb-text">{column.title}</h3>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-cb-muted transition hover:text-cb-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cb-border pt-6 text-sm text-cb-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CentrBiz. All rights reserved.</p>
          <p>Built for scalable, connected business operations.</p>
        </div>
      </div>
    </footer>
  );
}
