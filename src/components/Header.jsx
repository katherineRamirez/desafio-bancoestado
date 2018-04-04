import React from 'react';
import AppBar from 'material-ui/AppBar';

import './header.css';

const Header = () => (
  <AppBar
    title={<img src={BancoEstadoLogo}/>}
    iconElementRight={<IconButton >
    </IconButton>}
   
  />
);

export default Header;
 
