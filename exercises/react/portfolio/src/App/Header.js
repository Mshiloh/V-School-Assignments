import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <div className="wholeHead">
            <nav>
                <Link className="nav" to="/">Home</Link>
                <Link className="nav" to="/about">About</Link>
                <Link className="nav" to="/projects">Projects</Link>
                <Link className="nav" to="/contact">Contact</Link>
            </nav>
            <header>
                <h1 className="banner">MORGAN ELLIS</h1>
                <h2 className="tagline">Clean. Concise. Creative.</h2>
            </header>
        </div>
    )
}

export default Header;