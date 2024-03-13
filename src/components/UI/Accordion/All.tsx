import { NavLink } from "react-router-dom";
import Accordions from "./Accordions";
import SmallAccordion from "./SmallAccordion";
import Button from "../../button/Button";

const All = () => {
  return (
    <div className="flex flex-col gap-20 py-24 px-12">
      <div>
        <NavLink to="/">
          <Button children="Back" />
        </NavLink>
      </div>
      <div>
        <Accordions />
      </div>
      <div>
        <SmallAccordion />
      </div>
    </div>
  );
};

export default All;
