import Image, { StaticImageData } from 'next/image';
import { BsArrowRight, BsStar, BsStarFill, BsPerson, BsHospital } from 'react-icons/bs';
import Link from 'next/link';

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    specialization: string;
    avgRating: number;
    totalRating: number;
    photo: StaticImageData;
    totalPatients: number;
    hospital: string;
  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { id, name, specialization, photo, avgRating, totalRating, totalPatients, hospital } = doctor;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <BsStarFill className="text-yellow-400" />
        ) : (
          <BsStar className="text-gray-300" />
        )}
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative h-64 w-full">
        <Image
          src={photo}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
          {specialization}
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <div className="flex items-center mb-4">
          <div className="flex mr-2">{renderStars(avgRating)}</div>
          <span className="text-sm text-gray-600">
            {avgRating.toFixed(1)} ({totalRating} reviews)
          </span>
        </div>
        <div className="mb-6 space-y-2">
          <div className="flex items-center text-gray-600">
            <BsPerson className="mr-2" />
            <span className="font-semibold text-gray-800">{totalPatients}+</span> patients
          </div>
          <div className="flex items-center text-gray-600">
            <BsHospital className="mr-2" />
            <p className="truncate">{hospital}</p>
          </div>
        </div>
        <Link
          href={`/DocInfo`}
          className="flex items-center justify-center w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold text-lg"
        >
          View Profile
          <BsArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
