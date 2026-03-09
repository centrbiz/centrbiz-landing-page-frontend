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
		<footer className="scroll-mt-28 pb-8 pt-16" id="docs">
			<div className="section-shell">
				<div className="cb-section">
					<div
						className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-cb-tech/[0.15] blur-3xl"
						aria-hidden
					/>
					<div
						className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-cb-green/[0.12] blur-3xl"
						aria-hidden
					/>

					<div className="relative grid gap-10 md:grid-cols-[1.2fr_2.8fr]">
						<div>
							<span className="cb-badge">Business OS</span>
							<div className="mt-5">
								<BrandLogo size="md" />
							</div>
							<p className="mt-4 max-w-sm text-sm leading-6 text-cb-muted">
								Modular business solutions platform connecting
								operations, data, and teams in one reliable
								ecosystem.
							</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{[
									"Multi-tenant workspaces",
									"API-first architecture",
									"Branch-aware operations",
								].map((item) => (
									<span
										key={item}
										className="rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-xs font-medium text-cb-muted"
									>
										{item}
									</span>
								))}
							</div>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{columns.map((column) => (
								<div key={column.title}>
									<h3 className="text-sm font-semibold text-cb-text">
										{column.title}
									</h3>
									<ul className="mt-4 space-y-3">
										{column.links.map((link) => (
											<li key={link.label}>
												<Link
													href={link.href}
													className="text-sm text-cb-muted transition hover:text-cb-primary"
												>
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="relative mt-12 flex flex-col gap-2 border-t border-white/60 pt-8 text-sm text-cb-muted md:flex-row md:items-center md:justify-between">
						<p>
							© {new Date().getFullYear()} CentrBiz. All rights
							reserved.
						</p>
						<p>
							Built for scalable, connected business operations.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
