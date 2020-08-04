import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Page404 from './pages/Page404';

ReactDOM.render(  
  <BrowserRouter>
    <Switch>      
      <Route path='/cadastro/video' component = {CadastroVideo} exact />
      <Route path='/cadastro/categoria' component = {CadastroCategoria} exact />
      <Route path='/' component = {App} exact />
      <Route component = {Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);