import React from 'react';
import { render } from 'react-dom';

// Import Stylecheets
import '../styles/style.styl';
//import '../assets/main.scss';
//var css = require('!css!stylus!../assets/style.styl'); 

// Import reducers and store
//import reducer from './reducers';
//import { store, history } from './store';

// Import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// IMport Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>  
    </Router>
  </Provider>
  
);

render(router, document.getElementById('app'));
