import React from "react";

function TimePeriod(props) {
  const { errors } = props;

  const errorMessages = errors.map((error, index) => {
    return (
      <div key={index} className="ui error visible message">
        {error}
      </div>
    );
  });

  return (
    <div className="field">
      <label htmlFor="timePeriod">Years to grow:</label>
      <input
        type="number"
        min="1"
        id="timePeriod"
        value={props.value}
        onChange={props.handleTimePeriodChange}
      />
      {errorMessages}
    </div>
  );
}

export default TimePeriod;
