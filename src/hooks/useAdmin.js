import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      if (!user?.email) return false; // Handle cases where the user is not logged in
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
    enabled: !!user?.email, // Only run the query if a user is logged in
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
