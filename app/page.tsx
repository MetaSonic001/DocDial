"use client";


import HomePage from "@/components/home";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <main>

      <HomePage />
    </main>
  );
}
