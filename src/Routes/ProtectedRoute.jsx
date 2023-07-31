import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ page }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login page if not logged in
    }
  }, [navigate]);

  return page;
};

export default ProtectedRoute;
