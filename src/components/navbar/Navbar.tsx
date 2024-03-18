import { NavLink, Outlet } from "react-router-dom";
import { UseContexts } from "../store/Store";
import { useState } from "react";
import PrfilImg from "../image/usericon.png";
import Buttons from "../button/Buttons";
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

  return (
    <div className="flex flex-col ">
      <header className="fixed top-0 left-0 z-10 justify-between w-full flex gap-10 py-4 px-10 bg-gradient-to-r from-pink-800 to-purple-800">
        <h1 className="flex items-center font-bold">
          Headless
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-red-400 font-lobster text-xl font-bold ">
            PRACTICE
          </span>
        </h1>
        <nav>
          {isLoggedIn === false ? (
            <div className="nav flex gap-4">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-blue-700"
                    : "bg-blue-700 text-white"
                }
              >
                Home
              </NavLink>
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
              <div className="flex ralativ">
                <img
                  onClick={handle}
                  className="rounded-full w-12 cursor-pointer"
                  src={PrfilImg}
                  alt=""
                />

                <div
                  className={`nav absolute z-50 w-44 rounded-b top-20 flex flex-col text-center gap-4 justify-center px-5 bg-gradient-to-tr from-orange-400 to-blue-400 py-5 transition-all duration-500  ${
                    show === true ? "right-5" : "-right-60"
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
        </nav>
      </header>
      <div onClick={() => setShow(false)} className="ralative">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
