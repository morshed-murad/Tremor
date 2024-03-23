import { NavLink } from "react-router-dom";
import { imageStore } from "../store/ImagesStore";
import { useThemeStore } from "../store/Dark/ThemeStor";

const Pages = () => {
  const { darkMode } = useThemeStore();
  return (
    <div>
      <div
        className={`py-24 px-10 bg-gradient-to-r from-blue-600 to-indigo-700 ${
          darkMode
            ? "bg-gradient-to-r from-blue-600 to-indigo-700"
            : "bg-gradient-to-r from-gray-400 to-gray-900"
        }`}
      >
        <div className="grid grid-cols-3 gap-5 justify-center items-center">
          {imageStore.map((list) => (
            <NavLink key={list.id} to={list.path}>
              <div
                className={`flex flex-col h-[300px] justify-between items-start p-4 rounded  ${
                  darkMode ? "bg-gray-200" : "bg-indigo-700"
                }`}
              >
                <img
                  className="w-full h-[80%]  rounded"
                  src={list.src}
                  alt={list.alt}
                />
                <span
                  className={`text-xl font-mono font-semibold bg-clip-text text-transparent  ${
                    darkMode
                      ? "bg-gradient-to-r from-red-600 to-blue-700"
                      : "bg-gradient-to-r from-gray-300 to-gray-900"
                  }`}
                >
                  {list.title}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pages;
