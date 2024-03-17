import { NavLink, Outlet } from "react-router-dom";
import Button from "../../button/Buttons";
import { useState } from "react";
import DunatChart from "./DunatChart";

const AllDonut = () => {
  const [show, setShow] = useState(true);

  const handleChange = () => {
    setShow(false);
  };
  return (
    <div className="py-24 px-10 flex flex-col gap-5 bg-gradient-to-r from-indigo-700 to-green-600 h-[130%]">
      <div>
        <NavLink to="/">
          <Button children="Back" />
        </NavLink>
      </div>
      <div className="flex flex-col w-full gap-5">
        <div className="nav flex gap-5 justify-end">
          <NavLink
            onClick={handleChange}
            className={({ isActive }) =>
              isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
            }
            to="simpledonut"
          >
            Simple
          </NavLink>
          <NavLink
            onClick={handleChange}
            className={({ isActive }) =>
              isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
            }
            to="legend"
          >
            Legend
          </NavLink>
        </div>
        <div className="flex flex-col">
          {show === false ? <Outlet /> : <DunatChart />}
        </div>
      </div>
    </div>
  );
};

export default AllDonut;
