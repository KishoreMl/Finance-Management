# Finance Management Dashboard - UI Structure

## 📋 Overview

This project implements a modern, responsive finance management dashboard with a filter sidebar and multiple data visualization charts.

## 🏗️ Project Structure

```
src/
├── App.tsx                      # Main app entry point
├── App.css                      # Global app styles
├── pages/
│   └── Home/
│       ├── Home.tsx            # Home page component (combines LeftPanel + Dashboard)
│       └── Home.scss           # Home page styles
└── components/
    ├── LeftPanel/              # Left sidebar with filters
    │   ├── LeftPanel.tsx
    │   └── LeftPanel.scss
    ├── Dashboard/              # Main dashboard container
    │   ├── Dashboard.tsx
    │   └── Dashboard.scss
    ├── KPICards/               # Top KPI cards (Revenue, Cost, Sales)
    │   ├── KPICards.tsx
    │   └── KPICards.scss
    ├── PieChart/               # Revenue by Product Category
    ├── LineGraph/              # Product & Price chart
    ├── BarChart/               # Monthly Revenue chart
    └── AreaGraph/              # Revenue Breakdown chart
```

## 🎨 Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        Home Page                             │
├──────────────┬──────────────────────────────────────────────┤
│              │                                               │
│  Left Panel  │              Dashboard                        │
│  (Filters)   │                                               │
│              │  ┌─────────────────────────────────────────┐ │
│  ┌─────────┐ │  │         KPI Cards (3 cards)            │ │
│  │  Logo   │ │  ├──────────┬──────────┬─────────────────┤ │
│  └─────────┘ │  │  £699K   │   £3     │     149K        │ │
│              │  │ Revenue  │  Cost    │    Sales        │ │
│  Store Loc.  │  └──────────┴──────────┴─────────────────┘ │
│  □ Astoria   │                                               │
│  □ Hell's K. │  ┌──────────────┐  ┌──────────────────────┐ │
│  □ Lower M.  │  │              │  │                      │ │
│              │  │  Pie Chart   │  │   Line Graph         │ │
│  Size        │  │              │  │                      │ │
│  □ Large     │  └──────────────┘  └──────────────────────┘ │
│  □ Regular   │                                               │
│  □ Small     │  ┌──────────────────────────────────────────┐ │
│              │  │                                           │ │
│  Products    │  │         Bar Chart (Monthly Revenue)       │ │
│  □ Coffee    │  │                                           │ │
│  □ Tea       │  └──────────────────────────────────────────┘ │
│  □ Bakery    │                                               │
│  ...         │  ┌──────────────────────────────────────────┐ │
│              │  │                                           │ │
│              │  │      Area Graph (Revenue Breakdown)       │ │
│              │  │                                           │ │
│              │  └──────────────────────────────────────────┘ │
└──────────────┴──────────────────────────────────────────────┘
```

## 📱 Responsive Features

### Desktop (> 1024px)
- Left panel fixed at 240px width
- Dashboard displays charts in 2-column grid
- KPI cards in a row of 3
- Full chart details visible

### Tablet (768px - 1024px)
- Left panel reduced to 200px
- Charts stack in single column
- KPI cards remain in a row
- Optimized spacing

### Mobile (< 768px)
- Left panel becomes a slide-in drawer
- Hamburger menu button appears
- All charts stack vertically
- KPI cards stack vertically
- Touch-optimized controls

## 🎯 Key Features

### LeftPanel Component
- **Interactive Filters**: Checkboxes for Store Location, Size, and Products
- **Custom Styling**: Modern checkboxes with smooth animations
- **Responsive**: Slide-in drawer on mobile devices
- **Sticky Positioning**: Stays visible while scrolling (desktop)

### Dashboard Component
- **KPI Cards**: Display key metrics (Total Revenue, Avg Cost, Total Sales)
- **Four Chart Types**:
  1. **Pie Chart**: Revenue by Product Category
  2. **Line Graph**: Product & Price trends
  3. **Bar Chart**: Monthly Revenue
  4. **Area Graph**: Revenue Breakdown
- **Grid Layout**: Responsive grid that adapts to screen size
- **Card Design**: Modern card-based UI with hover effects

### Home Component
- **Main Container**: Combines LeftPanel + Dashboard
- **Mobile Menu**: Hamburger button for mobile navigation
- **Overlay**: Dark overlay when sidebar is open on mobile
- **State Management**: Handles sidebar open/close state

## 🚀 Usage

### Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Importing Components

```typescript
// In App.tsx or any parent component
import Home from './pages/Home/Home';

function App() {
  return <Home />;
}
```

### Customizing Filters

Edit `src/components/LeftPanel/LeftPanel.tsx`:

```typescript
// Add/modify filter options
const locations = ['Astoria', "Hell's Kitchen", 'Lower Manhattan'];
const sizes = ['Large', 'Not Defined', 'Regular', 'Small'];
const products = ['Branded', 'Coffee', 'Coffee beans', ...];
```

### Customizing KPI Cards

Edit `src/components/KPICards/KPICards.tsx`:

```typescript
<KPICard 
  title="Your Metric" 
  value="£999K" 
  icon="📈" 
/>
```

## 🎨 Styling

### Color Scheme
- **Background**: `#f5f6fa` (Light gray-blue)
- **Cards**: `#ffffff` (White)
- **Text Primary**: `#2c3e50` (Dark blue-gray)
- **Text Secondary**: `#7f8c8d` (Gray)
- **Accent**: `#3498db` (Blue)
- **Sidebar**: `#e8e8e8` (Light gray)

### Customizing Styles

Each component has its own SCSS file:
- `LeftPanel.scss` - Sidebar styling
- `Dashboard.scss` - Main dashboard layout
- `KPICards.scss` - KPI card designs
- `Home.scss` - Overall page layout

## 📊 Chart Integration

The dashboard uses existing chart components:
- `PieChart` - For category breakdowns
- `LineGraph` - For trend analysis
- `BarChart` - For monthly comparisons
- `AreaGraph` - For cumulative data

Each chart component can be customized by passing props:

```typescript
<BarChart title='Custom Title' data={yourData} />
```

## 🔧 Future Enhancements

- [ ] Add filter functionality to actually filter chart data
- [ ] Connect to real API/backend
- [ ] Add date range picker
- [ ] Export data to CSV/PDF
- [ ] Add more chart types (Treemap, Sankey, etc.)
- [ ] Implement dark mode
- [ ] Add animation transitions
- [ ] Save user preferences
- [ ] Add print-friendly view

## 📝 Notes

- All components are TypeScript-based for type safety
- SCSS is used for styling with component-level scoping
- The layout is fully responsive with mobile-first approach
- Accessibility features included (aria-labels, keyboard navigation)
- Modern React patterns (Hooks, Functional Components)

## 🐛 Troubleshooting

### Charts not displaying
- Ensure all chart component dependencies are installed
- Check that chart data is properly formatted
- Verify import paths are correct

### Styles not applying
- Make sure SASS is installed: `npm install sass`
- Check that SCSS files are imported correctly
- Clear cache and restart dev server

### Mobile menu not working
- Verify JavaScript is enabled
- Check that state management is working
- Ensure z-index values are correct

## 📚 Dependencies

- React 18.2.0
- TypeScript
- SASS 1.66.1
- ag-charts-react 12.0.1

---

**Created**: December 2025
**Version**: 1.0.0

