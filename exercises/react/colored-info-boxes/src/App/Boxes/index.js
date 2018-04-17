import React from "react";

function Boxes(props) {
    console.log(props)
    const { title, subtitle, information, postClass } = props
    return (
            <div className={postClass}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{information}</p>
            </div>
    )
};

export default Boxes;