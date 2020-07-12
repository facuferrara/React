import React, { Component } from 'react';
import Contacts from './components/contacts'
//de esta forma importo desde tal directorio

class App extends Component {
  state = { 
    contacts: [] 
  }
  //con esto obtengo la lista de contactos del archivo
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  } 
  render()
  {
    //traigo toda la informacion almacenada en Contacts..
    return(  
      <Contacts contacts={this.state.contacts}/>
    );
  }
}
export default App;