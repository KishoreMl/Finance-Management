import React from 'react';
import LineGraph from './components/LineGraph/LineGraph.tsx';
import BarChart from './components/BarChart/BarChart.tsx';
import PieChart from './components/PieChart/PieChart.tsx';
import AreaGraph from './components/AreaGraph/AreaGraph.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
        <LineGraph />
        <BarChart title='Expenses' />
        <PieChart title='Expenses' />
        <AreaGraph title='Expenses' />
    </div>
  );
}

export default App; 