import React, { Component } from 'react';
import { response } from './../../data/evento.json';
import FixAmount from './FixAmount';
import './charge.css'

class Events extends Component {
  constructor() {
    super();
    this.state = {
      myEvents : [],
    }
  }

  componentWillMount() {
    this.setState({myEvents: response});
  };

  showEventsToCharge() {
    console.log(response);
      return response.map((eachEvent, index) => (
        <div className = "eachEvent" key = {index}>
          <span className="friendToPay">{eachEvent.nombre}</span>
          <span className="goTo" onClick={this.fixAmount.bind(this)}>>></span>
          <span className="total"> ${eachEvent.monto}</span>
        </div>
      ));
  };

  fixAmount(event) {
    console.log(event.target);
    // return(
      
    // )
  }

  render() {
    return(
      <div>
        <div className="ball ballOne"></div>
        <div className="ball ballTwo"></div>
        <div className="ball ballThree"></div>
        <div>
          {this.state.myEvents !== [] ? this.showEventsToCharge() : 'Loading...'}
        </div>
      </div>
    )
  }
}

export default Events;