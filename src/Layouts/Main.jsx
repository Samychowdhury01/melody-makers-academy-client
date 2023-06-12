import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-[calc(100vh-91px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
