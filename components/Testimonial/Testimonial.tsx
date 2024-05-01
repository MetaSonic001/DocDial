'use client'
import React, { useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiStar } from 'react-icons/hi';
import Image from 'next/image';
import patientAvatar from '../../public/assets/images/patient-avatar.png';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Test Name 1',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Test Name 2',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Test Name 3',
      rating: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Test Name 4',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    // Add more testimonials as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 3));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative mt-[30px] lg:mt-[55px]">
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center">
          {startIndex > 0 && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={handlePrev}
            >
              <HiArrowNarrowLeft className="w-6 h-6" />
            </button>
          )}
          {startIndex < testimonials.length - 3 && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={handleNext}
            >
              <HiArrowNarrowRight className="w-6 h-6" />
            </button>
          )}
        </div>
        <div className="flex gap-4 justify-center px-4 py-8">
          {testimonials.slice(startIndex, startIndex + 3).map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col items-center py-6 px-8 rounded-3 bg-white border border-gray-200 shadow-md`}
              style={{
                minWidth: '300px',
                maxWidth: '400px',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image src={patientAvatar} alt="Patient Avatar" width={40} height={40} className="rounded-full" />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <HiStar key={i} className="text-yellow-500 w-5 h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
