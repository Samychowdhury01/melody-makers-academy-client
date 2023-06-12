import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUserRole from "../../Hooks/useUserRole";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ClassCard = ({ classData }) => {
  const { user } = useAuth();
  const { isAdmin, isInstructor } = useUserRole();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const {
    _id,
    className,
    image,
    instructorName,
    instructorEmail,
     seats,
    price,
  } = classData;

  const handleSelect = (classInfo) => {
    const { _id, className, image, instructorName, price } = classInfo;
    if (!user) {
      navigate("/login");
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "You need to login first to select the class",
      });
      return;
    }
    const selectedClass = {
      email: user?.email,
      className,
      instructorName,
      image,
      price,
      classId: _id,
    };
    axiosSecure.post("/my-classes", selectedClass).then((response) => {
      if (response?.data?.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Congratulations! Successfully added to your list.",
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <>
      <div
        className={`card glass ${
          !seats && "bg-red-500 bg-opacity-60"
        } text-white`}
      >
        <figure className="w-[300px] h-[300px] mx-auto p-5">
          <img
            src={image}
            className="object-fill w-full h-full"
            alt="class-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#86E5DC]">{className}</h2>
          <p>
            <span className="font-semibold text-lg mr-2">Instructor Name:</span>
            {instructorName}
          </p>
          <p>
            <span className="font-semibold text-lg mr-2">
              Instructor Email:
            </span>
            {instructorEmail}
          </p>
          <p>
            <span className="font-semibold text-lg mr-2">Available Seats:</span>
            {seats || 0}
          </p>
          <p>
            <span className="font-semibold text-lg mr-2">Price:</span>${price}
          </p>
          <div className="card-actions justify-start mt-5">
            <button
              onClick={() => handleSelect(classData)}
              className="btn bg-[#86E5DC] text-black rounded-3xl hover:bg-[#1f1f1f] hover:text-[#86E5DC] transition-all duration-500"
              disabled={isAdmin || isInstructor || !seats}
            >
              Select the Class
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
