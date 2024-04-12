import DoctorCard from "@/components/Doctors/DoctorCard";
import Testimonial from "@/components/Testimonial/Testimonial";
import { doctors } from "@/public/assets/data/doctor";
import Image from 'next/image'
import { HiStar } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import patientAvatar from '../../public/assets/images/patient-avatar.png'


const Doctors: React.FC = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">
            Find a Doctor
          </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      
      
      
      
    

    </>
    
  );
};

export default Doctors;





// //"use client";
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import DoctorCard from '../components/DoctorCard';

// const FindDoctor = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const q = query(collection(db, 'users'), where('role', '==', 'doctor'));
//         const querySnapshot = await getDocs(q);
//         const fetchedDoctors = querySnapshot.docs.map((doc) => doc.data());
//         setDoctors(fetchedDoctors);
//       } catch (error) {
//         console.error('Error fetching doctors:', error);
//       }
//     };
//     fetchDoctors();
//   }, []);

//   const handleSearch = async () => {
//     try {
//       const q = query(collection(db, 'users'), where('role', '==', 'doctor'));
//       const querySnapshot = await getDocs(q);
//       const filteredDoctors = querySnapshot.docs.filter((doc) =>
//         doc.data().name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setDoctors(filteredDoctors.map((doc) => doc.data()));
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   return (
//     <section>
//       <div className="container">
//         <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
//           <input
//             type="search"
//             className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
//             placeholder="Search Doctor"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button
//             className="btn mt-0 rounded-[0px] rounded-r-md"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
//           {doctors.map((doctor) => (
//             <DoctorCard key={doctor.id} doctor={doctor} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FindDoctor;