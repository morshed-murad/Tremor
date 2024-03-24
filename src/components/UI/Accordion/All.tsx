import { Navigate } from "react-router-dom";
import Accordions from "./Accordions";
import SmallAccordion from "./SmallAccordion";

import { UseContexts } from "../../store/Store";
import GoBackBtn from "../../button/GoBackBtn";

const All = () => {
  const { isLoggedIn } = UseContexts();
  return (
    <div className="flex flex-col gap-20 py-24 px-12  bg-gradient-to-r dark:from-gray-400 dark:to-gray-900">
      {isLoggedIn ? (
        <div className="flex flex-col gap-10">
          <div>
            <GoBackBtn />
          </div>
          <div>
            <Accordions />
          </div>
          <div>
            <SmallAccordion />
          </div>
        </div>
      ) : (
        <Navigate to="/loginform" />
      )}
    </div>
  );
};

export default All;
