'use client';

import { useState, useRef } from 'react';
import { askAi } from './GoogleAI';

interface Message {
  user: boolean;
  text: string;
}

const MedicalChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get('message')?.toString() || '';

    if (formRef.current) {
      formRef.current.reset();
    }

    if (message.trim()) {
      const newMessage: Message = { user: true, text: message };
      setMessages([...messages, newMessage]); // Add user's message to chat history
      setIsLoading(true);

      try {
        const response = await askAi(message);
        handleAiResponse(response);
      } catch (error) {
        console.error('Error sending message to AI:', error);
        handleAiResponse("I'm sorry, there was an error processing your request. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAiResponse = (response: string) => {
    const formattedResponse = response.replace(/\*/g, ''); // Remove all '*' characters
    if (formattedResponse.trim() !== '') {
      setMessages([...messages, { user: false, text: formattedResponse.trim() }]);
    } else {
      setMessages([
        ...messages,
        { user: false, text: "I'm sorry, I couldn't provide a clear response to your query. Please try rephrasing your question." },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-col h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`py-2 px-4 rounded-lg mb-2 max-w-lg ${message.user ? 'bg-green-500 text-white self-end' : 'bg-blue-500 text-white self-start'
                  }`}
                style={{ animation: 'fadeIn 0.5s ease-in-out' }}
              >
                {message.user ? (
                  <div className="font-bold">You:</div>
                ) : (
                  <div className="font-bold">AI Assistant:</div>
                )}
                <div>{message.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="py-2 px-4 rounded-lg mb-2 bg-blue-500 text-white self-start">
                <div className="font-bold">AI Assistant:</div>
                <div>Loading...</div>
              </div>
            )}
          </div>
          <form ref={formRef} onSubmit={handleSendMessage} className="mt-4 fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
            <div className="flex">
              <textarea
                id="message"
                name="message"
                rows={1}
                placeholder="Type your medical query here..."
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicalChatbot;
