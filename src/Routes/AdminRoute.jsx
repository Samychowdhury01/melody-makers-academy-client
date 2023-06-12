import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import spinner from "../assets/others/Spinner.gif";
import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { isAdmin,  isAdminLoading } = useUserRole();
  const { user, loading} = useAuth();
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
  } else {
    Swal.fire({
      title: "Unauthorized",
      text: "You need to log in as an admin to access this page",
      icon: "error",
      showConfirmButton: false,
      timer: 2000,
    });
    return <Navigate state={{ from: location }} to="/login" replace />;
  }
};

export default AdminRoute;
