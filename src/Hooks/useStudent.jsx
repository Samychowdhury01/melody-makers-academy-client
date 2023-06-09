import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useStudent = () => {
const {user} = useAuth()
const [axiosSecure] = useAxiosSecure()
const {isLoading : isStudentLoading, data : isStudent} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () =>{
        const response = await axiosSecure.get(`/users/student/${user?.email}`)
        return response.admin
    }
})
return [isStudentLoading, isStudent]
};

export default useStudent;