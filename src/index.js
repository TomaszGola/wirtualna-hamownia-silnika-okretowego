import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {App} from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Ch_zewnetrzna } from './Ch_zewnetrzna';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/dane-wejsciowe" component={App}/>
      <Route path="/charakterystyka-zewnetrzna" component={Ch_zewnetrzna}/>
      <Route path="/charakterystyka-wejsciowa" component={App}/>
      <Route path="/charakterystyka-obciazeniowa" component={App}/>
      <Route path="/charakterystyka-srubowa" component={App}/>
      <Route path="/charakterystyja-regulatorowa" component={App}/>
      <Route path="/admin" component={App}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
