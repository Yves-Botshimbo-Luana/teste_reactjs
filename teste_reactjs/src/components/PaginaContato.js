import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class PaginaContato extends Component {
    state = {
        pagina: {},
        isLoaded: false
    }
    
    componentDidMount() {
        axios
        .get(`/wp-json/wp/v2/paginas/${this.props.match.params.id}`)
        .then(res => this.setState({
            pagina: res.data,
            isLoaded: true
        }))
        .catch(err => console.log (err));
    }

  render() {
      const { pagina, isLoaded } = this.state;
      if (isLoaded) {
          return (
              <Fragment>
                  <Link to='/'>Voltar</Link>
                  <hr/>
                  <h1>{pagina.title.rendered}</h1>
                  <div dangerouslySetInnerHTML={{ __html: pagina.content.rendered }}></div>
                  <h4>Publisher: { pagina.acf.publisher }</h4>
              </Fragment>
          );

      }
      return <h3>Carregar Mais</h3>;
  }
}

export default PaginaContato;