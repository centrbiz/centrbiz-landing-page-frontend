import Image from "next/image";
import Link from "next/link";
import {
	Activity,
	CalendarClock,
	CreditCard,
	Package,
	TrendingUp,
	UsersRound,
} from "lucide-react";

const quickStats = [
	{
		label: "Daily Sales",
		value: "$18,420",
		icon: CreditCard,
		detail: "vs. target",
		change: "+12%",
	},
	{
		label: "Open Bookings",
		value: "128",
		icon: CalendarClock,
		detail: "confirmed today",
		change: "+18",
	},
	{
		label: "Inventory Health",
		value: "96%",
		icon: Package,
		detail: "healthy stock mix",
		change: "Stable",
	},
	{
		label: "Active Queue",
		value: "34",
		icon: UsersRound,
		detail: "avg wait 9m",
		change: "-2m",
	},
];

export function Hero() {
	return (
		<section
			className="section-shell relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-20"
			id="home"
		>
			<div
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[40px]"
				aria-hidden
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.72),transparent_22%),linear-gradient(90deg,rgba(245,250,255,0.94)_0%,rgba(245,250,255,0.8)_38%,rgba(245,250,255,0.58)_62%,rgba(245,250,255,0.72)_100%)]" />
				<div className="absolute inset-y-0 right-[-6%] w-[72%] opacity-[0.34] md:opacity-[0.42]"></div>
				<div className="absolute inset-y-0 left-0 w-[56%] bg-gradient-to-r from-[#f5faff] via-[#f5faff]/94 to-transparent" />
			</div>
			<div
				className="pointer-events-none absolute left-6 top-8 h-40 w-40 rounded-full bg-white/50 blur-3xl"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute right-10 top-10 h-48 w-48 rounded-full bg-cb-sky/20 blur-3xl"
				aria-hidden
			/>
			<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
				<div className="relative">
					<div
						className="pointer-events-none absolute -left-8 top-24 h-40 w-40 rounded-full bg-cb-primary/[0.08] blur-3xl"
						aria-hidden
					/>
					<p className="cb-badge mb-5">
						<span
							className="h-1.5 w-1.5 rounded-full bg-cb-green"
							aria-hidden
						/>
						Connected Business Ecosystem
					</p>
					<h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-cb-text md:text-5xl lg:text-6xl">
						Run Your Entire Business from One Platform
					</h1>
					<p className="mt-6 max-w-xl text-lg leading-8 text-cb-muted">
						Manage inventory, sales, queues, appointments, and
						operations with a powerful yet simple business
						management system.
					</p>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Link href="/signup" className="cb-button-primary px-6">
							Start Free Trial
						</Link>
						<Link
							href="/request-demo"
							className="cb-button-secondary px-6"
						>
							Request Demo
						</Link>
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-cb-muted">
						<span className="inline-flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-cb-green" />
							Multi-tenant workspaces
						</span>
						<span className="inline-flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-cb-tech" />
							API-first architecture
						</span>
						<span className="inline-flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-cb-teal" />
							Branch-aware operations
						</span>
					</div>
					<div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
						<article className="cb-rich-card rounded-[22px] px-4 py-3">
							<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cb-muted">
								Teams onboarded
							</p>
							<p className="mt-2 text-2xl font-semibold text-cb-text">
								240+
							</p>
							<p className="mt-1 text-sm text-cb-muted">
								across retail, clinics, and service branches
							</p>
						</article>
						<article className="cb-rich-card rounded-[22px] px-4 py-3">
							<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cb-muted">
								Data sync
							</p>
							<p className="mt-2 text-2xl font-semibold text-cb-text">
								Real-time
							</p>
							<p className="mt-1 text-sm text-cb-muted">
								shared metrics across every active module
							</p>
						</article>
						<article className="cb-rich-card rounded-[22px] px-4 py-3">
							<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cb-muted">
								Deployment model
							</p>
							<p className="mt-2 text-2xl font-semibold text-cb-text">
								Cloud-first
							</p>
							<p className="mt-1 text-sm text-cb-muted">
								branch-aware workflows with centralized control
							</p>
						</article>
					</div>
				</div>

				<aside className="cb-card p-5 md:p-6">
					<div
						className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-cb-primary/[0.18] blur-3xl"
						aria-hidden
					/>
					<div
						className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-cb-green/[0.14] blur-3xl"
						aria-hidden
					/>
					<div
						className="pointer-events-none absolute inset-x-6 top-5 h-px bg-gradient-to-r from-white/0 via-white/80 to-white/0"
						aria-hidden
					/>
					<div className="mb-5 flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-cb-muted">
								Workspace: Atlas Retail Group
							</p>
							<p className="text-xl font-semibold text-cb-text">
								Operations Command Center
							</p>
						</div>
						<span className="rounded-full border border-cb-green/20 bg-cb-mint px-3 py-1 text-xs font-semibold text-cb-green">
							Live
						</span>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						{quickStats.map(
							(
								{ label, value, icon: Icon, detail, change },
								index,
							) => {
								const cardStyles = [
									"border-cb-primary/[0.12] from-cb-azure/90 via-white to-cb-azure/65",
									"border-cb-tech/[0.12] from-white via-cb-azure/55 to-white/95",
									"border-cb-teal/[0.12] from-[#ecfbf8] via-white to-cb-mint/75",
									"border-cb-green/[0.12] from-cb-sand/[0.95] via-white to-cb-mint/[0.55]",
								];

								return (
									<article
										key={label}
										className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-4 transition hover:-translate-y-0.5 hover:shadow-sm ${cardStyles[index]}`}
									>
										<span
											className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-white/0 via-white/80 to-white/0"
											aria-hidden
										/>
										<div className="mb-3 inline-flex rounded-xl border border-white/70 bg-white/80 p-2 text-cb-primary shadow-sm">
											<Icon className="h-4 w-4" />
										</div>
										<p className="text-xs font-medium uppercase tracking-wide text-cb-muted">
											{label}
										</p>
										<p className="mt-1 text-2xl font-semibold text-cb-text">
											{value}
										</p>
										<div className="mt-3 flex items-center justify-between gap-3">
											<p className="text-xs text-cb-muted">
												{detail}
											</p>
											<span className="rounded-full border border-white/70 bg-white/75 px-2.5 py-1 text-[11px] font-semibold text-cb-primary">
												{change}
											</span>
										</div>
									</article>
								);
							},
						)}
					</div>

					<div className="mt-4 rounded-2xl border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.68))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
						<div className="mb-3 flex items-center justify-between">
							<p className="text-sm font-semibold text-cb-text">
								Ecosystem Activity
							</p>
							<Activity className="h-4 w-4 text-cb-tech" />
						</div>
						<div className="space-y-3">
							<div>
								<div className="mb-1 flex items-center justify-between text-xs text-cb-muted">
									<span>POS Sync</span>
									<span>97%</span>
								</div>
								<div className="h-2 rounded-full bg-cb-azure">
									<div className="h-full w-[97%] rounded-full bg-gradient-to-r from-cb-navy via-cb-primary to-cb-tech" />
								</div>
							</div>
							<div>
								<div className="mb-1 flex items-center justify-between text-xs text-cb-muted">
									<span>Inventory Visibility</span>
									<span>93%</span>
								</div>
								<div className="h-2 rounded-full bg-cb-mint">
									<div className="h-full w-[93%] rounded-full bg-gradient-to-r from-cb-tech via-cb-teal to-cb-green" />
								</div>
							</div>
							<div className="rounded-xl border border-cb-primary/10 bg-gradient-to-r from-cb-azure/90 via-white to-cb-mint/[0.85] p-3 text-sm text-cb-muted">
								<span className="font-medium text-cb-text">
									+18.4%
								</span>{" "}
								operational efficiency over the last 30 days.
								<TrendingUp className="ml-1 inline h-4 w-4 text-cb-green" />
							</div>
						</div>
					</div>
					<div className="mt-4 grid gap-3 rounded-2xl border border-white/70 bg-gradient-to-r from-[#f7fbff] via-white to-[#f4fcf7] p-4 sm:grid-cols-3">
						<div>
							<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cb-muted">
								Branches
							</p>
							<p className="mt-1 text-lg font-semibold text-cb-text">
								12 Live
							</p>
						</div>
						<div>
							<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cb-muted">
								Modules
							</p>
							<p className="mt-1 text-lg font-semibold text-cb-text">
								8 Enabled
							</p>
						</div>
						<div>
							<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cb-muted">
								Service uptime
							</p>
							<p className="mt-1 text-lg font-semibold text-cb-text">
								99.9%
							</p>
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}
