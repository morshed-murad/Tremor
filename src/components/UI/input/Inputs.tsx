import { RiEthFill } from "@remixicon/react";
import { NumberInput } from "@tremor/react";
import { NavLink } from "react-router-dom";

const Inputs = () => {
  return (
    <div className="py-32 px-10 bg-gradient-to-r from-slate-400 to-slate-900 dark:from-gray-500 dark:to-gray-800">
      <div className="nav">
        <NavLink
          to="/badges"
          className={({ isActive }) =>
            isActive
              ? "bg-red-500 text-blue-700 dark:bg-gray-800 dark:text-blue-500"
              : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
          }
        >
          Back
        </NavLink>
      </div>
      <div className="bg-white dark:bg-gray-900 p-5 rounded border mt-12 max-w-md mx-auto flex flex-col gap-5">
        <NumberInput className=" max-w-sm " />
        <NumberInput icon={RiEthFill} placeholder="Amount..." />
        <NumberInput
          error={true}
          errorMessage="Number out of bounds"
          placeholder="Amount..."
        />
        <NumberInput placeholder="Disabled" disabled={true} />
        <NumberInput enableStepper={false} />
      </div>
    </div>
  );
};

export default Inputs;
