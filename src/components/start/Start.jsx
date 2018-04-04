import React, { Component } from 'react';
// Components
import Evento from './../evento/Evento';
import Charge from './../charge/Charge';
import Contacts from './../Contacts/index';
// Iconos y estilos
import RaisedButton from 'material-ui/RaisedButton';
import Contact from 'material-ui/svg-icons/action/supervisor-account';
import Pay from 'material-ui/svg-icons/editor/monetization-on';
import ChargeIcon from 'material-ui/svg-icons/maps/local-atm';
import Event from 'material-ui/svg-icons/action/event';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    this.showContacts = this.showContacts.bind(this);
  }

  showContacts(event) {
    this.setState({
      counter: 4,
    })
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

render() {
  // const { style } = this.state
  return(
    <div>
      {this.state.counter === 1 ? (
      <div className="containerStart">
        <p className="title">Inicio</p>
        <MuiThemeProvider>
          <div className="btns">
            <RaisedButton
              backgroundColor="#6320BF"
              icon={<Contact />}
              onClick={this.showContacts}
                // style={style}
              />
              <p>Contacto</p>
            </div>
            <div className="btns">
              <RaisedButton
                backgroundColor="#FF8700"
                icon={<Pay/>}
                onClick={this.showCharge}
                // style={style}
              />
              <p>Cobrar</p>
            </div>
            <div className="btns">
              <RaisedButton
                backgroundColor="#C80E1B"
                icon={<ChargeIcon/>}
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
        </MuiThemeProvider>
      </div>
      ) : this.state.counter === 2 ?(<Evento/>
      ) : this.state.counter === 3 ?(<Charge/>
      ) : this.state.counter === 4 ?(<Contacts/>
      ) : (<div>asasas</div>)
    }
    </div>
  )}}
export default HomePage;
