import React from "react";

const ClassCard = ({ classData }) => {
  const {_id, className, image, instructorName, instructorEmail,availableSeats, price } = classData;
  return (
    <>
      <div className="card glass text-white">
        <figure className="w-[300px] h-[300px] mx-auto p-5">
          <img
            src={image}
            className='object-fill w-full h-full'
            alt="class-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#86E5DC]">{className}</h2>
          <p><span className="font-semibold text-lg mr-2">Instructor Name:</span>{instructorName}</p>
          <p><span className="font-semibold text-lg mr-2">Instructor Email:</span>{instructorEmail}</p>
          <p><span className="font-semibold text-lg mr-2">Available Seats:</span>{availableSeats}</p>
          <p><span className="font-semibold text-lg mr-2">Price:</span>${price}</p>
          <div className="card-actions justify-start mt-5">
            <button className="btn bg-[#86E5DC] text-black  rounded-3xl hover:bg-[#1f1f1f] hover:text-[#86E5DC] transition-all duration-500">Select the Class</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
