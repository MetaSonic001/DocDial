"use client";


import { useRouter } from "next/navigation";
import HomePage from "./Home/page";

export default function Page() {
  const router = useRouter();

  return (
    <main>
      
      <HomePage />
      
    </main>
  );
}
