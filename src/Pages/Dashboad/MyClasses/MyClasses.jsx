import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/classes/${user?.email}`);
      return response;
    },
  });
  // TODO: have to add update functionalities
  return (
    <div className="relative h-[100vh] bg-base-300 p-5">
     <div className="overflow-x-auto p-5 center-div">
     <h1 className="text-4xl styled-text text-center mb-10">My Class List</h1>
      <table className="table  bg-base-300 drop-shadow-xl">
        {/* head */}
        <thead>
          <tr className="text-lg">
            <th>No.</th>
            <th>Class Name</th>
            <th>Price</th>
            <th>Available Seats</th>
            <th>Total Enrollment</th>
            <th>status</th>
            <th>feedback</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {myClasses?.map((classData, index) => (
            <tr key={index} className='text-base'>
              <th>{index + 1}</th>
              <td>{classData?.className}</td>
              <td>{classData?.price}</td>
              <td>{classData?.totalEnroll || 0}</td>
              <td></td>
              <td>{classData?.status}</td>
              <td>{classData.feedback}</td>
              <td>update</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </div>
  );
};

export default MyClasses;
