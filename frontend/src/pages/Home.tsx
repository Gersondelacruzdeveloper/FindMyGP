import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16">
        {/* Logo / Branding */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-sm">
          Find My GP
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          Get connected with the right doctor in minutes. Describe your symptoms,
          match with a specialist, and book an online consultation instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/symptoms"
            className="px-8 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:bg-blue-700 transition-all duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/gps"
            className="px-8 py-3 bg-white text-blue-600 border border-blue-600 text-lg rounded-xl shadow-md hover:bg-blue-50 transition-all duration-200"
          >
            Browse GPs
          </Link>
        </div>

        {/* Illustration */}
        <div className="mt-12 w-full max-w-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
            alt="Doctor consultation illustration"
            className="w-full drop-shadow-lg rounded-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Why Choose Find My GP?
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">AI Symptom Checker</h3>
            <p className="text-gray-600">
              Quickly describe your symptoms and let our AI suggest the right GP
              for your condition.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Instant Booking</h3>
            <p className="text-gray-600">
              Browse available doctors and schedule an appointment at a time that
              works for you.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Secure Consultation</h3>
            <p className="text-gray-600">
              Meet your GP via secure video or chat, without leaving your home.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Trusted by Patients</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          “Find My GP made it so easy to find a doctor when I needed one.
          Booking was instant, and the consultation was seamless.”
        </p>
        <p className="font-semibold">— Maria R., Patient</p>
      </section>
    </div>
  );
}
