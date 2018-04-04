// Dependencias
import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import data from './../../data/users.json';
import './Contact.css';

class Contacts extends Component {
  constructor(props){
  super(props);
  this.state = {
    contact: [],
    inputValue: '',
    counter: 0
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClickCont = this.handleClickCont.bind(this);
  }
handleClickCont(event) {
  event.preventDefault();
  let cont = data.data.map((num) => {
      return (
        <div className = "contactos">
          <p className="name">{num.name}</p>
          <p className="rut">{num.rut}</p>
        </div>
      );
  });
  this.setState({
    counter: 1,
    contact: cont
  });
}

handleChange(event) {
  event.preventDefault();
  this.setState({
    inputValue: event.target.value
  });
  // console.log(event.target.value)
}

handleSubmit(event) {
  event.preventDefault();
  const { inputValue } = this.state;
  // console.log(inputValue)
    let cont = data.data.map((num) => num.name

          // <div className="cont-search">
          //     <p className="name">{num.name}</p>
          //     <p className="rut">{num.rut}</p>
          //     <button>Agregar</button>
          // </div>
      );
      console.log(cont)
      let search = cont.filter(number => number.length < inputValue.length )
      console.log(search)
      console.log(inputValue)
      this.setState({ contact: search });
};
render() {
  return(
    <div>
      {this.state.counter === 1 ? (
        <div>
          <h2 className="title-cont">Tus contactos</h2>
          {this.state.contact}
        </div>
      ) : (
      <div>
        <h3 className="nav-contacts">Buscar/ Invitar contactos</h3>
        <form onSubmit = {this.handleSubmit}>
          <label>
            <input className="searchInput"
              type="text" value={this.state.value} onChange={this.handleChange} placeholder="Buscar..." />
          </label>
          <input className="searchButton" type="submit" value="S" />
        </form>
        {this.state.contact}
        <button className="btn-cont" onClick = {this.handleClickCont}>Ver Contactos</button>
      </div>
    )}
    </div>
  )
}
}
export default Contacts;
