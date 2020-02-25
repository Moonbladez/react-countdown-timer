import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>Days</div>
        <div>Hours</div>
        <div>Minutes</div>
        <div>Seconds</div>
      </div>
    );
  }
}

export default Clock;
