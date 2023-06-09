import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#1f1f1f] text-white">
          {/* Sidebar content here */}
          <li>
            <div className="flex flex-col items-start text-white md:mb-10 nav-logo-text">
              <h1 className="styled-text md:text-2xl font-extrabold">
                MelodyMakers
              </h1>
              <h3
                className="styled-text md:text-lg"
                style={{ letterSpacing: "0.38em" }}
              >
                Academy
              </h3>
            </div>
          </li>
          {isAdmin ? (
            // for admin
            <>
              <li>
                <NavLink
                  to="/dashboard/"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Manage Classes
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            // for instructors
            <>
              <li>
                <NavLink
                  to="/dashboard/"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Manage Classes
                </NavLink>
              </li>
            </>
          ) : (
            // for student
            <>
              <li>
                <NavLink
                  to="/dashboard/"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg normal-case hover:link-accent ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Manage Classes
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;




