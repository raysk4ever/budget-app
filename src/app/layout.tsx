import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SETTINGS } from "@/config/settings";

import "../styles/globals.css";
import Navbar from "./component-ui/navbar";
import Sidebar from "./component-ui/sidebar";
import '@/styles/scss/index.scss'
import { ActiveContent } from "@/components/activecontent";

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
          <ActiveContent>
            {children}
          </ActiveContent>
        </section>
        {/* </main> */}
      </body>
    </html>
  );
}
