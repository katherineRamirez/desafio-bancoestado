import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import './pay.css'


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class QrCode extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      count: 1,
      checked: false
    };
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(event) {
    this.setState({
      count: 2,
    })

  }

  render() {
    return (
      <div>
        {this.state.counter === 2 ? (
          <div />
        ) : (
            <div>

        <h2 className="title">QR</h2>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
      
      <button className='btnSelectFriend' onClick={this.onBtnClick}>
          Leer código QR
      </button>
            </div>
          )}

      </div>

    );
  }

}

export default QrCode;