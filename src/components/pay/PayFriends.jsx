import React, { Component } from 'react';
import FriendAccount from './FriendAccount';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import './pay.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class PayFriends extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1,
      checked: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      counter: 2,
    })

  }

  render() {
    return (
      <div>
        {this.state.counter === 2 ? (
          <FriendAccount />
        ) : (
            <div className="containerPayFriends">

              <h2 className='titleInvitar'>Confirma Amigo</h2>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>

              
              <Checkbox className='boxFriends'
				          label="Hugo Perez"
				          style={styles.checkbox}
				       />
				       <Checkbox className='boxFriends2'
				          label="Paco Gonzalez"
				          style={styles.checkbox}
				       />
				       <Checkbox className='boxFriends'
				          label="Luis Tapia"
				          style={styles.checkbox}
				       />

              <button className='btnSelectFriend' onClick={this.onButtonClick}>
			          Selecciona Amigo
			      </button>
            </div>
          )}

      </div>

    );
  }

}

export default PayFriends;