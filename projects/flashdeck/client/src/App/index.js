import React from "react";

import { Switch, Route } from "react-router-dom";
import "./style.css";

import Header from "./Header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

import Home from "./Home";
import StudyCard from "./StudyCard/";
import Edit from "./Edit/";
// import New from "./New";
import Manager from "./Manager";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Nav></Nav>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/manager" component={Manager}></Route>
                <Route path="/study/:deckId" component={StudyCard}></Route>

                {/* <Route exact path="/study/:deckId/:cardIndex" component={Study}></Route> */}
                <Route path="/edit/:deckId" component={Edit}></Route>
                {/* <Route path="/new/" component={New}></Route> */}

            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default App;