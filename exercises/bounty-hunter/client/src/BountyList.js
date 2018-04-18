import React from 'react';
import Bounty from "./Bounty.js"

function BountyList(props) {
    const { bounty } = props;
    const bountyComponents = bounty.map((bounty, i) => <Bounty key={bounty + i} {...bounty} />)
    return (
        <ul>
            {bountyComponents}
        </ul>
    )
}

export default BountyList;

