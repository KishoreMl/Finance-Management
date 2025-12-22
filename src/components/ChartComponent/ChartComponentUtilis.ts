export interface BarSeriesoptions{
    type: ChartType;
    xKey: string;
    yKey: string;
    yName: string;
}

export interface AreaSeriesOptions{
    type: ChartType;
    xKey: string;
    yKey: string;
    yName: string;
}

export interface LineSeriesOptions{
    type: ChartType;
    xKey: string;
    xName: string;
    yKey: string;
    yName: string;
    interpolation: {
        type: string;
    };
}

export interface PieSeriesOptions{
    type: ChartType;
    angleKey: string;
    calloutLabelKey: string;
    sectorLabelKey: string;
}

export type ChartType = "bar" | "area" | "line" | "pie";

