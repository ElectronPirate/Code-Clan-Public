import React from "react";
import BaseAmount from "./BaseAmount";
import AnnualInterest from "./AnnualInterest";
import TimePeriod from "./TimePeriod";
import CalculateButton from "./CalculateButton";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseAmount: "",
      annualInterest: "",
      timePeriod: "",
      timePeriodErrors: []
    };

    this.handleBaseAmountChange = this.handleBaseAmountChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleTimePeriodChange = this.handleTimePeriodChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchResult(this.state);
  }

  handleBaseAmountChange(event) {
    this.setState({ baseAmount: event.target.value });
  }

  handleInterestChange(event) {
    this.setState({ annualInterest: event.target.value });
  }

  handleTimePeriodChange(evt) {
    const errors = [];
    const time = evt.target.value;

    if (Number(evt.target.value) === 0) {
      errors.push("Years to grow must be above zero.");
    }

    this.setState((state, props) => ({
      timePeriod: time,
      timePeriodErrors: errors
    }));
  }

  render() {
    return (
      <form
        id="calculator-form"
        className="ui inverted form"
        onSubmit={this.handleSubmit}
      >
        <div className="three fields">
          <BaseAmount
            value={this.state.baseAmount}
            handleBaseAmountChange={this.handleBaseAmountChange}
          />
          <AnnualInterest
            value={this.state.annualInterest}
            handleInterestChange={this.handleInterestChange}
          />
          <TimePeriod
            value={this.state.timePeriod}
            errors={this.state.timePeriodErrors}
            handleTimePeriodChange={this.handleTimePeriodChange}
          />
        </div>
        <CalculateButton />
      </form>
    );
  }
}

export default Form;
