// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MYHERB | Natural Beauty Products",
  description:
    "Discover our range of natural, vegan, and cruelty-free beauty products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-qb-installed={true}>
      <body className={inter.className}>
        <>
          <Providers>{children}</Providers>
          <Analytics />
        </>
      </body>
    </html>
  );
}
