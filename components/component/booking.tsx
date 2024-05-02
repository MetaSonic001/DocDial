import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const AppointmentBooking: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ]);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    setSelectedTime(null);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = async () => {
    try {
      const appointmentData = {
        date: date.toDateString(),
        time: selectedTime,
      };

      const appointmentRef = collection(db, 'appointments');
      await addDoc(appointmentRef, appointmentData);
      console.log('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  const renderCalendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const startDay = currentDate.getDay();
    const totalDays = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          week.push(null);
        } else if (day > totalDays) {
          week.push(null);
        } else {
          const currentDayDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            day
          );
          week.push(
            <div
              key={`${i}-${j}`}
              className={`flex justify-center items-center h-10 w-10 rounded-full cursor-pointer ${
                currentDayDate.toDateString() === new Date().toDateString()
                  ? 'bg-blue-500 text-white'
                  : ''
              } ${
                currentDayDate.toDateString() === date.toDateString()
                  ? 'bg-blue-200'
                  : ''
              }`}
              onClick={() => handleDateChange(currentDayDate)}
            >
              {day}
            </div>
          );
          day++;
        }
      }
      calendar.push(
        <div key={i} className="flex justify-between mb-2">
          {week}
        </div>
      );
    }

    return (
      <div className="p-4">
        <div className="flex justify-between mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-sm font-medium text-gray-700">
              {day}
            </div>
          ))}
        </div>
        {calendar}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Select Date</h2>
          {renderCalendar()}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Select Time</h2>
          <div className="grid grid-cols-2 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelection(time)}
                className={`bg-gray-200 rounded-md py-2 px-4 ${
                  selectedTime === time ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p>
          Date: <span className="font-bold">{date.toDateString()}</span>
        </p>
        <p>
          Time: <span className="font-bold">{selectedTime || 'Not selected'}</span>
        </p>
        <button
          onClick={handleSubmit}
          disabled={!selectedTime}
          className={`bg-blue-500 text-white rounded-md py-2 px-4 mt-4 ${
            !selectedTime ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentBooking;