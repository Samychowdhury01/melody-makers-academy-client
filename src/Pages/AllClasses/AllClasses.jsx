import React, { useEffect, useState } from "react";
import ClassCard from "../../Components/ClassCard/ClassCard";
import useAuth from "../../Hooks/useAuth";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/approved-classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <div>
        <h1 className="text-[#86E5DC] text-5xl font-semibold text-center mt-16">
          Check Out our classes
        </h1>
        {/* <h1 className='text-white text-5xl font-semibold text-center mt-16 '>Check Out our classes</h1> */}
        <div className="border-b border-[#30CD8E] pb-5 w-2/3 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-5 parallax-bg">
        {classes?.map((classData) => (
          <ClassCard key={classData?._id} classData={classData} />
        ))}
      </div>
    </>
  );
};

export default AllClasses;
