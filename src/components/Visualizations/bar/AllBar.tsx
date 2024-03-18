import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BarCharts from "./BarCharts";
import Button from "../../button/Buttons";

const AllBar = () => {
  const [showroute, setShowroute] = useState(true);
  const handleclick = () => {
    setShowroute(false);
  };
  return (
    <div className="py-24 px-10 w-full bg-gradient-to-r from-indigo-700 to-pink-600 h-[100%]">
      <div>
        <NavLink to="/">
          <Button children="Back" onClick={function (): void {
            throw new Error("Function not implemented.");
          } } />
        </NavLink>
      </div>
      <div className="w-full flex flex-col  gap-5">
        <div className="nav flex gap-5 justify-end">
          <NavLink
            onClick={handleclick}
            className={({ isActive }) =>
              isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
            }
            to="simplebar"
          >
            Simplebar
          </NavLink>
          <NavLink
            onClick={handleclick}
            className={({ isActive }) =>
              isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
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
  );
};

export default AllBar;
