import React from "react";

const InstructorCard = ({ instructor }) => {
  const { _id, image, email, name } = instructor;
  return (
    <>
      <div className="card glass text-white shadow-lg shadow-neutral-600">
        <figure className="w-[300px] h-[300px] mx-auto p-5">
          <img
            src={image}
            className="object-fill w-full h-full"
            alt="Instructor-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#86E5DC]">{name}</h2>
          <p>
            <span className="font-semibold text-lg mr-2">
              Instructor Email:
            </span>
            {email}
          </p>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
