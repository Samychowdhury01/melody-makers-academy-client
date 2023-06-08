import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import ErrorImage from "../../assets/error.json";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center justify-center md:h-[100vh] bg-white">
    <Helmet>
        <title> MelodyMakers Academy | ERROR PAGE</title>
    </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-20">
        <div className="md:w-2/3 md:h-[500px]">
          <Lottie animationData={ErrorImage} loop={true}></Lottie>
        </div>
        <div className="max-w-md mt-64 text-center">
          <p className="text-2xl font-semibold md:text-3xl text-black mb-12">
            {error?.message}
          </p>
          <Link to="/" className="btn border-none bg-[#86E5DC] text-black cursor-pointer hover:text-white duration-300 transition-all mt-16">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;