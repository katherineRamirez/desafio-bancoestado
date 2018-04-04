import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Contact from 'material-ui/svg-icons/action/supervisor-account';
import Pay from 'material-ui/svg-icons/editor/monetization-on';
import Charge from 'material-ui/svg-icons/maps/local-atm';
import Event from 'material-ui/svg-icons/action/event';
import FontIcon from 'material-ui/FontIcon';
import Evento from './../evento/Evento';
import './start.css';

class HomePage extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1
    };
    this.jojo = this.jojo.bind(this);
  }

  jojo(event) {
    this.setState({
      counter: 2,
    })
    console.log('hola')
  }

render() {
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
          icon={<Pay/>}
          // style={style}
        />
        <p>Cobrar</p>
        </div>
        <div className="btns">
        <RaisedButton
          backgroundColor="#C80E1B"        
          icon={<Charge/>}
          // style={style}
        />    
        <p>Pagar</p>
        </div>
        <div className="btns">
        <RaisedButton
          backgroundColor="#2C4BC5"
          icon={<Event/>}
          onClick={this.jojo}      
          // style={style}
        />
        <p>Evento</p>
        </div>      
      </div>
      ) : this.state.counter === 2 ?(<Evento/>
      ) : <div>hola</div>
    }
      
    </div>
  
  )}}
export default HomePage;