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
      <div className="grid items-start gap-8 rounded-3xl border border-cb-border bg-white/90 p-6 shadow-soft md:grid-cols-2 md:p-8">
        <div>
          <SectionHeading
            eyebrow="Platform Infrastructure"
            title="Built as a Long-term SaaS Foundation"
            description="CentrBiz combines governance, extensibility, and performance into one architecture designed for serious operations."
          />
          <ul className="space-y-3 text-sm text-cb-muted">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cb-green" />
              Production-ready architecture for multi-branch and multi-team operations.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cb-tech" />
              Consistent data flow across modules with centralized observability.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cb-primary" />
              Expansion model that supports future module rollout without replatforming.
            </li>
          </ul>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {pillars.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-cb-border bg-cb-light/70 p-4">
              <span className="mb-3 inline-flex rounded-lg bg-cb-primary/10 p-2 text-cb-primary">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-semibold text-cb-text">{title}</h3>
              <p className="mt-1 text-xs leading-5 text-cb-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
