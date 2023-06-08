import React from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const SocialLogin = () => {
const {googleSignIn} = useAuth()
const location = useLocation();
const navigate = useNavigate();
const handleGoogleSignIn = () => {
//   TOD: have to add functionalities
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