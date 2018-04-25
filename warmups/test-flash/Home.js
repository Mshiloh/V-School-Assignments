import React, { Component } from "react";

import { connect } from "react-redux";

import { getDecks } from "../../redux/decks.js";

import HomeItem from "./HomeItem.js";

class Home extends Component {
    componentDidMount() {
        this.props.getDecks();

    }
    render() {
        const { data, loading, errMsg } = this.props;
        const myDecks = <HomeItem{...data}></HomeItem>

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
                    {myDecks}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.decks
}

export default connect(mapStateToProps, { getDecks })(Home);
