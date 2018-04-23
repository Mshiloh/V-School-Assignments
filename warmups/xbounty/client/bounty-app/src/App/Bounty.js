import React, { Component } from "react";

import { connect } from "react-redux";

import { getBounties } from "../../redux/bounties.js";

import BountyItem from "./BountyItem.js";

class Bounty extends Component {
    componentDidMount() {
        this.props.getBounties();

    }

    render() {
        const { data, loading, errMsg } = this.props;
        const myBounties = <BountyItem{...data}></BountyItem>

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {myBounties}
                </div>
            )
        }
    }
}