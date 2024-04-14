import React, { useState } from 'react';

const TimeSlotSelection = ({ selectedDoctor, selectedDate }) => {
  const [bookedSlots, setBookedSlots] = useState([]);

  const handleTimeSlotSelection = (time) => {
    if (bookedSlots.includes(time)) {
      alert('This appointment time is already booked.');
    } else {
      setBookedSlots([...bookedSlots, time]);
    }
  };

  const getAvailableSlots = () => {
    if (!selectedDoctor || !selectedDate) return [];
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const availableSlots = selectedDoctor.appointmentTimings[formattedDate] || [];
    return availableSlots;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Select a Time Slot</h2>
      <div className="grid grid-cols-3 gap-4">
        {getAvailableSlots().map((time, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 rounded-md text-center ${
              bookedSlots.includes(time)
                ? 'bg-yellow-100 cursor-not-allowed'
                : 'hover:bg-green-100'
            }`}
            onClick={() => handleTimeSlotSelection(time)}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSelection;
