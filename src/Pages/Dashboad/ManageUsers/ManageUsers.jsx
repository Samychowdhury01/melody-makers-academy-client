import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
const ManageUsers = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/change-role?email=${user?.email}&role=admin`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    axiosSecure
      .patch(`/users/change-role?email=${user?.email}&role=instructor`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>MelodyMakers Academy | Manage Users</title>
      </Helmet>
      <div className="relative bg-base-300 h-full">
        <div className="overflow-x-auto px-4 py-10 center-div">
          <h1 className="text-4xl styled-text text-center mb-10">All Users</h1>
          <table className="table  bg-base-300 drop-shadow-xl">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th>No.</th>
                <th>User Image</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Instructor</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index} className="text-base">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-accent btn-sm normal-case"
                      disabled={user?.role === "instructor" ? true : false}
                    >
                      Make Instructor
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-neutral btn-sm normal-case"
                      disabled={user?.role === "admin" ? true : false}
                    >
                      Make admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
