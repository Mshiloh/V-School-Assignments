import React from "react";
import Moment from "moment";

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFormatted : Moment().locale('fr').format('h:mm A').toString()
    };
  }
  tick = () => {
    this.setState({
      dateFormatted : Moment().locale('fr').format('h:mm A').toString()
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const time = this.state.dateFormatted;
    return(
      <div className="time">{time}</div>
    );
  }
}