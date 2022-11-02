import React from "react";
import WeekWeatherForecast from "./WeekWeatherForecast";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeekWeatherForecast-day">{day}</div>
      <img
        className="WeekWeatherForecast-icon"
        src={props.icon}
        alt={"icon description"}
        width="40"
      />
      <div className="WeekWeatherForecast-temperatures">
        <span className="WeekWeatherForecast-maxTemp">{maxTemperature()}</span>
        <span className="WeekWeatherForecast-minTemp">{minTemperature()}</span>
      </div>
    </div>
  );
}
