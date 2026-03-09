import type { ReactNode } from "react";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

type SitePageShellProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function SitePageShell({ children, mainClassName = "" }: SitePageShellProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
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
