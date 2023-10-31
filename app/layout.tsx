"use client";
// import Header from "@/components/Header/Header";
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
    {/* < Header/> */}
    {children}
    
    </body>
    </html>
    );
  }
  