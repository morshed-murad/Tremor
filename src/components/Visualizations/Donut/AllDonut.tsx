import { NavLink, Navigate, Outlet } from "react-router-dom";

import { useState } from "react";
import DunatChart from "./DunatChart";
import ButtonsCHild from "../../button/ButtonsCHild";
import { UseContexts } from "../../store/Store";
import { useThemeStore } from "../../store/Dark/ThemeStor";

const AllDonut = () => {
  const { isLoggedIn } = UseContexts();
  const [show, setShow] = useState(true);

  const handleChange = () => {
    setShow(false);
  };

  const { darkMode } = useThemeStore();
  return (
    <div
      className={`py-24 px-10 flex flex-col gap-5 bg-gradient-to-r  h-[100%] ${
        darkMode ? "from-indigo-700 to-green-600" : "from-gray-400 to-gray-900"
      }`}
    >
      {isLoggedIn ? (
        <div>
          <div>
            <NavLink to="/">
              <ButtonsCHild children="Back" />
            </NavLink>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="nav flex gap-5 justify-end">
              <NavLink
                onClick={handleChange}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
                }
                to="simpledonut"
              >
                Simple
              </NavLink>
              <NavLink
                onClick={handleChange}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
                }
                to="legend"
              >
                Legend
              </NavLink>
            </div>
            <div className="flex flex-col py-2">
              {show === false ? <Outlet /> : <DunatChart />}
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/loginform" />
      )}
    </div>
  );
};

export default AllDonut;
