import { NavLink, Navigate, Outlet } from "react-router-dom";

import { useState } from "react";
import DunatChart from "./DunatChart";
import ButtonsCHild from "../../button/ButtonsCHild";
import { UseContexts } from "../../store/Store";

const AllDonut = () => {
  const { isLoggedIn } = UseContexts();
  const [show, setShow] = useState(true);

  const handleChange = () => {
    setShow(false);
  };

  return (
    <div
      className="py-24 px-10 flex flex-col gap-5  h-[100%] bg-gradient-to-r from-indigo-700 to-pink-600
      dark:from-gray-400 dark:to-gray-900"
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
                    ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                    : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
                }
                to="simpledonut"
              >
                Simple
              </NavLink>
              <NavLink
                onClick={handleChange}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                    : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
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
