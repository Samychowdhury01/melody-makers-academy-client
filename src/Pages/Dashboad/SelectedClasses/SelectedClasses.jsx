import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// TODO:have to implement delete and pay function
const SelectedClasses = () => {
    const {user, loading} =useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses, refetch } = useQuery({
      queryKey: ["selectedClasses"],
      enabled: !loading,
      queryFn: async () => {
        const response = await axiosSecure.get(`/my-classes/${user?.email}`);
        return response;
      },
    });
    console.log(selectedClasses)
    return (
        <div className="relative h-[100vh] bg-base-300 ">
      <div className="overflow-x-auto px-4 py-10 center-div">
        <h1 className="text-4xl styled-text text-center mb-10">
          my Selected Classes
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
                  <button className="btn btn-neutral btn-sm normal-case">Pay</button>
                </td>
                <td>
                  <button className="btn btn-error btn-sm normal-case">delete</button>
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