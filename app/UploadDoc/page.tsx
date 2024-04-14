// app/doctor_info/page.tsx
"use client";
import React from "react";
import CSVUpload from "../../components/CSVUpload";

export default function Page() {
  return (
    <main className="flex flex-col items-center p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-5xl font-bold my-6">Upload CSV to Firestore</h1>
      <CSVUpload />
    </main>
  );
}
