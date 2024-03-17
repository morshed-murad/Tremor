import { NavLink, Outlet } from "react-router-dom";
import Button from "../../button/Buttons";
import { useState } from "react";
import LineCahrt from "./LineCahrt";

const AllAreaChart = () => {
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow(false);
  };
  return (
    <div className="py-24 px-10  bg-gradient-to-r from-indigo-700 to-pink-600 h-[100%]  ">
      <NavLink to="/">
        <Button children="Back" />
      </NavLink>
      <div className="w-full flex flex-col gap-5 ">
        <div className="nav flex gap-4 justify-end">
          <NavLink
            onClick={handleChange}
            className={({ isActive }) =>
              isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
            }
            to="areaChart"
          >
            Chart
          </NavLink>
          <NavLink
            onClick={handleChange}
            className={({ isActive }) =>
              isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
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
  );
};

export default AllAreaChart;
