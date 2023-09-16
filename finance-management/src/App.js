import { InputModal } from './components/InputModal/InputModal.tsx';
import { Header } from './components/Header/Header.tsx';
import { ViewNavBar } from './components/ViewsNavBar/ViewsNavBar.tsx';
import { DataTable } from './components/DataTable/DataTable.tsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <DataTable />
      
    </div>
  );
}

export default App;
