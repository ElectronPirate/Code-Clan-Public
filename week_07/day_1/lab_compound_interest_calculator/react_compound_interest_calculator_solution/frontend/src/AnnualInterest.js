import React from "react";

function AnnualInterest(props) {
  return (
    <div className="field">
      <label htmlFor="annualInterest">Annual Interest (%):</label>
      <input
        type="number"
        id="annualInterest"
        value={props.value}
        onChange={props.handleInterestChange}
      />
    </div>
  );
}

export default AnnualInterest;
