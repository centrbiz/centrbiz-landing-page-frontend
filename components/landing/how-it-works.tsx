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

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <article key={title} className="cb-card-soft flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cb-azure to-cb-mint text-sm font-semibold text-cb-text">
                {index + 1}
              </span>
              <span className="inline-flex rounded-xl bg-gradient-to-br from-cb-azure via-white to-cb-mint p-2.5 text-cb-primary">
                <Icon className="h-5 w-5" />
              </span>
            </div>
            <h3 className="text-lg font-semibold text-cb-text">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-cb-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
