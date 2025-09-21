import { User, GPProfile, Appointment } from "./types";

// Demo Users
export const mockUsers: User[] = [
  { id: "u1", name: "Alice Patient", email: "alice@mail.com", role: "patient" },
  { id: "u2", name: "Bob Patient", email: "bob@mail.com", role: "patient" },
  { id: "gp1", name: "Dr. Sarah Smith", email: "smith@gp.com", role: "gp" },
  { id: "gp2", name: "Dr. Raj Patel", email: "patel@gp.com", role: "gp" },
  { id: "admin1", name: "System Admin", email: "admin@sys.com", role: "admin" },
];

// GP Profiles
export const mockGPProfiles: GPProfile[] = [
  {
    userId: "gp1",
    specialty: "General Practitioner",
    licenseNumber: "MD1234",
    approved: true,
  },
  {
    userId: "gp2",
    specialty: "Dermatologist",
    licenseNumber: "MD5678",
    approved: false, // not yet approved
  },
];

// Appointments
export const mockAppointments: Appointment[] = [
  {
    id: "a1",
    patientId: "u1",
    gpUserId: "gp1",
    date: "2025-09-25",
    time: "10:30 AM",
    status: "pending",
  },
  {
    id: "a2",
    patientId: "u2",
    gpUserId: "gp1",
    date: "2025-09-26",
    time: "02:00 PM",
    status: "confirmed",
  },
];
