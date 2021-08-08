import React from 'react';
// const Router = require("react-router-dom");
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import NavTopBar from './components/shared/NavTopBar';

function App() {
  return (
    <Router>
      <NavTopBar />
      <Route path="/" exact component={LandingPage} />
    </Router>
  );
}

export default App;
