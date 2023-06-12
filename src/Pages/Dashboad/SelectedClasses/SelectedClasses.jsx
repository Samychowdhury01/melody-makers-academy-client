import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// TODO:have to implement delete and pay function
const SelectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses, refetch } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/my-classes/${user?.email}`);
      return response.data;
    },
  });

  // handle delete selected class
  const handleDeleteClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/my-classes/${id}`).then((data) => {
          if (data?.data?.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="relative h-[100vh] bg-base-300 ">
      <Helmet>
        <title>MelodyMakers Academy | Selected Classes</title>
      </Helmet>
      <div className="overflow-x-auto px-4 py-10 center-div">
        <h1 className="text-4xl styled-text text-center mb-10">
          My Selected Classes
        </h1>
        <table className="table  bg-base-300 drop-shadow-xl">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <th>No.</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses?.map((selectedClass, index) => (
              <tr key={index} className="text-base text-center">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={selectedClass?.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{selectedClass?.className}</td>
                <td>{selectedClass?.instructorName}</td>
                <td>{selectedClass?.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${selectedClass?._id}`}>
                    <button className="btn btn-success btn-sm normal-case">
                      Pay
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteClass(selectedClass?._id)}
                    className="btn btn-error btn-sm normal-case"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
