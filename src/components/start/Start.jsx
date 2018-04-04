import React, { Component } from 'react';
// Components
import Evento from './../evento/Evento';
import Charge from './../charge/Charge';
import Pay from './../pay/Pay';
// Iconos y estilos
import RaisedButton from 'material-ui/RaisedButton';
import Contact from 'material-ui/svg-icons/action/supervisor-account';
import PayIcon from 'material-ui/svg-icons/editor/monetization-on';
import ChargeIcon from 'material-ui/svg-icons/maps/local-atm';
import Event from 'material-ui/svg-icons/action/event';
import FontIcon from 'material-ui/FontIcon';
import './start.css';

class HomePage extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1,
      // style: {
      //   margin: 12,
      //   height: 55,
      // }
    };
    this.showEvent = this.showEvent.bind(this);
    this.showCharge = this.showCharge.bind(this);
    this.showPay = this.showPay.bind(this);
  }

  showEvent(event) {
    this.setState({
      counter: 2,
    })
  }

  showCharge(event) {
    this.setState({
      counter: 3,
    })
  }

   showPay(event) {
    this.setState({
      counter: 4,
    })
  }

render() {
  // const { style } = this.state
  return(
    <div>
      {this.state.counter === 1 ? (
      <div className="containerStart">
        <p className="title">Inicio</p>
        <div className="btns">
        <RaisedButton
          backgroundColor="#6320BF"
          icon={<Contact />}
          // style={style}
        />    
        <p>Contacto</p>
        </div>
        <div className="btns">
        <RaisedButton 
          backgroundColor="#FF8700"
          icon={<PayIcon/>}
          onClick={this.showCharge}                          
          // style={style}
        />
        <p>Cobrar</p>
        </div>
        <div className="btns">
        <RaisedButton
          backgroundColor="#C80E1B"        
          icon={<ChargeIcon/>}
          onClick={this.showPay}
          // style={style}
        />    
        <p>Pagar</p>
        </div>
        <div className="btns">
        <RaisedButton
          backgroundColor="#2C4BC5"
          icon={<Event/>}
          onClick={this.showEvent}      
          // style={style}
        />
        <p>Evento</p>
        </div>      
      </div>
      ) : this.state.counter === 2 ?(<Evento/>
      ) : this.state.counter === 3 ?(<Charge/>
      ) :  (<Pay />)
    }
      
    </div>
  
  )}}
export default HomePage;