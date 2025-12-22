import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getData } from "./BarChartUtils.ts";
import { AgBarSeriesOptions } from "ag-charts-community";
import '../../components/global.scss';


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
    background: {
      fill: "rgb(250, 247, 235)",
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

  return (
      <div className="graph-container">
        <AgCharts options={options} />
      </div>
    );
};

export default BarChart;