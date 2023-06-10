import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// TODO: have to add functionalities for action buttons
const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes, refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await axiosSecure.get("/classes");
      return response;
    },
  });

  return (
    <div className="relative min-h-screen bg-base-300">
      <div className="px-4 py-10 center-div md:px-8 lg:px-12">
        <h1 className="text-4xl styled-text text-center mb-10">All Classes Added By Instructors</h1>
        <div className="overflow-x-auto">
          <table className="table bg-base-300 drop-shadow-xl table-auto">
            <thead>
              <tr className="text-lg">
                <th>No.</th>
                <th>Class image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Approve</th>
                <th>Deny</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((classData, index) => (
                <tr key={index} className="text-base">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={classData?.image} alt="Class" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classData?.className}</td>
                  <td>{classData?.instructorName}</td>
                  <td>{classData?.instructorEmail}</td>
                  <td>{classData?.availableSeats}</td>
                  <td>{classData?.price}</td>
                  <td>
                    <button className="btn btn-sm">Approve</button>
                  </td>
                  <td>
                    <button className="btn btn-sm">Deny</button>
                  </td>
                  <td>
                    <button className="btn btn-sm">Feedback</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
