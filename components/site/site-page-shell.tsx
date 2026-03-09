import type { ReactNode } from "react";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

type SitePageShellProps = {
	children: ReactNode;
	mainClassName?: string;
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "CentrBiz",
	applicationCategory: "BusinessApplication",
	operatingSystem: "Web",
	url: "https://centrbiz.com/",
	description:
		"CentrBiz is a cloud-based business operations platform designed to help companies manage inventory, sales, queueing, appointments, customer management, and analytics from one centralized system.",
	brand: {
		"@type": "Brand",
		name: "CentrBiz",
	},
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
		description: "Start your free trial",
	},
	creator: {
		"@type": "Organization",
		name: "CentrBiz",
		url: "https://centrbiz.com/",
	},
	audience: {
		"@type": "BusinessAudience",
		audienceType: "Small and medium-sized businesses",
	},
	featureList: [
		"Inventory Management",
		"POS System",
		"Queue Management",
		"Appointment Booking",
		"CRM",
		"Analytics Dashboard",
		"Employee Management",
		"Procurement",
	],
};

export function SitePageShell({
	children,
	mainClassName = "",
}: SitePageShellProps) {
	return (
		<div className="relative isolate min-h-screen overflow-hidden">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(10,63,143,0.2),transparent_52%)]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -left-24 top-28 -z-10 h-80 w-80 rounded-full bg-cb-tech/[0.15] blur-3xl"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute right-0 top-[28rem] -z-10 h-96 w-96 rounded-full bg-cb-green/10 blur-3xl"
				aria-hidden
			/>
			<Header />
			<main className={`relative z-10 ${mainClassName}`}>{children}</main>
			<Footer />
		</div>
	);
}
