import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (units === "celsius") {
    return (
      <div>
        <span className="tempNumber">{props.celsius}</span>
        <span className="tempUnit">
          {" "}
          <a href="/" className="active">
            °C |
          </a>
        </span>
        <span className="tempUnit">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="tempNumber">{fahrenheit()}</span>
        <span className="tempUnit">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
        <span className="tempUnit">
          {" "}
          <a href="/" className="active">
            | °F
          </a>
        </span>
      </div>
    );
  }
}