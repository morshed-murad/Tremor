import { DonutChart } from "@tremor/react";
import { datahero } from "../store/Store";
import { dataFormatterDonut } from "../store/StorFormat";

const DunatChart = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-indigo-100 gap-10 py-5">
      <div>
        <span className="text-center block font-mono text-xl font-semibold">
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
        <span className="text-center block font-mono text-xl font-semibold">
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
