import React, { Component } from "react";

import { connect } from "react-redux";
import { getHourly } from "../../redux/hourly.js";

import Hourly from "./Hourly.js";

class HourlyForecast extends Component {
    componentDidMount() {
        this.props.getHourly();
    }

    render() {
        const { data, loading, errMsg } = this.props;
        const hourlyComponents = data.map((hourly, i) => <Hourly key={hourly.name + i} {...hourly}></Hourly> )
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
                    {hourlyComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.hourly;
}

export default connect(mapStateToProps, { getHourly })(HourlyForecast);
