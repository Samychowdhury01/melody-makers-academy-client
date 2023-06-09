
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import spinner from '../assets/others/Spinner.gif'
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
    const [isAdminLoading, isAdmin] = useAdmin()
    const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
       <img src={spinner} alt="loading-image" />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  } 
  else {
    Swal.fire('You have to log in first to view details')
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default AdminRoute;