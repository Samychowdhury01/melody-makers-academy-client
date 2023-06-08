import React, { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const {user} = useAuth()
  const navItem = (
    <>
      <li>
        <ActiveLink to='/'> Home</ActiveLink>
       
      </li>
      <li>
       <ActiveLink to='/instructors'>Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to='/classes'>Classes</ActiveLink>
      </li>
      <li>
       {user &&  <ActiveLink to='/dashboard'>Dashboard</ActiveLink>}
      </li>
      <li>
       {user?  <ActiveLink>logout</ActiveLink> :  <ActiveLink to='/login'>Login</ActiveLink>}
      </li>
    </>
  );
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl nav-logo-text" >MelodyMakers Academy</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
