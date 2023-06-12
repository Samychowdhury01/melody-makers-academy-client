import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { isLoading: isAdminLoading, data: isAdmin = false } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user) {
        const response = await axiosSecure.get(`/users/role/${user?.email}`);
        return response?.data?.admin ?? false;
      } else {
        return false;
      }
    },
  });

  const { isLoading: isInstructorLoading, data: isInstructor = false } =
    useQuery({
      queryKey: ["isInstructor", user?.email],
      enabled: !loading,
      queryFn: async () => {
        if (user) {
          const response = await axiosSecure.get(`/users/role/${user?.email}`);
          return response?.data?.instructor ?? false;
        } else {
          return false;
        }
      },
    });

  const { isLoading: isStudentLoading, data: isStudent = false } = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user) {
        const response = await axiosSecure.get(`/users/role/${user?.email}`);
        return response?.data?.student ?? false;
      } else {
        return false;
      }
    },
  });

  return {
    isAdmin,
    isAdminLoading,
    isInstructor,
    isInstructorLoading,
    isStudent,
    isStudentLoading,
  };
};

export default useUserRole;
