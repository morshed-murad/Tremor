import { LineChart } from "@tremor/react";
import { chartdata } from "../store/Store";
import { dataFormatter } from "../store/StorFormat";

const LineCahrt = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900  rounded">
      <LineChart
        className="h-80 "
        data={chartdata}
        index="date"
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={["indigo", "rose"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
      />
    </div>
  );
};

export default LineCahrt;
