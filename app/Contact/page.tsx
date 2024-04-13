// pages/contact-us.js
"use client"
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Head>
        <title>Contact Us - DocDial</title>
      </Head>
      <div className="max-w-4xl px-4 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <div className="mb-8">
          <div className="mb-4">
            <p className="font-semibold">Creators:</p>
            <ul className="list-disc pl-6">
              <li>Shaun Mendes</li>
              <li>Jefin John</li>
              <li>Cyrus Gomes</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-semibold">College:</p>
            <p>Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai</p>
          </div>
        </div>
        {/* <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=19.0567,72.8306&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7Clabel:B%7C19.0567,72.8306&key=YOUR_API_KEY" alt="Bandra, Mumbai" className="rounded-md" />
        </div> */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
