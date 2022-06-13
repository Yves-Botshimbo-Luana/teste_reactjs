import React, { component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paginas from './components/Paginas';
import Paginas from './components/PaginaContato';
import './App.css';




class App extends component {
  render() {
    return(
      <Router>
      <Fragment>
      <Route exact path='/' component={Paginas} />
      <Route exact path='/pagina/:id' component={PaginaContato} />
      </Fragment>
      </Router>
    );
  }
}

export default App;
