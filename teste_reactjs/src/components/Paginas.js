import React, { Component } from 'react';
import PaginaItem from './PaginaItem';
import axios from 'axios';


  

export  class Paginas  extends Component { 
    state = {
        paginas: [],
        isLoaded: false
    }
    componentDidMount() {
        axios.get('/wp-json/wp/v2/paginas')
         .then(res => this.setState({
             paginas: res.data,
             isLoaded: true
         }))
         .catch(err => console.log(err));
    }
  render() { 
    const { paginas, isLoaded } = this.state;
    if(isLoaded) {
        return (
            <div>
                { paginas.map(pagina => (
                    <PaginaItem key={pagina.id} pagina ={pagina} />
                ) )}
            </div>
        ); 
    }
  return <h3>Carregar mais</h3>

  }
}

export default Paginas;
