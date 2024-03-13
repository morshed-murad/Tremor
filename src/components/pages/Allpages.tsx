import { imageStore } from "../store/ImagesStore";
import { NavLink } from "react-router-dom";

const Allpages = () => {
  return (
    <div className="py-24 px-5 bg-gradient-to-r from-sky-800 to-green-600">
      <div className="grid grid-cols-3 gap-5 ">
        {imageStore.map((list) => (
          <NavLink to={list.path}>
            <div className="flex flex-col p-4 rounded bg-gray-200">
              <img
                className="w-full h-[300px] rounded"
                src={list.src}
                alt={list.alt}
              />
              <span className="text-xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-blue-100">
                {list.title}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Allpages;
