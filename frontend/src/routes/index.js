import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import MainPage from "../pages/MainPage";
import ProtectedRoute from "./ProtectedRoute";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" exact />
      <Route
        element={
          <ProtectedRoute isAdmin>
            <AdminPage />
          </ProtectedRoute>
        }
        path="/admin"
      />
      <Route element={<Navigate to="/" replace />} replace path="*" />
    </Routes>
  );
};

export default RoutesComponent;
