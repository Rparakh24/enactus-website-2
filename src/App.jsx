import React from 'react';
import Nav from './components/Nav'
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="app-container">
      {/* navbar */}
      <Nav />
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
