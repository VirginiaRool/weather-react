import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeekWeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeekWeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function fetchForecast() {
    // let apiKey = "c7cd54d7f273febb5e037c3f52d9dfdb";
    let apiKey = "f2e3d38273afc6616506d901253c8457";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeekWeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    fetchForecast();
    return null;
  }
}
