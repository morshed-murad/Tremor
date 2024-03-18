import { RiCalculatorLine } from "@remixicon/react";
import {
  MultiSelect,
  MultiSelectItem,
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Selects = () => {
  const [value, setValue] = useState("");
  return (
    <div className="py-32 px-10 bg-gradient-to-r from-blue-300 to-blue-900 ">
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
      <div className="flex flex-col gap-5 w-full justify-center">
        <div className=" bg-white p-5 rounded border w-[400px] mx-auto ">
          <span className="mb-4 text-center font-mono text-sm text-slate-500">
            Select
          </span>
          <Select defaultValue="1">
            <SelectItem value="1">Option One</SelectItem>
            <SelectItem value="2">Option Two</SelectItem>
            <SelectItem value="3">Option Three</SelectItem>
            <SelectItem value="4">Option Four</SelectItem>
          </Select>
        </div>
        <div className=" bg-white p-5 rounded border w-[400px] mx-auto ">
          <span className="mb-4 text-center font-mono text-sm text-slate-500">
            Search Select
          </span>
          <SearchSelect>
            <SearchSelectItem value="1">Option1</SearchSelectItem>
            <SearchSelectItem value="2">Option1</SearchSelectItem>
            <SearchSelectItem value="3">Option1</SearchSelectItem>
            <SearchSelectItem value="4">Option1</SearchSelectItem>
          </SearchSelect>
        </div>
        <div className=" bg-white p-5 rounded border w-[400px] mx-auto ">
          <span className="mb-4 text-center font-mono text-sm text-slate-500">
            Multi Select
          </span>
          <MultiSelect>
            <MultiSelectItem value="1">Option 1</MultiSelectItem>
            <MultiSelectItem value="2">Option 2</MultiSelectItem>
            <MultiSelectItem value="3">Option 3</MultiSelectItem>
            <MultiSelectItem value="4">Option 4</MultiSelectItem>
          </MultiSelect>
        </div>
        <div className=" bg-white p-5 rounded border w-[400px] mx-auto ">
          <label
            htmlFor="distance"
            className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
          >
            Multi Select
          </label>
          <Select
            id="distance"
            name="distance"
            value={value}
            onValueChange={setValue}
            className="mt-3"
          >
            <SelectItem value="1" icon={RiCalculatorLine}>
              Kilometers
            </SelectItem>
            <SelectItem value="2" icon={RiCalculatorLine}>
              Meters
            </SelectItem>
            <SelectItem value="3" icon={RiCalculatorLine}>
              Miles
            </SelectItem>
            <SelectItem value="4" icon={RiCalculatorLine}>
              Navtical Miles
            </SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Selects;
