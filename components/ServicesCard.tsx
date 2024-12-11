"use client";
import React from "react";
import { motion } from "framer-motion";
import { Hospital, Stethoscope, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const Card = ({
  Icon,
  title,
  bgColor,
  shadowColor,
  href,
}: {
  Icon: React.ElementType;
  title: string;
  bgColor: string;
  shadowColor: string;
  href: string;
}) => {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => router.push(href)}
      whileHover={{ y: -5, scale: 1.005 }}
      className={`w-[280px] h-[380px] bg-white rounded-tr-[10px] overflow-hidden flex flex-col justify-center items-center relative shadow-md transition-all duration-300 ease-out ${shadowColor} cursor-pointer`}
    >
      <div
        className={`w-[148px] h-[148px] rounded-full ${bgColor} absolute top-[90px] left-[66px] z-0 transition-transform duration-300 ease-out group-hover:scale-[4]`}
      />
      <div
        className={`w-[161px] h-[161px] rounded-full bg-white border-2 ${bgColor} flex justify-center items-center relative z-10 transition-all duration-300 ease-out group-hover:bg-opacity-0 group-hover:border-opacity-20`}
      >
        <div
          className={`w-[148px] h-[148px] absolute ${bgColor} rounded-full top-[7px] left-[7px] transition-opacity duration-300 ease-out group-hover:opacity-0`}
        />
        <Icon className="w-20 h-20 text-white z-20" />
      </div>
      <p className="text-[19px] text-[#4c5656] mt-[40px] z-20 transition-colors duration-300 ease-out group-hover:text-white">
        {title}
      </p>
    </motion.div>
  );
};

export default function MedicalServicesCards() {
  const services = [
    {
      title: "Hospitals Near You",
      Icon: Hospital,
      bgColor: "bg-[#ceb2fc]",
      shadowColor:
        "hover:shadow-[0_24px_36px_rgba(0,0,0,0.11),0_24px_46px_rgba(206,178,252,0.48)]",
      href: "/hospitals",
    },
    {
      title: "Find by Specialty",
      Icon: Stethoscope,
      bgColor: "bg-[#b2e0fc]",
      shadowColor:
        "hover:shadow-[0_24px_36px_rgba(0,0,0,0.11),0_24px_46px_rgba(178,224,252,0.48)]",
      href: "/specialties",
    },
    {
      title: "Renowned Doctors",
      Icon: UserRound,
      bgColor: "bg-[#fcc2b2]",
      shadowColor:
        "hover:shadow-[0_24px_36px_rgba(0,0,0,0.11),0_24px_46px_rgba(252,194,178,0.48)]",
      href: "/doctors",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Our Medical Services
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
