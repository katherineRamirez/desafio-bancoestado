// Dependencias
import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
// import users from './../data/users.json';

class Contacts extends Component {
  constructor(props){
  super(props);
  this.state = {
    contact: [],
    inputValue: '',
  }
  this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  this.setState({
    inputValue: event.target.value
  });
}

handleSubmit(event) {
  event.preventDefault();
  const { inputValue } = this.state;
  // se muestran todos los productos en results
  console.log(users);
      let names = users.results.map((pic) => {
        return (
          <div className = "product" key = {pic.id}>
            <p>{pic.name}</p>
          </div>
        );
      });
      this.setState({ contact: names });
      // se muestran solo las imagenes contenidas en thumbnail
      console.log(this.state.names);
};
render() {
  return(
    <div>
      <h3 className="nav-contacts">Buscar/ Invitar contactos</h3>
      <form onSubmit = {this.handleSubmit}>
        <label>
          <input class="searchInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Find your product..." />
        </label>
        <input class="searchButton" type="submit" value="Submit" />
      </form>
    </div>
  )
}
}
export default Contacts;
