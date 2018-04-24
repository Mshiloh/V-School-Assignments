import React from "react";

function DeckItem(props) {
    const { title } = props;
    return (

        <li>
            {title}
        </li>
    )
}
export default DeckItem;