// dependencias
import React, {Component} from 'react';

class Scaner extends Component {
 

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    fetch(`http(s)://api.qrserver.com/v1/read-qr-code/?fileurl=[URL-encoded-webaddress-url-to-qrcode-image-file]`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // se muestran todos los productos en results
        console.log(data);
  
          return (
            <div className = "product" >hola </div>
         
      )});
  };
  
}

export default Scaner;