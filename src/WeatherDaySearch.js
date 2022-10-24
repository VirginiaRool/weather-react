import React from "react";
import "./WeatherDaySearch.css";
import fewClouds from "./images/fewClouds.png";

export default function WeatherDaySearch() {
  let weatherData = {
    city: "Chicago",
    country: "USA",
    date: "Friday 17:05",
    description: "Few clouds",
    temperature: "25",
    humidity: "45",
    wind: "1.36",
  };

  return (
    <div className="Weather">
      <div className="container container-weather text-center">
        <div>
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autocomplete="off"
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
        <div className="cityAndCountry">
          <span className="city">{weatherData.city}</span>{" "}
          <span className="country">{weatherData.country}</span>
        </div>

        <ul className="today-data">
          <li className="date">{weatherData.date}</li>
          <li className="description">{weatherData.description}</li>
          <li>
            <img
              className="today-icon"
              src={fewClouds}
              alt={weatherData.description}
            />
          </li>
        </ul>
        <div className="today-temperature">
          <span className="tempNumber">{weatherData.temperature}</span>
          <span className="tempUnit">
            {" "}
            <a href="/" className="active">
              °C
            </a>
          </span>
          <span className="tempUnitDivision"> | </span>
          <span className="tempUnit">
            {" "}
            <a href="/">°F</a>
          </span>
        </div>
        <ul className="today-description">
          <li>
            Min:
            <span className="minTemp">18</span>°
          </li>
          <li>
            Max: <span className="maxTemp">25</span>°
          </li>
          <li>
            Humidity:<span className="humidity">{weatherData.humidity}</span>%
          </li>
          <li>
            Wind:<span className="wind">{weatherData.wind}</span>
          </li>
        </ul>
        <div className="week-forecast text-center"></div>
        <div className="footer">
          <a href="/" target="_blank" rel="noreferrer">
            Open source code
          </a>{" "}
          by Virginia Romero
        </div>
      </div>
    </div>
  );
}
