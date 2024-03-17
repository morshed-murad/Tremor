import AllButton from "../button/AllButton";
import Badgesing from "./Badgesing";
import NextBadges from "./NextBadges";
import { NavLink } from "react-router-dom";

const AllBadge = () => {
  return (
    <div className="py-32 flex flex-col gap-10 px-10">
      <div className="nav text-center flex gap-5">
        <NavLink
          to="/date"
          className={({ isActive }) =>
            isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
          }
        >
          Date
        </NavLink>
        <NavLink
          to="/dialog"
          className={({ isActive }) =>
            isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
          }
        >
          Dialog
        </NavLink>
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
  );
};

export default AllBadge;
