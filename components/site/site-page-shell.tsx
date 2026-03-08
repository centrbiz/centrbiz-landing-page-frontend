import type { ReactNode } from "react";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

type SitePageShellProps = {
  children: ReactNode;
};

export function SitePageShell({ children }: SitePageShellProps) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
