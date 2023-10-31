"use client";

import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    
    return (
        <main>
        <Header />
        <HomePage />
        </main>
        );
    }
