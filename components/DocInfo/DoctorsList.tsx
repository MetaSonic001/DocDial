import React from 'react';

interface DoctorProps {
  id: string;
  name: string;
  photo: string;
}

interface DoctorsListProps {
  doctors: DoctorProps[];
}

const DoctorsList: React.FC<DoctorsListProps> = ({ doctors }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex flex-col items-center">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
            <h3 className="text-lg font-medium">{doctor.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
