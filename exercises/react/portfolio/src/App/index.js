import React from "react";

//router and switch
import { Switch, Route } from "react-router-dom";

//components
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <div className="content-wrapper">
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App;

