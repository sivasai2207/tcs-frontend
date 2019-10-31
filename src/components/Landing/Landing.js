import React, { Component } from "react";
import "./Landing.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";

export default class Landing extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/fe6cd9500a.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav">
              <div className="logo">
                <i className="fas fa-subway fa-2x"></i> Online Booking
              </div>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
