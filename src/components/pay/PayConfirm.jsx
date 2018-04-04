import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class PayDetail extends Component {
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
          <div />
        ) : (
            <div>

<h2 className="title">Confirmar pago</h2>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
      <div>
      <label>Desde
      <p>Cta. Rut 15173095-3</p>
      </label>
      </div>
      <button className='btnSelectFriend' onClick={this.onButtonClick}>
          Confirmar pago
      </button>
            </div>
          )}

      </div>

    );
  }

}

export default PayDetail;
