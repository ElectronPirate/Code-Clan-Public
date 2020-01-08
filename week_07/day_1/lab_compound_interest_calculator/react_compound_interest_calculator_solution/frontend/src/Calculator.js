import React, { Component } from "react";
import "./Calculator.css";
import Form from "./Form";
import Result from "./Result";
import RequestHelper from "./helpers/request_helper";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    };

    this.fetchResult = this.fetchResult.bind(this);
  }

  fetchResult(data) {
    const request = new RequestHelper(
      "http://localhost:3000/api/results/compound"
    );

    const payload = this.createPayload(data);

    request.post(payload).then(res => {
      this.setState({ result: res });
    });
  }

  createPayload(obj) {
    return {
      baseAmount: Number(obj.baseAmount),
      annualInterest: Number(obj.annualInterest),
      calculationPeriod: Number(obj.timePeriod)
    };
  }

  render() {
    return (
      <React.Fragment>
        <Form fetchResult={this.fetchResult} />
        <Result result={this.state.result} />
      </React.Fragment>
    );
  }
}

export default Calculator;
