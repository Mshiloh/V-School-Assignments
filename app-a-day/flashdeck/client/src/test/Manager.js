import React, { Component } from "react";

import { connect } from "react-redux";

import { getCards } from "../../redux/cards.js";

import ManagerItem from "./ManagerItem.js";

class Manager extends Component {
    componentDidMount() {
        this.props.getCards();

    }
    render() {
        const { data, loading, errMsg } = this.props;
        const myCards = <ManagerItem{...data}></ManagerItem>

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
                    {myCards}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.cards
}

export default connect(mapStateToProps, { getCards })(Manager);