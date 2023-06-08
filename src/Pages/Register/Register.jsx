/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { createUser, updateUserProfile, logOut } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //   handler for registration
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, confirmPassword, photo } = data;

    setErrorMessage("");
    if (password !== confirmPassword) {
      setErrorMessage("password didn't match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const formData = new FormData();
        formData.append("image", photo[0]);
        axios.post(img_hosting_url, formData).then((imgData) => {
          const image = imgData.data.data.display_url;
          if (imgData.data.success) {
            updateUserProfile(email, image).then(() => {
              const createdUser = { email, name, image, role: "student" };
              axios
                .post("http://localhost:5000/users", createdUser)
                .then((data) => {
                  if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "User created successfully.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    logOut().then(() => {
                      navigate("/login");
                    });
                  }
                });
            });
          }
        });
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <>
      <Helmet>
        <title> MelodyMakers Academy | Register</title>
      </Helmet>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-24 shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="login-image" />
          </div>
          <div className="md:w-2/3 bg-[#1f1f1f] rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-center text-4xl font-bold text-white">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400">Photo URL</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  placeholder="Photo URL"
                  className="w-full bg-base-300"
                />
                {errors.photo && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
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
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase <br /> one lower case, one
                    number and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400">
                    Confirm Password
                  </span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">this field is required</span>
                )}
                <label className="text-center mt-3 text-red-600 font-bold">
                  <p>{errorMessage}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-[#86E5DC] text-black border-none rounded-3xl"
                />
              </div>
              <label className="mt-3 text-lg text-gray-400">
                <span>Already registered? </span>
                <Link
                  to="/login"
                  state={location?.state}
                  className="text-[#86E5DC] hover:link link-accent font-bold duration-300 transition-all"
                >
                  Go to log in
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
