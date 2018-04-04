import React, { Component } from 'react';
import './pay.css';


class PayFriends extends Component {

   render() {
    return (
      <div className="inputPay">
		  <input className="input" type="checkbox"/>Hugo Perez
			<input className="input" type="checkbox"/>Paco Gonzalez
			<input className="input" type="checkbox"/>Luis Tapia
			<input className="submit" type="submit" value="Seleccionar Amigo"/>
      </div>
    )

  }

}
export default PayFriends;