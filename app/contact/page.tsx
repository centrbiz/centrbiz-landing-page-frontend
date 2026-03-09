import { Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { SitePageShell } from "@/components/site/site-page-shell";

const channels = [
  { label: "Sales", value: "sales@centrbiz.com", icon: Mail },
  { label: "Support", value: "support@centrbiz.com", icon: Mail },
  { label: "Phone", value: "+63 2 8123 4567", icon: Phone },
  { label: "HQ", value: "Makati, Metro Manila", icon: MapPin },
];

export default function ContactPage() {
  return (
    <SitePageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to the CentrBiz Team"
        description="Reach our product, sales, and support teams for platform guidance and deployment planning."
      />

      <section className="section-shell py-10 md:py-14">
        <div className="cb-card grid gap-8 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {channels.map(({ label, value, icon: Icon }) => (
              <article key={label} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-gradient-to-r from-white/[0.88] to-cb-azure/70 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cb-azure via-white to-cb-mint text-cb-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cb-muted">{label}</p>
                  <p className="mt-1 text-sm font-medium text-cb-text">{value}</p>
                </div>
              </article>
            ))}
          </div>

          <form className="grid gap-4" action="#" method="post">
            <div>
              <label htmlFor="contactName" className="mb-2 block text-sm font-medium text-cb-text">
                Full name
              </label>
              <input
                id="contactName"
                name="contactName"
                type="text"
                className="cb-input"
                required
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="mb-2 block text-sm font-medium text-cb-text">
                Email
              </label>
              <input
                id="contactEmail"
                name="contactEmail"
                type="email"
                className="cb-input"
                required
              />
            </div>
            <div>
              <label htmlFor="contactMessage" className="mb-2 block text-sm font-medium text-cb-text">
                Message
              </label>
              <textarea
                id="contactMessage"
                name="contactMessage"
                rows={6}
                className="cb-input"
                required
              />
            </div>
            <button
              type="submit"
              className="cb-button-primary"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </SitePageShell>
  );
}
