import React from "react";

import Posts from "../Posts/";

import PostForm from "./PostForm";
import "./style.css";

function Home() {
    return (
        <div className="home">
            <PostForm/>
            <Posts/>
        </div>
    )
}

export default Home;
