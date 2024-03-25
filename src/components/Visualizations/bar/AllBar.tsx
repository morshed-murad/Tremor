import { useState } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import BarCharts from "./BarCharts";

// import ButtonsCHild from "../../button/ButtonsCHild";
import { UseContexts } from "../../store/Store";
import HomeBtn from "../../button/HomeBtn";

const AllBar = () => {
  const { isLoggedIn } = UseContexts();
  const [showroute, setShowroute] = useState(true);
  const handleclick = () => {
    setShowroute(false);
  };

  return (
    <div
      className="py-24 px-10 w-full h-[100%]  bg-gradient-to-r from-indigo-700 to-pink-600
            dark:from-gray-400 dark:to-gray-900"
    >
      {isLoggedIn ? (
        <div>
          <div>
            {/* <NavLink to="/">
              <ButtonsCHild children="Back" />
            </NavLink> */}
            <HomeBtn />
          </div>
          <div className="w-full flex flex-col  gap-5">
            <div className="nav flex gap-5 justify-end">
              <NavLink
                onClick={handleclick}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                    : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
                }
                to="simplebar"
              >
                Simplebar
              </NavLink>
              <NavLink
                onClick={handleclick}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                    : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
                }
                to="groupBar"
              >
                Groupbar
              </NavLink>
            </div>
            <div className="w-full">
              {showroute === true ? <BarCharts /> : <Outlet />}
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/loginform" />
      )}
    </div>
  );
};

export default AllBar;
