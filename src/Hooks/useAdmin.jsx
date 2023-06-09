import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
const {user} = useAuth()
const [axiosSecure] = useAxiosSecure()
const {isLoading : isAdminLoading, data : isAdmin} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () =>{
        const response = await axiosSecure.get(`/users/admin/${user?.email}`)
        return response.admin
    }
})
return [isAdminLoading, isAdmin]
};

export default useAdmin;