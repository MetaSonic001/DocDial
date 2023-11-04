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

      
      
      
      
      <section>
    <div className="container">
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
                What our patient say
            </h2>
            <p className='text__para text-center'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas nemo labore autem quam omnis sequi minima, obcaecati ratione doloribus voluptate officiis, eveniet totam quos quidem, ullam nisi hic similique!
            </p>
        </div>
{/* 
<Testimonial /> */}

    </div>
</section>


    </>
    
  );
};

export default Doctors;
