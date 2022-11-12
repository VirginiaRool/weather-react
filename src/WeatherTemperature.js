import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="tempNumber">{props.celsius}</span>
      <span className="tempUnit">
        {" "}
        <span className="active">°C </span>
      </span>
    </div>
  );
}
