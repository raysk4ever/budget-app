import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SETTINGS } from "@/config/settings";

import "../styles/globals.css";
import Navbar from "./component-ui/navbar";
import Nav from "./components/Nav";
import Sidebar from "./component-ui/sidebar";

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
      <body className={`${inter.className} main-layout main-container`}>
        {/* <main className="main-container"> */}
        <Navbar />
        <section className="sub-container">
          <Sidebar />
          {/* <Content /> */}
          {children}
        </section>
        {/* </main> */}
      </body>
    </html>
  );
}
