import React, { Component } from "react";

import { connect } from "react-redux";

import { getDecks } from "../../../redux/decks.js";

import HomeDeckItem from "./HomeDeckItem.js";

class HomeDecks extends Component {
    componentDidMount() {
        this.props.getDecks();

    }
    render() {
        const { data, loading, errMsg } = this.props;
        const myHomeDecks = data.map((deck, i) => <HomeDeckItem key={deck + i} {...deck}></HomeDeckItem>)
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
                    {myHomeDecks}
                </ul>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.decks
}

export default connect(mapStateToProps, { getDecks })(HomeDecks);
