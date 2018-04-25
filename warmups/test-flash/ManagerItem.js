import React from "react";

function ManagerItem(props) {
    const { cards } = props;
    return (

        <div>
            <p>Cards: {cards}</p>
        </div>
    )
}
export default ManagerItem;