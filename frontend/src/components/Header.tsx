import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Utility: highlights active link
  const isActive = (path: string) =>
    location.pathname.startsWith(path)
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-gradient-to-r from-white to-blue-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-700 tracking-tight"
        >
          Find My GP
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/symptoms" className={isActive("/symptoms")}>
            Symptoms
          </Link>
          <Link to="/gps" className={isActive("/gps")}>
            GPs
          </Link>
          <Link to="/booking" className={isActive("/booking")}>
            Booking
          </Link>
          <Link to="/consult" className={isActive("/consult")}>
            Consultation
          </Link>
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:block">
          <Link
            to="/symptoms"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4 bg-white shadow-inner">
          <Link to="/symptoms" className={isActive("/symptoms")} onClick={() => setMenuOpen(false)}>
            Symptoms
          </Link>
          <Link to="/gps" className={isActive("/gps")} onClick={() => setMenuOpen(false)}>
            GPs
          </Link>
          <Link to="/booking" className={isActive("/booking")} onClick={() => setMenuOpen(false)}>
            Booking
          </Link>
          <Link to="/consult" className={isActive("/consult")} onClick={() => setMenuOpen(false)}>
            Consultation
          </Link>
          <Link
            to="/symptoms"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
