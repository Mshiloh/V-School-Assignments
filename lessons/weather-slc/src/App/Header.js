import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <div>
            <header>
                <h1 className="headerText">Salt Lake Weather</h1>
            </header>
            <nav>
                <Link to="/dailyforecast" className="nav">Daily Forecast</Link>
                <Link to="/weeklyforecast" className="nav">Weekly Forecast</Link>                
                <Link to="/liveweather" className="nav">Live Weather Stream</Link>
            </nav>
        </div>
    )
}

export default Header;