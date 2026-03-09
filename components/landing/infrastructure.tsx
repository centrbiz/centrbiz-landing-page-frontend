import { Check, LockKeyhole, Puzzle, Scaling, ServerCog, UsersRound } from "lucide-react";

import { SectionHeading } from "./section-heading";

const pillars = [
  {
    title: "Secure authentication",
    icon: LockKeyhole,
    description: "Protect data access with hardened authentication and tenant-level boundaries.",
  },
  {
    title: "Workspace architecture",
    icon: UsersRound,
    description: "Segment organizations cleanly with isolated settings, users, and module controls.",
  },
  {
    title: "Permissions engine",
    icon: Check,
    description: "Set granular access policies by role, function, branch, and responsibility.",
  },
  {
    title: "Modular system",
    icon: Puzzle,
    description: "Turn modules on or off without disrupting existing operations.",
  },
  {
    title: "Scalable backend",
    icon: Scaling,
    description: "Grow usage and transaction load with a SaaS-ready platform core.",
  },
  {
    title: "API-ready foundation",
    icon: ServerCog,
    description: "Connect external services and build custom integrations with predictable interfaces.",
  },
];

export function Infrastructure() {
  return (
    <section className="section-shell py-16">
      <div className="cb-section grid items-start gap-8 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Platform Infrastructure"
            title="Built as a Long-term SaaS Foundation"
            description="CentrBiz combines governance, extensibility, and performance into one architecture designed for serious operations."
          />
          <ul className="mb-6 space-y-4 text-sm text-cb-muted md:mb-0">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cb-green" />
              <span>Production-ready architecture for multi-branch and multi-team operations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cb-tech" />
              <span>Consistent data flow across modules with centralized observability.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cb-primary" />
              <span>Expansion model that supports future module rollout without replatforming.</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {pillars.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-white/70 bg-white/[0.78] p-5 transition hover:shadow-sm">
              <span className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cb-azure via-white to-cb-mint p-2.5 text-cb-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold text-cb-text">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-cb-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
