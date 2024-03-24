import { Card, CategoryBar, Legend } from "@tremor/react";
import { useState } from "react";

import GoBackBtn from "../../button/GoBackBtn";

const Legends = () => {
  const [value, setValue] = useState("");
  return (
    <div className="scroll py-10 px-10 bg-gradient-to-r from-indigo-700 to-pink-600 dark:from-gray-500 dark:to-gray-800 fixed top-[72px] left-0 w-full h-full z-40">
      <div className="nav">
        <GoBackBtn />
      </div>
      <div className="p-5 flex items-center justify-center rounded border bg-white dark:bg-gray-900 m-auto max-w-md">
        <Legend
          className="mt-3"
          categories={["Category 1", "Category 2", "Category 3"]}
          colors={["emerald", "indigo", "rose"]}
          onClickLegendItem={(e) => {
            value === e ? setValue("") : setValue(e);
          }}
          activeLegend={value}
        ></Legend>
      </div>
      <div className="mt-4 p-5 flex items-center justify-center rounded border bg-white dark:bg-gray-900 m-auto max-w-md">
        <Card>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Total Users
          </p>
          <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            10,483
          </p>
          <CategoryBar
            className="mt-4"
            values={[6724, 3621]}
            colors={["emerald", "red"]}
          />
          <Legend
            className="mt-3"
            categories={["Active users", "Inactive users"]}
            colors={["emerald", "red"]}
          />
        </Card>
      </div>
    </div>
  );
};

export default Legends;
