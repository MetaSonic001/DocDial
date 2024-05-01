'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { JSX, SVGProps } from "react"

export default function slot() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Book an Appointment with <br/> Dr. Sarah Smith</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Dr. Sarah Smith is a highly experienced family medicine physician with a focus on preventive care and
              patient education.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage alt="Dr. Smith" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Dr. Sarah Smith</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Family Medicine</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dr. Smith is a highly experienced family medicine physician with a focus on preventive care and
                    patient education.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                    href="#"
                  >
                    Book Appointment
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div>
            <img
              alt="Dr. Sarah Smith"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Select a date for your appointment</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Choose an available date that works best for you.</p>
            <div className="mt-6">
            <Calendar
                className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 dark:border-gray-800"
                mode="single"
                onChange={(date) => {
                  // Handle the date change here
                  console.log("Selected date:", date);
                }}
              />

            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Choose a time slot</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Select an available time slot for your appointment.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Button size="sm" variant="outline">
                9:00 AM
              </Button>
              <Button size="sm" variant="outline">
                10:00 AM
              </Button>
              <Button size="sm" variant="outline">
                11:00 AM
              </Button>
              <Button size="sm" variant="outline">
                1:00 PM
              </Button>
              <Button size="sm" variant="outline">
                2:00 PM
              </Button>
              <Button size="sm" variant="outline">
                3:00 PM
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Appointment Summary</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Review the details of your appointment before confirming.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Dr. Smith" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Dr. Sarah Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Family Medicine</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-semibold">April 15, 2023</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LocateIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-semibold">123 Main St, Anytown USA</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Clinic Address</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-semibold">(555) 555-5555</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Clinic Phone Number</p>
                </div>
              </div>
              <Separator />
              <Button className="w-full">Confirm Appointment</Button>
            </div>
          </div>
          <div>
            <img
              alt="Appointment summary"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </div>
    </>
  )
}

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
