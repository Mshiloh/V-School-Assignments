import React from "react";

import EditForm from "./EditForm/";

function Item(props) {
    const { imgUrl, caption, removeCat, index } = props;
    return (
        <div>
            <img style={{ height: "300px", width: "auto" }} src={imgUrl} alt="" />
            <p>{caption}</p>
            <button style={{backgroundColor:"#8b0000", color: "whitesmoke"}}onClick={() => removeCat(index)}>Delete</button>
            <EditForm index={index} imgUrl={imgUrl} caption={caption}></EditForm>
        </div>
    )
}

export default Item;