import { StaticImageData } from 'next/image';
import React from 'react';

interface DoctorDetailsProps {
  name: string;
  photo: StaticImageData;
  specialization: string[];
  avgRating: number;
  totalRatings: number;
  patientsAttended: number;
  hospital: string;
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({
  name,
  photo,
  specialization,
  avgRating,
  totalRatings,
  patientsAttended,
  hospital,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        {/* Since StaticImageData cannot be used directly as src for an <img> tag,
        you need to convert it to a URL first. */}
        <img src={photo.src} alt={name} className="rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-2/3 md:ml-8">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <div className="flex items-center mb-4">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm mr-2">
            {avgRating.toFixed(1)}/5
          </span>
          <span className="text-gray-400 text-sm">({totalRatings} ratings)</span>
        </div>
        <p className="text-gray-400 mb-4">
          Specialization: {specialization.join(', ')}
        </p>
        <div className="flex items-center">
          {/* Fix the prop name here */}
          <span className="text-gray-400 text-sm mr-4">
            {patientsAttended} patients attended
          </span>
          <span className="text-gray-400 text-sm">{hospital}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
