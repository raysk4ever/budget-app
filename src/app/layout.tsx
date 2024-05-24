import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SETTINGS } from "@/config/settings";

import "../styles/globals.css";
import Nav from "./components/Nav";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SETTINGS.TITLE,
  description: SETTINGS.DESC,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} main-layout`}>{children}</body>
    </html>
  );
}
