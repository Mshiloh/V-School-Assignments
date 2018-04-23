import React, { Component } from "react";

import { connect } from "react-redux";

import { getWeather } from "../../redux/weather.js";

import WeatherItem from "./WeatherItem.js";

class DailyForecast extends Component {
    componentDidMount() {
        this.props.getWeather();

    }

    render() {
        const { data, loading, errMsg } = this.props;
        const currentWeather = <WeatherItem{...data}></WeatherItem>
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {currentWeather}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.weather
}

export default connect(mapStateToProps, { getWeather })(DailyForecast);


