import React from "react";

function HomeItem(props) {
    const { data } = props;
    return (

        <div>
            <p>Decks: {data}</p>
        </div>
    )
}
export default HomeItem;