import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Login from './Login.js';
import Navbar from  './Navbar.js'
import Preferences from './Preferences.js';
import CardBack from './CardBack.js';
import CardLandingPad from './CardLandingPad.js';
import Home from './Home.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='card-table'>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/jklbbjk" element={<Preferences/>}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
