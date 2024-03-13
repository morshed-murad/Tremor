import { DonutChart, Legend } from "@tremor/react";
import { sales } from "../store/Store";
import { dataFormatterDonut } from "../store/StorFormat";

const DunatChartLegend = () => {
  return (
    <div className="py-10 px-10 bg-indigo-100">
      <div className="flex justify-center items-center gap-20">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={dataFormatterDonut}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="w-40"
        />
        <Legend
          categories={[
            "New York",
            "London",
            "Hong Kong",
            "San Francisco",
            "Singapore",
          ]}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="max-w-xs"
        />
      </div>
    </div>
  );
};

export default DunatChartLegend;
