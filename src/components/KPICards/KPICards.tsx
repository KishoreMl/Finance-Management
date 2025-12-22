import React from 'react';
import './KPICards.scss';

interface KPICardProps {
    title: string;
    value: string;
    icon: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon }) => {
    return (
        <div className="kpi-card">
            <div className="kpi-content">
                <div className="kpi-value">{value}</div>
                <div className="kpi-title">{title}</div>
            </div>
            <div className="kpi-icon">{icon}</div>
        </div>
    );
};

const KPICards: React.FC = () => {
    return (
        <div className="kpi-cards-container">
            <KPICard 
                title="Total Revenue" 
                value="£699K" 
                icon="📊" 
            />
            <KPICard 
                title="Avg Cost Per Unit" 
                value="£3" 
                icon="🧺" 
            />
            <KPICard 
                title="Total Sales" 
                value="149K" 
                icon="🛍️" 
            />
        </div>
    );
};

export default KPICards;

