"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body className={`dark:bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

