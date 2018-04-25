import React, { Component } from "react";

import { connect } from "react-redux";

import { getDecks } from "../../../redux/decks.js";

import ManagerDeckItem from "./ManagerDeckItem.js";

class ManagerDecks extends Component {
    componentDidMount() {
        this.props.getDecks();

    }
    render() {
        const { data, loading, errMsg } = this.props;
        const myManagerDecks = data.map((deck, i) => <ManagerDeckItem key={deck + i} {...deck}></ManagerDeckItem>)
        console.log(data.title);
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
                <ul>
                    {myManagerDecks}
                </ul>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.decks
}

export default connect(mapStateToProps, { getDecks })(ManagerDecks);
