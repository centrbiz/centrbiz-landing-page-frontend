import { Boxes, Building2, Workflow } from "lucide-react";

import { SectionHeading } from "./section-heading";

const steps = [
  {
    title: "Create your workspace",
    description: "Set up your organization, teams, and branches with centralized controls.",
    icon: Building2,
  },
  {
    title: "Choose your modules",
    description: "Enable POS, inventory, booking, queueing, clinic, CRM, and analytics as needed.",
    icon: Boxes,
  },
  {
    title: "Run operations in one platform",
    description: "Coordinate daily workflows and decisions from one connected business system.",
    icon: Workflow,
  },
];

export function HowItWorks() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="How It Works"
        title="Launch CentrBiz in Three Practical Steps"
        description="Get started quickly without sacrificing structure or scalability."
        align="center"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <article key={title} className="flex h-full flex-col rounded-2xl border border-cb-border bg-white p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cb-gradient text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span className="inline-flex rounded-lg bg-cb-primary/10 p-2 text-cb-primary">
                <Icon className="h-4 w-4" />
              </span>
            </div>
            <h3 className="text-base font-semibold text-cb-text">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-cb-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
