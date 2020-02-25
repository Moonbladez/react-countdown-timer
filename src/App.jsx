import React, { Component } from "react";
import Clock from "./Clock/Clock";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 10, 2020",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  handleClick() {
    this.changeDeadline();
  }

  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <h2>{this.state.deadline}</h2>
        <Clock />
        <input
          type="text"
          placeholder="new date"
          onChange={event => {
            this.setState({ newDeadline: event.target.value });
          }}
        />
        <button type="submit" onClick={() => this.handleClick()}>
          Submit
        </button>
      </div>
    );
  }
}

export default App;
