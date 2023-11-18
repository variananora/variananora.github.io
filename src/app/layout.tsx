import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "variananora",
  description: "variananora's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">{children}</div>
        {/* <Footer /> */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
