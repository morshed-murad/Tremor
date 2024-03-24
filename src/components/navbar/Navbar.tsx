import { NavLink, Outlet } from "react-router-dom";
import { UseContexts } from "../store/Store";
import { useState } from "react";
import PrfilImg from "../image/usericon.png";
import Buttons from "../button/Buttons";
import { useThemeStore } from "../store/Dark/ThemeStor";
import { RiMoonFill, RiSunFill } from "@remixicon/react";
const Navbar = () => {
  const { isLoggedIn, logout } = UseContexts();
  const handleLogOut = () => {
    if (isLoggedIn === true) {
      logout();
      setShow(false);
    }
  };

  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(!show);
  };

  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <div className="flex flex-col ">
      <header
        className="fixed top-0 left-0 z-10 justify-between w-full flex gap-10 py-4 px-10  
           bg-gradient-to-r from-pink-800 to-purple-800
            dark:bg-gradient-to-r dark:from-gray-400 dark:to-gray-900
       "
      >
        <h1 className="flex items-center font-bold">
          Headless
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-red-400 font-lobster text-xl font-bold ">
            PRACTICE
          </span>
        </h1>
        <nav className="flex items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="nav flex gap-4 items-center">
              <NavLink
                onClick={() => setShow(false)}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
                }
              >
                Home
              </NavLink>
            </div>
            {isLoggedIn === false ? (
              <div className="nav flex gap-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-500 text-blue-700"
                      : "bg-blue-700 text-white"
                  }
                  to="/loginform"
                >
                  Login
                </NavLink>
              </div>
            ) : (
              <div className="nav flex gap-4 items-center">
                {/* <NavLink
                // hidding th profill
                onClick={() => setShow(false)}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
                }
              >
                Home
              </NavLink> */}
                <div className="flex ralativ">
                  <img
                    onClick={handle}
                    className="rounded-full w-10 cursor-pointer"
                    src={PrfilImg}
                    alt=""
                  />

                  <div
                    className={`nav absolute z-50 w-44 rounded-b top-20 flex flex-col text-center gap-4 justify-center px-5 bg-gradient-to-tr from-orange-400 to-blue-400 py-5 transition-all duration-500  ${
                      show === true ? "right-10" : "-right-60"
                    }`}
                  >
                    <ul className="flex flex-col gap-4 text-white font-semibold">
                      <li className="py-2 px-4 rounded bg-blue-700 hover:bg-red-500 hover:text-blue-700 cursor-pointer">
                        home
                      </li>
                      <li className="py-2 px-4 rounded bg-blue-700 hover:bg-red-500 hover:text-blue-700 cursor-pointer">
                        about
                      </li>
                    </ul>
                    <Buttons children="Log Out" onClick={handleLogOut} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <span onClick={toggleDarkMode}>
            {darkMode ? <RiMoonFill /> : <RiSunFill />}
          </span>
        </nav>
      </header>
      {/* hidding profill */}
      <div onClick={() => setShow(false)} className="ralative">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
