import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleBtnClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positive = () => {
    return Math.round((this.state.good / this.total()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leavel feedback</h2>
        <button name="good" type="button" onClick={this.handleBtnClick}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.handleBtnClick}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.handleBtnClick}>
          Bad
        </button>
        <h2>Statistics</h2>

        {this.total() === 0 ? (
          <h2>Notification</h2>
        ) : (
          <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{this.total()}</li>
            <li>Positive feedback:{this.positive() ? this.positive() : 0}%</li>
          </ul>
        )}
      </>
    );
  }
}

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string
  }),
  name: PropTypes.shape({ name: PropTypes.string })
};
