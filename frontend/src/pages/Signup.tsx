// src/pages/Signup.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../store/authSlice"; // ✅ better folder structure

export default function Signup() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"patient" | "gp" | "admin">("patient");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signup({ name, email, role }));
    // redirect to the right dashboard
    if (role === "patient") nav("/me");
    if (role === "gp") nav("/gp");
    if (role === "admin") nav("/admin");
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as any)}
          className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
        >
          <option value="patient">Patient</option>
          <option value="gp">GP</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Create Account
        </button>
      </form>
    </div>
  );
}
