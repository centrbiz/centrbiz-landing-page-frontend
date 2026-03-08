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
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="CentrBiz Home">
            <div>
              <BrandLogo size="sm" />
              <p className="mt-1 text-[11px] text-cb-muted">Connected Business Platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-cb-muted transition hover:text-cb-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-sm font-medium text-cb-muted transition hover:bg-white hover:text-cb-text"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-cb-gradient px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:opacity-95"
            >
              Start Free Trial
            </Link>
          </div>

          <button
            type="button"
            className="rounded-xl border border-cb-border bg-white p-2 text-cb-text md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <nav className="glass-panel mb-4 rounded-2xl p-4 md:hidden" aria-label="Mobile">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-cb-muted transition hover:bg-white hover:text-cb-text"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  className="rounded-lg border border-cb-border bg-white px-3 py-2 text-center text-sm font-medium text-cb-text"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded-lg bg-cb-gradient px-3 py-2 text-center text-sm font-semibold text-white"
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
