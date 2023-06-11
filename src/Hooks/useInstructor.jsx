/* import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
const {user, loading} = useAuth()
const [axiosSecure] = useAxiosSecure()
const {isLoading : isInstructorLoading, data : isInstructor} = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !loading,
    queryFn: async () =>{
        const response = await axiosSecure.get(`/users/role/${user?.email}`)
        return response?.data?.instructor
    }
})
return [isInstructor, isInstructorLoading]
};

export default useInstructor;

 */