import { Card, Switch } from "@tremor/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Switching = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const handleSwitch = (value: boolean) => {
    setIsSwitchOn(value);
  };
  return (
    <div className="py-32 px-10 bg-gradient-to-r from-red-200 to-red-500 dark:from-gray-500 dark:to-gray-800 ">
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
      <div className="flex flex-col gap-5">
        <div className=" bg-white dark:bg-gray-900 p-5 rounded border w-[400px] mx-auto flex justify-center ">
          <Switch />
        </div>
        <div className=" bg-white dark:bg-gray-900 p-5 rounded border w-[400px] mx-auto flex justify-center ">
          <Card>
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Unlock the full potential
            </h3>
            <p className="mt-1 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dignissimos a mollitia. Sapiente enim earum fugiat autem maxime
              aspernatur porro est voluptates velit deleniti, debitis, veritatis
              aliquid architecto soluta sint?
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Submitted" + isSwitchOn);
              }}
            >
              <div className="flex items-center gap-4">
                <Switch
                  id="switch"
                  name="switch"
                  checked={isSwitchOn}
                  onChange={handleSwitch}
                />
                <label
                  htmlFor="switch"
                  className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                >
                  Active Tremor Pro for{" "}
                  <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    $20/month
                  </span>
                </label>
              </div>
              <button
                className={`w-full mt-4 py-1 rounded text-white font-semibold ${
                  !isSwitchOn ? "bg-blue-500/60" : "bg-blue-600"
                }`}
                type="submit"
                disabled={!isSwitchOn}
              >
                Sumbit
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Switching;
