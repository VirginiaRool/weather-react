import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let setUnits = props.setUnits;
  let units = props.units;

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }

  if (units === "metric") {
    return (
      <div>
        <span className="tempNumber">{props.temperature}</span>
        <span className="tempUnit">
          {" "}
          <a href="#" className="active">
            °C |
          </a>
        </span>
        <span className="tempUnit">
          {" "}
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="tempNumber">{props.temperature}</span>
        <span className="tempUnit">
          {" "}
          <a href="#" onClick={showCelsius}>
            °C
          </a>
        </span>
        <span className="tempUnit">
          {" "}
          <a href="#" className="active">
            | °F
          </a>
        </span>
      </div>
    );
  }
}
