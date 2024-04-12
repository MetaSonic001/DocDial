import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import doctorImg from '../../public/assets/images/doctor-img01.png';
import starIcon from '../../public/assets/images/Star.png';

const DoctorDetails: React.FC = () => {
    
    const[tab,setTab]=useState('about')


    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                <div className="grid md:grid-cols-3 gap-[50px]">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-5">
                            <figure className="max-w-[200px] max-h-[200px]">
                                <Image src={doctorImg} alt="Doctor Image" className='w-full'/>
                            </figure>
                            <div className="">
                                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">Surgeon</span>
                                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Muhibur Rehman</h3>
                                <div className='flex items-center gap-[6px]'>
                                    <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                                        <Image src={starIcon} alt=""/>4.8
                                    </span>
                                    <span className='text-[14] leading-5 lg:text-[16px] text-textColor' lg:leading-7 font-semibold text-headingColor>(272)</span>
                                </div>

                                <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea reiciendis doloribus debitis itaque ut rem eos ex, eaque fugit placeat a ipsam, distinctio natus, quas velit modi. Delectus, odit!</p>
                            </div>
                        </div> 

                        <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                            <button className={'py-2 px-5 mr-5 text-[16px] leading-7 textheadingColor font-semibold '}>About</button>
                            <button className={'py-2 px-5 mr-5 text-[16px] leading-7 textheadingColor font-semibold '}>Feedback</button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoctorDetails;
