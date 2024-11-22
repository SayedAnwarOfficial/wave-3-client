// useAuth.js - Hook for managing authentication state
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice"; // Adjust import path as needed
import axios from "axios";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const logOut = async () => {
    // Send request to the backend to log out
    await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      { withCredentials: true }
    );

    dispatch(logout());
  };

  return { user, logOut };
};

export default useAuth;
