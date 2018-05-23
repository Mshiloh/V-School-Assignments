import React from "react";

function PostItem(props) {
    const {title, _id} = props;
    return (
        <div>
            <div>{title}</div>
        </div>
    )
}

export default PostItem;
