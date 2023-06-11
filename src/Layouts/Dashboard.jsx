import { Link, NavLink, Outlet } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";


const Dashboard = () => {
  const { isAdmin, isInstructor } = useUserRole();

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
            <Link to="/">
              <div className="flex flex-col items-start text-white md:mb-10 styled-text">
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
            </Link>
          </li>
          {isAdmin ? (
            // for admin
            <>
              <li>
                <NavLink
                  to="/dashboard/manage-classes"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-users"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            // for instructors
            <>
              <li>
                <NavLink
                  to="/dashboard/my-classes"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  My Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-a-class"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Add a Class
                </NavLink>
              </li>
            </>
          ) : (
            // for student
            <>
              <li>
                <NavLink
                  to="/dashboard/selected-classes"
                  className={({ isActive }) =>
                    `text-lg normal-case ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enrolled-classes"
                  className={({ isActive }) =>
                    `text-lg normal-case hover:link-accent ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payment-history"
                  className={({ isActive }) =>
                    `text-lg normal-case hover:link-accent ${
                      isActive ? "bg-[#86E5DC] text-black" : ""
                    }`
                  }
                >
                  Payment History
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
