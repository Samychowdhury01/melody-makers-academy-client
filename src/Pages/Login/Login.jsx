/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    setErrorMessage("");
  };

  return (
    <>
      <Helmet>
        <title> MelodyMakers Academy | Login</title>
      </Helmet>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-24 shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="login-image" />
          </div>
          <div className=" md:w-2/3 bg-[#1f1f1f] rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-center text-4xl font-bold text-white">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-gray-400">Password</span>
                </label>
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer absolute right-4 top-12 "
                >
                  {showPass ? (
                    <FaEye className="text-2xl" />
                  ) : (
                    <FaEyeSlash className="text-2xl" />
                  )}
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  {...register("password", {
                    required: true,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="text-center mt-3 text-red-600 font-bold">
                  <p>{errorMessage}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-[#86E5DC] text-black border-none rounded-3xl"
                />
              </div>
              <label className="mt-3 text-lg text-gray-400">
                <span>New here? </span>
                <Link
                  to="/register"
                  state={location?.state}
                  className="text-[#86E5DC] hover:link link-accent font-bold duration-300 transition-all"
                >
                  Create a New Account
                </Link>
              </label>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
