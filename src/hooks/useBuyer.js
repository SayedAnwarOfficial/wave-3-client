import { useSelector } from "react-redux";

const useBuyer = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  return { user, isAuthenticated, isBuyer: user?.role === "buyer" };
};

export default useBuyer;
