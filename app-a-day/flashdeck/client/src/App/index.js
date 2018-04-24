import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";

import Home from "./Home";
import Manager from "./Manager";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/manager" component={Manager}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default App;