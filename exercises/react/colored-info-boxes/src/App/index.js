import React from "react";
import Boxes from "./Boxes";

function App() {
    const box1 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "red"
    }
    const box2 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "blue"
    }
    const box3 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "orange"
    }
    const box4 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "green"
    } 
    const box5 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "purple"
    } 
    const box6 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "teal"
    } 
    const box7 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "grey"
    } 
    const box8 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "pink"
    } 
    const box9 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "indigo"
    } 
    const box10 = {
        title: "Title",
        subtitle: "Subtitle",
        information: "Information",
        postClass: "black"
    }
    return (
        <div>
            <Boxes {...box1}></Boxes>
            <Boxes {...box2}></Boxes>
            <Boxes {...box3}></Boxes>
            <Boxes {...box4}></Boxes>
            <Boxes {...box5}></Boxes>
            <Boxes {...box6}></Boxes>
            <Boxes {...box7}></Boxes>
            <Boxes {...box8}></Boxes>
            <Boxes {...box9}></Boxes>
            <Boxes {...box10}></Boxes>
        </div>
    )
};

export default App;