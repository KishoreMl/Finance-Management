# Finance Management Dashboard

A modern, responsive finance management dashboard built with React and TypeScript. Features an analytics interface with interactive charts, KPI metrics, and a filterable sidebar.

![React](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue) ![SASS](https://img.shields.io/badge/SASS-1.66.1-pink) ![AG Charts](https://img.shields.io/badge/AG_Charts-12.0.1-orange)

## Features

- **Responsive Design** — Seamlessly adapts across desktop, tablet, and mobile viewports
- **Multiple Chart Types** — Pie, Line, Bar, and Area charts powered by AG Charts
- **KPI Cards** — At-a-glance metrics for Revenue, Cost Per Unit, and Total Sales
- **Interactive Filters** — Sidebar filters for store location, product size, and category
- **Modern UI** — Card-based layout with smooth hover animations and transitions
- **Accessible** — ARIA labels and keyboard-navigable components throughout

## Quick Start

### Prerequisites

- Node.js 16+
- npm 8+

### Installation

```bash
git clone <your-repo-url>
cd Finance-Management
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── pages/
│   └── Home/                    # Root page — composes LeftPanel + Dashboard
├── components/
│   ├── LeftPanel/               # Filter sidebar (store, size, product filters)
│   ├── Dashboard/               # Main content area with KPI cards and charts
│   ├── KPICards/                # Revenue, cost, and sales summary cards
│   ├── PieChart/                # Revenue by product category (pie)
│   ├── LineGraph/               # Product & price trends (line)
│   ├── BarChart/                # Monthly expense (bar)
│   ├── AreaGraph/               # Revenue breakdown (area)
│   ├── BarChartPanel/           # Standalone bar chart panel component
│   ├── ChartComponent/          # Generic reusable chart wrapper
│   ├── DataTable/               # Tabular transaction data view
│   ├── Header/                  # Page header with app title
│   ├── NavBar/                  # Top navigation bar
│   ├── ViewsNavBar/             # View-switching navigation
│   ├── RightPanel/              # Data entry panel (income/expense/investment forms)
│   ├── LoadingSpinner/          # Animated loading indicator (sm/md/lg variants)
│   └── Modal/                   # Modal dialog component
├── data/
│   └── tradingProfits.json      # Sample trading profit dataset
└── App.tsx                      # Application root
```

## UI Layout

```
┌─────────────────────────────────────────────────────────┐
│                        HOME PAGE                         │
├──────────────┬──────────────────────────────────────────┤
│              │                                           │
│  LEFT PANEL  │              DASHBOARD                    │
│              │                                           │
│  Store       │  ┌───────────────────────────────────┐   │
│  Location    │  │  KPI CARDS (Revenue / Cost / Sales)│   │
│              │  └───────────────────────────────────┘   │
│  Size        │                                           │
│              │  ┌────────────┐    ┌────────────────┐    │
│  Products    │  │  Pie Chart │    │   Line Graph   │    │
│              │  └────────────┘    └────────────────┘    │
│              │                                           │
│              │  ┌─────────────────────────────────────┐ │
│              │  │       Bar Chart (2 columns)          │ │
│              │  └─────────────────────────────────────┘ │
│              │                                           │
│              │  ┌─────────────────────────────────────┐ │
│              │  │       Area Graph (2 columns)         │ │
│              │  └─────────────────────────────────────┘ │
└──────────────┴──────────────────────────────────────────┘
```

## Responsive Breakpoints

| Breakpoint | Width      | Sidebar              | Chart Layout |
|------------|------------|----------------------|--------------|
| Desktop    | > 1024px   | 240px fixed          | 2-column grid |
| Tablet     | 768–1024px | 200px reduced        | Single column |
| Mobile     | < 768px    | Slide-in drawer      | Stacked       |

On mobile, a hamburger button toggles a slide-in sidebar with a dark overlay backdrop.

## Key Technologies

| Technology | Version | Purpose |
|---|---|---|
| React | 18.2.0 | UI framework with Hooks |
| TypeScript | — | Type-safe component development |
| SASS/SCSS | 1.66.1 | Variables, nesting, and mixins |
| AG Charts | 12.0.1 | Interactive charting library |
| CSS Grid & Flexbox | — | Responsive layouts |

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start development server at localhost:3000 |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Create optimised production build in `/build` |
| `npm run eject` | Eject from Create React App (irreversible) |

## Sample Data

The dashboard uses a coffee shop dataset (`src/data/tradingProfits.json`) spanning three New York locations:

- **Astoria**
- **Hell's Kitchen**
- **Lower Manhattan**

KPI summary values: **£699K** total revenue · **£3** avg cost per unit · **149K** total sales

Product categories: Branded, Coffee, Coffee Beans, Drinking Chocolate, Flavours, Loose Tea, Packaged Chocolate, Tea

## Documentation

Extended documentation lives in the [`docs/`](./docs/) folder:

- [`docs/IMPLEMENTATION_SUMMARY.md`](./docs/IMPLEMENTATION_SUMMARY.md) — What was built and design decisions
- [`docs/USAGE_EXAMPLES.md`](./docs/USAGE_EXAMPLES.md) — Code examples for customising components

## Troubleshooting

| Issue | Fix |
|---|---|
| Charts not rendering | Run `npm install` to ensure all dependencies are present |
| Styles missing | Confirm `sass` is installed (`npm install sass`) |
| Mobile menu unresponsive | Verify JavaScript is enabled in the browser |

### Author

Kishore ML

## License

This project is open source and available under the [MIT License](LICENSE).
