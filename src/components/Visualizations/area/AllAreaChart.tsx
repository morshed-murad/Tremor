import { NavLink, Navigate, Outlet } from "react-router-dom";

import { useState } from "react";
import LineCahrt from "./LineCahrt";
import { UseContexts } from "../../store/Store";
import ButtonsCHild from "../../button/ButtonsCHild";
import { useThemeStore } from "../../store/Dark/ThemeStor";

const AllAreaChart = () => {
  const { isLoggedIn } = UseContexts();
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow(false);
  };

  const { darkMode } = useThemeStore();
  return (
    <div
      className={`py-24 px-10  h-[100%] ${
        darkMode
          ? " bg-gradient-to-r from-indigo-700 to-pink-600"
          : " bg-gradient-to-r from-gray-400 to-gray-900"
      }`}
    >
      {isLoggedIn ? (
        <div>
          <NavLink to="/">
            <ButtonsCHild children="Back" />
          </NavLink>
          <div className="w-full flex flex-col gap-5 ">
            <div className="nav flex gap-4 justify-end">
              <NavLink
                onClick={handleChange}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
                }
                to="areaChart"
              >
                Chart
              </NavLink>
              <NavLink
                onClick={handleChange}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
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
