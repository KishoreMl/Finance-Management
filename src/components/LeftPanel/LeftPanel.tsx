import React, { useState } from 'react';
import './LeftPanel.scss';

interface FilterState {
    storeLocation: string[];
    size: string[];
    products: string[];
}

const LeftPanel: React.FC = () => {
    const [filters, setFilters] = useState<FilterState>({
        storeLocation: [],
        size: [],
        products: []
    });

    const handleCheckboxChange = (category: keyof FilterState, value: string) => {
        setFilters(prev => {
            const currentValues = prev[category];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(item => item !== value)
                : [...currentValues, value];
            
            return { ...prev, [category]: newValues };
        });
    };

    return (
        <div className="left-panel">
            <div className="filter-section">
                <div className="brand-logo">
                    <div className="logo-circle">☕</div>
                </div>

                <div className="filter-group">
                    <h3 className="filter-title">Store Location</h3>
                    <div className="filter-options">
                        {['Astoria', "Hell's Kitchen", 'Lower Manhattan'].map(location => (
                            <label key={location} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={filters.storeLocation.includes(location)}
                                    onChange={() => handleCheckboxChange('storeLocation', location)}
                                />
                                <span className="checkbox-custom"></span>
                                <span className="option-text">{location}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="filter-group">
                    <h3 className="filter-title">Size</h3>
                    <div className="filter-options">
                        {['Large', 'Not Defined', 'Regular', 'Small'].map(size => (
                            <label key={size} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={filters.size.includes(size)}
                                    onChange={() => handleCheckboxChange('size', size)}
                                />
                                <span className="checkbox-custom"></span>
                                <span className="option-text">{size}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="filter-group">
                    <h3 className="filter-title">Products</h3>
                    <div className="filter-options">
                        {['Branded', 'Coffee', 'Coffee beans', 'Drinking Choc...', 'Flavours', 'Loose Tea', 'Packaged Cho...', 'Tea'].map(product => (
                            <label key={product} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={filters.products.includes(product)}
                                    onChange={() => handleCheckboxChange('products', product)}
                                />
                                <span className="checkbox-custom"></span>
                                <span className="option-text">{product}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;

