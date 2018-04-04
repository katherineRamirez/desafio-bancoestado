import React from 'react';
import AppBar from 'material-ui/AppBar';
// import Arrowbackios from 'material-ui/svg-icons/action';
import IconButton from 'material-ui/IconButton';
import BancoEstadoLogo from './../img/banco estado.png';
import './header.css';
const Header = () => (
  <AppBar
  iconElementRight={<IconButton>
    </IconButton>}
    title={<img className="logo" src={BancoEstadoLogo}/>}
    
  />
);
export default Header;