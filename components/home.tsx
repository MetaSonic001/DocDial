import { motion } from 'framer-motion';
import { useState } from 'react';
import About from '@/components/About';
import DoctorList from '@/components/Doctors/DoctorList';
import FaqList from '@/components/Faq/FaqList';
import ServiceList from '@/components/Services/ServiceList';
import Testimonial from '@/components/Testimonial/Testimonial';
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import avatarIcon from '../public/assets/images/avatar-icon.png';
import faqImg from '../public/assets/images/faq-img.png';
import featureImg from '../public/assets/images/feature-img.png';
import heroImg01 from '../public/assets/images/hero-img01.png';
import heroImg02 from '../public/assets/images/hero-img02.png';
import heroImg03 from '../public/assets/images/hero-img03.png';
import icon01 from '../public/assets/images/icon01.png';
import icon02 from '../public/assets/images/icon02.png';
import icon03 from '../public/assets/images/icon03.png';
import videoIcon from '../public/assets/images/video-icon.png';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hero__section bg-gradient-to-b from-[#f0f6f9] via-[#d8dfe4] to-[#ffffff] pt-[60px] 2xl:h-[800px]"
      >
        <div className="container mx-auto mt-14 px-4">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
                We help patients live a healthy and longer life.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts is dedicated to providing you with the best possible care and support. From diagnosis to treatment, we are here to help you with whatever you may need.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Request an Appointment
              </motion.button>

              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { number: '30+', text: 'Years of Experience', color: 'bg-yellow-400' },
                  { number: '15+', text: 'Clinic Locations', color: 'bg-purple-400' },
                  { number: '100%', text: 'Patient Satisfaction', color: 'bg-blue-400' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-800">{stat.number}</h2>
                    <div className={`w-16 h-1 ${stat.color} rounded-full my-2`}></div>
                    <p className="text-sm text-gray-600">{stat.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:w-1/2 flex gap-4"
            >
              <div className="w-2/3">
                <Image src={heroImg01} alt="Doctor with patient" className="rounded-lg shadow-lg" />
              </div>
              <div className="w-1/3 space-y-4">
                <Image src={heroImg02} alt="Medical equipment" className="rounded-lg shadow-lg" />
                <Image src={heroImg03} alt="Doctor in action" className="rounded-lg shadow-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Providing the Best Medical Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              World-class care for everyone. Our Health System offers unmatched, expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: icon01, title: 'Find a Doctor', description: 'World-class care for everyone. Our Health system offers unmatched, expert health care.' },
              { icon: icon02, title: 'Find a Location', description: 'World-class care for everyone. Our Health system offers unmatched, expert health care.' },
              { icon: icon03, title: 'Book Appointment', description: 'World-class care for everyone. Our Health system offers unmatched, expert health care.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Image src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <div className="flex justify-center">
                  <a href="/doctors" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                    <BsArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of medical services to cater to all your healthcare needs.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Virtual Treatment Anytime</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Schedule the appointment directly
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Search for your physician here, and contact their office
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Get 24/7 support for any questions or concerns
                </li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>

            <div className="lg:w-1/2 relative">
              <Image src={featureImg} alt="Virtual Treatment" className="rounded-lg shadow-lg" />
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-gray-800">Next Available</p>
                  <div className="bg-yellow-400 rounded-full p-1">
                    <Image src={videoIcon} alt="Video Call" className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-800">Today at 2:00 PM</p>
                <div className="mt-2 flex items-center">
                  <Image src={avatarIcon} alt="Doctor" className="w-8 h-8 rounded-full mr-2" />
                  <p className="text-sm text-gray-600">Dr. Wayne Collins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expert Doctors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced and caring medical professionals.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <DoctorList searchTerm={searchTerm} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <Image src={faqImg} alt="FAQ" className="rounded-lg shadow-lg" />
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our satisfied patients and their journey to better health.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default HomePage;
