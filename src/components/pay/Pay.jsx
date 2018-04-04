import React, { Component } from 'react';
import PayFriends from './PayFriends';
import PayCommerce from './PayCommerce';
import RaisedButton from 'material-ui/RaisedButton';
import Friends from 'material-ui/svg-icons/action/supervisor-account';
import Commerce from 'material-ui/svg-icons/action/work';
import FontIcon from 'material-ui/FontIcon';
import './pay.css';



class Pay extends Component {

  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1
    };
    this.showPayFriends = this.showPayFriends.bind(this);
    this.showPayCommerce = this.showPayCommerce.bind(this);
  }

  showPayFriends(event) {
    this.setState({
      counter: 2,
    })
    console.log('Button Clicked !')
  }

  showPayCommerce(event) {
    this.setState({
      counter: 3,
    })
    console.log('Button Clicked !')
  }

render() {
  // const { style } = this.state
  return(
    <div>
      {this.state.counter === 1 ? (
      <div className="containerStart">
        <p className="title">Pagar</p>
        <div className="btns">
        <RaisedButton
          backgroundColor="#6320BF"
          icon={<Friends />}
          onClick={this.showPayFriends}
          // style={style}
        />    
        <p>Amigos</p>
        </div>
        <div className="btns">
        <RaisedButton 
          backgroundColor="#FF8700"
          icon={<Commerce />}
          onClick={this.showPayCommerce}                          
          // style={style}
        />
        <p>Comercio</p>
        </div>
      </div>
      ) : this.state.counter === 2 ?(<PayFriends/>
      ) : (<PayCommerce/>)
 
    }
      
    </div>
  
  )}}
export default Pay;

