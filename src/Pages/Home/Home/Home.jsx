import React from "react";
import { Link } from "react-router-dom";
import ClassCard from "../../../Components/ClassCard/ClassCard";
import InstructorCard from "../../../Components/instructorCard/InstructorCard";
import useClasses from "../../../Hooks/useClasses";
import useInstructors from "../../../Hooks/useInstructors";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const { classes } = useClasses();
  const { instructors } = useInstructors();
  return (
    <>
      <Banner />

      <div className="mt-32">
        <h1 className="text-[#86E5DC] text-3xl md:text-5xl font-semibold text-center mt-16">
          Here Are Our Most purchased classes
        </h1>

        <div className="border-b border-[#30CD8E] pb-5 w-2/3 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-5">
          {classes.slice(0, 6).map((classData) => (
            <ClassCard key={classData?._id} classData={classData} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/classes" className="btn bg-[#86E5DC] text-black  rounded-3xl hover:bg-[#1f1f1f] hover:text-[#86E5DC] transition-all duration-500 mt-10">
            See All Classes
          </Link>
        </div>
      </div>
      <div className="mt-32">
      <h1 className="text-[#86E5DC] text-3xl md:text-5xl font-semibold text-center mt-16">
          Our famous Instructors
        </h1>
        <div className="border-b border-[#30CD8E] pb-5 w-2/3 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-5">
          {instructors.slice(0, 6).map((instructor) => (
            <InstructorCard key={instructor?._id} instructor={instructor} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/classes" className="btn bg-[#86E5DC] text-black  rounded-3xl hover:bg-[#1f1f1f] hover:text-[#86E5DC] transition-all duration-500 my-10">
            See Our Instructors
          </Link>
        </div>
      </div>

      <div className="my-32">
        <Reviews/>
      </div>
    </>
  );
};

export default Home;
