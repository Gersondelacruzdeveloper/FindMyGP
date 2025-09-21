import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface ProtectedRouteProps {
  children: JSX.Element;
  roles: string[];
}

export default function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const user = useSelector((state: RootState) => state.auth.user);

  // if not logged in → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // if logged in but role not allowed → redirect to home
  if (!roles.includes(user.role)) return <Navigate to="/" replace />;

  return children;
}
