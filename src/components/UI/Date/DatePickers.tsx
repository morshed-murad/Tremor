import { DatePicker, DateRangePicker } from "@tremor/react";
import { NavLink } from "react-router-dom";

import ButtonsCHild from "../../button/ButtonsCHild";

const DatePickers = () => {
  return (
    <div className="py-28 px-10">
      <div>
        <NavLink to="/badges">
          <ButtonsCHild children={" Back"} />
        </NavLink>
      </div>
      <p className="text-center font-mono text-sm text-slate-500 dark:text-white my-4">
        Date Picker
      </p>
      <DatePicker className="max-w-md m-auto" />
      <p className="pt-6 text-center font-mono text-sm text-slate-500 dark:text-white my-4">
        Date Range Picker
      </p>
      <DateRangePicker className="mx-auto max-w-md" />
    </div>
  );
};

export default DatePickers;
