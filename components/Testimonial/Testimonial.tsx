import Image from 'next/image'
import { HiStar } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import patientAvatar from '../../public/assets/images/patient-avatar.png'




const Testimonial = () => {
    return (
      <div className="mt-[30px] lg:mt-[55px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
            <SwiperSlide >
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <Image src={patientAvatar} alt=''/>
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Test Name
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta inventore assumenda asperiores impedit animi enim eos omnis, aut minus! Impedit, aliquam velit. Nihil quisquam error, blanditiis maiores esse natus!</p>
                    
                </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <Image src={patientAvatar} alt=''/>
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Test Name
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta inventore assumenda asperiores impedit animi enim eos omnis, aut minus! Impedit, aliquam velit. Nihil quisquam error, blanditiis maiores esse natus!</p>
                    
                </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <Image src={patientAvatar} alt=''/>
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Test Name
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta inventore assumenda asperiores impedit animi enim eos omnis, aut minus! Impedit, aliquam velit. Nihil quisquam error, blanditiis maiores esse natus!</p>
                    
                </div>
                </SwiperSlide>


                <SwiperSlide >
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <Image src={patientAvatar} alt=''/>
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Test Name
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta inventore assumenda asperiores impedit animi enim eos omnis, aut minus! Impedit, aliquam velit. Nihil quisquam error, blanditiis maiores esse natus!</p>
                    
                </div>
                </SwiperSlide>


                <SwiperSlide >
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <Image src={patientAvatar} alt=''/>
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Test Name
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta inventore assumenda asperiores impedit animi enim eos omnis, aut minus! Impedit, aliquam velit. Nihil quisquam error, blanditiis maiores esse natus!</p>
                    
                </div>
                </SwiperSlide>


                <SwiperSlide >
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <Image src={patientAvatar} alt=''/>
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Test Name
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta inventore assumenda asperiores impedit animi enim eos omnis, aut minus! Impedit, aliquam velit. Nihil quisquam error, blanditiis maiores esse natus!</p>
                    
                </div>
                </SwiperSlide>


                </Swiper>
    </div>
  )
}

export default Testimonial