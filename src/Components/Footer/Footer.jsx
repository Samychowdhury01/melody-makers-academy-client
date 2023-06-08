import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <h2 className="text-2xl font-bold mb-4">MelodyMakers Academy</h2>
          <p className="mb-4">
            Your go-to place for music education and training.
          </p>
        
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="mb-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <p>
            Address: 123 Music Street, City, Country
            <br />
            Phone: +1 123 456 7890
            <br />
            Email: info@melodymakers.com
          </p>
          <ul className="flex mt-5">
            <li className="mr-4">
              <FaFacebookF className="text-3xl" />
            </li>
            <li className="mr-4">
              <FaTwitter className="text-3xl" />
            </li>
            <li>
              <FaInstagram className="text-3xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} MelodyMakers Academy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
