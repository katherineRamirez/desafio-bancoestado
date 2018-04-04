import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
// import Arrowbackios from 'material-ui/svg-icons/action';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BancoEstadoLogo from './../img/banco-estado-blanco.png';
// import HomePage from './start/Start.jsx'
import './header.css';

const Back = (props) => (
  <SvgIcon {...props}>
    <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"/>
  </SvgIcon>
);
const Header = () => (
  <AppBar
  iconElementRight={<IconButton>
     <Back/>
    </IconButton>}
    title={<img className="logo" src={BancoEstadoLogo}/>}
  />
);

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     };
//     this.onClickBack = this.onClickBack.bind(this);
//   }
//   onClickBack(event){
//     event.preventDefault();
//     this.setState({
//       counter: 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.counter === 0 ? (
//           <AppBar
//             title={<img src={BancoEstadoLogo}/>}
//             iconElementRight={<IconButton>
//               <Back onClick={this.onClickBack}/>
//             </IconButton>}
//           />
//         ) : (
//           <div>
//             <AppBar
//               title={<img src={BancoEstadoLogo}/>}
//               iconElementRight={<IconButton>
//                 <Back onClick={this.onClickBack}/>
//               </IconButton>}
//             />
//             <HomePage/>
//           </div>
//         )}
//       </div>
//   )
// }
// }
export default Header;
