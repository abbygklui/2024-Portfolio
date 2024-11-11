import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProximityUI from './components/ProximityUI';
import RBCTia from './components/RBCTia';
import Pangjai from './components/Pangjai';
import Quanne from './components/Quanne';
import Navbar from './components/Navbar'; // Import the Navbar component
import Blink from './components/Blink';
import Thinking from './components/Thinking';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router basename="/2024-Portfolio">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ProximityUI" element={<ProximityUI />} />
          <Route path="/Pangjai" element={<Pangjai />} />
          <Route path="/RBCTia" element={<RBCTia />} />
          <Route path="/Quanne" element={<Quanne />} />
          <Route path="/Blink" element={<Blink />} />
          <Route path="/Thinking" element={<Thinking />} />
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
