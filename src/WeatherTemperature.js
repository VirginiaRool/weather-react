import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="tempNumber">{props.celsius}</span>
      <span className="tempUnit"> °C</span>
    </div>
  );
}
