import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleSubmit = event => {
    alert(`Welcome ${this.state.username}`);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div id="container">
          <div class="form-wrap">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  placeholder="User Name"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
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
