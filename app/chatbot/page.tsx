'use client';

import MedicalChatbot from '@/components/MedicalChatbot';

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <div className='mb-16'></div>
      <h1 className="mb-4 text-3xl font-bold">Medical Chatbot</h1>
      <MedicalChatbot />
    </div>
  );
}
