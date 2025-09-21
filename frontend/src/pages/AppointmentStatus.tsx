import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Mock API fetch
const mockAppointment = {
  id: "123",
  gpName: "Dr. Sarah Smith",
  slot: "10:30 AM, Sept 22",
  status: "pending", // could be "pending" | "confirmed" | "declined"
};

export default function AppointmentStatus() {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState(mockAppointment);

  // In real app, you'd fetch this from backend with appointmentId
  useEffect(() => {
    // Example: fetch(`/api/appointments/${appointmentId}`)
    setAppointment(mockAppointment);
  }, [appointmentId]);

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Appointment Status
      </h2>

      <p className="text-lg text-gray-700 mb-4">
        With <span className="font-semibold">{appointment.gpName}</span>
      </p>
      <p className="text-gray-600 mb-6">Requested slot: {appointment.slot}</p>

      {appointment.status === "pending" && (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
          <p className="text-yellow-700 font-medium">
            Your request is pending approval. Please wait for confirmation.
          </p>
        </div>
      )}

      {appointment.status === "confirmed" && (
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg mb-6">
          <p className="text-green-700 font-medium">
            Your appointment is confirmed!
          </p>
        </div>
      )}

      {appointment.status === "declined" && (
        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg mb-6">
          <p className="text-red-700 font-medium">
            Unfortunately, this time was declined. Please select another slot.
          </p>
        </div>
      )}

      {/* Navigation */}
      {appointment.status === "confirmed" ? (
        <Link
          to={`/consult/${appointment.id}`}
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition text-center block"
        >
          Go to Consultation
        </Link>
      ) : (
        <Link
          to="/booking/1"
          className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition text-center block"
        >
          Rebook Appointment
        </Link>
      )}
    </div>
  );
}
