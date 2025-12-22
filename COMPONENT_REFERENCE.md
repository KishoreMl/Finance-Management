# Component Reference Guide

Quick reference for all available components in the Finance Management Dashboard.

## 📐 Layout Components

### Home Page
```tsx
import Home from './pages/Home/Home';
```
**Description**: Main page container that combines LeftPanel and Dashboard  
**Props**: None  
**Features**:
- Responsive layout
- Mobile sidebar drawer
- Overlay background
- Hamburger menu animation

---

### LeftPanel
```tsx
import LeftPanel from './components/LeftPanel/LeftPanel';
```
**Description**: Filter sidebar with checkboxes for filtering data  
**Props**: None (currently internal state)  
**Features**:
- Store Location filters
- Size filters
- Product category filters
- Responsive (slide-in drawer on mobile)
- Custom checkbox styling

**Filters Available**:
- **Store Location**: Astoria, Hell's Kitchen, Lower Manhattan
- **Size**: Large, Not Defined, Regular, Small
- **Products**: Branded, Coffee, Coffee beans, Drinking Chocolate, Flavours, Loose Tea, Packaged Chocolate, Tea

---

### Dashboard
```tsx
import Dashboard from './components/Dashboard/Dashboard';
```
**Description**: Main dashboard container with KPI cards and charts  
**Props**: None (can be extended to accept data)  
**Features**:
- KPI cards section
- Four chart sections
- Responsive grid layout
- Card-based design

**Layout**:
```
├── KPI Cards (3 cards in row)
├── Chart 1: Pie Chart (Revenue by Product Category)
├── Chart 2: Line Graph (Product & Price)
├── Chart 3: Bar Chart (Monthly Revenue) - spans 2 columns
└── Chart 4: Area Graph (Revenue Breakdown) - spans 2 columns
```

---

## 📊 Data Display Components

### KPICards
```tsx
import KPICards from './components/KPICards/KPICards';
```
**Description**: Displays key performance indicators in card format  
**Props**: None (can be extended)  
**Default Cards**:
1. Total Revenue: £699K 📊
2. Avg Cost Per Unit: £3 🧺
3. Total Sales: 149K 🛍️

**Responsive**:
- Desktop: 3 cards in row
- Tablet: 3 cards in row (smaller)
- Mobile: Stacked vertically

---

### PieChart
```tsx
import PieChart from './components/PieChart/PieChart';
```
**Description**: Circular chart for category breakdowns  
**Props**: 
- `title`: string (optional)
- `data`: any (chart data)

**Use Case**: Revenue by Product Category, Market share distribution

---

### BarChart
```tsx
import BarChart from './components/BarChart/BarChart';
```
**Description**: Vertical bar chart for comparisons  
**Props**:
- `title`: string
- `data`: any (chart data)

**Use Case**: Monthly revenue, Periodic comparisons, Year-over-year analysis

---

### LineGraph
```tsx
import LineGraph from './components/LineGraph/LineGraph';
```
**Description**: Line chart for trend analysis  
**Props**: 
- `title`: string (optional)
- `data`: any (chart data)

**Use Case**: Product prices over time, Trend analysis, Time series data

---

### AreaGraph
```tsx
import AreaGraph from './components/AreaGraph/AreaGraph';
```
**Description**: Area chart for cumulative data visualization  
**Props**:
- `title`: string
- `data`: any (chart data)

**Use Case**: Revenue breakdown, Cumulative growth, Stacked data comparison

---

## 🎨 UI Components

### LoadingSpinner
```tsx
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
```
**Description**: Animated loading indicator  
**Props**:
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `message`: string (optional)

**Usage**:
```tsx
<LoadingSpinner size="large" message="Loading dashboard..." />
```

---

## 📋 Component Props Reference

### Commonly Extended Props

```typescript
// KPICard (individual card)
interface KPICardProps {
    title: string;
    value: string;
    icon: string;
}

// LoadingSpinner
interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    message?: string;
}

// Chart Components (general pattern)
interface ChartProps {
    title?: string;
    data?: any;
    width?: number;
    height?: number;
}
```

---

## 🎯 Component Hierarchy

```
App
└── Home
    ├── MobileMenuButton
    ├── SidebarOverlay (mobile only)
    ├── LeftPanel
    │   ├── BrandLogo
    │   └── FilterGroups (3)
    │       ├── Store Location
    │       ├── Size
    │       └── Products
    └── Dashboard
        ├── KPICards
        │   ├── KPICard (Revenue)
        │   ├── KPICard (Cost)
        │   └── KPICard (Sales)
        └── ChartsGrid
            ├── PieChart
            ├── LineGraph
            ├── BarChart
            └── AreaGraph
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| **Mobile** | < 768px | • Sidebar slides in from left<br>• Charts stack vertically<br>• KPI cards stack<br>• Hamburger menu visible |
| **Tablet** | 768px - 1024px | • Reduced sidebar width (200px)<br>• Charts in single column<br>• KPI cards in row |
| **Desktop** | > 1024px | • Full sidebar (240px)<br>• Charts in 2-column grid<br>• Full spacing |

---

## 🎨 Color Palette

```scss
// Background Colors
$bg-primary: #f5f6fa;
$bg-card: #ffffff;
$bg-sidebar: #e8e8e8;

// Text Colors
$text-primary: #2c3e50;
$text-secondary: #7f8c8d;
$text-light: #95a5a6;

// Accent Colors
$accent-blue: #3498db;
$accent-success: #27ae60;
$accent-warning: #f39c12;
$accent-danger: #e74c3c;

// Border & Shadow
$border-light: #f0f0f0;
$shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
$shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
```

---

## 🔧 Customization Examples

### Change KPI Values

```tsx
// In KPICards.tsx
<KPICard 
    title="Custom Metric" 
    value="$1.2M" 
    icon="💎" 
/>
```

### Add New Filter Group

```tsx
// In LeftPanel.tsx
<div className="filter-group">
    <h3 className="filter-title">Region</h3>
    <div className="filter-options">
        {['North', 'South', 'East', 'West'].map(region => (
            <label key={region} className="filter-option">
                <input type="checkbox" />
                <span className="checkbox-custom"></span>
                <span className="option-text">{region}</span>
            </label>
        ))}
    </div>
</div>
```

### Custom Chart Color

```scss
// In Dashboard.scss
.chart-item {
    &.chart-pie {
        border-left: 4px solid #3498db;
    }
    
    &.chart-bar {
        border-left: 4px solid #27ae60;
    }
}
```

---

## 🚀 Quick Start Snippets

### Add New Page with Layout

```tsx
import React from 'react';
import LeftPanel from '../components/LeftPanel/LeftPanel';
import './MyPage.scss';

const MyPage: React.FC = () => {
    return (
        <div className="my-page">
            <LeftPanel />
            <div className="content">
                {/* Your content */}
            </div>
        </div>
    );
};
```

### Add Loading State to Dashboard

```tsx
import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const DashboardPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) {
        return <LoadingSpinner size="large" message="Loading..." />;
    }

    return <Dashboard />;
};
```

---

## 📚 Related Documentation

- [README.md](./README.md) - Project overview and setup
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed structure
- [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) - Usage examples

---

**Last Updated**: December 2025  
**Version**: 1.0.0

