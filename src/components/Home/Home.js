import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: "CHENNAI",
      destination: "NEW DELHI"
    };
  }
  handleSourceChange = event => {
    this.setState({
      source: event.target.value
    });
  };
  handleDestinationChange = event => {
    this.setState({
      destination: event.target.value
    });
  };
  handleDateChange = event => {
    this.setState({
      date: event.target.value
    });
  };
  handleSubmit = event => {
    alert(`${this.state.source} ${this.state.destination} ${this.state.date}`);
    event.preventDefault();
  };
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

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div class="logo-source">
                  <i className="fas fa-subway fa-1x"></i>
                  <label for="source"> SOURCE</label>
                  <select
                    name="From"
                    value={this.state.source}
                    onChange={this.handleSourceChange}
                  >
                    <option value="hyderabad">HYDERABAD</option>
                    <option value="new delhi">NEW DELHI</option>
                    <option value="banglore">BANGLORE</option>
                    <option value="chennai">CHENNAI</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div class="logo-source">
                  <i className="fas fa-subway fa-1x"></i>
                  <label for="destination"> DESTINATION</label>
                  <select
                    name="From"
                    value={this.state.destination}
                    onChange={this.handleDestinationChange}
                  >
                    <option value="chennai">CHENNAI</option>
                    <option value="banglore">BANGLORE</option>
                    <option value="new delhi">NEW DELHI</option>
                    <option value="hyderabad">HYDERABAD</option>
                  </select>
                </div>
              </div>
              <div>
                <i className="fas fa-subway fa-1x"></i>
                <label for="date"> DATE</label>
                <br></br>
                <input
                  type="date"
                  onload="getDate()"
                  class="form-control"
                  name="journeydate"
                  id="datepicker"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                ></input>
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
