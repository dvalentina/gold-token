import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  return isAdmin ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
