import axios from 'axios';
import React from 'react';

class App extends React.Component {

  state = {details: [], }

  componentDidMount(){

    let data;

    axios.get('http://localhost:8000')
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(error =>{ })
  }

  render(){
    return(
      <div>
        <header>Nomes e CPFs</header>
        <hr></hr>
        {this.state.details.map((detail, id) => (
            <div key={id}>
              <div>
              <p>{detail.nome}</p>
              <p>{detail.cpf}</p>
              </div>
            </div>
          ))}
        
      </div>

    )
  }
}



export default App;
