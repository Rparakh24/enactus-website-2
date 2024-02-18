import React from 'react';
import Nav from './components/Nav';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app-container">
      {/* navbar */}
      <div className="rectangle">
        <Nav />
      </div>
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
