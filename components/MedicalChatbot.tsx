'use client';

import { useState } from 'react';
import { askAi } from './GoogleAI';
import { useRef } from 'react';


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

    <form ref={formRef} onSubmit={handleSendMessage} className="mt-4">
      <div className="flex">
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Type your medical query here..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </form>

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
    <div className="flex flex-col h-full min-h-screen bg-gray-100">
      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          {/* <h1 className="text-2xl font-bold mb-4">Medical Chatbot</h1> */}
          <div className="flex flex-col h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`py-2 px-4 rounded-lg mb-2 ${
                  message.user ? 'bg-green-200 text-gray-800' : 'bg-blue-200 text-gray-800'
                }`}
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
              <div className="py-2 px-4 rounded-lg mb-2 bg-blue-200 text-gray-800">
                <div className="font-bold">AI Assistant:</div>
                <div>Loading...</div>
              </div>
            )}
          </div>
          <form onSubmit={handleSendMessage} className="mt-4">
            <div className="flex">
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Type your medical query here..."
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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