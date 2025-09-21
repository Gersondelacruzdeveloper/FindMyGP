import { useState } from "react";
import { mockUsers, mockGPProfiles, mockAppointments } from "../mockData";
import { HiCheckCircle, HiXCircle, HiUser, HiClipboardList } from "react-icons/hi";

export default function AdminDashboard() {
  const [gps, setGps] = useState(mockGPProfiles);

  // pending vs approved split
  const pendingGPs = gps.filter((gp) => !gp.approved);
  const approvedGPs = gps.filter((gp) => gp.approved);

  // approve GP (local only, will not persist after refresh)
  const approveGP = (userId: string) => {
    const updated = gps.map((gp) =>
      gp.userId === userId ? { ...gp, approved: true } : gp
    );
    setGps(updated);
    alert(`GP ${userId} approved! (mock only)`);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Admin Dashboard
      </h1>

      {/* Pending GPs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-amber-700">
          <HiUser className="mr-2" /> Pending GP Approvals
        </h2>
        {pendingGPs.length === 0 ? (
          <p className="text-gray-600">No pending GPs.</p>
        ) : (
          <ul className="space-y-4">
            {pendingGPs.map((gp) => {
              const user = mockUsers.find((u) => u.id === gp.userId)!;
              return (
                <li
                  key={gp.userId}
                  className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-gray-600">
                      {gp.specialty} · License #{gp.licenseNumber}
                    </p>
                  </div>
                  <button
                    onClick={() => approveGP(gp.userId)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Approve
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Approved GPs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-700">
          <HiCheckCircle className="mr-2" /> Approved GPs
        </h2>
        {approvedGPs.length === 0 ? (
          <p className="text-gray-600">No approved GPs yet.</p>
        ) : (
          <ul className="grid sm:grid-cols-2 gap-4">
            {approvedGPs.map((gp) => {
              const user = mockUsers.find((u) => u.id === gp.userId)!;
              return (
                <li
                  key={gp.userId}
                  className="p-4 border rounded-lg shadow-sm bg-white"
                >
                  <p className="font-bold">{user.name}</p>
                  <p className="text-blue-600">{gp.specialty}</p>
                  <p className="text-gray-500 text-sm">
                    License #{gp.licenseNumber}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* All Appointments */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
          <HiClipboardList className="mr-2" /> All Appointments
        </h2>
        {mockAppointments.length === 0 ? (
          <p className="text-gray-600">No appointments yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Patient</th>
                <th className="p-3 border">GP</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAppointments.map((a) => {
                const patient = mockUsers.find((u) => u.id === a.patientId)!;
                const gp = mockUsers.find((u) => u.id === a.gpUserId)!;
                return (
                  <tr key={a.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 border">{patient.name}</td>
                    <td className="p-3 border">{gp.name}</td>
                    <td className="p-3 border">{a.date}</td>
                    <td className="p-3 border">{a.time}</td>
                    <td
                      className={`p-3 border font-semibold ${
                        a.status === "pending"
                          ? "text-amber-700"
                          : a.status === "confirmed"
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {a.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
