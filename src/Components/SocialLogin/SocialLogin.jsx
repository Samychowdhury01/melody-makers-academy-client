
import React from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    //   TOD: have to add functionalities
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser?.displayName,
          email: loggedInUser?.email,
          role: 'student'
        };
        axiosSecure.post('https://melody-makers-server.vercel.app/users', saveUser)
        .then(() =>{ 
          toast.success("Login successful");
          navigate(location?.state?.from?.pathname || "/"); 
        })
      })
      .catch((error) => {
        toast.error("Something is wrong, Try Again !!");
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="border h-12 md:w-2/3 mx-5 md:mx-auto mb-5 p-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer text-white"
    >
      <FcGoogle className="text-4xl" />
      <span className="md:text-xl font-bold">Continue with Google</span>
    </div>
  );
};

export default SocialLogin;
