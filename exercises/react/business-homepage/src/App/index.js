import React from "react";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
import Nav from "./Nav";
import Services from "./Services";
import Gallery from "./Gallery";



function App() {
    return (
        <div class="container">
            {/* name + * + tab */}
            <Header></Header>
            <Nav></Nav>
            <Info></Info>
            <Gallery></Gallery>            
            <Services></Services>
            <Footer></Footer>
        </div>
    )
};

export default App;