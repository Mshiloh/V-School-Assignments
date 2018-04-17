import React, { Component } from 'react';
import axios from "axios";
import ColorList from "./ColorList.js"

const colorApi = "http://www.colr.org/json/color/random";

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: [],
            errMsg: "",
            loading: true
        }
    }
    componentDidMount() {
        axios.get(colorApi + "color")
            .then(response => {
                console.log(response.data);
                const { colors } = response.data;
                this.setState({
                    color: colors,
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
        const { color /*, errMsg, loading */} = this.state;
        // if (loading) {
        //     return <div>...Loading</div>
        // } else {
        //     if (errMsg) {
        //         return <p>Sorry, your data is not available</p>
        //     } else {
        return (
            <ColorList color={color}></ColorList>
        )
    }
}
//     }
// }

export default Colors;