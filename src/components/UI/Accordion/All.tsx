import { NavLink } from "react-router-dom";
import Accordions from "./Accordions";
import SmallAccordion from "./SmallAccordion";
import Button from "../../button/Buttons";

const All = () => {
  return (
    <div className="flex flex-col gap-20 py-24 px-12">
      <div>
        <NavLink to="/">
          <Button children="Back" onClick={function (): void {
            throw new Error("Function not implemented.");
          } } />
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
