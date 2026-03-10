import type { ReactNode } from "react";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

type SitePageShellProps = {
	children: ReactNode;
	mainClassName?: string;
};

export function SitePageShell({
	children,
	mainClassName = "",
}: SitePageShellProps) {
	return (
		<div className="relative isolate min-h-screen overflow-hidden">
			<div
				className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0))]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(10,63,143,0.2),transparent_52%)]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.72),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(111,212,255,0.22),transparent_15%),radial-gradient(circle_at_50%_100%,rgba(67,176,92,0.12),transparent_22%)]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -left-24 top-28 -z-10 h-80 w-80 rounded-full bg-cb-tech/[0.15] blur-3xl"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute left-[12%] top-[38rem] -z-10 h-72 w-72 rounded-full bg-cb-primary/[0.08] blur-3xl"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute right-0 top-[28rem] -z-10 h-96 w-96 rounded-full bg-cb-green/10 blur-3xl"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-[680px] bg-grid opacity-[0.18] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.5),transparent)]"
				aria-hidden
			/>
			<Header />
			<main className={`relative z-10 ${mainClassName}`}>{children}</main>
			<Footer />
		</div>
	);
}
