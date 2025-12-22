import React from "react";
import { AgCharts } from "ag-charts-react";
import { AgBarSeriesOptions, AgAreaSeriesOptions, AgPieSeriesOptions  } from "ag-charts-community";

interface ChartProps{
    title: string;
    subtitle?: string;
    options: ChartOptions;
}

interface ChartOptions{
    title: {
        text: string;
    };
    subtitle: {
        text: string;
    };
    data: any[];
    series: any[];
}

const ChartComponent = ({ title, subtitle, options }: ChartProps) => {

    return <AgCharts options={options} />
};

export default ChartComponent;