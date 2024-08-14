"use client"
import React, { useState } from "react";
import DoctorCard from "@/components/Doctors/DoctorCard";
import { doctors } from "@/public/assets/data/doctor";
import 'swiper/css';
import 'swiper/css/pagination';

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(term) ||
        doctor.specialty.toLowerCase().includes(term)
    );
    setFilteredDoctors(filtered);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className=" mt-16 container text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Find Your Ideal Doctor
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                className="w-full py-4 pl-12 pr-4 text-gray-700 bg-white border rounded-full focus:outline-none focus:border-blue-500 transition duration-300"
                placeholder="Search by name or specialty"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          {filteredDoctors.length === 0 ? (
            <p className="text-center text-gray-600 text-xl">No doctors found. Please try a different search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
