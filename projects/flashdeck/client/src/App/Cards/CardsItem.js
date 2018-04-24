import React from "react";

function CardsItem(props) {
    const { cards } = props;
    return (

        <div>
            <p>Cards: {cards}</p>
        </div>
    )
}
export default CardsItem;