// pages/signup.tsx
'use client'
import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
  const [userType, setUserType] = useState('');

  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/assets/images/medical background.png')" }}
    >
      <div className="bg-white bg-opacity-50 rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <div className="flex flex-col gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setUserType('patient')}
          >
            Sign Up as Patient
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setUserType('doctor')}
          >
            Sign Up as Doctor
          </button>
        </div>
        {userType === 'patient' && <PatientSignUpForm />}
        {userType === 'doctor' && <DoctorSignUpForm />}
      </div>
    </div>
  );
};

const PatientSignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission for patient signup
    console.log('Patient signup submitted:', { firstName, lastName, email, password });
  };

  return (
    <div className="mt-4 p-4 border border-gray-200 rounded">
      <h2 className="text-lg font-bold mb-2">Patient Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        {/* Similar fields for last name, email, and password */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const DoctorSignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission for doctor signup
    console.log('Doctor signup submitted:', { firstName, lastName, email, password });
  };

  return (
    <div className="mt-4 p-4 border border-gray-200 rounded">
      <h2 className="text-lg font-bold mb-2">Doctor Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        {/* Similar fields for last name, email, and password */}
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
