import {
	BellRing,
	Blocks,
	Building2,
	Cable,
	CreditCard,
	FileClock,
	KeyRound,
	Users,
} from "lucide-react";

import { SectionHeading } from "./section-heading";

const features = [
	{
		title: "Multi-tenant architecture",
		description:
			"Isolate organizations while managing all clients on one shared, secure platform foundation.",
		icon: Building2,
	},
	{
		title: "Role-based permissions",
		description:
			"Control access by role, team, and branch to keep operations secure and accountable.",
		icon: KeyRound,
	},
	{
		title: "Branch management",
		description:
			"Coordinate branches with centralized visibility and localized workflows.",
		icon: Users,
	},
	{
		title: "Audit logs",
		description:
			"Track key user actions and system events for compliance and transparency.",
		icon: FileClock,
	},
	{
		title: "Notification system",
		description:
			"Surface critical updates, tasks, and exceptions in real time.",
		icon: BellRing,
	},
	{
		title: "Subscription & billing",
		description:
			"Manage plans, billing cycles, and feature entitlements from a central layer.",
		icon: CreditCard,
	},
	{
		title: "API-first platform",
		description:
			"Integrate quickly with third-party tools and internal systems through stable APIs.",
		icon: Cable,
	},
	{
		title: "Modular expansion",
		description:
			"Launch new modules without rebuilding your core operations stack.",
		icon: Blocks,
	},
];

export function CoreFeatures() {
	return (
		<section className="section-shell scroll-mt-28 py-16" id="features">
			<SectionHeading
				eyebrow="Core Features"
				title="Enterprise-grade Capabilities, Structured for Growing Teams"
				description="CentrBiz is engineered to scale from single-location businesses to multi-branch organizations with strict governance needs."
			/>

			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{features.map(({ title, description, icon: Icon }) => (
					<article
						key={title}
						className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-cb-border/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cb-tech/40"
					>
						<span
							className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cb-primary via-cb-tech to-cb-teal opacity-80"
							aria-hidden
						/>
						<span
							className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cb-tech/10 blur-2xl transition group-hover:bg-cb-tech/15"
							aria-hidden
						/>

						<span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cb-primary/15 bg-gradient-to-br from-cb-primary/15 via-cb-tech/10 to-cb-teal/20 text-cb-primary transition group-hover:scale-105 group-hover:text-cb-tech">
							<Icon className="h-7 w-7" />
						</span>
						<p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cb-muted">
							Platform Capability
						</p>
						<h3 className="mt-2 text-lg font-semibold tracking-tight text-cb-text">
							{title}
						</h3>
						<p className="mt-3 text-sm leading-6 text-cb-muted">
							{description}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
