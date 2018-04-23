import React from "react";

function HourlyItem(props) {
    const { index, summary, icon, precipProbability, temperature, humidity, windSpeed } = props;
    let time = new Date((index * 3600000) + new Date().getTime()).toLocaleTimeString();
    return (
        <div className="hourlyWeatherContainer">
            <p className="timHr">{time}</p>
            <p className="blaHr"> </p>
            <img className="icnHr" src={icon} alt="Weather Icon" />
            <p className="sumHr">{summary}</p>
            <p className="tmpHr">{temperature}°</p>
            <p className="humHr">Humidity</p>
            <p className="hceHr">{humidity}%</p>
            <p className="prcHr">Precipitation</p>
            <p className="pceHr">{precipProbability}%</p>
            <p className="winHr">Wind</p>
            <p className="wceHr">{windSpeed} mph</p>
        </div>
    )
}
export default HourlyItem;