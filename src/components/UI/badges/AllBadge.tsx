import HomeBtn from "../../button/HomeBtn";
import { UseContexts } from "../../store/Store";
import AllButton from "../button/AllButton";
import Badgesing from "./Badgesing";
import NextBadges from "./NextBadges";
import { NavLink, Navigate, Outlet } from "react-router-dom";

const AllBadge = () => {
  const { isLoggedIn } = UseContexts();
  return (
    <div
      className="py-32 flex flex-col gap-10 px-10 bg-gradient-to-r from-indigo-700 to-stone-500
    dark:from-gray-400 dark:to-gray-900"
    >
      {isLoggedIn ? (
        <div className="flex flex-col gap-5">
          <div className="nav">
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Back
            </NavLink> */}
            <HomeBtn />
          </div>
          <div className="nav text-center flex gap-5">
            <NavLink
              to="date"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Date
            </NavLink>
            <NavLink
              to="dialog"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Dialog
            </NavLink>
            <NavLink
              to="legends"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Legends
            </NavLink>
            <NavLink
              to="list"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              List items
            </NavLink>
            <NavLink
              to="numberinpute"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Inputs
            </NavLink>
            <NavLink
              to="select"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Select
            </NavLink>
            <NavLink
              to="swichs"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Switch
            </NavLink>
            <NavLink
              to="table"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Table
            </NavLink>
            <NavLink
              to="tabs"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-blue-700 dark:bg-gray-500 dark:text-blue-800"
                  : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
              }
            >
              Tab
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
