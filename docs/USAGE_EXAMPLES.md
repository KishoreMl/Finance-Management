# Usage Examples

This document provides practical examples of how to use the Finance Management Dashboard components.

## Table of Contents

1. [Basic Setup](#basic-setup)
2. [Using Individual Components](#using-individual-components)
3. [Customizing the Dashboard](#customizing-the-dashboard)
4. [Responsive Design Examples](#responsive-design-examples)
5. [Advanced Usage](#advanced-usage)

## Basic Setup

### Complete Home Page Implementation

```tsx
// src/pages/Home/Home.tsx
import React, { useState } from 'react';
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import Dashboard from '../../components/Dashboard/Dashboard';
import './Home.scss';

const Home: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="home-container">
            <button className="mobile-menu-btn" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            )}

            <div className={`left-panel-wrapper ${isSidebarOpen ? 'open' : ''}`}>
                <LeftPanel />
            </div>

            <div className="main-content">
                <Dashboard />
            </div>
        </div>
    );
};

export default Home;
```

## Using Individual Components

### 1. KPI Cards Component

```tsx
import React from 'react';
import KPICards from './components/KPICards/KPICards';

// Using with default values
<KPICards />

// Custom KPI Card
import { KPICard } from './components/KPICards/KPICards';

<KPICard 
    title="Monthly Profit" 
    value="£125K" 
    icon="💰" 
/>

<KPICard 
    title="Active Users" 
    value="2,543" 
    icon="👥" 
/>
```

### 2. Left Panel (Filter Sidebar)

```tsx
import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel/LeftPanel';

function MyComponent() {
    return (
        <div className="my-layout">
            <LeftPanel />
            {/* Your content here */}
        </div>
    );
}
```

**With Custom Filter Handling:**

```tsx
import React, { useState } from 'react';

const CustomLeftPanel = () => {
    const [filters, setFilters] = useState({
        location: [],
        size: [],
        products: []
    });

    const handleFilterChange = (category, value) => {
        setFilters(prev => ({
            ...prev,
            [category]: prev[category].includes(value)
                ? prev[category].filter(item => item !== value)
                : [...prev[category], value]
        }));
    };

    // Use filters to update your data
    useEffect(() => {
        // Fetch data based on filters
        fetchFilteredData(filters);
    }, [filters]);

    return <LeftPanel onFilterChange={handleFilterChange} />;
};
```

### 3. Dashboard Component

```tsx
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';

// Basic usage
<Dashboard />

// With custom data prop (if implemented)
<Dashboard data={myChartData} />
```

### 4. Individual Charts

```tsx
import PieChart from './components/PieChart/PieChart';
import BarChart from './components/BarChart/BarChart';
import LineGraph from './components/LineGraph/LineGraph';
import AreaGraph from './components/AreaGraph/AreaGraph';

// Pie Chart
<PieChart title="Revenue Distribution" data={pieData} />

// Bar Chart
<BarChart title="Monthly Comparison" data={barData} />

// Line Graph
<LineGraph title="Trend Analysis" data={lineData} />

// Area Graph
<AreaGraph title="Cumulative Growth" data={areaData} />
```

### 5. Loading Spinner

```tsx
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Small spinner
<LoadingSpinner size="small" message="Loading data..." />

// Medium spinner (default)
<LoadingSpinner message="Fetching charts..." />

// Large spinner
<LoadingSpinner size="large" message="Processing..." />

// Without message
<LoadingSpinner />
```

## Customizing the Dashboard

### Custom Layout with Different Charts

```tsx
import React from 'react';
import KPICards from './components/KPICards/KPICards';
import PieChart from './components/PieChart/PieChart';
import BarChart from './components/BarChart/BarChart';
import './CustomDashboard.scss';

const CustomDashboard = () => {
    return (
        <div className="custom-dashboard">
            {/* KPI Section */}
            <div className="kpi-section">
                <KPICards />
            </div>

            {/* Charts Grid */}
            <div className="charts-grid">
                <div className="chart-item large">
                    <h3>Sales Overview</h3>
                    <BarChart title="Monthly Sales" />
                </div>

                <div className="chart-item">
                    <h3>Category Breakdown</h3>
                    <PieChart title="By Category" />
                </div>

                <div className="chart-item">
                    <h3>Regional Performance</h3>
                    <PieChart title="By Region" />
                </div>
            </div>
        </div>
    );
};

export default CustomDashboard;
```

**Custom Dashboard SCSS:**

```scss
.custom-dashboard {
    padding: 30px;
    background: #f5f6fa;

    .kpi-section {
        margin-bottom: 30px;
    }

    .charts-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        .chart-item {
            background: white;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

            &.large {
                grid-column: span 2;
            }

            h3 {
                margin-bottom: 16px;
                color: #2c3e50;
            }
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;

            .chart-item.large {
                grid-column: span 1;
            }
        }
    }
}
```

## Responsive Design Examples

### Responsive Grid Layout

```tsx
import React from 'react';
import './ResponsiveLayout.scss';

const ResponsiveLayout = () => {
    return (
        <div className="responsive-container">
            {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
            <div className="responsive-grid">
                <div className="grid-item">Content 1</div>
                <div className="grid-item">Content 2</div>
                <div className="grid-item">Content 3</div>
            </div>
        </div>
    );
};
```

**SCSS:**

```scss
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    .grid-item {
        background: white;
        padding: 20px;
        border-radius: 8px;
    }
}
```

### Mobile Menu Implementation

```tsx
const MobileMenuExample = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                className="mobile-menu-btn" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {isOpen && (
                <div 
                    className="overlay" 
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* Sidebar content */}
            </aside>
        </>
    );
};
```

## Advanced Usage

### Data Fetching with Charts

```tsx
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const DashboardWithData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDashboardData()
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingSpinner size="large" message="Loading dashboard..." />;
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return <Dashboard data={data} />;
};
```

### Filter Integration with Data

```tsx
import React, { useState, useEffect } from 'react';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Dashboard from './components/Dashboard/Dashboard';

const FilteredDashboard = () => {
    const [filters, setFilters] = useState({
        location: [],
        size: [],
        products: []
    });
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Apply filters to data
        const filtered = applyFilters(originalData, filters);
        setFilteredData(filtered);
    }, [filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="filtered-dashboard">
            <LeftPanel onFilterChange={handleFilterChange} />
            <Dashboard data={filteredData} />
        </div>
    );
};

function applyFilters(data, filters) {
    let result = [...data];

    if (filters.location.length > 0) {
        result = result.filter(item => 
            filters.location.includes(item.location)
        );
    }

    if (filters.size.length > 0) {
        result = result.filter(item => 
            filters.size.includes(item.size)
        );
    }

    if (filters.products.length > 0) {
        result = result.filter(item => 
            filters.products.includes(item.product)
        );
    }

    return result;
}
```

### Custom KPI Cards with Dynamic Data

```tsx
import React from 'react';
import './KPICards.scss';

interface KPIData {
    title: string;
    value: string | number;
    icon: string;
    change?: number; // Percentage change
    trend?: 'up' | 'down' | 'neutral';
}

const DynamicKPICard: React.FC<{ data: KPIData }> = ({ data }) => {
    return (
        <div className="kpi-card">
            <div className="kpi-content">
                <div className="kpi-value">{data.value}</div>
                <div className="kpi-title">{data.title}</div>
                {data.change !== undefined && (
                    <div className={`kpi-change ${data.trend}`}>
                        {data.trend === 'up' ? '↑' : '↓'} {Math.abs(data.change)}%
                    </div>
                )}
            </div>
            <div className="kpi-icon">{data.icon}</div>
        </div>
    );
};

const DynamicKPICards = () => {
    const kpiData: KPIData[] = [
        {
            title: 'Total Revenue',
            value: '£699K',
            icon: '📊',
            change: 12.5,
            trend: 'up'
        },
        {
            title: 'Avg Cost Per Unit',
            value: '£3',
            icon: '🧺',
            change: -2.3,
            trend: 'down'
        },
        {
            title: 'Total Sales',
            value: '149K',
            icon: '🛍️',
            change: 8.7,
            trend: 'up'
        }
    ];

    return (
        <div className="kpi-cards-container">
            {kpiData.map((kpi, index) => (
                <DynamicKPICard key={index} data={kpi} />
            ))}
        </div>
    );
};
```

### Theme Customization

```tsx
// Create a theme context
import React, { createContext, useContext, useState } from 'react';

interface Theme {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    cardBackground: string;
}

const lightTheme: Theme = {
    primaryColor: '#3498db',
    backgroundColor: '#f5f6fa',
    textColor: '#2c3e50',
    cardBackground: '#ffffff'
};

const darkTheme: Theme = {
    primaryColor: '#3498db',
    backgroundColor: '#1a1a1a',
    textColor: '#ecf0f1',
    cardBackground: '#2c2c2c'
};

const ThemeContext = createContext({
    theme: lightTheme,
    toggleTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ 
            theme: isDark ? darkTheme : lightTheme, 
            toggleTheme 
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
```

## Testing Examples

### Component Testing

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import LeftPanel from './components/LeftPanel/LeftPanel';

describe('LeftPanel', () => {
    test('renders filter sections', () => {
        render(<LeftPanel />);
        
        expect(screen.getByText('Store Location')).toBeInTheDocument();
        expect(screen.getByText('Size')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
    });

    test('handles checkbox changes', () => {
        render(<LeftPanel />);
        
        const checkbox = screen.getByLabelText('Astoria');
        fireEvent.click(checkbox);
        
        expect(checkbox).toBeChecked();
    });
});
```

---

## Tips and Best Practices

1. **Always handle loading states** - Use LoadingSpinner while fetching data
2. **Implement error boundaries** - Catch and display errors gracefully
3. **Use TypeScript interfaces** - Define clear prop types for components
4. **Keep components modular** - Each component should have a single responsibility
5. **Optimize performance** - Use React.memo for expensive components
6. **Test responsiveness** - Check layouts on multiple screen sizes
7. **Accessibility** - Include ARIA labels and keyboard navigation
8. **Consistent styling** - Use SCSS variables for colors and spacing

---

For more information, see:
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed project structure
- [README.md](./README.md) - Getting started guide

