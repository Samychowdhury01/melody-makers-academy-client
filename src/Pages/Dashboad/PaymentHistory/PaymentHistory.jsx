import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: paymentHistory } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/payment-history/${user?.email}`);
      return response.data;
    },
  });
    return (
        <div className="relative h-[100vh] bg-base-300 ">
            <Helmet>
                <title>
                    MelodyMakers Academy | Payment history
                </title>
            </Helmet>
      <div className="overflow-x-auto px-4 py-10 center-div">
        <h1 className="text-4xl styled-text text-center mb-10">
          Payment History
        </h1>
        <table className="table  bg-base-300 drop-shadow-xl">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <th>No.</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>price</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((paymentItem, index) => (
              <tr key={index} className="text-base text-center">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={paymentItem?.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{paymentItem?.className}</td>
                <td>{paymentItem?.instructorName}</td>
                <td>{paymentItem?.price}</td>
                <td>{paymentItem?.transactionId}</td>
      
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default PaymentHistory;