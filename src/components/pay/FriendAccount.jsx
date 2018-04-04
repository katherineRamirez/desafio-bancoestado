import React, { Component } from 'react';
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



class FriendAccount extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1,
      checked: false
    };
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(event) {
    this.setState({
      counter: 2,
    })

  }

  render() {
    return (
      <div>
        {this.state.counter === 2 ? (

        ) : (
            <div>

              <h2 className='titleInvitar'>Tipo de Cuenta</h2>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='check'>
              </div>
              <Checkbox className='box'
                  label="Cuenta Rut"
                  style={styles.checkbox}
               />
               <Checkbox className='box'
                  label="Cuenta Corriente"
                  style={styles.checkbox}
               />
               <Checkbox className='box'
                  label="Cuenta de Ahorro"
                  style={styles.checkbox}
               />

              <button className='btnSelectFriend' onClick={this.onBtnClick}>
                Selecciona tu cuenta
            </button>
            </div>
          )}

      </div>

    );
  }

}

export default FriendAccount;