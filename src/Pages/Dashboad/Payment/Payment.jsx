import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { user, loading } = useAuth();
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { data: singleClass } = useQuery({
    queryKey: ["singleClass"],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/my-classes/${user?.email}`);
      const classesInfo = response?.data?.find((classInfo) => classInfo?._id === id);
      return classesInfo;
    },
  });

  const price = parseInt(singleClass?.price)

  return (
    <div className="bg-base-300">
      <h1>hi from payment</h1>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}
          classInfo={singleClass}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
