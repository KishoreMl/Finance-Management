# System Architecture

This document describes the architecture of the Finance Management Dashboard — a single-page React application for visualising personal/business finance data through interactive charts and KPI metrics.

---

## 1. High-Level Overview

The Finance Management Dashboard is a **client-side-only** single-page application (SPA). There is no backend server, database, or API layer in this repository. All data is currently static and embedded in utility modules or JSON files inside the `src/` tree.

```
Browser
  └── React SPA (CRA / react-scripts)
        ├── Static data (JSON + inline utils)
        └── AG Charts (rendering engine)
```

The application is bootstrapped with **Create React App** (CRA) using `react-scripts` 5 and compiled from TypeScript. It is served from a Node.js dev server locally (`localhost:3000`) and can be deployed as a static bundle from the `/build` output directory.

---

## 2. Technology Stack

| Layer | Technology | Version | Role |
|-------|-----------|---------|------|
| UI Framework | React | 18.2.0 | Component model, Hooks-based state |
| Language | TypeScript | CRA default | Type-safe components and utilities |
| Styling | SASS / SCSS | 1.66.1 | Component-scoped styles, shared tokens |
| Charts | AG Charts (React) | 12.0.1 | All interactive chart rendering |
| Build Toolchain | Create React App | 5.0.1 | Webpack, Babel, dev server, test runner |
| Testing | Testing Library / Jest | CRA default | Unit and integration tests |
| Linting | ESLint + Stylelint | CRA default | Code quality and CSS/SCSS standards |
| Formatting | Prettier | — | Consistent code style |

---

## 3. Application Entry Point

```
public/index.html          ← HTML shell (single <div id="root">)
  └── src/index.js         ← ReactDOM.render / createRoot
        └── src/App.tsx    ← Application root component
              └── src/pages/Home/Home.tsx   ← Sole page (currently)
```

`App.tsx` renders only the `<Home />` page. There is no client-side router in the current implementation; all navigation state (e.g. sidebar open/closed) is managed with React `useState` inside `Home.tsx`.

---

## 4. Component Architecture

### 4.1 Layer Diagram

```
App.tsx
└── Home (pages/Home/)
    ├── LeftPanel (components/LeftPanel/)   ← Filter sidebar
    └── Dashboard (components/Dashboard/)   ← Main content
          ├── KPICards (components/KPICards/)
          │     ├── KPICard — Total Revenue (£699K)
          │     ├── KPICard — Avg Cost Per Unit (£3)
          │     └── KPICard — Total Sales (149K)
          ├── PieChart (components/PieChart/)
          │     └── PieChartUtils.ts  ← Expense category data
          ├── LineGraph (components/LineGraph/)
          │     └── GraphUtilis.ts    ← Trading profit data
          ├── BarChart (components/BarChart/)
          │     └── BarChartUtils.ts  ← Monthly expense data
          └── AreaGraph (components/AreaGraph/)
                └── AreaGraphUtils.ts ← Revenue breakdown data
```

### 4.2 Component Responsibilities

| Component | Responsibility |
|-----------|---------------|
| `Home` | Root page layout; manages sidebar open/close state; renders mobile hamburger + overlay |
| `LeftPanel` | Checkbox filter UI for store location, size, and product category; local state only |
| `Dashboard` | Responsive grid container composing KPI row and four chart cards |
| `KPICards` | Renders three summary metric tiles in a horizontal row |
| `PieChart` | Expense breakdown by category (AG Charts pie series) |
| `LineGraph` | Monthly trading profit/loss trend (AG Charts line series) |
| `BarChart` | Monthly expense bar series (AG Charts bar series) |
| `AreaGraph` | Revenue breakdown over time (AG Charts area series) |

### 4.3 Available but Unwired Components

The following components exist in `src/components/` and are exported through the barrel file (`src/components/index.ts`) but are **not currently mounted** in the active `Home → Dashboard` render tree. They are available for future feature extension:

| Component | Intended Purpose |
|-----------|-----------------|
| `Header` | Page title / branding header |
| `NavBar` | Top primary navigation bar |
| `ViewsNavBar` | Dashboard view-switcher (e.g. Overview / Transactions) |
| `RightPanel` | Data-entry forms for income, expense, and investment transactions |
| `DataTable` | Tabular view of transaction records |
| `Modal` | Reusable dialog overlay |
| `LoadingSpinner` | Animated loading indicator (sm / md / lg sizes) |
| `BarChartPanel` | Standalone bar chart with its own panel layout |
| `ChartComponent` | Generic AG Charts wrapper for arbitrary series types |

---

## 5. Data Architecture

### 5.1 Data Flow (Current)

All chart data is **static and co-located** with chart components. There are no API calls, no global state manager, and no server-side data fetching.

```
Static data sources
  ├── src/data/tradingProfits.json     → imported by chart utils
  ├── PieChartUtils.ts  getData()      → inline array (expense categories)
  ├── BarChartUtils.ts  getData()      → inline array (monthly expenses)
  ├── GraphUtilis.ts    getData()      → inline array (trading profits)
  └── AreaGraphUtils.ts getData()      → inline array (revenue breakdown)
        │
        ▼
  Chart component renders AG Charts series
        │
        ▼
  DOM / Browser canvas
```

### 5.2 Data Models

**Monthly Amount** (used by Bar, Line, Area charts)
```typescript
{ month: string; amount: number }
// amount is in GBP; negative values denote a loss period
```

**Expense Asset** (used by Pie chart)
```typescript
{ asset: string; amount: number }
// asset is a named spending category (Rent, Food, Transport, …)
```

**KPI Values** (hard-coded in `KPICards.tsx`)
```
Total Revenue:    £699K
Avg Cost Per Unit: £3
Total Sales:      149K
```

### 5.3 Sample Dataset Origin

The sample data reflects a **coffee-shop business** operating across three New York locations (Astoria, Hell's Kitchen, Lower Manhattan). Product categories are: Branded, Coffee, Coffee Beans, Drinking Chocolate, Flavours, Loose Tea, Packaged Chocolate, and Tea.

### 5.4 Future Data Architecture (Planned)

The following integrations are identified in project notes as future enhancements:

- REST API / GraphQL backend for live transaction data
- Filter state wired to chart data transformations
- Date-range picker driving time-series queries
- CSV / PDF export pipeline

---

## 6. Styling Architecture

```
src/components/
  ├── vars.scss          ← Design tokens (colours, spacing, typography)
  ├── global.scss        ← Base resets and globally applied rules
  └── <Component>/
        └── <Component>.scss   ← Component-scoped styles (BEM-like class names)
```

### Design Tokens (vars.scss)

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#f5f6fa` | Page and card backgrounds |
| Card surface | `#ffffff` | Chart and KPI card fill |
| Text primary | `#2c3e50` | Headings, values |
| Text secondary | `#7f8c8d` | Labels, subtitles |
| Accent | `#3498db` | Interactive elements, highlights |
| Sidebar | `#e8e8e8` | LeftPanel background |

### Responsive Strategy

Breakpoints are defined inline in each component's SCSS file:

| Breakpoint | Width | Sidebar behaviour | Chart layout |
|------------|-------|------------------|--------------|
| Desktop | > 1024 px | 240 px fixed | 2-column CSS Grid |
| Tablet | 768–1024 px | 200 px reduced | Single column |
| Mobile | < 768 px | Slide-in drawer | Stacked vertically |

---

## 7. Build and Tooling

### Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start CRA dev server at `localhost:3000` with HMR |
| `npm test` | Run Jest tests in interactive watch mode |
| `npm run build` | Produce optimised static bundle in `/build` |
| `npm run eject` | Eject from CRA (irreversible; exposes Webpack config) |

### Quality Gates

| Tool | Config file | Scope |
|------|------------|-------|
| ESLint | `eslintConfig` in `package.json` | TypeScript / JSX rules |
| Stylelint | `.stylelintrc.json` | SCSS / CSS standards |
| Prettier | `.prettierrc.json` | Code formatting |
| TypeScript | CRA embedded `tsconfig` | Type checking |

---

## 8. File Structure Reference

```
Finance-Management/
├── public/
│   ├── index.html              ← HTML entry shell
│   ├── manifest.json           ← PWA manifest
│   └── robots.txt
├── src/
│   ├── App.tsx                 ← Application root
│   ├── App.css
│   ├── index.js                ← ReactDOM bootstrap
│   ├── index.css
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── data/
│   │   └── tradingProfits.json ← Static trading dataset
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.tsx
│   │       └── Home.scss
│   └── components/
│       ├── index.ts            ← Barrel re-exports
│       ├── vars.scss           ← Design tokens
│       ├── global.scss         ← Global styles
│       ├── AreaGraph/
│       ├── BarChart/
│       ├── BarChartPanel/
│       ├── ChartComponent/
│       ├── Dashboard/
│       ├── DataTable/
│       ├── Header/
│       ├── KPICards/
│       ├── LeftPanel/
│       ├── LineGraph/
│       ├── LoadingSpinner/
│       ├── Modal/
│       ├── NavBar/
│       ├── PieChart/
│       ├── RightPanel/
│       └── ViewsNavBar/
├── docs/
│   ├── GLOSSARY.md
│   ├── SYSTEM_ARCHITECTURE.md  ← this file
│   ├── COMPONENT_REFERENCE.md
│   ├── IMPLEMENTATION_SUMMARY.md
│   ├── PROJECT_STRUCTURE.md
│   └── USAGE_EXAMPLES.md
├── .prettierrc.json
├── .stylelintrc.json
├── package.json
└── README.md
```

---

## 9. Known Constraints and Future Considerations

| Constraint | Detail |
|-----------|--------|
| Static data only | All chart datasets are hard-coded; no API integration exists yet |
| Filters are presentational | LeftPanel checkbox state does not affect chart renders in this version |
| No routing | A single `Home` page is rendered; no React Router or similar is present |
| No global state | Component state is local (`useState`); no Redux, Zustand, or Context API store |
| No authentication | The app has no login, session, or user management layer |
| No persistence | User filter selections are lost on page reload |

---

*Last updated: April 2026*
