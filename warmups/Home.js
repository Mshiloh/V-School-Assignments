import React from "react";
import CurrentlyForecast from "./CurrentlyForecast.js";
import HourlyForecast from "./HourlyForecast.js";

function Home() {
    return (
        <div>
            <CurrentlyForecast />
            <HourlyForecast />
        </div>
    )
};

export default Home;