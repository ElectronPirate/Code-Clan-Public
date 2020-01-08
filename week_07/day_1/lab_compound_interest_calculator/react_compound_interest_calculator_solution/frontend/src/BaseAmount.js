import React from "react";

function BaseAmount(props) {
  return (
    <div className="field">
      <label htmlFor="baseAmount">Base Amount:</label>
      <input
        type="number"
        id="baseAmount"
        value={props.value}
        onChange={props.handleBaseAmountChange}
      />
    </div>
  );
}

export default BaseAmount;
