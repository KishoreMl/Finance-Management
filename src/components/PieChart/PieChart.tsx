import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgPieSeriesOptions } from "ag-charts-community";
import { getData } from "./PieChartUtils.ts";


interface PieChartProps{
    title: string;
}

const PieChart = ({ title }: PieChartProps) => {
  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: title,
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        
      } as AgPieSeriesOptions,
    ],
  });

  return <AgCharts options={options} />;
};

export default PieChart;