import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import useAuth from "../../Hooks/useAuth";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { isAdmin, isInstructor } = useUserRole();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Sign Out Successful");
      })
      .catch((error) => {
        toast.error("Something went wrong. Try again!");
      });
  };

  const navItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      <li>
        {user && (
          <ActiveLink
            to={`/dashboard/${isAdmin ? "manage-classes" : isInstructor ? "my-classes" : "selected-classes"}`}
          >
            Dashboard
          </ActiveLink>
        )}
      </li>
      <div className="tooltip" data-tip={`${user?.displayName || ""}`}>
        <div>
          {user && (
            <img
              src={user?.photoURL}
              alt="profile-photo"
              className="rounded-full w-14 h-14"
            />
          )}
        </div>
      </div>
      <li>
        {user ? (
          <div className="flex justify-center">
            <button
              onClick={handleSignOut}
              className="btn btn-sm bg-[#86E5DC] text-black hover:link-accent hover:bg-black transition-all duration-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <ActiveLink to="/login">Login</ActiveLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-opacity-30 bg-black text-white max-w-screen-xl md:pt-5">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl md:text-3xl styled-text md:w-2/3">
          MelodyMakers Academy
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
