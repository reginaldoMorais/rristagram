import React from 'react';
import { render } from 'react-dom';

// Import Stylecheets
import '../assets/style.styl';
//import '../assets/main.scss';
//var css = require('!css!stylus!../assets/style.styl'); 

// Import reducers and store
//import reducer from './reducers';
//import { store, history } from './store';

// Import components
import Main from './components/Main';

render(<Main />, document.getElementById('app'));
