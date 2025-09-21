import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SymptomForm from "./pages/SymptomForm";
import GPList from "./pages/GPList";
import Booking from "./pages/Booking";
import Consultation from "./pages/Consultation";
import Layout from "./components/Layout";
import AppointmentStatus from "./pages/AppointmentStatus";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PatientDashboard from "./pages/PatientDashboard";
import GPDashboard from "./pages/GPDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
    {/* Public no-layout */}
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />

    {/* Layout routes */}
      <Route path="/" element={<Home />} />
      <Route path="/symptoms" element={<SymptomForm />} />
      <Route path="/gps" element={<GPList />} />
      <Route path="/booking/:gpId" element={<Booking />} />
      <Route path="/consult/:appointmentId" element={<Consultation />} />
      <Route path="/appointment-status/:appointmentId" element={<AppointmentStatus />} />

      {/* Protected */}
      <Route
        path="/me"
        element={
          <ProtectedRoute roles={["patient"]}>
            <PatientDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/gp"
        element={
          <ProtectedRoute roles={["gp"]}>
            <GPDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;
