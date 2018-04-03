import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EventsBtn from 'material-ui/svg-icons/action/event';
import Account from 'material-ui/svg-icons/action/supervisor-account';
import FontIcon from 'material-ui/FontIcon';
import Events from './Events';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import './charge.css';

const styles = {
  button: {
    margin: 12,
    height: 90,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const RaisedButtonExampleComplex = () => (
  <div>
    <Router>
      <div>
        <div className="eventsBtn containerBtn">   
          <Link to="/Events" className="links">   
            <RaisedButton className='btn'
              style={styles.button}
              icon={<EventsBtn />}
              backgroundColor={'#20A4BF'}
            >
            </RaisedButton>
          </Link>
          <p>Eventos</p>
        </div>
        <div className="friendsBtn containerBtn">      
          <RaisedButton 
            icon={<Account />}
            style={styles.button}
            backgroundColor={'#6320BF'}
          />
          <p>Amigos</p>
        </div>  
        <Route path="/Events" component={Events}></Route>  
      </div>
    </Router>
  </div>
);

export default RaisedButtonExampleComplex;

// import React, { Component } from 'react';

// class Buttons extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick=""></button>
//           <p>Eventos</p>
//         </div>
//         <div>
//           <button></button>
//           <p>Amigos</p>
//         </div>        
//       </div>
//     );
//   }
// }

// export default Buttons;