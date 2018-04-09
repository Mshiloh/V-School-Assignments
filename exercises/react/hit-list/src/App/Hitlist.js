import React, { Component } from 'react';
import axios from "axios";

const hitlistApi = "http://api.vschool.io:6543/hitlist.json";

class Hitlist extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    axios.get(hitlistApi)
      .then(response => {
        const people = response.data;
        this.setState({ people });
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.people.map(person =>
          <div className="txtImg">
            <h3 className="names">{person.name}</h3>
            <div className="imgContainer">
              <img className="hitlistImg" src={person.image} alt="" />
            </div>
          </div>)}
      </div>
    )
  }
}
export default Hitlist;