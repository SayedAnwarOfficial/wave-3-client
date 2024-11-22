import { useSelector } from "react-redux";

const useAdmin = () => {
  const { user } = useSelector((state) => state.auth);
  return user?.role === "admin";
};

export default useAdmin; // Export as default
