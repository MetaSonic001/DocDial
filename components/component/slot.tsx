'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import Booking from "./booking"

export default function Slot() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-16"></div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Book an Appointment with <span className="text-blue-600">Dr. Jefin John</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert in Family Medicine with a focus on preventive care and patient education.
            </p>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage alt="Dr. Jefin John" src="/assets/images.dr_anand_rao.jpg" />
                    <AvatarFallback>JJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Dr. Jefin John</h3>
                    <p className="text-lg text-blue-600">Family Medicine</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With over 10 years of experience, Dr. John is dedicated to providing comprehensive care for patients of all ages.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <LocateIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <span>123 Medical Center, City, State</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <span>(123) 456-7890</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="#AppointmentBooking">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Book Appointment
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="relative">
            <img
              alt="Dr. Jefin John"
              className="rounded-lg object-cover shadow-2xl"
              height={500}
              src="./assets/images/dr_anand_rao.jpg"
              style={{
                aspectRatio: "4/5",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-semibold">Available Today</span>
              </div>
            </div>
          </div>
        </div>
        <div id="AppointmentBooking" className="mt-16">
          <Booking />
        </div>
      </div>
    </div>
  )
}

// ... (keep the icon components as they are)

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
