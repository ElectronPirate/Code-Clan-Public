import React from "react";

function Result(props) {
  return (
    <div className="ui icon message">
      <i className="money bill alternate outline icon" />
      <div className="content">
        <h1 id="result">
          {new Intl.NumberFormat("us-ENG", {
            style: "currency",
            currency: "GBP"
          }).format(props.result)}
        </h1>
      </div>
    </div>
  );
}

export default Result;
