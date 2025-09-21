import { useState } from "react";
import { mockUsers, mockAppointments } from "../mockData";
import { HiCalendar, HiClock, HiUser } from "react-icons/hi";

export default function PatientDashboard() {
  // Assume the patient is logged in as Alice (u1).
  // Later, replace with the currentUser from your auth system.
  const currentPatientId = "u1";

  // Filter appointments belonging to this patient
  const [appointments] = useState(
    mockAppointments.filter((a) => a.patientId === currentPatientId)
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        My Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-gray-600">You have no appointments yet.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((a) => {
            const gp = mockUsers.find((u) => u.id === a.gpUserId)!;
            return (
              <li
                key={a.id}
                className="p-5 border rounded-lg shadow-sm bg-white flex justify-between items-center"
              >
                {/* Appointment info */}
                <div>
                  <p className="font-bold text-lg flex items-center">
                    <HiUser className="mr-2 text-blue-500" /> {gp.name}
                  </p>
                  <p className="text-gray-600">Appointment ID: {a.id}</p>
                  <p className="text-gray-600 flex items-center mt-1">
                    <HiCalendar className="text-blue-500 mr-1" /> {a.date}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <HiClock className="text-green-500 mr-1" /> {a.time}
                  </p>
                  <p
                    className={`mt-2 font-semibold ${
                      a.status === "pending"
                        ? "text-amber-700"
                        : a.status === "confirmed"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    Status: {a.status.toUpperCase()}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
