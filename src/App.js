import logo from './logo.svg';
import './App.css';
import CardBack from './components/CardBack.js'
import CardLandingPad from './components/CardLandingPad.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardLandingPad/>
        <CardBack/>
      </header>
    </div>
  );
}

export default App;
