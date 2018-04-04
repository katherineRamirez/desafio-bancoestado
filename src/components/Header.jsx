import React from 'react';
import AppBar from 'material-ui/AppBar';
// import Arrowbackios from 'material-ui/svg-icons/action';
import IconButton from 'material-ui/IconButton';
import BancoEstadoLogo from './../img/banco estado.png';
import './header.css';

const Header = () => (
  <AppBar
    title={<img src={BancoEstadoLogo}/>}
    iconElementRight={<IconButton>
    </IconButton>}
  />
);

export default Header;
 
