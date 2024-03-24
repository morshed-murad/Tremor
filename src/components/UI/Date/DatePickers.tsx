import { DatePicker, DateRangePicker } from "@tremor/react";

import GoBackBtn from "../../button/GoBackBtn";

const DatePickers = () => {
  return (
    <div className="py-10 px-10 bg-blue-400 dark:bg-gray-900 fixed w-full h-full left-0 top-[72px] z-40">
      <div>
        <GoBackBtn />
      </div>
      <p className="text-center font-mono text-sm text-slate-500 dark:text-white my-4">
        Date Picker
      </p>
      <DatePicker className="max-w-md m-auto border rounded-lg" />
      <p className="pt-6 text-center font-mono text-sm text-slate-500 dark:text-white my-4">
        Date Range Picker
      </p>
      <DateRangePicker className="mx-auto max-w-md border rounded-lg" />
    </div>
  );
};

export default DatePickers;
