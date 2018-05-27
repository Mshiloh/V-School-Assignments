import React, { Component } from "react";

import "./style.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import Header from "./Header.js";
import Home from "./Home";
import Footer from "./Footer.js";


export default class App extends Component {
    render() {
        return (
            <div className="appWrapper">
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}
