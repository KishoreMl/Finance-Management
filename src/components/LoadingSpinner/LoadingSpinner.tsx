import React from 'react';
import './LoadingSpinner.scss';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
    size = 'medium', 
    message = 'Loading...' 
}) => {
    return (
        <div className={`loading-spinner ${size}`}>
            <div className="spinner-circle"></div>
            {message && <p className="spinner-message">{message}</p>}
        </div>
    );
};

export default LoadingSpinner;

