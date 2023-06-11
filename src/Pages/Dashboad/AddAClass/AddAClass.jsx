import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddAClass = () => {
  const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      className,
      classImage,
      instructorName,
      instructorEmail,
      availableSeats,
      amount,
    } = data;
    // for hosting the image in server
    const formData = new FormData();
    formData.append("image", classImage[0]);
    axios.post(img_hosting_url, formData).then((imgData) => {
      const image = imgData.data.data.display_url;
      const seats = parseInt(availableSeats);
      const price = parseInt(amount);
      if (imgData.data.success) {
        const classData = {
          className,
          image,
          instructorName,
          instructorEmail,
          seats,
          price,
          status: "pending",
          totalEnroll: 0
        };
        console.log(classData)
        axiosSecure.post("/classes", classData).then((data) => {
          if (data?.data?.insertedId) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You have successfully added a class.",
              showConfirmButton: false,
            });
          }
        });
      }
    });

  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content md:w-full p-4 md:p-10">
          <div className="card md:w-full shadow-2xl shadow-neutral-600 bg-base-300">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h1 className="text-4xl styled-text text-center">Add A class</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class name</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Name"
                  className="input input-bordered"
                  {...register("className", { required: true })}
                />
                {errors.className && (
                  <span className="text-red-500">Class Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input
                  type="file"
                  className="border border-neutral-400 p-2"
                  {...register("classImage", { required: true })}
                />
                {errors.classImage && (
                  <span className="text-red-500">Class Image is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  placeholder="Instructor Name"
                  className="input input-bordered"
                  readOnly
                  {...register("instructorName", { required: true })}
                />
                {errors.instructorName && (
                  <span className="text-red-500">
                    Instructor Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email}
                  placeholder="Instructor Email"
                  className="input input-bordered"
                  readOnly
                  {...register("instructorEmail", {
                    required: true,
                  })}
                />
                {errors.instructorEmail && (
                  <span className="text-red-500">Valid Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available seats</span>
                </label>
                <input
                  type="number"
                  placeholder="Available seats"
                  className="input input-bordered"
                  {...register("availableSeats", { required: true })}
                />
                {errors.availableSeats && (
                  <span className="text-red-500">
                    Available Seats is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  {...register("amount", { required: true })}
                />
                {errors.amount && (
                  <span className="text-red-500">Price is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#86E5DC] text-black rounded-3xl hover:bg-[#1f1f1f] hover:text-[#86E5DC] transition-all duration-500">
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAClass;
