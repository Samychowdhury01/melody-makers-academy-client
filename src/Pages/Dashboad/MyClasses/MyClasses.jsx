import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FcApproval, FcCancel, FcClock } from "react-icons/fc";
import { Link } from "react-router-dom";
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
      <div className="overflow-x-auto px-2 py-5 center-div">
        <h1 className="text-4xl styled-text text-center mb-10">
          My Class List
        </h1>
        <table className="table  bg-base-300 drop-shadow-xl">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
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
              <tr key={index} className="text-base text-center">
                <th>{index + 1}</th>
                <td>{classData?.className}</td>
                <td>{classData?.price}</td>
                <td>{classData?.totalEnroll || 0}</td>
                <td></td>
                <td>
                  {classData?.status === "approved" ? (
                    <>
                      <div className="flex items-center gap-2 text-success">
                        <FcApproval className="text-lg" /> <span>Approved</span>
                      </div>
                    </>
                  ) : classData?.status === "denied" ? (
                    <>
                      <div className="flex items-center gap-2 text-error">
                        <FcCancel className="text-lg" /> <span>Denied</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-warning">
                        <FcClock className="text-lg" /> <span>Pending</span>
                      </div>
                    </>
                  )}
                </td>
                <td>{classData.feedback}</td>
                <td>
                  <Link><button className="btn btn-neutral btn-sm">Update</button></Link>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
