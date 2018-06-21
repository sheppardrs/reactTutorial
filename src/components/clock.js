import React, { Component } from 'react';

// NOW for the CLOCK example
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      date: new Date(),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick() {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          <p className="time">{this.state.date.getHours()}:
            {this.state.date.getMinutes()}:
            {this.state.date.getSeconds()}
          </p>
          <button onClick={this.handleClick}>
            {this.state.show ? 'HIDE' : 'SHOW'}
          </button>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleClick}>
          {this.state.show ? 'HIDE' : 'SHOW'}
        </button>
      );
    }
  }
}

// EVENT HANDLING
// class Toggle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

export default Clock;
