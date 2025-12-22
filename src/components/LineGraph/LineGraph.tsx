
import React, { useState, Fragment } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions, AgLineSeriesOptions } from "ag-charts-community";
import { getData } from "./GraphUtilis.ts";
import "./LineGraph.scss";

const LineGraph = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Trading Profits 2025",
      fontSize: 22,
      fontWeight: "bold",
      color: "#1a1a1a",
    },
    subtitle: {
      text: "Monthly Performance Overview",
      fontSize: 14,
      color: "#666",
    },
    background: {
      fill: "rgb(250, 247, 235)",
    },
    padding: {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
    },
    data: getData(),
    series: [
      {
        type: "line",
        xKey: "month",
        xName: "Month",
        yKey: "amount",
        yName: "Profit",
        interpolation: { type: "smooth" },
        stroke: "#2E7D32",
        strokeWidth: 3,
        marker: {
          enabled: true,
          fill: "#4CAF50",
          stroke: "#2E7D32",
          strokeWidth: 2,
          size: 8,
        },
      } as AgLineSeriesOptions,
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        gridLine: {
          enabled: true,
          style: [{ stroke: "#808080", lineDash: [5, 5] }],
        },
      },
      {
        type: "number",
        position: "left",
        gridLine: {
          enabled: true,
          style: [{ stroke: "#808080" }],
        },
      },
    ],
  });

  const lineStyleLinear = () => {
    const nextOptions = structuredClone(options);

    nextOptions.series?.forEach((series) => {
      series.interpolation = { type: "linear" };
    });

    setOptions(nextOptions);
  };

  const lineStyleSmooth = () => {
    const nextOptions = structuredClone(options);

    nextOptions.series?.forEach((series) => {
      series.interpolation = { type: "smooth" };
    });

    setOptions(nextOptions);
  };

  return (
    <Fragment>
        <div className="graph-container">
             {/* <div className="example-controls">
        <div className="controls-row">
          <button onClick={lineStyleLinear}>Linear</button>
          <button className="gap-right" onClick={lineStyleSmooth}>
            Smooth
          </button>
        </div>
      </div> */}
            <AgCharts options={options} />
        </div>
    </Fragment>
  );
};

export default LineGraph;