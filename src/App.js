import React from "react";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Landing />
      </div>
    </Router>
  );
}

export default App;
