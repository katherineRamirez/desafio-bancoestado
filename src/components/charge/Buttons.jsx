import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EventsBtn from 'material-ui/svg-icons/action/event';
import Account from 'material-ui/svg-icons/action/supervisor-account';
import FontIcon from 'material-ui/FontIcon';
import Events from './Events';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import './charge.css';

// const styles = {
//   button: {
//     margin: 12,
//     height: 90,
//   },
//   exampleImageInput: {
//     cursor: 'pointer',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     width: '100%',
//     opacity: 0,
//   },
// };

// const RaisedButtonExampleComplex = () => (
//   <div>
//     <Router>
//       <div>
//         <div className="eventsBtn containerBtn">   
//           <Link to="/Events" className="links">   
//             <RaisedButton className='btn'
//               style={styles.button}
//               icon={<EventsBtn />}
//               backgroundColor={'#20A4BF'}
//             >
//             </RaisedButton>
//           </Link>
//           <p>Eventos</p>
//         </div>
//         <div className="friendsBtn containerBtn">      
//           <RaisedButton 
//             icon={<Account />}
//             style={styles.button}
//             backgroundColor={'#6320BF'}
//           />
//           <p>Amigos</p>
//         </div>  
//         <Route path="/Events" component={Events}></Route>  
//       </div>
//     </Router>
//   </div>
// );

// export default RaisedButtonExampleComplex;


class Buttons extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1
    };
    this.showEvents = this.showEvents.bind(this);
    this.showFriends = this.showFriends.bind(this);
  }

  showEvents(event) {
    this.setState({
      counter: 2,
    })
    console.log('Button Clicked !')
  }

  showFriends(event) {
    this.setState({
      counter: 3,
    })
    console.log('Button Clicked !')
  }

  render() {
    return (
      <div>
        <div>
          <button className="showEventsBtn" onClick={this.showEvents}></button>
          <p>Eventos</p>
        </div>
        <div>
          <button className="showFriendsBtn" onClick={this.showFriends}></button>
          <p>Amigos</p>
        </div>        
      </div>
    );
  }
}

export default Buttons;