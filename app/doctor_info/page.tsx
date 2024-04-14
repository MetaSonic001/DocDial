// app/doctor_info/page.tsx
"use client";
import React from "react";
import CSVUpload from "./CSVUpload";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold m-10">Upload CSV to Firestore</h1>
      <CSVUpload />
    </main>
  );
}
