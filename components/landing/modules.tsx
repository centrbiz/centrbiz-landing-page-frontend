import {
	Activity,
	CalendarRange,
	Clock3,
	ClipboardCheck,
	Package,
	Pill,
	ReceiptText,
	UsersRound,
} from "lucide-react";

import { SectionHeading } from "./section-heading";

const modules = [
	{
		title: "POS System",
		description:
			"Fast checkout operations with branch-level visibility and synced transactions.",
		icon: ReceiptText,
	},
	{
		title: "Inventory Management",
		description:
			"Track stock levels, transfers, and reorder flow in real time.",
		icon: Package,
	},
	{
		title: "Expiration Monitoring",
		description:
			"Flag expiring items early to reduce waste and protect service quality.",
		icon: Pill,
	},
	{
		title: "Booking System",
		description:
			"Manage appointments, slots, and staff allocation from one scheduler.",
		icon: CalendarRange,
	},
	{
		title: "Queueing System",
		description:
			"Organize walk-ins and reduce wait-time friction with live queue updates.",
		icon: Clock3,
	},
	{
		title: "Clinic Management",
		description:
			"Support healthcare workflows with patient timelines and operational controls.",
		icon: ClipboardCheck,
	},
	{
		title: "Customer CRM",
		description:
			"Unify customer data, interactions, and lifecycle activity across modules.",
		icon: UsersRound,
	},
	{
		title: "Reports & Analytics",
		description:
			"Measure sales, operations, and utilization with actionable business insights.",
		icon: Activity,
	},
];

export function Modules() {
	return (
		<section className="section-shell scroll-mt-28 py-16" id="modules">
			<SectionHeading
				eyebrow="Modules"
				title="Compose the Exact Business Stack You Need"
				description="Enable only the modules you need today and expand as your operations grow."
			/>

			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{modules.map(({ title, description, icon: Icon }) => (
					<article
						key={title}
						className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/70 bg-white/[0.84] p-6 shadow-[0_16px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cb-primary/[0.35]"
					>
						<span
							className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cb-tech via-cb-teal to-cb-green"
							aria-hidden
						/>
						<span
							className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-cb-green/10 blur-2xl transition group-hover:bg-cb-green/[0.15]"
							aria-hidden
						/>

						<div className="mb-5 flex items-center justify-between">
							<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cb-gradient text-white shadow-soft transition group-hover:scale-105">
								<Icon className="h-7 w-7" />
							</span>
							<span className="rounded-full border border-cb-border bg-cb-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cb-muted">
								Module
							</span>
						</div>

						<h3 className="text-lg font-semibold tracking-tight text-cb-text">
							{title}
						</h3>
						<p className="mt-3 text-sm leading-6 text-cb-muted">
							{description}
						</p>
						<span
							className="mt-5 inline-block h-px w-full bg-gradient-to-r from-cb-primary/0 via-cb-primary/25 to-cb-primary/0"
							aria-hidden
						/>
						<p className="mt-3 text-xs font-medium text-cb-muted">
							Enabled from workspace settings
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
