import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
const {user} = useAuth()
const [axiosSecure] = useAxiosSecure()
const {isLoading : isInstructorLoading, data : isInstructor} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () =>{
        const response = await axiosSecure.get(`/users/admin/${user?.email}`)
        return response.admin
    }
})
return [isInstructorLoading, isInstructor]
};

export default useInstructor;