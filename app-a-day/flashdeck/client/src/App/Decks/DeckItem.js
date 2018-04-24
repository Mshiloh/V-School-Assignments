import React from "react";

function DeckItem(props) {
    const { title } = props;
    return (

        <li className={props.deckItemClass}>
            {title}
        </li>
    )
}
export default DeckItem;