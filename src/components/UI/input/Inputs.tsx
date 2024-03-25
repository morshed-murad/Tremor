import { RiEthFill, RiSearchLine } from "@remixicon/react";
import { Card, NumberInput, TextInput, Textarea } from "@tremor/react";

import GoBackBtn from "../../button/GoBackBtn";
import { useState } from "react";

const Inputs = () => {
  const [value, setValue] = useState("");
  return (
    <div className="pt-8 pb-32 px-10 bg-gradient-to-r from-slate-400 to-slate-900 dark:from-gray-500 dark:to-gray-800 fixed top-[72px] left-0 z-40 w-full h-full overflow-auto">
      <div className="nav">
        <GoBackBtn />
      </div>
      <div className="bg-white dark:bg-gray-900 p-5 rounded border mt-12 max-w-md mx-auto flex flex-col gap-5 ">
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
      <div className="bg-white dark:bg-gray-900 p-5 rounded border mt-12 max-w-md mx-auto flex flex-col gap-5 ">
        <TextInput className="mx-auto max-w-md" />
        <div>
          <TextInput icon={RiSearchLine} placeholder="Search..." />
        </div>
        <div>
          <TextInput error={true} errorMessage="Wrong username" />
        </div>
        <div>
          <TextInput placeholder="disabled" disabled={true} />
        </div>
        <div>
          <TextInput type="password" placeholder="Type passowrd here" />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 p-5 rounded border mt-12 max-w-md mx-auto flex flex-col gap-5 ">
        <Textarea placeholder="type here.." className="mx-auto max-w-md" />
        <div>
          <Card className="mx-auto max-w-lg">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(value);
              }}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                >
                  Description
                </label>
                <Textarea
                  onChange={(e) => setValue(e.target.value)}
                  id="dicription"
                  placeholder="start typing here.."
                  rows={6}
                  value={value}
                />
              </div>
              <div>
                <button
                  className="mt-6 flex justify-end py-2 px-4 bg-blue-500 text-white rounded dark:bg-gray-700 "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
