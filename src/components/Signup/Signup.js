import React, { Component } from "react";
import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <div id="container">
          <div class="form-wrap">
            <h1>Sign Up</h1>
            <p>It's free and only takes a minute</p>
            <form>
              <div class="form-group">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="first-name"
                  placeholder="Frist Name"
                />
              </div>
              <div class="form-group">
                <label for="last-name">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="last-name"
                  placeholder="Last Name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Valid Email Id "
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
              <div class="form-group">
                <label for="password-2">Confirm Password</label>
                <input
                  type="password"
                  name="password-2"
                  id="password-2"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" class="btn">
                Sign Up
              </button>
              <p class="bottom-text">
                By clicking the sign up button,you agree to our
                <a href="#">Terms and Conditions</a> and
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
