import React from 'react';
import './BarChart.scss';

interface BarChartProps{
 totalValue: number;
 currentValue: number;
}

class BarChart extends React.Component<BarChartProps> {

    public calculatePercentage = (totalValue: number, currentValue: number): number => {
        if (totalValue === 0) return 0;
        return (currentValue / totalValue) * 100;
    }
    render(){
        return (
            <div className='bar-chart-wrapper'>
                <div className="bar-chart-container">
                    <div className='bar-chart-content' style={{width:this.calculatePercentage(this.props.totalValue,this.props.currentValue)+"%"}}></div>
                </div>
                <div className='bar-chart-footer'>
                 <div className='footer-left'>{this.props.totalValue}</div>
                 <div className='footer-right'>{this.props.currentValue}</div>
                </div>
            </div>
        );
    }

}


export default BarChart;