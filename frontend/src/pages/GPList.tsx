import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiSearch,
  HiStar,
  HiLocationMarker,
  HiClock,
} from "react-icons/hi";

const gps = [
  {
    id: 1,
    name: "Dr. Sarah Smith",
    specialty: "General Practitioner",
    rating: 4.8,
    distance: "2.3 km",
    availability: "Today at 4:00 PM",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    education: "MD, University of Oxford",
    experience: "12 years · St. Mary’s Hospital",
  },
  {
    id: 2,
    name: "Dr. Raj Patel",
    specialty: "Dermatologist",
    rating: 4.6,
    distance: "5.1 km",
    availability: "Tomorrow at 10:00 AM",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    education: "MD, Cambridge University",
    experience: "9 years · Royal Skin Clinic",
  },
  {
    id: 3,
    name: "Dr. Ana Lopez",
    specialty: "Cardiologist",
    rating: 4.9,
    distance: "3.4 km",
    availability: "Today at 6:30 PM",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    education: "MD, Harvard Medical School",
    experience: "15 years · Boston Heart Institute",
  },
];

export default function GPList() {
  const [search, setSearch] = useState("");

  const filteredGPs = gps.filter(
    (gp) =>
      gp.name.toLowerCase().includes(search.toLowerCase()) ||
      gp.specialty.toLowerCase().includes(search.toLowerCase())
  );

  // Mock AI recommendation
  const aiRecommendation =
    "Based on your symptoms, we recommend seeing a General Practitioner first.";

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        Matching GPs
      </h2>

      {/* AI Recommendation */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg shadow mb-6">
        <p className="font-semibold text-blue-700">AI Suggestion:</p>
        <p className="text-gray-700">{aiRecommendation}</p>
      </div>

      {/* Search bar */}
      <div className="flex items-center mb-8 max-w-md mx-auto">
        <HiSearch className="text-gray-400 mr-2 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* GP Cards */}
      <ul className="grid gap-6 sm:grid-cols-2">
        {filteredGPs.length > 0 ? (
          filteredGPs.map((gp) => (
            <li
              key={gp.id}
              className="border rounded-xl p-6 shadow hover:shadow-xl transition bg-white flex flex-col"
            >
              {/* Doctor Info */}
              <div className="flex items-start space-x-4">
                <img
                  src={gp.photo}
                  alt={gp.name}
                  className="w-20 h-20 rounded-full object-cover shadow"
                />
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-800">
                    {gp.name}
                  </p>
                  <p className="text-blue-600 font-medium">{gp.specialty}</p>
                  <p className="text-gray-600 text-sm">{gp.education}</p>
                  <p className="text-gray-500 text-sm">{gp.experience}</p>

                  {/* Rating, distance, availability */}
                  <div className="flex flex-wrap items-center mt-3 space-x-4 text-gray-600 text-sm">
                    <span className="flex items-center">
                      <HiStar className="text-yellow-400 mr-1" /> {gp.rating}
                    </span>
                    <span className="flex items-center">
                      <HiLocationMarker className="text-red-500 mr-1" />{" "}
                      {gp.distance}
                    </span>
                    <span className="flex items-center">
                      <HiClock className="text-green-500 mr-1" />{" "}
                      {gp.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Book button */}
              <Link
                to={`/booking/${gp.id}`}
                className="mt-6 bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-green-700 transition"
              >
                Book Appointment
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500 col-span-2 text-center">
            No GPs found. Try another search.
          </p>
        )}
      </ul>
    </div>
  );
}
