import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getData } from "./AreaGraphUtils.ts";
import { AgAreaSeriesOptions } from "ag-charts-community";

interface AreaGraphProps{
    title: string;
}

const AreaGraph = ({ title   }: AreaGraphProps) => {
  const [options, setOptions] = useState({
    title: {
      text: title,
    },
    data: getData(),
    series: [
      {
        type: "area",
        xKey: "month",
        yKey: "subscriptions",
        yName: "Subscriptions",
      } as AgAreaSeriesOptions,
      {
        type: "area",
        xKey: "month",
        yKey: "services",
        yName: "Services",
      } as AgAreaSeriesOptions,
      {
        type: "area",
        xKey: "month",
        yKey: "products",
        yName: "Products",
      } as AgAreaSeriesOptions,
    ],
  });

  return <AgCharts options={options} />;
};

export default AreaGraph;