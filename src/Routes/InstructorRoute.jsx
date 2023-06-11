import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import spinner from "../assets/others/Spinner.gif";
import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";

const InstructorRoute = ({ children }) => {
  const { isInstructor, isLoading: isInstructorLoading } = useUserRole();
  const { user, loading: authLoading } = useAuth();
  const location = useLocation();

  if (authLoading || isInstructorLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <img src={spinner} alt="loading-image" />
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  } else {
    Swal.fire({
      title: "Unauthorized",
      text: "You need to log in as an instructor to access this page",
      icon: "error",
      showConfirmButton: false,
      timer: 2000,
    });
    return <Navigate state={{ from: location }} to="/login" replace />;
  }
};

export default InstructorRoute;
