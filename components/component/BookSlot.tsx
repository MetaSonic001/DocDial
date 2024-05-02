import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CalendarIcon, LocateIcon, PhoneIcon } from 'lucide-react'

const BookSlot = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
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
    </div>
  )
}

export default BookSlot