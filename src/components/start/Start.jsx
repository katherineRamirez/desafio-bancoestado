import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Contact from 'material-ui/svg-icons/action/supervisor-account';
import Pay from 'material-ui/svg-icons/editor/monetization-on';
import Charge from 'material-ui/svg-icons/maps/local-atm';
import Event from 'material-ui/svg-icons/action/event';
import FontIcon from 'material-ui/FontIcon';
import './start.css';

const style = {
  margin: 12,
  height: 55,
};

const HomePage = () => (
  <div className="containerStart">
    <p className="title">Inicio</p>
    <div className="btns">
    <RaisedButton
      backgroundColor="#6320BF"
      icon={<Contact />}
      style={style}
    />    
    <p>Contacto</p>
    </div>
    <div className="btns">
    <RaisedButton 
      backgroundColor="#FF8700"
      icon={<Pay/>}
      style={style}
    />
    <p>Cobrar</p>
    </div>
    <div className="btns">
    <RaisedButton
      backgroundColor="#C80E1B"        
      icon={<Charge/>}
      style={style}
    />    
    <p>Pagar</p>
    </div>
    <div className="btns">
    <RaisedButton
      backgroundColor="#2C4BC5"
      icon={<Event/>}
      style={style}
    />
    <p>Evento</p>
    </div>
  </div>
);

export default HomePage;