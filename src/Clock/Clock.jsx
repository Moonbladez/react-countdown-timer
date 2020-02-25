import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    // console.log("this.props", this.props);
  }

  componentDidMount() {
    this.getTimeUntil(this.props.deadline);
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

leadingZero(num) {
if (num < 0) {

}


}

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <div>{this.state.days} days</div>
        <div>{this.state.hours} hours</div>
        <div>{this.state.minutes} minutes</div>
        <div>{this.state.seconds} seconds</div>
      </div>
    );
  }
}

export default Clock;
