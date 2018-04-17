import React from "react";
import { connect } from "react-redux";
import { removeCat } from "../../redux/cats";
import Item from "./Item/";

function List(props) {
    const catComponents = props.data.map((cat, i) => <Item key={cat.imgUrl + i}{...cat} removeCat={props.removeCat} index={i}></Item>)
    return (
        <div>
            {catComponents}
        </div>
    )
}

const mapStateToProps = state => {
    return state.cats;
}

export default connect(mapStateToProps, { removeCat })(List);