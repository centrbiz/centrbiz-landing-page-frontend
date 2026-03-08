import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CentrBiz | Connected Business Solutions Platform",
  description:
    "CentrBiz unifies POS, inventory, booking, queueing, CRM, and analytics in one modular, scalable SaaS ecosystem.",
  icons: {
    icon: "/brand/centrbiz-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
