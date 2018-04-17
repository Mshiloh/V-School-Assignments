import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlanets } from "../../redux/planets.js";
import PlanetItem from "./PlanetItem";

class PlanetList extends Component {
    componentDidMount() {
        this.props.getPlanets();
    }
    render() {
        const { data, loading, errMsg } = this.props;
        const planetComponents = data.map((planet, i) => <PlanetItem key={planet.name + i} {...planet}></PlanetItem>)
        if (loading) {
            return (
                <div><img style={{height: "150px"}} src="https://media1.tenor.com/images/672b62d967f8d00d608d22f36c1831db/tenor.gif?itemid=5388999" alt=""/></div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {planetComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.planets;
}

export default connect(mapStateToProps, { getPlanets })(PlanetList);