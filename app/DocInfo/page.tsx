import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { doctors } from '../../public/assets/data/doctor';
import DoctorDetails from '../../components/DocInfo/DoctorDetails';
import DoctorsList from '../../components/DocInfo/DoctorsList';

const DoctorPage: React.FC = () => {
    const currentDoctor = doctors[0]; // Change this to display a different doctor
  
    const otherDoctors = doctors.filter((doctor) => doctor.id !== currentDoctor.id);
  
    return (
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <DoctorDetails
          name={currentDoctor.name}
          photo={currentDoctor.photo}
          specialization={[currentDoctor.specialization]} // Pass specialization as an array
          avgRating={currentDoctor.avgRating}
          totalRatings={currentDoctor.totalRating}
          patientsAttended={currentDoctor.totalPatients}
          hospital={currentDoctor.hospital}
        />
        <Link href="/Booking"> {/* Use Link to navigate to the "Slot" page */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                Book Appointment
            </button>
        </Link>
        <DoctorsList
          doctors={otherDoctors.map(({ id, name, photo }) => ({
            id,
            name,
            photo: photo.src, // Assuming `photo` is an imported image object
          }))}
        />
      </div>
    );
};

export default DoctorPage;
