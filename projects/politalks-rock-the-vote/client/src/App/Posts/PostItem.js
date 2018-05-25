import React from "react";

function PostItem(props) {
    const {title, description, content} = props;
    return (
        <div>
            {title}
            {description}
            {content}
        </div>
    )
}

export default PostItem;