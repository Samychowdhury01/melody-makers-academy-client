import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
const {user} = useAuth()
const [axiosSecure] = useAxiosSecure()
const {isLoading : isInstructorLoading, data : isInstructor} = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () =>{
        const response = await axiosSecure.get(`/users/role/${user?.email}`)
        return response?.instructor
    }
})
return [isInstructor, isInstructorLoading]
};

export default useInstructor;