
import React, { useState, Fragment } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions, AgLineSeriesOptions } from "ag-charts-community";
import { getData } from "./GraphUtilis.ts";
import "./LineGraph.scss";


const LineGraph = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Trading Profits 2025",
    },
    subtitle: {
      text: "",
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
      } as AgLineSeriesOptions,
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
        <div className="line-graph-container">
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