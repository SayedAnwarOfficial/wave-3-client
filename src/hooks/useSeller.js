import { useSelector } from "react-redux";

const useSeller = () => {
  const { user } = useSelector((state) => state.auth);
  return user?.role === "seller";
};

export default useSeller;
