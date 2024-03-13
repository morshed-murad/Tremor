import { BarChart } from "@tremor/react";
import { chartsdata } from "../store/Store";
import { dataFormatters } from "../store/StorFormat";

const BarCharts = () => {
  return (
    <div className="bg-red-100">
      <BarChart
        data={chartsdata}
        index="name"
        categories={["Number of threatened species"]}
        colors={["blue"]}
        valueFormatter={dataFormatters}
        yAxisWidth={48}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
};

export default BarCharts;
