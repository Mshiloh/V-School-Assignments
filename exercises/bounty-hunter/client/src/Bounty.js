import React from 'react';

function Bounty(props) {
    const { first, last, living, bountyAmount, type} = props;
    return (
        <div>
            <h2>{first} {last}</h2>
            <h3>Living: {living}</h3>
            <h3>Bounty Amount: ${bountyAmount}</h3>
            <h3>Type: {type}</h3>
        </div>
    )
}

export default Bounty;