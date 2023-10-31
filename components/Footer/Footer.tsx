import Image from 'next/image';
import React from 'react';
import {
    FaEnvelope,
    FaFacebook,
    FaLinkedin,
    FaMapMarkerAlt,
    FaTwitter,
} from 'react-icons/fa';

const MedicalFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/medical-logo.png" alt="Medical Logo" width={100} height={100} />
              <h1 className="text-3xl ml-2 font-bold">DocDial</h1>
            </div>
            <p className="text-gray-400">Providing quality healthcare services to our community.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/doctors">Our Doctors</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
            <address>
              <p><FaMapMarkerAlt className="inline" /> 123 Medical Drive</p>
              <p>City, State ZIP</p>
              <p><FaEnvelope className="inline" /> info@medicalcenter.com</p>
            </address>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><FaFacebook className="text-3xl" /></a>
              <a href="#" aria-label="Twitter"><FaTwitter className="text-3xl" /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-3xl" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700">
        <div className="container mx-auto py-4 text-center">
          <p>&copy; {new Date().getFullYear()} DocDial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default MedicalFooter;
