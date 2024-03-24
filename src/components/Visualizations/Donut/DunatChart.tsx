import { DonutChart } from "@tremor/react";
import { datahero } from "../store/Store";
import { dataFormatterDonut } from "../store/StorFormat";

const DunatChart = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-white dark:bg-gray-900 gap-10 py-5">
      <div>
        <span className="text-center block font-mono text-xl font-semibold dark:text-white my-3">
          donut variant 1
        </span>
        <DonutChart
          data={datahero}
          variant="donut"
          valueFormatter={dataFormatterDonut}
          onValueChange={(v) => console.log(v)}
        />
      </div>
      <div>
        <span className="text-center block font-mono text-xl font-semibold dark:text-white">
          pie variant
        </span>
        <DonutChart
          data={datahero}
          variant="pie"
          valueFormatter={dataFormatterDonut}
          onValueChange={(v) => console.log(v)}
        />
      </div>
    </div>
  );
};

export default DunatChart;
