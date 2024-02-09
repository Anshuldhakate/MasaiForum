
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
