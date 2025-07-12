import NavBar from './components/NavBar/NavBar.tsx';
import RightPanel from './components/RightPanel/RightPanel.tsx';
import BarChartPanel from './components/BarChartPanel/BarChartPanel.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
        <BarChartPanel />
      <RightPanel />
    </div>
  );
}

export default App;
