import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useContext(TokenContext);

  return isAdmin ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
