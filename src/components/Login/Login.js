import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div id="container">
          <div class="form-wrap">
            <h1>Login</h1>
            <form>
              <div class="form-group">
                <label for="user-name">User Name</label>
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  placeholder="User Name"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn">
                Login
              </button>
              <p class="bottom-text">
                <a href="#">Forgot Password?</a>
              </p>
            </form>
          </div>
          <div>
            <p>
              For New User's <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
