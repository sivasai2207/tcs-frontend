import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/fe6cd9500a.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div class="homebody">
        <div id="homeContainer">
          <div className="form-wrap">
            <h3>BOOK YOUR TICKET</h3>

            <form>
              <div className="form-group">
                <div class="logo-source">
                  <i className="fas fa-subway fa-1x"></i>
                  <label for="source"> SOURCE</label>
                </div>
                <select name="From">
                  <option value="hyderabad">HYDERABAD</option>
                  <option value="new delhi">NEW DELHI</option>
                  <option value="banglore">BANGLORE</option>
                  <option value="chennai">CHENNAI</option>
                </select>
              </div>
              <div className="form-group">
                <div class="logo-source">
                  <i className="fas fa-subway fa-1x"></i>
                  <label for="destination"> DESTINATION</label>
                </div>

                <select name="From">
                  <option value="chennai">CHENNAI</option>
                  <option value="banglore">BANGLORE</option>
                  <option value="new delhi">NEW DELHI</option>
                  <option value="hyderabad">HYDERABAD</option>
                </select>
              </div>
              <div>
                <i className="fas fa-subway fa-1x"></i>
                <label for="date"> DATE</label>
                <br></br>
                <input type="date" name="journeydate"></input>
              </div>
              <button type="submit" className="btn">
                FIND TRAINS
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
