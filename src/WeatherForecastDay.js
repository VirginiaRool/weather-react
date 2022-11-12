import React from "react";
import brokenClouds from "./images/brokenClouds.png";
import fewClouds from "./images/fewClouds.png";
import fewCloudsNight from "./images/fewCloudsNight.png";
import clearNight from "./images/clearNight.png";
import mist from "./images/mist.png";
import rain from "./images/rain.png";
import scatteredClouds from "./images/scatteredClouds.png";
import showerRainDrizzle from "./images/showerRain-drizzle.png";
import snow from "./images/snow.png";
import clearDay from "./images/clearDay.png";
import thunderstorm from "./images/thunderstorm.png";

export default function WeatherForecastDay(props) {
  let iconMatching = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": fewClouds,
    "02n": fewCloudsNight,
    "03d": scatteredClouds,
    "03n": scatteredClouds,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": showerRainDrizzle,
    "09n": showerRainDrizzle,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };

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
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeekWeatherForecast-day">{day()}</div>
      <img
        className="WeekWeatherForecast-icon"
        src={iconMatching[props.data.weather[0].icon]}
        alt={props.data.weather[0].description}
        width="40"
      />
      <div className="WeekWeatherForecast-temperatures">
        <span className="WeekWeatherForecast-maxTemp">{maxTemperature()}</span>
        <span className="WeekWeatherForecast-minTemp">{minTemperature()}</span>
      </div>
    </div>
  );
}
