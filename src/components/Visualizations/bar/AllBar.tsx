import { useState } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import BarCharts from "./BarCharts";

import ButtonsCHild from "../../button/ButtonsCHild";
import { UseContexts } from "../../store/Store";
import { useThemeStore } from "../../store/Dark/ThemeStor";

const AllBar = () => {
  const { isLoggedIn } = UseContexts();
  const [showroute, setShowroute] = useState(true);
  const handleclick = () => {
    setShowroute(false);
  };
  const { darkMode } = useThemeStore();
  return (
    <div
      className={`py-24 px-10 w-full h-[100%] ${
        darkMode
          ? " bg-gradient-to-r from-indigo-700 to-pink-600"
          : " bg-gradient-to-r from-gray-400 to-gray-900"
      }`}
    >
      {isLoggedIn ? (
        <div>
          <div>
            <NavLink to="/">
              <ButtonsCHild children="Back" />
            </NavLink>
          </div>
          <div className="w-full flex flex-col  gap-5">
            <div className="nav flex gap-5 justify-end">
              <NavLink
                onClick={handleclick}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
                }
                to="simplebar"
              >
                Simplebar
              </NavLink>
              <NavLink
                onClick={handleclick}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
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
