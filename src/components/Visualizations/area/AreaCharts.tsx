import { AreaChart } from "@tremor/react";
import { chartdata } from "../store/Store";
import { dataFormatter } from "../store/StorFormat";

const AreaCharts = () => {
  return (
    <div className="bg-blue-100">
      <AreaChart
        className="h-80"
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
