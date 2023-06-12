import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const CheckoutForm = ({ classInfo, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((response) => {
        setClientSecret(response.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        image: classInfo?.image,
        date: new Date(),
        status: "service pending",
        className: classInfo?.className,
        instructorName: classInfo?.instructorName,
        selectedClassId: classInfo?._id,
        classId: classInfo?.classId
      };

      axiosSecure.post("/payments", payment).then((res) => {
console.log(res.data)
        if (res.data.paymentInfo.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Congratulations! payment successful.",
            showConfirmButton: false,
          });
        }
      });
    }
  };

  return (
      <div className="w-2/3 mx-auto h-screen">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="text-center mt-10">
          <button
            className="btn bg-[#86E5DC] text-black  rounded-3xl hover:bg-[#1f1f1f] hover:text-[#86E5DC] transition-all duration-500"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Make Payment
          </button>
          </div>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        {transactionId && (
          <p className="text-green-500">
            Transaction complete with transactionId: {transactionId}
          </p>
        )}
      </div>
  );
};

export default CheckoutForm;
