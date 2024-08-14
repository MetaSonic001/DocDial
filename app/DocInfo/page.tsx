"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctors } from '../../public/assets/data/doctor';
import DoctorDetails from '../../components/DocInfo/DoctorDetails';
import DoctorsList from '../../components/DocInfo/DoctorsList';
import { BsCalendar2Check, BsClock, BsChatDots, BsChevronDown } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

const DoctorPage: React.FC = () => {
  const currentDoctor = doctors[0]; // Change this to display a different doctor
  const otherDoctors = doctors.filter((doctor) => doctor.id !== currentDoctor.id);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Mock data for reviews and availability
  const reviews = [
    { id: 1, name: 'John Doe', rating: 5, comment: 'Excellent doctor! Very knowledgeable and caring.' },
    { id: 2, name: 'Jane Smith', rating: 4, comment: 'Great experience overall. Highly recommended.' },
    { id: 3, name: 'Mike Johnson', rating: 5, comment: 'Dr. ' + currentDoctor.name + ' is the best in their field.' },
  ];

  const availability = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 3:00 PM' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container  mx-auto px-4 py-8 md:px-8 lg:px-16">
        <div className="mb-16">

        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">

            <div className="md:w-2/3 p-6">
              <DoctorDetails
                name={currentDoctor.name}
                photo={currentDoctor.photo}
                specialization={[currentDoctor.specialization]}
                avgRating={currentDoctor.avgRating}
                totalRatings={currentDoctor.totalRating}
                patientsAttended={currentDoctor.totalPatients}
                hospital={currentDoctor.hospital}
              />
              <div className="mt-6 flex flex-wrap gap-4">
                <Link className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300" href="/Booking">
                  <BsCalendar2Check className="mr-2" />
                  Book Appointment
                </Link>
                <button className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300">
                  <BsChatDots className="mr-2" />
                  Chat with Doctor
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Dr. {currentDoctor.name}</h2>
            <p className="text-gray-600 mb-4">
              Dr. {currentDoctor.name} is a highly skilled and experienced {currentDoctor.specialization} with over 10 years of practice.
              They are known for their patient-centered approach and use of cutting-edge medical techniques.
            </p>
            <div className="flex items-center text-gray-600 mb-2">
              <MdLocationOn className="mr-2" />
              <span>{currentDoctor.hospital}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BsClock className="mr-2" />
              <span>Available Mon-Fri</span>
            </div>
          </div>


          <div className="border-t border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient Reviews</h2>
            <div className="space-y-4">
              {reviews.slice(0, showAllReviews ? reviews.length : 2).map((review) => (
                <div key={review.id} className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <p className="font-semibold mr-2">{review.name}</p>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
            {reviews.length > 2 && (
              <button
                className="mt-4 text-blue-600 hover:text-blue-800 transition duration-300 flex items-center"
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? 'Show Less' : 'Show More'}
                <BsChevronDown className={`ml-1 transform ${showAllReviews ? 'rotate-180' : ''} transition-transform duration-300`} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Doctors You Might Like</h2>
          <DoctorsList
            doctors={otherDoctors.map(({ id, name, photo, specialization }) => ({
              id,
              name,
              photo: photo.src,
              specialization,
            }))}
          />
        </div>
      </div>
    </div >
  );
};

export default DoctorPage;
