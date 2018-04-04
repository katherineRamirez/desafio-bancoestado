import React from 'react';
import AppBar from 'material-ui/AppBar';

import './header.css';

const Header = () => (
  <AppBar
  iconElementRight={<IconButton>
    </IconButton>}
    title={<img className="logo" src={BancoEstadoLogo}/>}
    
  />
);

export default Header;
 
