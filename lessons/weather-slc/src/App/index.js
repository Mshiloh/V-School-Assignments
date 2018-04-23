import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";

import DailyForecast from "./pages/DailyForecast.js";
import LiveWeather from "./pages/LiveWeather.js";
import WeeklyForecast from "./pages/WeeklyForecast.js";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/dailyforecast" component={DailyForecast}></Route>
                    <Route path="/liveweather" component={LiveWeather}></Route>
                    <Route path="/weeklyforecast" component={WeeklyForecast}></Route>
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App;