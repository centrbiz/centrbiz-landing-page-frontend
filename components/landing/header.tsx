"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

	return (
		<header className="sticky top-0 z-50 px-4 pt-4 md:px-0">
			<div className="section-shell">
				<div className="glass-panel flex h-20 items-center justify-between rounded-2xl px-5 md:px-6">
					<Link
						href="/"
						className="inline-flex items-center gap-3"
						aria-label="CentrBiz Home"
					>
						<div>
							<BrandLogo size="lg" />
							<p className="-mt-2 text-[11px] text-cb-muted">
								Connected Business Platform
							</p>
						</div>
					</Link>

					<nav
						className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-2 md:flex"
						aria-label="Primary"
					>
						{links.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="rounded-full px-3 py-2 text-sm font-medium text-cb-muted transition hover:bg-cb-azure hover:text-cb-navy"
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="hidden items-center gap-3 md:flex">
						<Link href="/login" className="cb-button-ghost">
							Login
						</Link>
						<Link
							href="/signup"
							className="cb-button-primary px-4 py-2.5"
						>
							Start Free Trial
						</Link>
					</div>

					<button
						type="button"
						className="rounded-xl border border-white/70 bg-white/80 p-2 text-cb-text md:hidden"
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

				{isOpen ? (
					<nav
						className="glass-panel mt-3 rounded-2xl p-4 md:hidden"
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
				) : null}
			</div>
		</header>
	);
}
