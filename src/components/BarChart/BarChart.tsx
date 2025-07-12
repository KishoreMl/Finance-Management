import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getData } from "./BarChartUtils.ts";
import { AgBarSeriesOptions } from "ag-charts-community";


interface BarChartProps{
    title: string;
    subtitle?: string;
}

const BarChart = ({ title, subtitle }: BarChartProps) => {
  const [options, setOptions] = useState({
    title: {
      text: title,
    },
    subtitle: {
      text: subtitle || "",
    },
    data: getData(),
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "amount",
        yName: "Amount",
      } as AgBarSeriesOptions,
    ],
  });

  return <AgCharts options={options} />;
};

export default BarChart;