import React, { Component } from "react";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }
  handleFirstnameChange = event => {
    this.setState({
      firstname: event.target.value
    });
  };
  handleLastnameChange = event => {
    this.setState({
      lastname: event.target.value
    });
  };
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleConfirmPasswordChange = event => {
    this.setState({
      confirmpassword: event.target.value
    });
  };
  handleSubmit = event => {
    alert(
      `Thank You ${this.state.firstname} ${this.state.lastname} Your response has been recorded.`
    );
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div id="container">
          <div class="form-wrap">
            <h1>Sign Up</h1>
            <p>It's free and only takes a minute</p>
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="first-name"
                  placeholder="Frist Name"
                  value={this.state.firstname}
                  onChange={this.handleFirstnameChange}
                />
              </div>
              <div class="form-group">
                <label for="last-name">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="last-name"
                  placeholder="Last Name"
                  value={this.state.lastname}
                  onChange={this.handleLastnameChange}
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Valid Email Id "
                  value={this.state.email}
                  onChange={this.handleEmailChange}
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
              <div class="form-group">
                <label for="password-2">Confirm Password</label>
                <input
                  type="password"
                  name="password-2"
                  id="password-2"
                  placeholder="Confirm Password"
                  value={this.state.confirmpassword}
                  onChange={this.handleConfirmPasswordChange}
                />
              </div>
              <button type="submit" class="btn">
                Sign Up
              </button>
              <p class="bottom-text">
                By clicking the sign up button,you agree to our
                <a href="#"> Terms and Conditions</a> and
                <a href="#"> Privacy policy </a>
              </p>
            </form>
          </div>
          <div>
            <p>
              Already have an account? <a href="#"> Login Here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
