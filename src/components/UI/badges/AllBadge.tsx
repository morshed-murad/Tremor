import { UseContexts } from "../../store/Store";
import AllButton from "../button/AllButton";
import Badgesing from "./Badgesing";
import NextBadges from "./NextBadges";
import { NavLink, Navigate, Outlet } from "react-router-dom";

const AllBadge = () => {
  const { isLoggedIn } = UseContexts();
  return (
    <div className="py-32 flex flex-col gap-10 px-10">
      {isLoggedIn ? (
        <div>
          <div className="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              Back
            </NavLink>
          </div>
          <div className="nav text-center flex gap-5">
            <NavLink
              to="date"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              Date
            </NavLink>
            <NavLink
              to="dialog"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              Dialog
            </NavLink>
            <NavLink
              to="legends"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              Legends
            </NavLink>
            <NavLink
              to="list"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              List items
            </NavLink>
            <NavLink
              to="numberinpute"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              Inputs
            </NavLink>
            <NavLink
              to="select"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              Select
            </NavLink>
            <NavLink
              to="swichs"
              className={({ isActive }) =>
                isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
              }
            >
              Switch
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <Badgesing />
            </div>
            <div>
              <NextBadges />
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span>ButtonS</span>
            <AllButton />
          </div>
        </div>
      ) : (
        <Navigate to="/loginform" />
      )}
    </div>
  );
};

export default AllBadge;
