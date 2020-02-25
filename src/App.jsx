import React, { Component } from "react";
import Clock from "./Clock/Clock";
import styled from "styled-components";
import "./styles.css";
import moment from "moment";

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
      <TimeWrapper className="App">
        <h1>Countdown Timer</h1>
        <h2>{moment(this.state.deadline).format("DD MMMM YYYY")}</h2>
        <Clock deadline={this.state.deadline} />
        <input
          type="date"
          placeholder="new date"
          onChange={event => {
            this.setState({ newDeadline: event.target.value });
          }}
        />
        <Button type="submit" onClick={() => this.handleClick()}>
          Submit
        </Button>
      </TimeWrapper>
    );
  }
}

const TimeWrapper = styled.section`
  text-align: center;

  input {
    padding: 0.5em;
    margin: 0.5em;
    background: papayawhip;
    border: none;
    border-radius: 3px;
  }
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default App;
