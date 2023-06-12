import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { user, loading } = useAuth();
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { data: singleClass= false } = useQuery({
    queryKey: ["singleClass", user?.email, id],
    enabled: !loading,
    queryFn: async () => {
     if(user){
      const response = await axiosSecure.get(`/my-classes/${user?.email}`);
      const classesInfo = response?.data?.find((classInfo) => classInfo?._id === id);
      return classesInfo ?? false;
     }
     else{
      return false
     }
    },
  });

  const price = parseInt(singleClass?.price)

  return (
    <div className="bg-base-300 h-screen border border-black">
      <h1 className="text-4xl styled-text text-center my-10">
          Make Payment
        </h1>
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
