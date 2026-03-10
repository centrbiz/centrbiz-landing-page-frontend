"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/site/brand-logo";

const links = [
	{ label: "Features", href: "/#features" },
	{ label: "Modules", href: "/#modules" },
	{ label: "Industries", href: "/#industries" },
	{ label: "Platform", href: "/#platform" },
	{ label: "Docs", href: "/docs" },
];

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 24);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 px-4 transition-[padding,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-0 ${
				isScrolled ? "pt-2" : "pt-4"
			}`}
		>
			<div className="section-shell">
				<div
					className={`glass-panel relative flex items-center justify-between px-5 transition-[height,transform,border-radius,background,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-6 ${
						isScrolled
							? "h-[4.5rem] rounded-[28px] border-white/80 bg-white/[0.84] shadow-[0_24px_64px_rgba(10,63,143,0.16)]"
							: "h-20 rounded-2xl"
					}`}
				>
					<div
						className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-white/0 via-white/90 to-white/0 transition-opacity duration-500 ${
							isScrolled ? "opacity-100" : "opacity-60"
						}`}
						aria-hidden
					/>
					<Link
						href="/"
						className="inline-flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
						aria-label="CentrBiz Home"
					>
						<div>
							<BrandLogo size="lg" />
							<p
								className={`-mt-2 overflow-hidden text-[11px] text-cb-muted transition-[max-height,opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
									isScrolled
										? "max-h-0 -translate-y-1 opacity-0"
										: "max-h-6 translate-y-0 opacity-100"
								}`}
							>
								Connected Business Platform
							</p>
						</div>
					</Link>

					<nav
						className={`hidden items-center gap-2 rounded-full border px-3 py-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${
							isScrolled
								? "border-white/85 bg-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
								: "border-white/70 bg-white/70"
						}`}
						aria-label="Primary"
					>
						{links.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className={`rounded-full px-3 py-2 text-sm font-medium text-cb-muted transition-all duration-300 hover:bg-cb-azure hover:text-cb-navy ${
									isScrolled ? "hover:-translate-y-0.5" : ""
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div
						className={`hidden items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${
							isScrolled ? "scale-[0.98]" : "scale-100"
						}`}
					>
						<Link href="/login" className="cb-button-ghost">
							Login
						</Link>
						<Link
							href="/signup"
							className={`cb-button-primary px-4 py-2.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
								isScrolled ? "shadow-[0_18px_38px_rgba(10,63,143,0.24)]" : ""
							}`}
						>
							Start Free Trial
						</Link>
					</div>

					<button
						type="button"
						className={`rounded-xl border p-2 text-cb-text transition-all duration-300 md:hidden ${
							isScrolled
								? "border-white/80 bg-white/90 shadow-sm"
								: "border-white/70 bg-white/80"
						}`}
						onClick={() => setIsOpen((prev) => !prev)}
						aria-expanded={isOpen}
						aria-label="Toggle menu"
					>
						{isOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</button>
				</div>

				<nav
					className={`glass-panel overflow-hidden rounded-2xl p-4 transition-[opacity,transform,max-height,margin] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
						isOpen
							? "mt-3 max-h-80 translate-y-0 opacity-100"
							: "pointer-events-none mt-0 max-h-0 -translate-y-3 opacity-0"
					}`}
					aria-label="Mobile"
				>
					<div className="flex flex-col gap-2">
						{links.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="rounded-xl px-3 py-2 text-sm font-medium text-cb-muted transition hover:bg-cb-azure hover:text-cb-navy"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<div className="mt-2 grid grid-cols-2 gap-2">
							<Link
								href="/login"
								className="cb-button-secondary px-3 py-2.5"
								onClick={() => setIsOpen(false)}
							>
								Login
							</Link>
							<Link
								href="/signup"
								className="cb-button-primary px-3 py-2.5"
								onClick={() => setIsOpen(false)}
							>
								Start Free Trial
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
