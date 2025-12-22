# Finance Management Dashboard 📊

A modern, responsive finance management dashboard built with React and TypeScript. Features a comprehensive analytics interface with interactive charts and customizable filters.

![Dashboard Preview](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue) ![SASS](https://img.shields.io/badge/SASS-1.66.1-pink)

## ✨ Features

- **📱 Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **📊 Multiple Chart Types** - Pie, Line, Bar, and Area charts for comprehensive data visualization
- **🎯 KPI Dashboard** - Quick overview of key metrics (Revenue, Cost, Sales)
- **🔍 Interactive Filters** - Filter by store location, size, and product categories
- **🎨 Modern UI** - Clean, card-based design with smooth animations
- **♿ Accessible** - Built with accessibility in mind (ARIA labels, keyboard navigation)
- **⚡ Fast Performance** - Optimized React components with efficient rendering

## 🚀 Quick Start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd Finance-Management

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── pages/
│   └── Home/                    # Main page combining all components
├── components/
│   ├── LeftPanel/              # Filter sidebar
│   ├── Dashboard/              # Main dashboard container
│   ├── KPICards/               # Key Performance Indicator cards
│   ├── PieChart/               # Product category breakdown
│   ├── LineGraph/              # Trend analysis
│   ├── BarChart/               # Monthly comparisons
│   └── AreaGraph/              # Cumulative data visualization
└── App.tsx                      # Root component
```

For detailed structure documentation, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 🎨 UI Components

### LeftPanel (Filter Sidebar)
- Store location filters (Astoria, Hell's Kitchen, Lower Manhattan)
- Size filters (Large, Regular, Small)
- Product category filters (Coffee, Tea, Bakery, etc.)
- Mobile-responsive with slide-in drawer

### Dashboard
- **KPI Cards**: Total Revenue (£699K), Avg Cost Per Unit (£3), Total Sales (149K)
- **Revenue by Product Category**: Interactive pie chart
- **Product & Price**: Line graph showing trends
- **Monthly Revenue**: Bar chart for period comparisons
- **Revenue Breakdown**: Area chart for cumulative analysis

## 💻 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Full sidebar with 2-column chart grid
- **Tablet**: 768px - 1024px - Reduced sidebar with single column
- **Mobile**: < 768px - Slide-in drawer menu with stacked layout

## 🎯 Key Technologies

- **React 18.2.0** - Modern React with Hooks
- **TypeScript** - Type-safe code
- **SASS/SCSS** - Advanced styling with variables and nesting
- **AG Charts** - Professional charting library
- **CSS Grid & Flexbox** - Responsive layouts

## 🔧 Customization

### Adding New Filters

Edit `src/components/LeftPanel/LeftPanel.tsx`:

```typescript
const newFilterOptions = ['Option 1', 'Option 2', 'Option 3'];
```

### Modifying KPI Cards

Edit `src/components/KPICards/KPICards.tsx`:

```typescript
<KPICard 
  title="Your Metric" 
  value="£999K" 
  icon="📈" 
/>
```

### Updating Chart Data

Pass data to chart components:

```typescript
<BarChart title="Custom Title" data={yourData} />
```

## 🐛 Troubleshooting

### Common Issues

1. **Charts not displaying**: Ensure all dependencies are installed (`npm install`)
2. **Styles not applying**: SASS must be installed and configured
3. **Mobile menu not working**: Check that JavaScript is enabled in your browser

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Your Name

---

**Built with ❤️ using React and TypeScript**
