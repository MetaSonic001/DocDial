import About from '@/components/About';
import DoctorList from '@/components/Doctors/DoctorList';
import FaqList from '@/components/Faq/FaqList';
import ServiceList from '@/components/Services/ServiceList';
import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import avatarIcon from '../public/assets/images/avatar-icon.png';
import faqImg from '../public/assets/images/faq-img.png';
import featureimg from '../public/assets/images/feature-img.png';
import heroImg01 from '../public/assets/images/hero-img01.png';
import heroImg02 from '../public/assets/images/hero-img02.png';
import heroImg03 from '../public/assets/images/hero-img03.png';
import icon01 from '../public/assets/images/icon01.png';
import icon02 from '../public/assets/images/icon02.png';
import icon03 from '../public/assets/images/icon03.png';
import videoIcon from '../public/assets/images/video-icon.png';

const HomePage: React.FC = () => (
    <>
    <section className="hero__section bg-gradient-to-b from-[#f0f6f9] via-[#d8dfe4] to-[#ffffff] pt-[60px] 2xl:h-[800px]">
    <div className="container">
    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
    <div className="lg:w-[570px]">
    <h1 className="text-[36px] leading-[46px] text*-headingColor font-[800] md:text-[60px] md:leading-[70px]">
    We help patients live a healthy, longer life.
    </h1>
    <div className="pt-[60px] 2xl:h-[800px]">
    <p className="text__para">
    Our team of experts is dedicated to providing you with the best possible care and support. From diagnosis to treatment, we are here to help you with whatever you may need.
    </p>
    <div className="pt-[60px]">
    <button className="bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg font-bold text-white">Request an Appointment</button>
    </div>
    <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
    <div>
    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
    30+
    </h2>
    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-5px]"></span>
    <p>Years of Experience</p>
    </div>
    <div>
    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
    15%
    </h2>
    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-5px]"></span>
    <p>Clinic Location</p>
    </div>
    <div>
    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
    100%
    </h2>
    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-5px]"></span>
    <p>Patient Satisfaction</p>
    </div>
    </div>
    </div>
    </div>
    <div className="flex gap-[30px] justify-end">
    <div>
    <Image src={heroImg01} alt="" width={500} height={500} className="w-full" />
    </div>
    <div className='mt-[30px]'>
    <Image src={heroImg02} alt='' width={500} height={500} className='w-full mb-[30px]' />
    <Image src={heroImg03} alt='' width={500} height={500} className='w-full' />
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section>
    <div className='container'>
    <div className='heading text-center'>
    <h2 className='heading text-center'>
    Providing the best medical services
    </h2>
    <p className='text__para text-center'>
    World-class care for everyone. Our Health System offers unmatched, expert health care
    </p>
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
    
    {/* First */}
    <div className='py-[30px] px-5'>
    <div className='flex items-center justify-center'>
    <Image src={icon01} alt='' />
    </div>
    
    <div className='mt-[30px]'>
    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
    Find a Doctor
    </h2>
    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
    World-class care for everyone. Our Health system offers unmatched, expert health care. From the lab to the clinic.
    </p>
    <a href='/Doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
    <BsArrowRight className='group-hover:text-white w-6 h-5' />
    </a>
    </div>
    </div>
    
    
    {/* Second */}
    <div className='py-[30px] px-5'>
    <div className='flex items-center justify-center'>
    <Image src={icon02} alt='' />
    </div>
    
    <div className='mt-[30px]'>
    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
    Find a Location
    </h2>
    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
    World-class care for everyone. Our Health system offers unmatched, expert health care. From the lab to the clinic.
    </p>
    <a href='/Doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
    <BsArrowRight className='group-hover:text-white w-6 h-5' />
    </a>
    </div>
    </div>
    
    
    {/* Third */}
    <div className='py-[30px] px-5'>
    <div className='flex items-center justify-center'>
    <Image src={icon03} alt='' />
    </div>
    
    <div className='mt-[30px]'>
    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
    Book Appointment
    </h2>
    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
    World-class care for everyone. Our Health system offers unmatched, expert health care. From the lab to the clinic.
    </p>
    <a href='/Doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
    <BsArrowRight className='group-hover:text-white w-6 h-5' />
    </a>
    </div>
    </div>
    
    </div>
    </div>
    </section>
    
    {/* about section */}
    < About/>
    
    
    {/* services */}
    <section className=''>
    <div className="container">
    <div className="xl:w-[470px] mx-auto">
    <h2 className="heading text-center">Our Medical Services</h2>
    <p className='text__para text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa laudantium, iure deleniti sit nam autem earum sint cupiditate hic praesentium saepe dolore ex ipsum non aperiam odio consequatur deserunt!</p>
    </div>
    
    <ServiceList />
    
    </div>
    </section>
    
    
    
    {/* feature section */}
    
    <section>
    <div className='container'>
    <div className='flex items-center justify-between flex-col lg:flex-row'>
    
    
    <div className='xl:w-[670px]'>
    <h2 className='heading'>Get Virtual Treatment<br /> anytime.</h2>
    <ul className="pl-4">
    <li className="text__para">
    1. Sheducle the appointment directly
    </li>
    <li className="text__para">
    2. Search for your physiciam here, and contact their office
    </li>
    <li className="text__para">
    3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magni labore obcaecati ex eos, eius, aut iste maxime expedita ullam ipsum, quia cum exercitationem eaque dicta tempora reiciendis! Voluptate, explicabo!
    </li>
    </ul>
    <a href=""><button className='btn'>Learn More</button></a>
    </div>
    
    
    {/* feature img */}
    
    <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
    <Image src={featureimg} className='w-3/4' alt=""/>
    
    <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
    <div className='flex items-center justify-between'>
    <div className='flex items-center gap-[6px] lg:gap-3'>
    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
    Tue,24
    </p>
    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
    10:00AM
    </p>
    </div>
    <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-cetner justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
    <Image src={videoIcon} alt=''/>
    </span>
    </div>

    <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
        Consultation
    </div>

    <div className='flex item-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
        <Image src={avatarIcon} alt=''/>
        <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Wayne Collins</h4>
    </div>
    
    </div>
    
    </div>
    
    </div>
    </div>
    
    </section>





    {/* doctors */}
    <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
    <h2 className="heading text-center">Our Great Doctors</h2>
    <p className='text__para text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa laudantium, iure deleniti sit nam autem earum sint cupiditate hic praesentium saepe dolore ex ipsum non aperiam odio consequatur deserunt!</p>
    </div>

    <DoctorList/>

        </div>
    </section>


    {/* faq section  */}
    

<section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
                <Image src={faqImg} alt=''/>
            </div>

<div className='w-full md:w-1/2'>
    <h2 className='heading'>FAQs by our beloved patients</h2>
    <FaqList/>
</div>

        </div>
    </div>
</section>


    </>
    );
    
    export default HomePage;
    