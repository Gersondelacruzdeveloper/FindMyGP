import { useState } from "react";
import { mockUsers, mockAppointments } from "../mockData";
import { HiCalendar, HiClock, HiCheckCircle, HiXCircle } from "react-icons/hi";

export default function GPDashboard() {
  // Assume the GP is logged in as Dr. Sarah Smith (gp1).
  // Later, replace with the currentUser from your auth system.
  const currentGPId = "gp1";

  // Filter appointments belonging to this GP
  const [appointments, setAppointments] = useState(
    mockAppointments.filter((a) => a.gpUserId === currentGPId)
  );

  // Approve/reject appointment (mock only)
  const setStatus = (apptId: string, status: "confirmed" | "rejected") => {
    const updated = appointments.map((a) =>
      a.id === apptId ? { ...a, status } : a
    );
    setAppointments(updated);
    alert(`Appointment ${apptId} marked as ${status.toUpperCase()} (mock only)`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        GP Dashboard
      </h1>

      {appointments.length === 0 ? (
        <p className="text-gray-600">No appointments for you yet.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((a) => {
            const patient = mockUsers.find((u) => u.id === a.patientId)!;
            return (
              <li
                key={a.id}
                className="p-5 border rounded-lg shadow-sm bg-white flex justify-between items-center"
              >
                {/* Appointment info */}
                <div>
                  <p className="font-bold text-lg">{patient.name}</p>
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

                {/* Action buttons */}
                {a.status === "pending" && (
                  <div className="space-x-2">
                    <button
                      onClick={() => setStatus(a.id, "confirmed")}
                      className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 flex items-center"
                    >
                      <HiCheckCircle className="mr-1" /> Approve
                    </button>
                    <button
                      onClick={() => setStatus(a.id, "rejected")}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 flex items-center"
                    >
                      <HiXCircle className="mr-1" /> Reject
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
