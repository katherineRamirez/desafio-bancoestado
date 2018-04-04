import React, { Component } from 'react';
import PayFriends from './PayFriends';
import PayCommerce from './PayCommerce';
import './pay.css';

class Pay extends Component {

  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      contador: 1
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      contador: 2,
    })
    console.log('Button Clicked !')
  }

  render() {
    return (
      <div>
        {this.state.contador === 2 ? (
          <PayFriends />
        ) : (
            <div>
              <h2>Hola</h2>
              
            </div>
          )}

      </div>

    );  
  }
}
export default Pay;

