import { NavLink } from "react-router-dom";
import { imageStore } from "../store/ImagesStore";

const Pages = () => {
  return (
    <div>
      <div className="py-24 px-10 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="grid grid-cols-3 gap-5 justify-center items-center">
          {imageStore.map((list) => (
            <NavLink key={list.id} to={list.path}>
              <div className="flex flex-col h-[300px] justify-between items-start p-4 rounded bg-gray-200">
                <img
                  className="w-full h-[80%]  rounded"
                  src={list.src}
                  alt={list.alt}
                />
                <span className="text-xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-700">
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
