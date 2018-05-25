import React, { Component } from "react";

import "./style.css";

import Header from "./Header.js";
import Nav from "./Nav.js";
// import Posts from "./Posts";
import Home from "./Home";
import Footer from "./Footer.js";


export default class App extends Component {
    render() {
        return (
            <div className="appWrapper">
                <Header />

                <Nav />
                HELLO WORLD!
               <Home/>

                <Footer />
            </div>
        )
    }
}
