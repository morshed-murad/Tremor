import { BarChart } from "@tremor/react";
import { chartdataColors } from "../store/Store";
import { dataFormatters } from "../store/StorFormat";

const BarChartsTow = () => {
  return (
    <div className="bg-gray-200">
      <BarChart
        className="mt-6"
        data={chartdataColors}
        categories={[
          "Group A",
          "Group B",
          "Group C",
          "Group D",
          "Group E",
          "Group F",
        ]}
        index="name"
        colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
        valueFormatter={dataFormatters}
        yAxisWidth={48}
      />
    </div>
  );
};

export default BarChartsTow;
