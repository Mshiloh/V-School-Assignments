import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <div>
            <header>
                <h1 className="headerText">Header</h1>
            </header>
            <nav>
                <Link to="/" className="nav">Home</Link>
                <Link to="/manager" className="nav">Deck Manager</Link>
            </nav>
        </div>
    )
}

export default Header;