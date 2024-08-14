import { StaticImageData } from "next/image";
import doctorImg01 from "../images/dr_robin_pinto.jpg";
import doctorImg02 from "../images/dr_anand_rao.jpg";
import doctorImg03 from "../images/dr_ankeet_dedhia.jpg";

export const doctors = [
  {
    id: "01",
    name: "Dr. Shaun Mendes",
    specialization: "Surgeon",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    appointmentTimings: [
      "09:00 AM",
      "10:30 AM",
      "12:00 PM",
      "02:30 PM",
      "04:00 PM",
    ],
  },
  {
    id: "02",
    name: "Dr. Jefin John",
    specialization: "Neurologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg02,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    appointmentTimings: {
      '2023-04-15': ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM'],
      '2023-04-16': ['10:00 AM', '11:30 AM', '01:00 PM', '03:30 PM', '05:00 PM'],
      // Add more dates and corresponding time slots as needed
    },
  },
  {
    id: "03",
    name: "Dr. Cyrus Gomes",
    specialization: "Dermatologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg03,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    appointmentTimings: {
      '2023-04-15': ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM'],
      '2023-04-16': ['10:00 AM', '11:30 AM', '01:00 PM', '03:30 PM', '05:00 PM'],
      // Add more dates and corresponding time slots as needed
    },
  },
];


