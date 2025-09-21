import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiCalendar, HiClock } from "react-icons/hi2";

const gpData = {
  1: {
    name: "Dr. Sarah Smith",
    specialty: "General Practitioner",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  2: {
    name: "Dr. Raj Patel",
    specialty: "Dermatologist",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  3: {
    name: "Dr. Ana Lopez",
    specialty: "Cardiologist",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
};

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "04:30 PM",
  "06:00 PM",
];

export default function Booking() {
  const { gpId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const gp = gpData[Number(gpId) as keyof typeof gpData];

  const handleBook = () => {
    if (!selectedDate || !selectedSlot) {
      alert("Please select both a date and a time slot before booking.");
      return;
    }

    // Later: save gpId + selectedDate + selectedSlot to backend with status "pending"
    const mockAppointmentId = "123"; // simulate backend-generated id
    navigate(`/appointment-status/${mockAppointmentId}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Book Appointment
      </h2>

      {/* GP Info */}
      {gp ? (
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={gp.photo}
            alt={gp.name}
            className="w-20 h-20 rounded-full object-cover shadow"
          />
          <div>
            <p className="text-xl font-semibold">{gp.name}</p>
            <p className="text-blue-600">{gp.specialty}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 mb-6">Doctor not found.</p>
      )}

      {/* Date Picker */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2 flex items-center">
          <HiCalendar className="mr-2 text-blue-600" /> Select a date
        </label>
        <input
          type="date"
          value={selectedDate || ""}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <p className="block text-gray-700 font-medium mb-3 flex items-center">
          <HiClock className="mr-2 text-blue-600" /> Select a time slot
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`px-4 py-2 rounded-lg border transition text-sm font-medium ${
                selectedSlot === slot
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleBook}
        className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition text-lg font-semibold"
      >
        Request Appointment
      </button>
    </div>
  );
}
