import React, { Component } from "react";
import BountyList from "./BountyList.js";

import axios from "axios";

const bountyUrl = "/bounties";

class BountyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounty: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(bountyUrl)
            .then(response => {
                const { data } = response;
                console.log(data);
                this.setState({
                    bounty: data,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message,
                    loading: false
                })
            })
    }
    render() {
        const { bounty, errMsg, loading } = this.state;
        if (loading) {
            return <div>...Loading</div>
        } else {
            if (errMsg) {
                return <p>Sorry, your data is not available.</p>
            } else {
                return (
                    <BountyList bounty={bounty}></BountyList>
                )
            }
        }
    }
}
export default BountyContainer;