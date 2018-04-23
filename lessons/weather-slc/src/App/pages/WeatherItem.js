import React from "react";

import MyDate from "./MyDate.js";

import HourlyForecast from "./HourlyForecast.js";


function WeatherItem(props) {
    const { currently } = props;
    const { summary, icon, precipProbability, temperature, humidity, windSpeed } = currently;
    return (
        <div>
            <div className="currentWeatherContainer">
                <p className="dslc">Salt Lake City, UT</p>
                <p className="dtim"><MyDate/></p>
                <p className="dsum">{summary}</p>
                <img className="dicn" src={icon} alt="Weather Icon" />
                <p className="dtmp">{temperature}°</p>
                <p className="dprc">Precipitation: {precipProbability}%</p>
                <p className="dhum">Humidity: {humidity}%</p>
                <p className="dwin">Wind: {windSpeed + "mph"}</p>
            </div>
            <div className="weatherItemHourlyContainer">
                <HourlyForecast />
            </div>
        </div>
    )
}
export default WeatherItem;