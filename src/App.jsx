import React, { Component } from "react";
import Clock from "./Clock/Clock";
import "./styles.css";
import styled from "styled-components";

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
      <TimerWrapper>
        <h1>Countdown Timer</h1>
        <h2>{this.state.deadline}</h2>
        <Clock deadline={this.state.deadline} />
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
      </TimerWrapper>
    );
  }
}
const TimerWrapper = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  max-width: 90%;
  margin: auto;
  color: #333333;
  h1 {
    font-size: 3rem;
  }

  input {
    padding: 0.5rem;
  }
`;

export default App;
