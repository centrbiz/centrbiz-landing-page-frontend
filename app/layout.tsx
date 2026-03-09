import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-body",
});

const sora = Sora({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-heading",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://centrbiz.com"),
	title: {
		default: "CentrBiz | Run Your Entire Business from One Platform",
		template: "%s | CentrBiz",
	},
	description:
		"CentrBiz is a cloud-based business operations platform for SMEs. Manage inventory, sales, queues, appointments, CRM, and analytics from one centralized system.",
	keywords: [
		"CentrBiz",
		"business operations platform",
		"business operating system",
		"business management system",
		"all-in-one business platform",
		"inventory management software",
		"POS system",
		"queue management system",
		"appointment booking system",
		"CRM for small business",
		"analytics dashboard",
		"SME software",
		"cloud business solutions",
	],
	applicationName: "CentrBiz",
	openGraph: {
		title: "CentrBiz | Run Your Entire Business from One Platform",
		description:
			"Manage inventory, sales, queues, appointments, CRM, and analytics with one powerful business operations platform.",
		url: "https://centrbiz.com",
		siteName: "CentrBiz",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "CentrBiz business operations platform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CentrBiz | Run Your Entire Business from One Platform",
		description:
			"Manage inventory, sales, queues, appointments, CRM, and analytics with one powerful business operations platform.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://centrbiz.com/",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${manrope.variable} ${sora.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
