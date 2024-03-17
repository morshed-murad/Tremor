import { Button, Dialog, DialogPanel } from "@tremor/react";
import { useState } from "react";
import Buttons from "../../button/Buttons";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  return (
    <div className="py-32 px-10">
      <div className="nav">
        <NavLink
          to="/badges"
          className={({ isActive }) =>
            isActive ? "bg-red-500 text-blue-700" : "bg-blue-700 text-white"
          }
        >
          Back
        </NavLink>
      </div>
      <div className=" flex justify-center gap-5 items-center">
        <div className="">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 px-4 rounded bg-red-600 text-white font-serif "
          >
            Show Dialog
          </button>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            static={true}
            className="z-[100] "
          >
            <DialogPanel className="flex justify-center">
              <Button
                variant="primary"
                className="max-auto flex items-center"
                onClick={() => setIsOpen(false)}
              >
                CLose
              </Button>
            </DialogPanel>
          </Dialog>
        </div>
        <div>
          <Buttons onClick={() => setIsOpens(true)} children="Open Dialog" />
          <Dialog
            open={isOpens}
            onClose={(val) => setIsOpens(val)}
            static={true}
          >
            <DialogPanel className="flex flex-col gap-5">
              <h1 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Account Created successfully
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minus tenetur reiciendis adipisci deleniti earum cumque
                dolore, animi sunt rerum tempora laudantium iste laborum
                accusamus culpa officiis at quia ea?
              </p>
              <Button children="Got it" onClick={() => setIsOpens(false)} />
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
