import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTopBar from './components/shared/NavTopBar';
// const Router = require("react-router-dom");
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <NavTopBar />
      <Route path="/" exact component={LandingPage} />
    </Router>
  );
}

export default App;
