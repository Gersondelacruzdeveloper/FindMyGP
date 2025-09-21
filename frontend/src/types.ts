// src/types.ts
export type Role = "patient" | "gp" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface GPProfile {
  userId: string;
  specialty: string;
  licenseNumber: string;
  approved: boolean;
}

export interface Appointment {
  id: string;
  patientId: string;
  gpUserId: string;
  date: string; // ISO e.g. "2025-09-21"
  time: string; // e.g. "10:30 AM"
  status: "pending" | "confirmed" | "rejected";
}
