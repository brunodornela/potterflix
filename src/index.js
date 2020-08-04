import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateVideo from './pages/create/Video';
import CreateCategory from './pages/create/Category';
import Page404 from './pages/Page404';

ReactDOM.render(  
  <BrowserRouter>
    <Switch>      
      <Route path='/create/video' component = {CreateVideo} exact />
      <Route path='/create/category' component = {CreateCategory} exact />
      <Route path='/' component = {App} exact />
      <Route component = {Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);