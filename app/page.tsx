import { Benefits } from "@/components/landing/benefits";
import { CoreFeatures } from "@/components/landing/core-features";
import { DashboardPreviews } from "@/components/landing/dashboard-previews";
import { Ecosystem } from "@/components/landing/ecosystem";
import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Infrastructure } from "@/components/landing/infrastructure";
import { Modules } from "@/components/landing/modules";
import { TrustIndustries } from "@/components/landing/trust-industries";
import { SitePageShell } from "@/components/site/site-page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CentrBiz | Run Your Entire Business from One Platform",
	description:
		"CentrBiz helps small and medium-sized businesses manage inventory, sales, queues, appointments, CRM, and analytics from one centralized cloud platform.",
	alternates: {
		canonical: "https://centrbiz.com/",
	},
};

export default function HomePage() {
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

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SitePageShell mainClassName="pb-24">
				<div className="relative flex flex-col gap-24">
					<Hero />
					<TrustIndustries />
					<Ecosystem />
					<CoreFeatures />
					<Modules />
					<DashboardPreviews />
					<Infrastructure />
					<HowItWorks />
					<Benefits />
					<FinalCta />
				</div>
			</SitePageShell>
		</>
	);
}
