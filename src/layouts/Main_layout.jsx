import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../redux/features/authSlice";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main_layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user details when the layout is rendered
    dispatch(fetchUserDetails());
  }, [dispatch]);

  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Main Body */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main_layout;
