import React, { useState } from "react";
import "./WeatherDaySearch.css";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";

import brokenClouds from "./images/brokenClouds.png";
import fewClouds from "./images/fewClouds.png";
import halfMoon from "./images/halfMoon.png";
import mist from "./images/mist.png";
import rain from "./images/rain.png";
import scatteredClouds from "./images/scatteredClouds.png";
import showerRainDrizzle from "./images/showerRain-drizzle.png";
import snow from "./images/snow.png";
import sun from "./images/sun.png";
import thunderstorm from "./images/thunderstorm.png";

export default function WeatherDaySearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let iconMatching = {
    "01d": sun,
    "01n": halfMoon,
    "02d": fewClouds,
    "02n": fewClouds,
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

  function displayWeather(response) {
    setLoaded(true);

    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000).toLocaleDateString(
        "EN-US",
        dateOptions
      ),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `c7cd54d7f273febb5e037c3f52d9dfdb`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-light text-secondary"
            />
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container container-weather text-center">
          {form}
          <div className="cityAndCountry">
            <span className="city">{weather.city}</span>{" "}
            <span className="country">{weather.country}</span>
          </div>

          <ul className="today-data">
            <li className="date">{weather.date}</li>
            <li className="description">
              <strong className="uppercase">{weather.description}</strong>
            </li>
            <li>
              <img
                className="today-icon"
                src={iconMatching[weather.icon]}
                alt={weather.description}
              />
            </li>
          </ul>
          <div className="today-temperature">
            <WeatherTemperature celsius={weather.temperature} />
          </div>
          <ul className="today-description">
            <li>
              Min:
              <span className="minTemp">{weather.minTemp}</span>°
            </li>
            <li>
              Max: <span className="maxTemp">{weather.maxTemp}</span>°
            </li>
            <li>
              Humidity:<span className="humidity">{weather.humidity}</span>%
            </li>
            <li>
              Wind:<span className="wind">{weather.wind}</span>
            </li>
          </ul>
          <div className="week-forecast text-center"></div>
          <div className="footer">
            <a
              href="https://github.com/VirginiaRool/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Virginia Romero
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <div className="container container-weather text-center">{form}</div>
      </div>
    );
  }
}
