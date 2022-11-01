import React from "react";
import axios from "axios";
import "./WeekWeatherForecast.css";

export default function WeekWeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c7cd54d7f273febb5e037c3f52d9dfdb";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeekWeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeekWeatherForecast-day">Wed</div>
          <img
            className="WeekWeatherForecast-icon"
            src={props.icon}
            alt={"icon description"}
            width="40"
          />
          <div className="WeekWeatherForecast-temperatures">
            <span className="WeekWeatherForecast-maxTemp">28°</span>
            <span className="WeekWeatherForecast-minTemp">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
