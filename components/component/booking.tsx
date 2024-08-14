import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const AppointmentBooking: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM',
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
      alert('Your booking is confirmed!');
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
              className={`flex justify-center items-center h-10 w-10 rounded-full cursor-pointer ${currentDayDate.toDateString() === new Date().toDateString()
                  ? 'bg-blue-500 text-white'
                  : ''
                } ${currentDayDate.toDateString() === date.toDateString()
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
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Date</h2>
          {renderCalendar()}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Time</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelection(time)}
                className={`py-3 px-4 rounded-md transition-colors duration-200 ${selectedTime === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Appointment Summary</h2>
        <p className="text-lg text-gray-600">
          Date: <span className="font-semibold text-gray-900">{date.toDateString()}</span>
        </p>
        <p className="text-lg text-gray-600">
          Time: <span className="font-semibold text-gray-900">{selectedTime || 'Not selected'}</span>
        </p>
        <button
          onClick={handleSubmit}
          disabled={!selectedTime}
          className={`w-full mt-4 py-3 px-6 rounded-md text-lg font-semibold transition-colors duration-200 ${selectedTime
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};
export default AppointmentBooking;
