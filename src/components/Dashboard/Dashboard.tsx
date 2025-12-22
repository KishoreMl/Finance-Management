import React from 'react';
import KPICards from '../KPICards/KPICards.tsx';
import PieChart from '../PieChart/PieChart.tsx';
import BarChart from '../BarChart/BarChart.tsx';
import LineGraph from '../LineGraph/LineGraph.tsx';
import AreaGraph from '../AreaGraph/AreaGraph.tsx';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
    return (
        <div className='dashboard-container'>
            <div className="dashboard-header">
                <KPICards />
            </div>
            
            <div className="dashboard-charts">
                <div className="chart-item chart-pie">
                    <div className="chart-wrapper">
                        <h3 className="chart-title">Revenue by Product Category</h3>
                        <PieChart title='Revenue by Product Category' />
                    </div>
                </div>

                <div className="chart-item chart-line">
                    <div className="chart-wrapper">
                        <h3 className="chart-title">Product & Price</h3>
                        <LineGraph />
                    </div>
                </div>

                <div className="chart-item chart-bar">
                    <div className="chart-wrapper">
                        <h3 className="chart-title">Monthly Revenue</h3>
                        <BarChart title='Monthly Revenue' />
                    </div>
                </div>

                <div className="chart-item chart-area">
                    <div className="chart-wrapper">
                        <h3 className="chart-title">Revenue Breakdown</h3>
                        <AreaGraph title='Revenue Breakdown' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;