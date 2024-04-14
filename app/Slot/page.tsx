'use client'
import React, { useState } from 'react';
import TimeSlotSelection from '@/components/slotbooking/TimeSlotSelection';
import { doctors } from '../../public/assets/data/doctor';
import { StaticImageData } from 'next/image';

// Define the Doctor type inline
interface Doctor {
  id: string;
  name: string;
  specialization: string;
  avgRating: number;
  totalRating: number;
  photo: StaticImageData; // Assuming photo is a string representing the image URL
  totalPatients: number;
  hospital: string;
  appointmentTimings: Record<string, string[]>; // Assuming appointmentTimings is an object mapping dates to arrays of strings
}

const SlotsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDoctorSelection = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Select a Doctor</h2>
          <ul>
            {doctors.map((doctor) => (
              <li
                key={doctor.id}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => handleDoctorSelection(doctor)}
              >
                {doctor.name} - {doctor.specialization}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Select a Date</h2>
          <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        {selectedDoctor ? (
          <TimeSlotSelection
            selectedDoctor={selectedDoctor}
            selectedDate={selectedDate}
          />
        ) : (
          <p className="bg-yellow-100 p-4 rounded-md">Please select a doctor</p>
        )}
      </div>
    </div>
  );
};

export default SlotsPage;
