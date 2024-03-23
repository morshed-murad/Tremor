import { NavLink, Navigate } from "react-router-dom";
import Accordions from "./Accordions";
import SmallAccordion from "./SmallAccordion";

import ButtonsCHild from "../../button/ButtonsCHild";
import { UseContexts } from "../../store/Store";

const All = () => {
  const { isLoggedIn } = UseContexts();
  return (
    <div className="flex flex-col gap-20 py-24 px-12">
      {isLoggedIn ? (
        <div className="flex flex-col gap-10">
          <div>
            <NavLink to="/">
              <ButtonsCHild children="Back" />
            </NavLink>
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
