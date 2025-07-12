import React from 'react';
import BarChart from "../BarChart/BarChart.tsx";
import YearlyPlanData from "../../data/yearlyPlan.json";
import './BarChartPanel.scss';

class BarChartPanel extends React.Component {

       render() {
        console.log(YearlyPlanData.categories);

        return (
            <div className="bar-chart-panel">
                <div className="bar-chart-panel-header">
                    <h2>Yearly Plan</h2>
                </div>
                <div className="bar-chart-panel-content">
                    {YearlyPlanData.categories.map((item, index) => (
                        <div className="flex">
                            <div>{item.name} </div>
                            <BarChart key={index} totalValue={item.limit} currentValue={item.spent} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
} 

export default BarChartPanel;