import { NavLink, Navigate, Outlet } from "react-router-dom";

import { useState } from "react";
import LineCahrt from "./LineCahrt";
import { UseContexts } from "../../store/Store";
import ButtonsCHild from "../../button/ButtonsCHild";

const AllAreaChart = () => {
  const { isLoggedIn } = UseContexts();
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow(false);
  };

  return (
    <div className="py-24 px-10  bg-gradient-to-r from-indigo-700 to-pink-600 h-[100%]  ">
      {isLoggedIn === false ? (
        <Navigate to="/loginform" />
      ) : (
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
      )}
    </div>
  );
};

export default AllAreaChart;
