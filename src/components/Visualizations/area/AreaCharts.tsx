import { AreaChart } from "@tremor/react";
import { chartdata } from "../store/Store";
import { dataFormatter } from "../store/StorFormat";

const AreaCharts = () => {
  return (
    <div className="p-4 rounded  bg-white dark:bg-gray-900">
      <AreaChart
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

export default AreaCharts;
