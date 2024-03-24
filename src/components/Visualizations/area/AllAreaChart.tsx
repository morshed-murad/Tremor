import { NavLink, Navigate, Outlet } from "react-router-dom";

import { useState } from "react";
import LineCahrt from "./LineCahrt";
import { UseContexts } from "../../store/Store";

import GoBackBtn from "../../button/GoBackBtn";

const AllAreaChart = () => {
  const { isLoggedIn } = UseContexts();
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow(false);
  };

  return (
    <div
      className="py-24 px-10  h-[100%]         bg-gradient-to-r from-indigo-700 to-pink-600
       dark:from-gray-400 dark:to-gray-900"
    >
      {isLoggedIn ? (
        <div>
          <GoBackBtn />
          <div className="w-full flex flex-col gap-5 ">
            <div className="nav flex gap-4 justify-end">
              <NavLink
                onClick={handleChange}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                    : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
                }
                to="areaChart"
              >
                Chart
              </NavLink>
              <NavLink
                onClick={handleChange}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                    : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
                }
                to="linechart"
              >
                LineChart
              </NavLink>
            </div>
            <div className="w-full ">
              {show === false ? <Outlet /> : <LineCahrt />}
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/loginform" />
      )}
    </div>
  );
};

export default AllAreaChart;
